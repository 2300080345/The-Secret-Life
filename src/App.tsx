import { useEffect, useState } from "react";

const images = {
  ordinary:
    "https://images.unsplash.com/photo-1608126199278-50a5f584dbdd?auto=format&fit=crop&w=2200&q=85",
  greenland:
    "https://images.unsplash.com/photo-1537267150314-9d1c1fc323eb?auto=format&fit=crop&w=2200&q=88",
  iceberg:
    "https://images.unsplash.com/photo-1543470388-80a8f5281639?auto=format&fit=crop&w=1600&q=85",
  iceland:
    "https://images.unsplash.com/photo-1503104538136-7491acef4d5d?auto=format&fit=crop&w=2400&q=90",
  highlands:
    "https://images.unsplash.com/photo-1647599369343-8ef99dd8b021?auto=format&fit=crop&w=1800&q=86",
  himalayas:
    "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?auto=format&fit=crop&w=2400&q=88",
  waterfall:
    "https://images.unsplash.com/photo-1685350199444-3b4a0b5bea71?auto=format&fit=crop&w=1800&q=88",
  photographer:
    "https://images.unsplash.com/photo-1741778268587-305fa20b1598?auto=format&fit=crop&w=1400&q=86",
  final:
    "https://images.unsplash.com/photo-1515112157076-4c92817b3aab?auto=format&fit=crop&w=2400&q=90",
};

const navItems = [
  ["Home", "home"],
  ["The journey", "journey"],
  ["Characters", "people"],
  ["Philosophy", "philosophy"],
  ["Final frame", "final-frame"],
];

