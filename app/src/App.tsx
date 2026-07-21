import { useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bath,
  Bed,
  Check,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Footprints,
  HandHeart,
  Heart,
  Home,
  Menu,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react';
import { faqs, products } from '@/data';

const navLinks = [
  { label: 'Why Rise', href: '#why-rise' },
  { label: 'Product guide', href: '#products' },
  { label: 'Buying checks', href: '#buying-checks' },
  { label: 'More guides', href: '#guides' },
  { label: 'FAQs', href: '#faq' },
];

const trustPoints = [
  { icon: Search, title: 'Clear comparisons', text: 'Practical checks before retailer clicks.' },
  { icon: Heart, title: 'Dignity first', text: 'Helpful language without assumptions.' },
  { icon: Shield, title: 'Suitability aware', text: 'Honest guidance on when to seek advice.' },
  { icon: BadgeCheck, title: 'Transparent links', text: 'Rise is a guide, not a retailer.' },
];

const checklist = [
  ['Chair compatibility', 'Check the seat width, depth, height and firmness.'],
  ['Weight capacity', 'Use the manufacturer limit, not a rough estimate.'],
  ['Lift and comfort', 'Consider whether the height and movement feel manageable.'],
  ['Grip and stability', 'Look for a secure base on the intended chair.'],
  ['Cleaning', 'A removable, washable cover can make daily use easier.'],
  ['Returns', 'Confirm the seller, delivery and return terms before ordering.'],
];

const usefulFor = [
  'People who find standing from a supportive chair harder than before',
  'Families comparing a simple, lower-cost support option',
  'People who prefer discreet products that blend into the home',
  'Buyers who are prepared to check fit, limits and returns carefully',
];

const notBestFor = [
  'Anyone with serious falls risk without professional guidance',
  'Unstable, very soft, very low or badly shaped chairs',
  'Anyone who needs powered lifting support',
  'Post-surgery use without advice from a qualified professional',
];

const guides = [
  {
    icon: Bath,
    title: 'Bathroom safety',
    text: 'Compare grip, stepping, sitting and reaching support before choosing products.',
    items: ['Non-slip mats', 'Grab rails', 'Shower stools'],
    href: 'https://www.amazon.co.uk/s?k=bathroom+safety+aids+mobility',
  },
  {
    icon: Footprints,
    title: 'Walking aids',
    text: 'Height, grip, comfort and stability should match the person and environment.',
    items: ['Walking sticks', 'Rollators', 'Ferrules'],
    href: 'https://www.amazon.co.uk/s?k=walking+aids+for+adults',
  },
  {
    icon: Bed,
    title: 'Bedroom support',
    text: 'Explore support for getting in and out of bed, reaching and night-time movement.',
    items: ['Bed rails', 'Bed steps', 'Motion lights'],
    href: 'https://www.amazon.co.uk/s?k=bedroom+mobility+aids',
  },
  {
    icon: HandHeart,
    title: 'Daily living aids',
    text: 'Small products can reduce everyday frustrations around reaching, opening and carrying.',
    items: ['Reachers', 'Jar openers', 'Adaptive cutlery'],
    href: 'https://www.amazon.co.uk/s?k=daily+living+aids+mobility',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to main content</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Rise Mobility home" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">R</span>
            <span className="brand-copy">
              <strong>Rise</strong>
              <small>Mobility guides</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="header-cta" href="#products">
            Compare options <ArrowRight size={16} aria-hidden="true" />
          </a>

          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a className="mobile-nav-cta" href="#products" onClick={closeMenu}>Compare options</a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero-section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="page-width hero-grid">
            <div className="hero-copy">
              <div className="eyebrow light-eyebrow">
                <Sparkles size={15} aria-hidden="true" />
                Independent UK buying guidance
              </div>
              <h1>Everyday support,<br /><em>chosen with care.</em></h1>
              <p className="hero-lead">
                Clear, dignified guidance for comparing mobility aids that may make standing,
                sitting and everyday movement at home feel easier.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="#products">
                  Explore the first guide <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="text-link text-link-light" href="#buying-checks">
                  See what to check first
                </a>
              </div>
              <div className="hero-assurance">
                <ShieldCheck size={20} aria-hidden="true" />
                <span><strong>No checkout. No pressure.</strong> Rise helps you compare; retailers handle the order.</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="A comfortable home setting and seat lift cushion example">
              <div className="hero-image-frame">
                <img src="/about-lifestyle.jpg" alt="People at home discussing practical independence support" />
              </div>
              <div className="product-float-card">
                <div className="product-float-image">
                  <img src="/product-hero.png" alt="Seat lift cushion example" />
                </div>
                <div>
                  <span>Featured guide</span>
                  <strong>Seat lift cushions</strong>
                  <small>Fit · limits · returns</small>
                </div>
              </div>
              <div className="editorial-badge">
                <BadgeCheck size={18} aria-hidden="true" />
                Dignity-first guidance
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Rise principles">
          <div className="page-width trust-grid">
            {trustPoints.map(({ icon: Icon, title, text }) => (
              <article key={title} className="trust-item">
                <div className="trust-icon"><Icon size={21} aria-hidden="true" /></div>
                <div><strong>{title}</strong><span>{text}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section id="why-rise" className="section section-intro">
          <div className="page-width split-heading">
            <div>
              <div className="eyebrow">Why Rise</div>
              <h2>Mobility guidance should feel useful—not clinical.</h2>
            </div>
            <div className="split-heading-copy">
              <p>
                Rise helps people, families and carers compare practical home-support products
                without patronising language, false urgency or exaggerated promises.
              </p>
              <a className="text-link" href="#products">See how the guide works <ArrowRight size={17} /></a>
            </div>
          </div>

          <div className="page-width editorial-grid">
            <article className="editorial-card editorial-card-featured">
              <div className="editorial-number">01</div>
              <div className="editorial-icon"><UsersRound aria-hidden="true" /></div>
              <h3>Start with the person</h3>
              <p>Needs, confidence, comfort and home environment come before product features.</p>
            </article>
            <article className="editorial-card">
              <div className="editorial-number">02</div>
              <div className="editorial-icon"><Home aria-hidden="true" /></div>
              <h3>Check the setting</h3>
              <p>A product should suit the chair, room, floor surface and way it will be used.</p>
            </article>
            <article className="editorial-card">
              <div className="editorial-number">03</div>
              <div className="editorial-icon"><ShieldCheck aria-hidden="true" /></div>
              <h3>Know the limits</h3>
              <p>Rise highlights suitability concerns and when professional advice matters.</p>
            </article>
          </div>
        </section>

        <section className="evidence-section">
          <div className="page-width evidence-card">
            <div className="evidence-kicker">Why thoughtful guidance matters</div>
            <div className="evidence-stat">
              <strong>11m</strong>
              <span>people in England are aged 65 or over</span>
            </div>
            <div className="evidence-divider" />
            <div className="evidence-stat">
              <strong>22m</strong>
              <span>people in England are aged 50 or over</span>
            </div>
            <div className="evidence-note">
              <p>Small support decisions can affect confidence and independence at home.</p>
              <div className="source-links">
                <a href="https://ageing-better.org.uk/our-ageing-population-state-ageing-2025" target="_blank" rel="noopener noreferrer">
                  Source: Centre for Ageing Better <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section product-section">
          <div className="page-width">
            <div className="section-heading centered-heading">
              <div className="eyebrow">Featured buying guide</div>
              <h2>Compare seat lift cushions with the right questions in mind.</h2>
              <p>
                These are style examples linked to a general Amazon UK search—not products sold by Rise.
                Check the exact listing, seller and return terms before buying.
              </p>
            </div>

            <div className="product-grid">
              {products.map((product, index) => (
                <article className={`product-card ${index === 0 ? 'product-card-featured' : ''}`} key={product.id}>
                  <div className="product-image-wrap">
                    <img src={product.image} alt={`${product.name} example`} />
                    <span className="product-tag">{index === 0 ? 'Start here' : 'Style example'}</span>
                  </div>
                  <div className="product-content">
                    <div className="product-title-row">
                      <div>
                        <span className="product-type">Seat-assist guide</span>
                        <h3>{product.name}</h3>
                      </div>
                      <div className="guide-price"><small>Example</small><strong>£{product.price}</strong></div>
                    </div>
                    <p>{product.description}</p>
                    <ul className="feature-list">
                      {product.features.slice(0, 3).map((feature) => (
                        <li key={feature}><Check size={16} aria-hidden="true" />{feature}</li>
                      ))}
                    </ul>
                    <div className="product-action-row">
                      <a
                        className="button button-primary button-full"
                        href={product.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open Amazon UK search for ${product.name}`}
                      >
                        View retailer options <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                      <small>Standard retailer search. Price and availability may change.</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="buying-checks" className="section checklist-section">
          <div className="page-width checklist-layout">
            <div className="checklist-intro">
              <div className="eyebrow light-eyebrow">Before you buy</div>
              <h2>Six checks that matter more than the colour.</h2>
              <p>
                A comfortable-looking cushion is not automatically a suitable one. Check the person,
                the chair and the retailer details together.
              </p>
              <div className="professional-note">
                <AlertTriangle size={20} aria-hidden="true" />
                <span>Ask a GP, occupational therapist, physiotherapist or another qualified professional when pain, recovery, frailty or falls risk is involved.</span>
              </div>
            </div>

            <div className="checklist-grid">
              {checklist.map(([title, text], index) => (
                <article className="check-card" key={title}>
                  <span className="check-number">0{index + 1}</span>
                  <CheckCircle2 size={23} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section suitability-section">
          <div className="page-width">
            <div className="section-heading narrow-heading">
              <div className="eyebrow">Suitability first</div>
              <h2>A trustworthy guide also says when a product may not be right.</h2>
            </div>
            <div className="suitability-grid">
              <article className="suitability-card suitable-card">
                <div className="suitability-heading">
                  <div className="suitability-icon"><Check aria-hidden="true" /></div>
                  <div><span>May be useful for</span><h3>A simple boost from a stable chair</h3></div>
                </div>
                <ul>{usefulFor.map((item) => <li key={item}><Check size={18} />{item}</li>)}</ul>
              </article>
              <article className="suitability-card caution-card">
                <div className="suitability-heading">
                  <div className="suitability-icon"><AlertTriangle aria-hidden="true" /></div>
                  <div><span>May not be suitable for</span><h3>Needs that require more support</h3></div>
                </div>
                <ul>{notBestFor.map((item) => <li key={item}><AlertTriangle size={18} />{item}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>

        <section id="guides" className="section guide-section">
          <div className="page-width">
            <div className="split-heading guide-heading">
              <div>
                <div className="eyebrow">Explore more</div>
                <h2>Practical guidance for independence around the home.</h2>
              </div>
              <p>
                Start with the task that feels difficult, then compare the smallest useful change.
                These links currently open broad retailer searches while dedicated Rise guides are developed.
              </p>
            </div>

            <div className="guide-grid">
              {guides.map(({ icon: Icon, title, text, items, href }, index) => (
                <article className="guide-card" key={title}>
                  <div className="guide-topline">
                    <div className="guide-icon"><Icon aria-hidden="true" /></div>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="guide-tags">
                    {items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    Browse current options <ArrowUpRight size={17} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="page-width faq-layout">
            <div className="faq-intro">
              <div className="eyebrow">Questions, answered</div>
              <h2>Clear answers before you click through.</h2>
              <p>Common questions about seat lift cushions, retailer links and suitability.</p>
              <a className="disclosure-link" href="#disclosure">
                <ShieldCheck size={18} /> Read the full disclosure
              </a>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={21} aria-hidden="true" />
                    </button>
                    <div className="faq-answer" aria-hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="page-width cta-card">
            <div>
              <div className="eyebrow light-eyebrow">Choose with confidence</div>
              <h2>Start with suitability—not a sales pitch.</h2>
              <p>Use the checklist, compare the details and only continue when the product makes sense for the person and the home.</p>
            </div>
            <div className="cta-actions">
              <a className="button button-light" href="#products">View the guide <ArrowRight size={18} /></a>
              <a className="text-link text-link-light" href="#faq">Read safety notes</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-top">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#top" aria-label="Rise Mobility home">
              <span className="brand-mark" aria-hidden="true">R</span>
              <span className="brand-copy"><strong>Rise</strong><small>Mobility guides</small></span>
            </a>
            <p>Dignified, practical buying guidance for supporting independence at home.</p>
          </div>

          <div className="footer-nav">
            <strong>Explore</strong>
            <a href="#why-rise">Why Rise</a>
            <a href="#products">Product guide</a>
            <a href="#buying-checks">Buying checks</a>
            <a href="#guides">More guides</a>
          </div>

          <div className="footer-nav">
            <strong>Information</strong>
            <a href="#faq">FAQs</a>
            <a href="#disclosure">Retailer disclosure</a>
            <a href="https://ageing-better.org.uk/our-ageing-population-state-ageing-2025" target="_blank" rel="noopener noreferrer">Evidence source</a>
          </div>

          <div id="disclosure" className="footer-disclosure">
            <strong>Important information</strong>
            <p>Rise is an independent buying guide, not a retailer or medical service. Current product buttons open standard retailer searches.</p>
            <p>Rise does not provide medical advice or guarantee that a product will prevent falls. Seek qualified advice when mobility, pain, recovery or falls risk is involved.</p>
          </div>
        </div>

        <div className="page-width footer-bottom">
          <span>© 2026 Rise Mobility</span>
          <span>Independent guidance · UK focused · No direct sales</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
