import Link from 'next/link';

export const metadata = {
  title: 'Thank You | Jibrin',
  description: 'Thanks for contacting Jibrin.',
};

export default function ThankYouPage() {
  return (
    <>
      <header className="site-header landing-header">
        <Link className="brand" href="/" aria-label="Jibrin home">
          <img className="brand-mark" src="/assets/jbxxnn.svg" alt="" aria-hidden="true" />
          <span>Jibrin</span>
        </Link>
        <Link className="header-action" href="/clinic-lead-system">Clinic lead system</Link>
      </header>
      <main className="page-shell landing-shell">
        <section className="wp-hero wp-hero-premium" aria-labelledby="thanks-title">
          <div className="wp-hero-copy">
            <p className="eyebrow">Request received</p>
            <h1 id="thanks-title">Thanks — I’ll review the website and reply with practical next steps.</h1>
            <p className="hero-text">If this was a lead system request, I’ll look at the current enquiry path and suggest the simplest setup: form, tracker, notification path, follow-up statuses, or a focused landing page.</p>
            <div className="button-row">
              <Link className="primary-button" href="/clinic-lead-system">Back to clinic lead system</Link>
              <Link className="secondary-button" href="/journal">Read the journal</Link>
            </div>
          </div>
          <aside className="audit-card diagnostic-card">
            <p className="panel-label">Next step</p>
            <h2>I’ll check the site for enquiry leaks.</h2>
            <ul className="check-list">
              <li>Can visitors find the main action quickly?</li>
              <li>Are forms and booking paths simple?</li>
              <li>Is there a tracker/follow-up process?</li>
              <li>What is the smallest useful improvement?</li>
            </ul>
          </aside>
        </section>
      </main>
    </>
  );
}
