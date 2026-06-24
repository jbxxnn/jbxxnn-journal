import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JournalFooter, JournalHeader } from '../../components/site-shell';
import { formatDate, getPostBySlug, posts } from '../../lib/posts';

function renderParagraph(paragraph, index) {
  const questionListMatch = paragraph.match(/^(More like:) (.+)$/);
  if (questionListMatch) {
    const [, intro, itemsText] = questionListMatch;
    const items = itemsText.match(/[^?]+\?/g) || [];
    if (items.length > 1) {
      return (
        <div key={index}>
          <p>{intro}</p>
          <ul>
            {items.map((item) => (
              <li key={item}>{item.trim()}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

  const trustItems = paragraph.split(/(?=It is )/).filter(Boolean);
  if (paragraph.startsWith('It is the fact') && trustItems.length > 2) {
    return (
      <ul key={index}>
        {trustItems.map((item) => (
          <li key={item}>{item.trim()}</li>
        ))}
      </ul>
    );
  }

  const questionShiftMatch = paragraph.match(
    /^(When a system moves into production, the question changes from:) (.+\?) (To:) (.+\?)$/
  );
  if (questionShiftMatch) {
    const [, intro, firstQuote, connector, secondQuote] = questionShiftMatch;
    return (
      <div key={index}>
        <p>{intro}</p>
        <blockquote>{firstQuote}</blockquote>
        <p>{connector}</p>
        <blockquote>{secondQuote}</blockquote>
      </div>
    );
  }

  return <p key={index}>{paragraph}</p>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: 'Entry not found | Jibrin Journal' };
  }
  return {
    title: `${post.title} | Jibrin Journal`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JournalHeader />
      <main className="page-shell post-shell">
        <article className="post-article" data-post-article>
          <header className="post-hero">
            <Link className="back-link" href="/journal">← Back to journal</Link>
            <div className="post-kicker">Jibrin Journal / Field Notes</div>
            <div className="post-meta" data-post-meta>
              <span>{post.category}</span>
              <span>{formatDate(post.date)}</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 data-post-title>{post.title}</h1>
            <p className="post-excerpt" data-post-excerpt>{post.excerpt}</p>
          </header>

          <div className="post-layout">
            <aside className="post-aside" aria-label="Entry context">
              <span className="aside-label">Note</span>
              <span>Client software and operating responsibility</span>
            </aside>
            <div className="post-body" data-post-body>
              {post.body.map((paragraph, index) => renderParagraph(paragraph, index))}
            </div>
          </div>
        </article>
      </main>
      <JournalFooter />
    </>
  );
}
