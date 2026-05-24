import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path):
    return (ROOT / path).read_text(encoding='utf-8')


class StaticSiteTests(unittest.TestCase):
    def test_required_static_site_files_exist(self):
        for path in ['index.html', 'post.html', 'styles.css', 'app.js', 'posts.js', 'vercel.json', 'README.md']:
            self.assertTrue((ROOT / path).exists(), f'{path} missing')

    def test_homepage_contains_journal_structure(self):
        html = read('index.html')
        self.assertIn('Jibrin Journal', html)
        self.assertIn('Featured essays', html)
        self.assertIn('Latest notes', html)
        self.assertIn('data-posts-grid', html)
        self.assertIn('Search posts', html)

    def test_post_data_has_minimum_viable_content(self):
        posts = read('posts.js')
        self.assertGreaterEqual(posts.count('slug:'), 3)
        self.assertIn('featured: true', posts)
        self.assertIn('category:', posts)

    def test_design_is_inspired_not_a_vercel_copy(self):
        combined = read('index.html') + read('styles.css')
        self.assertNotIn('vercel.com', combined.lower())
        self.assertNotIn('Vercel Triangle', combined)
        self.assertIn('Jibrin Journal', combined)

    def test_vercel_config_routes_post_fallback(self):
        cfg = read('vercel.json')
        self.assertIn('cleanUrls', cfg)
        self.assertIn('trailingSlash', cfg)


if __name__ == '__main__':
    unittest.main()