const Arrow = ({ down = false }: { down?: boolean }) => (
  <svg aria-hidden="true" className={down ? "arrow arrow--down" : "arrow"} viewBox="0 0 32 16">
    <path d="M1 8h29M23 1l7 7-7 7" />
  </svg>
);

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header ${open ? "menu-open" : ""}`}>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={`#${href}`}>
            {label}
          </a>
        ))}
      </nav>
      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        <span>{open ? "Close" : "Menu"}</span>
        <i aria-hidden="true" />
      </button>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
        <p>Choose a chapter</p>
        {navItems.map(([label, href], index) => (
          <a key={href} href={`#${href}`} onClick={() => setOpen(false)}>
            <span>0{index + 1}</span>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function App() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 },
    );
    const nodes = document.querySelectorAll(".reveal");
    nodes.forEach((node) => revealObserver.observe(node));

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll", `${(window.scrollY / max) * 100}%`);
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <main>
      <Header />
      <div className="scroll-progress" aria-hidden="true" />

      <section id="home" className="hero">
        <img src={images.ordinary} alt="A solitary figure walking through a quiet station" />
        <div className="hero-wash" />
        <div className="hero-topline">
          <span>A cinematic field study</span>
          <span>New York / 2013</span>
        </div>
        <div className="hero-title">
          <p className="eyebrow">The secret life of</p>
          <h1>
            Walter
            <br />
            <em>Mitty</em>
          </h1>
        </div>
        <div className="hero-statement reveal">
          <p>The world is much bigger than</p>
          <strong>your imagination.</strong>
        </div>
        <a className="scroll-cue" href="#ordinary">
          <span>Begin the journey</span>
          <Arrow down />
        </a>
        <span className="frame-number">FRAME 001—024</span>
      </section>

      <section id="ordinary" className="ordinary section-pad">
        <SectionLabel number="01">The ordinary</SectionLabel>
        <div className="ordinary-grid">
          <div className="ordinary-copy reveal">
            <span className="data-label">Negative asset manager / LIFE magazine</span>
            <h2>
              Life, filed
              <br />
              <em>in careful order.</em>
            </h2>
          </div>
          <div className="routine reveal">
            <p>
              Train. Platform. Elevator. Desk. Repeat. Walter spends his days preserving other
              people’s moments while quietly imagining his own.
            </p>
            <div className="routine-list" aria-label="Walter's routine">
              {["07:42 / Depart", "08:19 / Arrive", "09:00 / Archive", "17:31 / Return"].map(
                (item) => (
                  <span key={item}>{item}</span>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="contact-sheet reveal" aria-label="A visual sequence of an ordinary commute">
          {[0, 1, 2, 3].map((index) => (
            <figure key={index} style={{ "--crop": `${index * 28}%` } as React.CSSProperties}>
              <img src={images.ordinary} alt="" />
              <figcaption>0{index + 1} / A.M.</figcaption>
            </figure>
          ))}
        </div>
        <p className="ordinary-foot reveal">
          Sometimes the greatest adventure begins when you stop imagining and start living.
        </p>
      </section>

      <section id="daydreamer" className="daydreamer">
        <div className="dream-bg" style={{ backgroundImage: `url(${images.highlands})` }} />
        <div className="dream-cloud" />
        <div className="dream-content section-pad">
          <SectionLabel number="02">The daydreamer</SectionLabel>
          <p className="dream-kicker reveal">Somewhere between here</p>
          <h2 className="reveal">
            AND <em>ANYWHERE</em>
          </h2>
          <div className="dream-note reveal">
            <span>Reality slips.</span>
            <p>
              The room falls away. A glance becomes a journey, and the impossible waits just beyond
              the edge of the frame.
            </p>
          </div>
        </div>
      </section>

      <section id="journey" className="journey">
        <div className="journey-intro section-pad">
          <SectionLabel number="03">The journey</SectionLabel>
          <h2 className="reveal">
            A leap into
            <br />
            <em>the unknown.</em>
          </h2>
          <p className="reveal">
            One missing photograph. Three landscapes. No plan beyond moving forward.
          </p>
        </div>

        <article className="destination greenland">
          <img src={images.greenland} alt="A remote Greenland settlement beneath dark mountains" />
          <div className="destination-shade" />
          <div className="coordinates">
            <span>61.99° N</span>
            <span>49.67° W</span>
          </div>
          <div className="destination-title reveal">
            <span>Chapter I / Departure</span>
            <h3>Greenland</h3>
            <p>Where certainty ends.</p>
          </div>
          <figure className="inset-photo reveal">
            <img src={images.iceberg} alt="An iceberg reflected in still arctic water" />
            <figcaption>Ilulissat Icefjord — quiet before the leap</figcaption>
          </figure>
        </article>

        <article className="destination iceland">
          <img src={images.iceland} alt="A road disappearing into Icelandic mountains" />
          <div className="destination-shade" />
          <div className="coordinates">
            <span>64.96° N</span>
            <span>19.02° W</span>
          </div>
          <div className="speed-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="destination-title destination-title--wide reveal">
            <span>Chapter II / Momentum</span>
            <h3>Iceland</h3>
            <p>There is no road map for becoming who you are.</p>
          </div>
          <div className="ride-note reveal">
            <strong>17 KM</strong>
            <span>downhill / no turning back</span>
          </div>
        </article>

        <article className="destination himalayas">
          <img src={images.himalayas} alt="The Himalayan range beneath a sky full of stars" />
          <div className="destination-shade" />
          <div className="coordinates">
            <span>28.59° N</span>
            <span>83.82° E</span>
          </div>
          <div className="destination-title reveal">
            <span>Chapter III / Stillness</span>
            <h3>Himalayas</h3>
            <p>At the edge of the world, the noise finally disappears.</p>
          </div>
        </article>
      </section>

      <section id="people" className="people section-pad">
        <SectionLabel number="04">The people</SectionLabel>
        <div className="people-heading reveal">
          <h2>
            The ones who
            <br />
            <em>move us forward.</em>
          </h2>
          <p>Not guides. Not heroes. Mirrors—each revealing a life Walter might choose.</p>
        </div>
        <div className="character-list">
          {[
            [
              "01",
              "Walter Mitty",
              "The dreamer",
              "A quiet observer who finally steps inside the frame.",
            ],
            [
              "02",
              "Cheryl Melhoff",
              "The connection",
              "A steady voice that makes the real world worth returning to.",
            ],
            [
              "03",
              "Sean O’Connell",
              "The witness",
              "A photographer who knows when not to press the shutter.",
            ],
          ].map(([number, name, role, description]) => (
            <article className="character reveal" key={name}>
              <span>{number}</span>
              <h3>{name}</h3>
              <em>{role}</em>
              <p>{description}</p>
              <Arrow />
            </article>
          ))}
        </div>
      </section>

      <section id="art-of-seeing" className="seeing section-pad">
        <SectionLabel number="05">The art of seeing</SectionLabel>
        <div className="seeing-grid">
          <div className="seeing-quote reveal">
            <span>Sean O’Connell / Photographer</span>
            <blockquote>
              “If I like a moment,
              <br />
              <em>I don’t like to have the distraction of the camera.</em>”
            </blockquote>
          </div>
          <figure className="gallery-main reveal">
            <img src={images.waterfall} alt="A lone person standing before an immense waterfall" />
            <figcaption>
              <span>Plate 05—01</span>
              The world doesn’t ask to be captured.
            </figcaption>
          </figure>
          <figure className="gallery-side reveal">
            <img src={images.photographer} alt="A photographer watching sunrise from a mountain" />
            <figcaption>Wait for it.</figcaption>
          </figure>
          <p className="gallery-note reveal">
            Look longer.
            <br />
            Notice the silence.
            <br />
            Let the moment remain yours.
          </p>
        </div>
      </section>

      <section id="philosophy" className="philosophy">
        <div className="philosophy-image" style={{ backgroundImage: `url(${images.highlands})` }} />
        <div className="philosophy-shade" />
        <div className="philosophy-content section-pad">
          <SectionLabel number="06">The philosophy</SectionLabel>
          <div className="manifesto reveal">
            <span>To see the world,</span>
            <span>things dangerous to come to,</span>
            <span>to see behind walls,</span>
            <span>to draw closer,</span>
            <span>to find each other</span>
            <span className="accent">and to feel.</span>
          </div>
          <p className="purpose reveal">That is the purpose of life.</p>
        </div>
      </section>

      <section id="final-frame" className="final-frame">
        <img src={images.final} alt="A figure watching the last light from a mountain summit" />
        <div className="final-shade" />
        <div className="final-content section-pad">
          <SectionLabel number="07">The final frame</SectionLabel>
          <p className="issue reveal">LIFE / FINAL ISSUE / NEGATIVE 25</p>
          <h2 className="reveal">
            The world
            <br />
            <em>is waiting.</em>
          </h2>
          <p className="final-copy reveal">
            Stop dreaming about the extraordinary.
            <br />
            Go out and experience it.
          </p>
          <a className="return-link" href="#home">
            Return to the beginning <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-mark">
          <img src="/life.jpg" alt="The Secret Life" />
        </div>
        <p>An unofficial cinematic tribute to a life less ordinary.</p>
        <div className="footer-links">
          <a href="#journey">Explore</a>
          <a href="#art-of-seeing">Observe</a>
          <a href="#philosophy">Feel</a>
        </div>
        <span>© 2026 / MADE FOR THE CURIOUS</span>
      </footer>
    </main>
  );
}

export default App;
