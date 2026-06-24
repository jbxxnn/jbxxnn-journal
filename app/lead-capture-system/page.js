import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Lead Capture System | Jibrin',
  description: 'Lead capture and follow-up systems for clinics and local service businesses.',
};

export default function LeadCaptureAliasPage() {
  redirect('/clinic-lead-system');

  return (
    <main className="page-shell landing-shell">
      <section className="split-section">
        <div>
          <p className="eyebrow">Lead capture system</p>
          <h1>Lead capture and follow-up system</h1>
          <p className="hero-text">This page now points to the clinic lead system demo. If you are not redirected automatically, use the button below.</p>
          <div className="button-row">
            <Link className="primary-button" href="/clinic-lead-system">View the clinic lead system</Link>
            <Link className="secondary-button" href="/">Back to Jibrin</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
