# Jibrin Journal

A clean personal blog/journal with a Vercel-inspired editorial grid, restrained typography, search, categories, featured posts, and static deployment.

## Edit posts

Posts live in `posts.js`. Add a new object to `window.JOURNAL_POSTS`:

```js
{
  slug: 'my-new-entry',
  title: 'My new entry',
  category: 'Journal',
  date: '2026-05-24',
  author: 'Jibrin Faruna',
  readingTime: '3 min read',
  featured: false,
  excerpt: 'Short summary...',
  body: ['Paragraph one.', 'Paragraph two.']
}
```

## Local preview

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

## Tests

```bash
python3 -m unittest discover -s tests -p 'test_*.py'
```

## Deployment

This repository is static and deploys cleanly to Vercel.
