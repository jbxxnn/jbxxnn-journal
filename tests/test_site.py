import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path):
    return (ROOT / path).read_text(encoding='utf-8')


class StaticSiteTests(unittest.TestCase):
    def test_required_static_site_files_exist(self):
        for path in [
            'index.html',
            'post.html',
            'styles.css',
            'app.js',
            'posts.js',
            'vercel.json',
            'README.md',
            'api/audit-submit.js',
            'clinic-lead-system/index.html',
            'lead-capture-system/index.html',
            'thank-you/index.html',
        ]:
            self.assertTrue((ROOT / path).exists(), f'{path} missing')

    def test_homepage_contains_wordpress_lead_generation_positioning(self):
        html = read('index.html')
        self.assertIn('Jibrin Web Care', html)
        self.assertIn('Your WordPress website should bring enquiries', html)
        self.assertIn('/api/audit-submit', html)
        self.assertIn('/clinic-lead-system/', html)
        self.assertIn('data-audit-form', html)

    def test_clinic_lead_system_page_contains_core_offer(self):
        html = read('clinic-lead-system/index.html')
        self.assertIn('Stop losing patient enquiries', html)
        self.assertIn('Google Sheet CRM', html)
        self.assertIn('follow-up templates', html)
        self.assertIn('/api/audit-submit', html)
        self.assertIn('data-audit-form', html)
        self.assertIn('payload.pageUrl = window.location.href', html)

    def test_lead_capture_alias_points_to_clinic_system(self):
        html = read('lead-capture-system/index.html')
        self.assertIn('/clinic-lead-system/', html)
        self.assertIn('Lead capture and follow-up system', html)

    def test_business_assets_exist_and_are_actionable(self):
        asset_paths = [
            'business-assets/clinic-lead-system-crm-template.md',
            'business-assets/follow-up-templates.md',
            'business-assets/fiverr-gig-clinic-lead-system.md',
            'business-assets/manual-outreach-script.md',
        ]
        for path in asset_paths:
            self.assertTrue((ROOT / path).exists(), f'{path} missing')

        combined = '\n'.join(read(path) for path in asset_paths)
        self.assertIn('Inbound Form Submissions', combined)
        self.assertIn('I will build a lead capture and follow-up system for your clinic website', combined)
        self.assertIn('Do not send until Jibrin approves', combined)
        self.assertIn('No ethical seller should guarantee patient volume', combined)
        self.assertNotIn('guaranteed patients', combined.lower())

    def test_api_route_keeps_required_validation_and_google_sheet_integration(self):
        api = read('api/audit-submit.js')
        for field in ['name', 'business', 'website', 'email', 'goal']:
            self.assertIn(f"missing.push('{field}')", api)
        self.assertIn('GOOGLE_CLIENT_ID', api)
        self.assertIn('GOOGLE_CLIENT_SECRET', api)
        self.assertIn('GOOGLE_REFRESH_TOKEN', api)
        self.assertIn('GOOGLE_SHEET_ID', api)
        self.assertIn('Form Submissions!A:M', api)

    def test_journal_structure_still_exists_under_journal_route(self):
        html = read('journal/index.html')
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
        combined = read('journal/index.html') + read('styles.css')
        self.assertNotIn('vercel.com', combined.lower())
        self.assertNotIn('Vercel Triangle', combined)
        self.assertIn('Jibrin Journal', combined)

    def test_vercel_config_routes_post_fallback(self):
        cfg = read('vercel.json')
        self.assertIn('cleanUrls', cfg)
        self.assertIn('trailingSlash', cfg)


if __name__ == '__main__':
    unittest.main()
