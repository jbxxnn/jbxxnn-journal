import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path):
    return (ROOT / path).read_text(encoding='utf-8')


class NextSiteTests(unittest.TestCase):
    def test_required_next_project_files_exist(self):
        for path in [
            'package.json',
            'next.config.mjs',
            'app/layout.js',
            'app/page.js',
            'app/globals.css',
            'app/journal/page.js',
            'app/[slug]/page.js',
            'app/clinic-lead-system/page.js',
            'app/thank-you/page.js',
            'app/api/audit-submit/route.js',
            'components/site-shell.js',
            'components/journal-index.js',
            'components/inquiry-form.js',
            'lib/posts.js',
            'vercel.json',
            'README.md',
            'public/assets/jbxxnn.svg',
        ]:
            self.assertTrue((ROOT / path).exists(), f'{path} missing')

    def test_package_declares_nextjs_runtime(self):
        package = read('package.json')
        self.assertIn('"next"', package)
        self.assertIn('"react"', package)
        self.assertIn('"build": "next build"', package)

    def test_homepage_copy_reflects_operational_systems_positioning(self):
        page = read('app/page.js')
        self.assertIn('Operational systems for growing service businesses', page)
        self.assertIn('When your business outgrows its booking tools', page)
        self.assertIn('Goud Echo', page)
        self.assertIn('InquiryForm', page)
        self.assertIn('Book a discovery call', page)

    def test_journal_routes_exist_in_next_app(self):
        journal = read('app/journal/page.js') + read('components/journal-index.js')
        post_page = read('app/[slug]/page.js')
        posts = read('lib/posts.js')
        self.assertIn('Featured essays', journal)
        self.assertIn('Latest notes', journal)
        self.assertIn('generateStaticParams', post_page)
        self.assertGreaterEqual(posts.count("slug:"), 3)
        self.assertIn('featured: true', posts)

    def test_next_api_route_keeps_google_sheet_integration(self):
        api = read('app/api/audit-submit/route.js')
        for field in ['name', 'business', 'website', 'email', 'goal']:
            self.assertIn(f"missing.push('{field}')", api)
        self.assertIn('GOOGLE_CLIENT_ID', api)
        self.assertIn('GOOGLE_CLIENT_SECRET', api)
        self.assertIn('GOOGLE_REFRESH_TOKEN', api)
        self.assertIn('GOOGLE_SHEET_ID', api)
        self.assertIn('Form Submissions!A:M', api)

    def test_redirects_migrate_old_static_routes(self):
        config = read('next.config.mjs')
        self.assertIn("source: '/wordpress'", config)
        self.assertIn("destination: '/'", config)
        self.assertIn("source: '/lead-capture-system'", config)
        self.assertIn("destination: '/clinic-lead-system'", config)


if __name__ == '__main__':
    unittest.main()
