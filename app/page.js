import { InquiryForm } from '../components/inquiry-form';
import { MainFooter, MainHeader } from '../components/site-shell';

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <main className="page-shell landing-shell">
        <section className="wp-hero wp-hero-premium" aria-labelledby="wp-title">
          <div className="wp-hero-copy">
            <p className="eyebrow">Operational systems for growing service businesses</p>
            <h1 id="wp-title">
              When your business outgrows its booking tools, I help design the system that
              fits the way you actually operate.
            </h1>
            <p className="hero-text">
              I work with service businesses that have grown more complex than their current
              setup. More staff. More services. More locations. More moving parts. I help make
              sense of the friction underneath that growth and design systems that make the
              business easier to run.
            </p>
            <div className="button-row">
              <a className="primary-button" href="#contact">Book a discovery call</a>
              <a className="secondary-button" href="#case-study">See the case study</a>
            </div>
            <p className="microcopy">
              Best suited to appointment-based and multi-location service businesses dealing
              with growth, coordination, and operational complexity.
            </p>
          </div>
          <aside className="audit-card diagnostic-card" aria-label="Audit checklist preview">
            <p className="panel-label">Common pressure points</p>
            <h2>Where operations start to feel heavier than they should.</h2>
            <ul className="check-list">
              <li>Scheduling gets messy once multiple staff, services, or locations are involved.</li>
              <li>The team leans on spreadsheets, manual workarounds, or side-channel coordination.</li>
              <li>Important information lives across booking tools, inboxes, notes, and staff memory.</li>
              <li>The business keeps growing, but the workflow underneath it does not keep up.</li>
            </ul>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Core outcomes">
          <div>
            <strong>Enquiry + booking</strong>
            <span>See where the customer journey enters the business and where it starts to break down.</span>
          </div>
          <div>
            <strong>Coordination + tracking</strong>
            <span>Reduce dependence on spreadsheets, patchwork admin, and disconnected tools.</span>
          </div>
          <div>
            <strong>Day-to-day operations</strong>
            <span>Build systems that match the way the business really works.</span>
          </div>
        </section>

        <section className="section-block problem-section" aria-labelledby="problem-title">
          <div className="section-heading landing-heading">
            <p className="eyebrow">The problem</p>
            <h2 id="problem-title">
              Most growing service businesses do not have a website problem. They have an
              operations problem their current tools no longer handle well.
            </h2>
          </div>
          <div className="problem-grid">
            <article>
              <h3>Scheduling becomes harder to control</h3>
              <p>What used to be simple gets harder once multiple staff members, locations, and service types are involved.</p>
            </article>
            <article>
              <h3>The team starts building workarounds</h3>
              <p>Spreadsheets, manual updates, repeated admin, and side conversations start filling the gaps between tools.</p>
            </article>
            <article>
              <h3>Operations get harder to see clearly</h3>
              <p>Important information ends up spread across booking software, inboxes, notes, and staff memory instead of one dependable workflow.</p>
            </article>
          </div>
        </section>

        <section className="section-block" aria-labelledby="system-proof-title">
          <div className="section-heading landing-heading">
            <p className="eyebrow">What this work actually covers</p>
            <h2 id="system-proof-title">From customer enquiry and booking to staff coordination, tracking, and day-to-day operations.</h2>
            <p>The website may be part of the picture. The bigger job is designing a system that supports how the business actually runs.</p>
          </div>
          <div className="flow-grid" aria-label="Lead system workflow">
            <article><span>01</span><strong>Demand enters the business</strong><p>Customers enquire, book, call, or request information through the channels already in use.</p></article>
            <article><span>02</span><strong>Friction starts to build</strong><p>More volume and complexity create scheduling issues, coordination gaps, manual work, and exceptions.</p></article>
            <article><span>03</span><strong>The real bottleneck becomes clear</strong><p>The visible symptom is separated from the workflow problem underneath it.</p></article>
            <article><span>04</span><strong>A better operating system is built</strong><p>The business gets a workflow, structure, or custom software setup that fits the way it actually runs.</p></article>
          </div>
        </section>

        <section className="split-section audit-section" id="case-study" aria-labelledby="audit-title">
          <div>
            <p className="eyebrow">Case study</p>
            <h2 id="audit-title">What started as a small website issue turned into a much bigger operations job.</h2>
            <p>One of my strongest project experiences came from working with <strong>Goud Echo</strong>, a healthcare service business in the Netherlands. I was not hired to redesign operations from the start. I was hired to fix a small website issue.</p>
          </div>
          <ol className="steps-list audit-list">
            <li><strong>The business had outgrown the original setup</strong><span>An off-the-shelf booking plugin was now carrying multiple locations, multiple staff members, multiple service types, and growing scheduling complexity.</span></li>
            <li><strong>The visible issue was only the start</strong><span>As the business grew, the real strain showed up behind the scenes in coordination, scheduling, and day-to-day operations.</span></li>
            <li><strong>A custom operational platform became the answer</strong><span>I eventually designed and built a system that replaced key parts of the old workflow and became part of how the business runs day to day.</span></li>
          </ol>
        </section>

        <section className="section-block" id="services" aria-labelledby="services-title">
          <div className="section-heading landing-heading">
            <p className="eyebrow">Services</p>
            <h2 id="services-title">Practical systems work for service businesses dealing with operational complexity.</h2>
          </div>
          <div className="service-grid service-grid-premium">
            <article className="service-card"><span>01</span><h3>Operational friction assessment</h3><p>I look at how your current process works, from enquiry and booking through coordination, tracking, and delivery, and identify where the friction is really coming from.</p></article>
            <article className="service-card"><span>02</span><h3>Workflow and process design</h3><p>I help redesign the workflow so the business stops bending itself around tools that no longer fit the way it operates.</p></article>
            <article className="service-card"><span>03</span><h3>Custom operations software</h3><p>Where needed, I design and build internal systems that support the real workflow of the business instead of forcing the team into a generic process.</p></article>
            <article className="service-card"><span>04</span><h3>System improvement and evolution</h3><p>For businesses already using booking tools, spreadsheets, and operational software, I help improve what exists and make the setup more reliable over time.</p></article>
          </div>
        </section>

        <section className="industries-section" id="industries" aria-labelledby="industries-title">
          <div>
            <p className="eyebrow">Who this is for</p>
            <h2 id="industries-title">Best suited to service businesses that are already operating, already using software, and starting to feel the strain of complexity.</h2>
          </div>
          <div className="industry-tags" aria-label="Target industries">
            <span>Clinics</span><span>Healthcare providers</span><span>Physiotherapy practices</span><span>Dental groups</span><span>Wellness businesses</span><span>Beauty clinics</span><span>Training centers</span><span>Multi-location service businesses</span>
          </div>
        </section>

        <section className="split-section process-section" id="process" aria-labelledby="process-title">
          <div>
            <p className="eyebrow">Process</p>
            <h2 id="process-title">Understand the operational reality first. Decide on the right system change second.</h2>
            <p>I do not start by pushing software. I start by understanding how the business handles enquiry, booking, scheduling, coordination, internal handoffs, and day-to-day admin.</p>
          </div>
          <ol className="steps-list">
            <li><strong>Understand the operational reality.</strong><span>We talk through how the business works today and where the pressure points are.</span></li>
            <li><strong>Identify the real bottleneck.</strong><span>I look past the surface symptom to find the process problem underneath it.</span></li>
            <li><strong>Define the right level of change.</strong><span>Sometimes the answer is a workflow improvement. Sometimes it is better structure around current tools. Sometimes it calls for a custom system.</span></li>
          </ol>
        </section>

        <section className="section-block" id="pricing" aria-labelledby="pricing-title">
          <div className="section-heading landing-heading">
            <p className="eyebrow">What businesses usually need relief from</p>
            <h2 id="pricing-title">Most businesses do not need more software. They need relief from the strain underneath the current setup.</h2>
          </div>
          <div className="pricing-grid">
            <article className="price-card"><p className="price-label">01</p><h3>Scheduling chaos</h3><p className="price">Availability, services, staff, and locations become harder to coordinate than they should be.</p><ul><li>Multiple services</li><li>Staff coordination</li><li>Location complexity</li></ul></article>
            <article className="price-card highlighted"><p className="price-label">02</p><h3>Manual administrative work</h3><p className="price">Too much of the operation depends on repeated admin, side communication, and people remembering what to do.</p><ul><li>Spreadsheet dependency</li><li>Repeated updates</li><li>Admin bottlenecks</li></ul></article>
            <article className="price-card"><p className="price-label">03</p><h3>Disconnected systems</h3><p className="price">The customer-facing process and the internal workflow no longer connect cleanly enough to support growth.</p><ul><li>Customer enquiry</li><li>Booking flow</li><li>Internal coordination</li></ul></article>
          </div>
          <p className="pricing-note">The goal is to understand the pressure points clearly and decide whether the next step is process improvement, system restructuring, or custom software.</p>
        </section>

        <section className="founder-note" aria-labelledby="founder-title">
          <div>
            <p className="eyebrow">About</p>
            <h2 id="founder-title">I am interested in the problems behind the obvious ones.</h2>
          </div>
          <p>I’m Jibrin. I tend to get useful when a business has grown past the limits of its current setup. Booking tools, spreadsheets, admin routines, and disconnected software start creating more friction than they remove. What looks like a website issue can turn out to be a booking issue. What looks like a booking issue can turn out to be a coordination problem. That is the level I like to work at.</p>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Discovery call</p>
            <h2 id="contact-title">If operations feel more complicated than they should, let’s talk.</h2>
            <p>If your business is dealing with scheduling friction, staff coordination issues, disconnected tools, spreadsheet dependency, or operational bottlenecks, I can help you work out what is actually going wrong and what kind of system change may be worth making.</p>
            <ul className="mini-checks"><li>No hard sell</li><li>Business-focused conversation</li><li>Practical next-step recommendation</li></ul>
          </div>
          <InquiryForm />
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="section-heading landing-heading">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">Common questions</h2>
          </div>
          <div className="faq-grid">
            <article><h3>Do we need custom software straight away?</h3><p>Not always. Sometimes the first useful step is understanding the operational problem properly and improving the current workflow before deciding whether custom software is needed.</p></article>
            <article><h3>Can you work with our existing booking software or internal tools?</h3><p>Yes. I do not default to replacing everything. If the current setup can be improved in a meaningful way, that is usually the right place to start.</p></article>
            <article><h3>Is this only for healthcare businesses?</h3><p>No. Healthcare is one strong example, but the broader fit is service businesses with operational complexity, especially where appointments, staff coordination, multiple service types, and multi-location operations create friction.</p></article>
            <article><h3>What happens on the discovery call?</h3><p>We talk through how your operation works today, where it feels heavy, and whether there is a real systems problem worth solving.</p></article>
          </div>
        </section>
      </main>
      <MainFooter />
    </>
  );
}
