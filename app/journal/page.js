import { JournalIndex } from '../../components/journal-index';
import { JournalFooter, JournalHeader } from '../../components/site-shell';

export const metadata = {
  title: 'Jibrin Journal',
  description: 'Jibrin Journal — essays, field notes, systems, and quiet progress.',
};

export default function JournalPage() {
  return (
    <>
      <JournalHeader />
      <main className="page-shell">
        <section className="hero-grid" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow">Personal blog / journal</p>
            <h1 id="page-title">Notes from building useful things, slowly and seriously.</h1>
            <p className="hero-text">A public operating log on client work, software, systems, automation, and the small decisions that compound into better work.</p>
          </div>
          <aside className="hero-panel" id="about">
            <p className="panel-label">Current focus</p>
            <p>Building and maintaining software for real clients, improving my systems, experimenting with media, and documenting the lessons clearly as I go.</p>
          </aside>
        </section>

        <JournalIndex />

        <section className="cta-grid" aria-labelledby="closing-title">
          <div>
            <p className="eyebrow">Operating rhythm</p>
            <h2 id="closing-title">Document the work. Improve the system.</h2>
          </div>
          <div className="cta-copy">
            <p>This journal keeps track of the decisions, client-work lessons, systems, experiments, and small observations that make the next step clearer.</p>
            <ul>
              <li>Build logs when something ships.</li>
              <li>Notes when a lesson is worth keeping.</li>
              <li>Systems when a process starts to repeat.</li>
            </ul>
          </div>
        </section>
      </main>
      <JournalFooter />
    </>
  );
}
