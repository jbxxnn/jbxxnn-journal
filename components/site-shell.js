import Link from 'next/link';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

export function MainHeader() {
  return (
    <header className="site-header landing-header">
      <Link className="brand" href="/" aria-label="Jibrin home">
        <img className="brand-mark" src="/assets/jbxxnn.svg" alt="" aria-hidden="true" />
        <span className={`${GeistSans.className}`}>jbxxnn</span>
      </Link>
      <nav className={`top-nav ${GeistMono.className}`} aria-label="Landing page navigation">
        <Link href="/#case-study">Case study</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#process">Process</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <Link className={`header-action ${GeistMono.className}`} href="/#contact">
        Book a discovery call
      </Link>
    </header>
  );
}

export function MainFooter() {
  return (
    <footer className={`site-footer ${GeistSans.className}`}>
      <div className="footer-brand">
        <span>© <span data-year suppressHydrationWarning>{new Date().getFullYear()}</span> jbxxnn</span>
        <span>
          Operational systems for service businesses, from enquiry and booking to coordination,
          tracking, and day-to-day operations.
        </span>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link href="/#case-study">Case study</Link>
        <Link href="/#services">Services</Link>
        <Link href="/journal">Journal</Link>
        <Link href="mailto:jibrin@jbxxnn.com">Contact</Link>
      </nav>
    </footer>
  );
}

export function JournalHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Jibrin Journal home">
        <img className="brand-mark" src="/assets/jbxxnn.svg" alt="" aria-hidden="true" />
        <span>Jibrin Journal</span>
      </Link>
      <nav className="top-nav" aria-label="Main navigation">
        <Link href="/journal#featured">Featured</Link>
        <Link href="/journal#latest">Latest</Link>
        <Link href="/clinic-lead-system">Clinic lead system</Link>
        <Link href="/journal#about">About</Link>
      </nav>
      <Link className="header-action" href="/">
        Back to main site
      </Link>
    </header>
  );
}

export function JournalFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span>© <span data-year suppressHydrationWarning>{new Date().getFullYear()}</span> Jibrin Journal</span>
        <span>Field notes on software, systems, creative work, and becoming better at the craft.</span>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link href="/journal#featured">Featured</Link>
        <Link href="/journal#latest">Latest</Link>
        <Link href="mailto:jbxxnn6@gmail.com">Contact</Link>
      </nav>
    </footer>
  );
}
