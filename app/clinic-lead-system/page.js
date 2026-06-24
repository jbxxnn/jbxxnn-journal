import { InquiryForm } from '../../components/inquiry-form';
import { MainFooter } from '../../components/site-shell';
import Link from 'next/link';

export const metadata = {
  title: 'Clinic Lead Capture & Follow-Up System | Jibrin',
  description:
    'A done-for-you clinic lead capture and follow-up system: landing page, enquiry form, Google Sheet CRM, instant notifications, and follow-up templates.',
};

function LeadHeader() {
  return (
    <header className="site-header landing-header">
      <Link className="brand" href="/" aria-label="Jibrin home">
        <img className="brand-mark" src="/assets/jbxxnn.svg" alt="" aria-hidden="true" />
        <span>Jibrin Web Care</span>
      </Link>
      <nav className="top-nav" aria-label="Clinic lead system navigation">
        <Link href="#system">System</Link>
        <Link href="#demo">Demo flow</Link>
        <Link href="#packages">Packages</Link>
        <Link href="#contact">Contact</Link>
      </nav>
      <Link className="header-action" href="#contact">Request setup</Link>
    </header>
  );
}

export default function ClinicLeadSystemPage() {
  return (
    <>
      <LeadHeader />
      <main className="page-shell landing-shell">
        <section className="wp-hero wp-hero-premium" aria-labelledby="clinic-title">
          <div className="wp-hero-copy">
            <p className="eyebrow">Productized clinic business system</p>
            <h1 id="clinic-title">Turn your clinic website into a patient enquiry system.</h1>
            <p className="hero-text">I install a simple website + CRM + follow-up workflow for dental, private health, physiotherapy, and aesthetic clinics so every enquiry is captured, tracked, and followed up until it becomes a booked appointment.</p>
            <div className="button-row">
              <a className="primary-button" href="#contact">Ask about the system</a>
              <a className="secondary-button" href="#demo-board">View the demo board</a>
            </div>
            <p className="microcopy">Built for clinics that already have a website but need a clearer enquiry path, better tracking, and fewer missed follow-ups.</p>
          </div>
          <aside className="audit-card diagnostic-card" aria-label="Clinic lead system checklist">
            <p className="panel-label">What you get</p>
            <h2>A repeatable system, not a one-off form.</h2>
            <ul className="check-list">
              <li>Landing page or improved appointment enquiry section.</li>
              <li>Lead form connected to a Google Sheet CRM tracker.</li>
              <li>Instant notification path so new enquiries are not missed.</li>
              <li>Follow-up templates and statuses for reception/admin teams.</li>
            </ul>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Clinic outcomes">
          <div><strong>Capture</strong><span>Make it obvious how patients should enquire from mobile and desktop.</span></div>
          <div><strong>Track</strong><span>Send every enquiry into one clean tracker with source, service, status, and next step.</span></div>
          <div><strong>Follow up</strong><span>Use simple templates so leads are contacted until booked, closed, or paused.</span></div>
        </section>

        <section className="section-block problem-section" aria-labelledby="problem-title">
          <div className="section-heading landing-heading">
            <p className="eyebrow">The problem</p>
            <h2 id="problem-title">Many clinic websites give patients information, but do not manage enquiries well.</h2>
          </div>
          <div className="problem-grid">
            <article><h3>Weak appointment path</h3><p>Visitors read treatment pages but the next step is hidden, confusing, or split between phone, forms, and booking links.</p></article>
            <article><h3>Missed follow-up</h3><p>Enquiries arrive in inboxes with no shared tracker, no owner, and no clear follow-up status.</p></article>
            <article><h3>No simple visibility</h3><p>The clinic cannot easily see which enquiries are new, contacted, booked, lost, or waiting for a reply.</p></article>
          </div>
        </section>

        <section className="section-block" id="system" aria-labelledby="system-title">
          <div className="section-heading landing-heading">
            <p className="eyebrow">Reusable system</p>
            <h2 id="system-title">The first version includes the pieces clinics need before a full CRM.</h2>
          </div>
          <div className="service-grid service-grid-premium">
            <article className="service-card"><span>01</span><h3>Landing page or CTA section</h3><p>A clear page or website section that explains the offer and directs visitors to enquire.</p></article>
            <article className="service-card"><span>02</span><h3>Lead capture form</h3><p>Fields for name, contact details, website/service interest, message, and consent-friendly context.</p></article>
            <article className="service-card"><span>03</span><h3>Google Sheet CRM</h3><p>A lightweight tracker for new, contacted, booked, follow-up, lost, and won enquiries.</p></article>
            <article className="service-card"><span>04</span><h3>Notification + follow-up</h3><p>Email/notification setup where approved, plus templates for fast manual follow-up.</p></article>
          </div>
        </section>

        <section className="split-section audit-section" id="demo" aria-labelledby="demo-title">
          <div>
            <p className="eyebrow">Dental clinic demo</p>
            <h2 id="demo-title">From website visitor to booked appointment.</h2>
            <p>This demo starts with dental clinics because the enquiry path is easy to understand: patients want treatments, prices, trust, and a fast appointment route.</p>
          </div>
          <ol className="steps-list audit-list">
            <li><strong>Patient visits the clinic website.</strong><span>They see a clear “Request an appointment” or “Ask about treatment” action.</span></li>
            <li><strong>They submit the lead form.</strong><span>The form captures their details, treatment interest, message, and page/source.</span></li>
            <li><strong>The clinic receives and tracks it.</strong><span>The enquiry lands in the tracker with a status, owner, and next follow-up action.</span></li>
            <li><strong>The team follows up until booked.</strong><span>Reception uses templates to reply, call, update status, and prevent silent lost leads.</span></li>
          </ol>
        </section>

        <section className="demo-board-section" id="demo-board" aria-labelledby="demo-board-title">
          <div className="section-heading landing-heading">
            <p className="eyebrow">Demo CRM board</p>
            <h2 id="demo-board-title">A simple tracker makes every enquiry visible.</h2>
            <p>This is the kind of lightweight board a clinic team can use before buying complex CRM software.</p>
          </div>
          <div className="crm-board" aria-label="Example clinic enquiry tracker">
            <article><span className="status-pill new">New</span><strong>Olivia M.</strong><p>Invisalign consultation · Website form</p><small>Reply within 15 minutes</small></article>
            <article><span className="status-pill contacted">Contacted</span><strong>James R.</strong><p>Dental implant pricing · Phone call</p><small>Send treatment info + finance link</small></article>
            <article><span className="status-pill follow">Follow-up</span><strong>Amara K.</strong><p>Teeth whitening · Instagram page</p><small>Follow up tomorrow 10:00</small></article>
            <article><span className="status-pill booked">Booked</span><strong>Daniel P.</strong><p>Physio assessment · Google search</p><small>Booked for Friday 14:30</small></article>
          </div>
        </section>

        <section className="industries-section" aria-labelledby="fit-title">
          <div>
            <p className="eyebrow">Best fit</p>
            <h2 id="fit-title">Designed for service businesses where one missed enquiry can cost real revenue.</h2>
          </div>
          <div className="industry-tags" aria-label="Target clinic types">
            <span>Dental clinics</span><span>Private clinics</span><span>Physiotherapy</span><span>Aesthetic clinics</span><span>Eye clinics</span><span>Fertility clinics</span><span>Chiropractors</span><span>Local service firms</span>
          </div>
        </section>

        <section className="section-block" id="packages" aria-labelledby="packages-title">
          <div className="section-heading landing-heading">
            <p className="eyebrow">Packages</p>
            <h2 id="packages-title">Start small, then improve the follow-up process as leads come in.</h2>
          </div>
          <div className="pricing-grid">
            <article className="price-card"><p className="price-label">Starter</p><h3>Lead Form + Tracker</h3><p className="price">From €450</p><ul><li>Lead form setup</li><li>Google Sheet CRM template</li><li>Basic thank-you page</li><li>Follow-up status fields</li></ul></article>
            <article className="price-card highlighted"><p className="price-label">Recommended</p><h3>Clinic Lead System</h3><p className="price">From €950</p><ul><li>Landing/service page</li><li>Lead form + Sheet CRM</li><li>Notification path setup</li><li>Follow-up templates</li><li>Mobile-first CTA improvements</li></ul></article>
            <article className="price-card"><p className="price-label">Growth</p><h3>System + Care</h3><p className="price">Custom</p><ul><li>Monthly checks</li><li>Conversion improvements</li><li>Tracker cleanup</li><li>Extra pages/forms</li><li>Reporting support</li></ul></article>
          </div>
          <p className="pricing-note">Pricing depends on the current website, platform, and integrations. The first step is a short review of the existing enquiry path.</p>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Request setup</p>
            <h2 id="contact-title">Send your website and I’ll suggest the simplest lead system for it.</h2>
            <p>Use this if you run a clinic or service business, or if you want a demo of the lead capture + follow-up system installed on your existing website.</p>
            <ul className="mini-checks"><li>No hard sell</li><li>Practical recommendation</li><li>Built around your current site</li></ul>
          </div>
          <InquiryForm submitLabel="Request lead system review" successMessage="Thanks — your request has been received." />
        </section>
      </main>
      <MainFooter />
    </>
  );
}
