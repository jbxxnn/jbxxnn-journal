'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { categories, formatDate, sortedPosts } from '../lib/posts';

function PostCard({ post, large = false }) {
  return (
    <article className={`article-card ${large ? 'article-card-large' : ''}`}>
      <Link href={`/${post.slug}`}>
        <div className="card-label">
          <span>{post.category}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="author-row">
          <span className="avatar" aria-hidden="true">{post.author.slice(0, 1)}</span>
          <span>{post.author}</span>
          <span className="dot" aria-hidden="true"></span>
          <span>{post.readingTime}</span>
        </div>
      </Link>
    </article>
  );
}

export function JournalIndex() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const allPosts = useMemo(() => sortedPosts(), []);
  const filtered = useMemo(() => {
    return allPosts
      .filter((post) => activeCategory === 'All' || post.category === activeCategory)
      .filter((post) =>
        `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query.toLowerCase())
      );
  }, [activeCategory, allPosts, query]);

  const featured = filtered.filter((post) => post.featured).slice(0, 3);

  return (
    <>
      <section className="blog-toolbar" aria-label="Blog tools">
        <div className="category-tabs" data-categories>
          {categories().map((category) => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              data-category={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category === 'All' ? 'All Posts' : category}
            </button>
          ))}
        </div>
        <label className="search-box">
          <span>Search posts</span>
          <input
            type="search"
            placeholder="Search posts"
            data-search
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </section>

      <section className="section-block" id="featured" aria-labelledby="featured-title">
        <div className="section-heading">
          <p className="eyebrow">Selected</p>
          <h2 id="featured-title">Featured essays</h2>
        </div>
        <div className="article-grid featured-grid" data-featured-grid>
          {featured.length ? (
            featured.map((post, index) => <PostCard key={post.slug} post={post} large={index === 0} />)
          ) : (
            <p className="empty-state">No featured entries found.</p>
          )}
        </div>
      </section>

      <section className="section-block" id="latest" aria-labelledby="latest-title">
        <div className="section-heading">
          <p className="eyebrow">Archive</p>
          <h2 id="latest-title">Latest notes</h2>
        </div>
        <div className="article-grid" data-posts-grid>
          {filtered.length ? (
            filtered.map((post) => <PostCard key={post.slug} post={post} />)
          ) : (
            <p className="empty-state">No entries found. Try another search.</p>
          )}
        </div>
      </section>
    </>
  );
}
