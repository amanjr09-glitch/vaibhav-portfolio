import GithubHeatmap from "@/components/GithubHeatmap";
import MomentsReel from "@/components/MomentsReel";
import PenStrokes from "@/components/PenStrokes";
import MusicWidget from "@/components/MusicWidget";
import ThemeToggle from "@/components/ThemeToggle";
import { links, spotifyPlaylist } from "@/lib/content";
import { getContributions } from "@/lib/github";

export default async function Home() {
  const days = await getContributions("amanjr09-glitch");

  return (
    <div className="wrap">
      <header className="top">
        <a className="me" href="#">Vaibhav Pal</a>
        <div className="tools">
          <nav aria-label="Sections">
            <a href="#experience">Experience</a>
            <a href="#founder">Founder</a>
            <a href="#skills">Skills</a>
            {days && <a href="#github">GitHub</a>}
            <a href="#ai">AI</a>
            <a href="#moments">Moments</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <section className="hero" style={{ paddingTop: 24 }}>
        <div>
          <h1>Vaibhav Pal</h1>
          <p className="role">Senior Full-Stack Engineer · Bengaluru, India</p>
          <p className="say">
            I write software for a living. I&apos;ve also built two companies: one that{" "}
            <span className="circled">
              made money
              <svg viewBox="0 0 200 50" preserveAspectRatio="none" aria-hidden="true">
                <path className="ink draw" pathLength={1} d="M30 10 C 80 0, 170 2, 192 18 S 160 48, 96 47 S 4 40, 8 24 S 40 6, 70 5" />
              </svg>
            </span>{" "}
            and one that didn&rsquo;t.
          </p>
          <span className="avail">Open to senior roles</span>
          <div className="btns">
            <a className="btn solid" href="#contact">Get in touch</a>
            <a className="btn" href={links.resume} download>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 2v8M4.5 6.5 8 10l3.5-3.5M3 13h10" />
              </svg>
              Résumé
            </a>
          </div>
        </div>
        <figure className="photo">
          <img src="/img/vaibhav-half.jpg" alt="Portrait of Vaibhav Pal" width={560} height={700} />
          <span className="hand hi" aria-hidden="true">
            hi, that&apos;s me
            <svg viewBox="0 0 92 48">
              <path className="ink draw" pathLength={1} d="M4 6 C 20 34, 50 44, 84 30 M72 22 L 85 30 L 72 40" />
            </svg>
          </span>
        </figure>
      </section>

      <div className="proof">
        <div>
          <b>~₹3L</b>
          <span>monthly revenue at WearTheVibe, my apparel brand</span>
          <em className="hand">my own brand!</em>
        </div>
        <div>
          <b>$15M</b>
          <span>valuation Sheetsway reached while I was on the core team</span>
          <em className="hand">was in the room for it</em>
        </div>
        <div>
          <b>
            100%
            <svg className="tick" viewBox="0 0 26 22" aria-hidden="true">
              <path className="ink draw" pathLength={1} d="M3 12 L 10 19 L 23 3" />
            </svg>
          </b>
          <span>on-time delivery on major features at Delightree</span>
        </div>
        <div>
          <b>4+ yrs</b>
          <span>shipping React, Next.js and Node for remote teams</span>
        </div>
      </div>

      <section id="experience">
        <div className="head">
          <div>
            <h2>Experience</h2>
            <span className="hand note" aria-hidden="true">the day job (I like it too)</span>
          </div>
          <p>Shipping since 2021, almost all of it remote, for teams in the US, Malta, Singapore and India.</p>
        </div>

        <article className="job">
          <p className="when">
            Nov 2024 – Present<small>Denver, Colorado · Remote</small>
            <span className="hand promo">promoted Apr 2026!</span>
          </p>
          <div>
            <h3>
              <img className="logo" src="/img/logos/delightree.png" alt="" width={128} height={128} />
              Delightree <span>· Senior Software Engineer</span>
              <span className="now">Current</span>
            </h3>
            <p className="was">Software Engineer, Nov 2024 – Apr 2026</p>
            <ul>
              <li>Building and running agentic AI flows that are part of the team&apos;s daily development work.</li>
              <li>Built internal developer tooling with modern AI tools, speeding up the whole engineering team.</li>
              <li>Refactored a legacy frontend from prop drilling to a shared state architecture.</li>
              <li>Built an in-platform error-resolution flow that reduced customer drop-off.</li>
              <li>Shipped major features across several quarters with <strong>100% on-time delivery</strong>.</li>
              <li>Set up the support-to-engineering process, interviewed senior hires and led onboarding.</li>
            </ul>
          </div>
        </article>
        <article className="job">
          <p className="when">Jun 2023 – Nov 2024<small>San Gwann, Malta · Hybrid</small></p>
          <div>
            <h3>
              <img className="logo" src="/img/logos/sheetsway.png" alt="" width={128} height={128} />
              Sheetsway <span>· Software Engineer</span>
            </h3>
            <ul>
              <li>Core team while the AI audit platform scaled to a <strong>$15M valuation</strong>.</li>
              <li>Made the platform AI-native, so most tasks take a single click.</li>
              <li>Kept average page loads <strong>under 3 seconds</strong> and cut bounce rate by over 4%.</li>
              <li>Raised engagement <strong>10%</strong> and cut user errors 5% with clearer navigation.</li>
            </ul>
          </div>
        </article>
        <article className="job">
          <p className="when">Nov 2022 – May 2023<small>Singapore · Remote</small></p>
          <div>
            <h3>
              <img className="logo" src="/img/logos/elpha.png" alt="" width={128} height={128} />
              Elpha AI <span>· Full-stack Developer</span>
            </h3>
            <ul>
              <li>Built the first version of Sheetsway, an AI product for the audit industry, before joining Sheetsway directly.</li>
              <li>Shipped responsive, user-friendly UIs with React and Firebase.</li>
            </ul>
          </div>
        </article>
        <article className="job">
          <p className="when">Jul 2022 – Nov 2024<small>Remote</small></p>
          <div>
            <h3>
              <img className="logo" src="/img/logos/upwork.png" alt="" width={48} height={48} />
              Upwork <span>· Freelance</span>
            </h3>
            <ul>
              <li>Freelance full-stack work for clients alongside my full-time roles, with Firebase, Tailwind and more.</li>
            </ul>
          </div>
        </article>
        <article className="job">
          <p className="when">Mar 2022 – Nov 2022<small>Bengaluru · Remote · Part-time</small></p>
          <div>
            <h3>
              <span className="logo mono" aria-hidden="true">LA</span>
              LA Technologies <span>· Full-stack Web Developer</span>
            </h3>
            <ul>
              <li>Built client projects end to end and delivered exactly what each client needed.</li>
            </ul>
          </div>
        </article>
        <article className="job">
          <p className="when">Dec 2021 – Nov 2022<small>Part-time</small></p>
          <div>
            <h3>
              <span className="logo mono" aria-hidden="true">K</span>
              Konoha Technologies <span>· Software Developer</span>
            </h3>
            <ul>
              <li>Full-stack and app development with React, Node.js, Flutter, React Native and Firebase.</li>
            </ul>
          </div>
        </article>
      </section>

      <section id="founder">
        <div className="head">
          <div>
            <h2>The founder chapters</h2>
            <span className="hand aside" aria-hidden="true">
              the rollercoaster part
              <svg viewBox="0 0 34 40">
                <path className="ink draw" pathLength={1} d="M6 4 C 22 10, 24 24, 16 36 M8 30 L 16 37 L 24 31" />
              </svg>
            </span>
          </div>
          <p>Before and alongside my engineering roles, I started two companies. Neither is running today. Here&apos;s what happened, plainly.</p>
        </div>

        <article className="chapter">
          <div>
            <h3>WearTheVibe</h3>
            <p className="meta">Founder · Nov 2022 to Jul 2023</p>
            <span className="pill">Paused</span>
            <span className="hand">ran it next to a full-time job</span>
          </div>
          <div className="story">
            <p className="what">My own apparel brand, built and run end to end: product, brand, sales and operations.</p>
            <div className="mrr">
              <b>~₹3L</b>
              <svg className="star" viewBox="0 0 34 34" aria-hidden="true">
                <path className="ink draw" pathLength={1} d="M17 3 L 20 13 L 31 13 L 22 19 L 26 30 L 17 23 L 8 30 L 12 19 L 3 13 L 14 13 Z" />
              </svg>
              <span>monthly recurring revenue at peak</span>
            </div>
            <h4>Why it stopped</h4>
            <p>Split focus. The brand was growing while I was also working full time as an engineer, and both needed all of me.</p>
            <p className="lesson">Decide early whether a side business becomes the main one, and write the operations down so it can run without the founder.</p>
          </div>
        </article>

        <article className="chapter">
          <div>
            <h3>Positivae</h3>
            <p className="meta">Founder · ~2019 to 2021</p>
            <span className="pill">Closed</span>
            <span className="hand">started it in college</span>
          </div>
          <div className="story">
            <p className="what">A medical and depression assistant where people could meet doctors and therapists. Built during college.</p>
            <h4>Why it ended</h4>
            <p>Team and timing. The founding team didn&apos;t hold together, and the timing wasn&apos;t right for the product.</p>
            <p className="lesson">Agree on roles, time and commitment with co-founders before building, and test whether the market is ready first.</p>
          </div>
        </article>
      </section>

      <section id="skills">
        <div className="head">
          <div>
            <h2>Skills &amp; education</h2>
            <span className="hand note" aria-hidden="true">my toolbox</span>
          </div>
        </div>
        <dl className="rows">
          <div className="row"><dt>Frontend</dt><dd>React, Next.js, TypeScript, JavaScript, Tailwind, shadcn/ui, Mantine</dd></div>
          <div className="row"><dt>Backend</dt><dd>Node.js, Express, GraphQL, SQL, Python</dd></div>
          <div className="row"><dt>Platforms</dt><dd>Firebase, Firestore, Supabase, Git &amp; GitHub</dd></div>
          <div className="row"><dt>2021 – 2024</dt><dd>B.E. Computer Science <span>· Chandigarh University</span></dd></div>
          <div className="row"><dt>2018 – 2021</dt><dd>Diploma, Computer Science <span>· NIT Longowal</span></dd></div>
        </dl>
      </section>

      {days && (
        <section id="github">
          <div className="head">
            <div>
              <h2>On GitHub</h2>
              <span className="hand note" aria-hidden="true">the commit diary</span>
            </div>
            <p>A year of commits, pull requests and reviews, pulled straight from my GitHub profile.</p>
          </div>
          <GithubHeatmap initial={days} user="amanjr09-glitch" profile={links.github} />
        </section>
      )}

      <section id="ai">
        <div className="head">
          <div>
            <h2>How I build with AI</h2>
            <span className="hand note" aria-hidden="true">graded by YC&apos;s Paxel</span>
          </div>
          <p>Paxel by Y Combinator read my Claude Code history on one product and scored how I work with agents.</p>
        </div>
        <dl className="rows">
          <div className="row"><dt>Builder type</dt><dd>Deep Worker <span>· 65% of work blocks ran over 90 minutes</span></dd></div>
          <div className="row"><dt>Output</dt><dd>1,000 commits and 74 PRs <span>· 399 features, 276 fixes</span></dd></div>
          <div className="row"><dt>Planning</dt><dd>61% of build sessions started from a plan</dd></div>
          <div className="row"><dt>Longest streak</dt><dd>13 consecutive days of shipping</dd></div>
        </dl>
        <div className="btns">
          <a className="btn" href={links.paxel} target="_blank" rel="noopener noreferrer">Read the full report</a>
        </div>
      </section>

      <section id="moments">
        <div className="head">
          <div>
            <h2>Personal moments</h2>
            <span className="hand note" aria-hidden="true">the off-the-clock bits</span>
          </div>
          <p>Football, the gym, games and trips with the people who keep the ride fun. Building things is better when you&apos;ve got a life outside them.</p>
        </div>
        <MomentsReel />
      </section>

      <section id="contact" className="contact">
        <h2>
          <span className="talk">
            Let&apos;s talk.
            <svg viewBox="0 0 300 22" preserveAspectRatio="none" aria-hidden="true">
              <path className="ink draw" pathLength={1} d="M4 12 C 60 4, 120 18, 180 9 S 270 6, 296 12" />
            </svg>
          </span>
          <span className="hand reply">I actually reply</span>
        </h2>
        <p>Hiring for a senior full-stack role, or building something and want an engineer who has run a business? I reply to every message.</p>
        <div className="btns">
          <a className="btn solid" href={links.email}>Email me</a>
          <a className="btn" href={links.resume} download>Download résumé</a>
        </div>
        <div className="links">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <footer>
          <span>Vaibhav Pal · Bengaluru, India</span>
          <span className="hand chai">made with chai &amp; code</span>
        </footer>
      </section>

      <PenStrokes />
      {spotifyPlaylist && <MusicWidget url={spotifyPlaylist} />}
    </div>
  );
}
