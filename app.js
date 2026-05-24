const posts = window.JOURNAL_POSTS || [];

const formatDate = (value) => {
  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' });
};

const byDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

function card(post, size = 'normal') {
  return `
    <article class="article-card ${size === 'large' ? 'article-card-large' : ''}">
      <a href="/post.html?slug=${encodeURIComponent(post.slug)}">
        <div class="card-label">
          <span>${post.category}</span>
          <time datetime="${post.date}">${formatDate(post.date)}</time>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <div class="author-row">
          <span class="avatar" aria-hidden="true">${post.author.slice(0, 1)}</span>
          <span>${post.author}</span>
          <span class="dot" aria-hidden="true"></span>
          <span>${post.readingTime}</span>
        </div>
      </a>
    </article>
  `;
}

function uniqueCategories() {
  return ['All', ...Array.from(new Set(posts.map((post) => post.category)))];
}

function renderCategories() {
  const holder = document.querySelector('[data-categories]');
  if (!holder) return;
  holder.innerHTML = uniqueCategories()
    .map((category, index) => `<button class="${index === 0 ? 'active' : ''}" data-category="${category}">${category === 'All' ? 'All Posts' : category}</button>`)
    .join('');
}

function renderIndex() {
  const featuredGrid = document.querySelector('[data-featured-grid]');
  const postsGrid = document.querySelector('[data-posts-grid]');
  if (!featuredGrid || !postsGrid) return;

  let activeCategory = 'All';
  let query = '';

  const apply = () => {
    const filtered = posts
      .filter((post) => activeCategory === 'All' || post.category === activeCategory)
      .filter((post) => `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query.toLowerCase()))
      .sort(byDateDesc);

    featuredGrid.innerHTML = filtered
      .filter((post) => post.featured)
      .slice(0, 3)
      .map((post, index) => card(post, index === 0 ? 'large' : 'normal'))
      .join('') || '<p class="empty-state">No featured entries found.</p>';

    postsGrid.innerHTML = filtered
      .map((post) => card(post))
      .join('') || '<p class="empty-state">No entries found. Try another search.</p>';
  };

  document.querySelector('[data-categories]')?.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-category]');
    if (!button) return;
    activeCategory = button.dataset.category;
    document.querySelectorAll('[data-categories] button').forEach((item) => item.classList.toggle('active', item === button));
    apply();
  });

  document.querySelector('[data-search]')?.addEventListener('input', (event) => {
    query = event.target.value;
    apply();
  });

  apply();
}

function renderPost() {
  const article = document.querySelector('[data-post-article]');
  if (!article) return;

  const slug = new URLSearchParams(window.location.search).get('slug') || posts[0]?.slug;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    article.innerHTML = '<a class="back-link" href="/">← Back to journal</a><h1>Entry not found</h1><p class="post-excerpt">The entry you are looking for does not exist.</p>';
    return;
  }

  document.title = `${post.title} — Jibrin Journal`;
  document.querySelector('[data-post-meta]').innerHTML = `<span>${post.category}</span><span>${formatDate(post.date)}</span><span>${post.readingTime}</span>`;
  document.querySelector('[data-post-title]').textContent = post.title;
  document.querySelector('[data-post-excerpt]').textContent = post.excerpt;
  document.querySelector('[data-post-body]').innerHTML = post.body.map((paragraph) => `<p>${paragraph}</p>`).join('');
}

function boot() {
  document.querySelectorAll('[data-year]').forEach((item) => { item.textContent = new Date().getFullYear(); });
  renderCategories();
  renderIndex();
  renderPost();
}

boot();
