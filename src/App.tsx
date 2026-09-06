const featuredWork = [
  {
    eyebrow: 'Architecture & Modernization',
    title: 'Enterprise Platform Modernization',
    description:
      'Architected a greenfield React and .NET Core platform to modernize legacy WebForms applications, using a Modular Monolith and Clean Architecture to keep business capabilities independently structured while sharing a unified API surface.',
    highlights: ['Modular Monolith + Clean Architecture','React + .NET Core 7 + EF Core','JWT authentication + role/permission authorization','Centralized exception logging with Serilog + SQL Server'],
  },
  {
    eyebrow: 'End-to-End Engineering',
    title: 'Multi-Station Operations Platform',
    description:
      'Led architecture, frontend, backend, testing, and delivery for an operations platform spanning web, API, and Windows application workflows. Designed shared contracts and work-order-level flows around real operational constraints.',
    highlights: ['Architecture through production delivery','Shared domain contracts across applications','REST APIs and complex business workflows','System-level validation and release readiness'],
  },
  {
    eyebrow: 'Developer Productivity',
    title: 'Engineering Workflow Modernization',
    description:
      'Modernized the team’s software delivery workflow by moving legacy repositories to GitHub, establishing Git Flow and GitHub Actions, introducing Jenkins deployment automation, and standardizing engineering knowledge in Jira and Confluence.',
    highlights: ['10+ SVN repositories migrated to GitHub','Git Flow, submodules, GitHub Actions','Manual deployment → button-triggered Jenkins workflow','100+ technical and operational documents'],
  },
]

const principles = [
  { title: 'Go deep on the system', body: 'I prefer understanding how a change propagates across UI state, APIs, business rules, database state, and downstream workflows before calling a feature complete.' },
  { title: 'Design before rushing', body: 'Good engineering starts with the right questions. I use design discussions to surface assumptions, edge cases, ownership boundaries, and future maintenance costs early.' },
  { title: 'Test beyond the happy path', body: 'My testing approach combines scenario, regression, negative, backend, and database validation. I deliberately enumerate state combinations and try unexpected user behavior to expose hidden defects.' },
  { title: 'Bridge business and engineering', body: 'I translate operational requirements into implementable system behavior, while explaining technical tradeoffs back to stakeholders in clear business language.' },
]

const skills = [
  ['Backend', 'C#, .NET Core 7, ASP.NET, EF Core, REST APIs, Java, Spring'],
  ['Frontend', 'React, JavaScript, Material UI, HTML, CSS'],
  ['Architecture', 'Clean Architecture, Modular Monolith, Repository/Service Patterns, DI'],
  ['Data', 'SQL Server, Oracle, PostgreSQL, MySQL'],
  ['Delivery', 'GitHub, Git Flow, GitHub Actions, Jenkins, SVN, IIS'],
  ['Engineering Ops', 'Jira, Confluence, release management, technical documentation'],
]

const earlierProjects = [
  { title: 'GISMeetsCS', meta: 'UT Dallas · 2023', body: 'Full-stack GIS project using React, Java/Spring Boot, PostgreSQL, and the Google Maps API. Designed high-level logic and database structure and worked across backend, frontend, and GIS data flows.' },
  { title: 'Location-Based Palace Guidance App', meta: 'Team Lead · 2017–2018', body: 'Led system and database design and backend development for a GPS-based guidance application. Received an honorable mention from Korea’s Ministry of Science, ICT and Future Planning.' },
  { title: 'Naver User Feed', meta: 'Backend Project · 2018', body: 'Built a Spring Boot/MySQL user-feed service and designed a distributed database approach for a simulated one-million-following content workload.' },
  { title: 'Hackathons & Community Leadership', meta: '2017–2023', body: 'HackUTD participant, former Korean American Professional Network vice president, and event-team president for a 120-person hackathon sponsored by technology companies including Google, Microsoft, and AWS.' },
]

function SectionTitle({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <div className="section-heading"><p className="kicker">{kicker}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>
}

function App() {
  return <>
    <header className="nav-wrap"><nav className="nav shell" aria-label="Primary navigation"><a className="brand" href="#top" aria-label="Nayeon Kim home">NK</a><div className="nav-links"><a href="#work">Work</a><a href="#approach">Approach</a><a href="#experience">Experience</a><a href="#projects">Earlier Projects</a></div><a className="button button-small" href="mailto:sksldi0@gmail.com">Contact</a></nav></header>
    <main id="top">
      <section className="hero shell"><div className="hero-copy"><p className="eyebrow">Software Engineer · Dallas, TX</p><h1>I build systems with<span> depth, structure, and ownership.</span></h1><p className="hero-lede">Backend-focused software engineer with 5+ years of experience designing, modernizing, and delivering enterprise software across architecture, implementation, testing, DevOps, releases, and technical leadership.</p><div className="hero-actions"><a className="button" href="#work">View selected work</a><a className="button button-ghost" href="https://github.com/developNY" target="_blank" rel="noreferrer">GitHub ↗</a><a className="button button-ghost" href="https://www.linkedin.com/in/nayeon-kim-cs/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      <aside className="hero-card"><p className="card-kicker">What I’m strongest at</p><div className="signal"><strong>Backend & System Design</strong><span>C# · .NET · SQL · APIs · architecture</span></div><div className="signal"><strong>End-to-End Ownership</strong><span>Requirement → design → code → test → release</span></div><div className="signal"><strong>Technical Leadership</strong><span>Architecture standards · mentoring · stakeholder bridge</span></div><div className="mini-stats"><div><b>10+</b><span>repos migrated</span></div><div><b>100+</b><span>docs authored</span></div><div><b>12</b><span>max team size led</span></div></div></aside></section>
      <section id="work" className="section shell"><SectionTitle kicker="Selected Work" title="The work that best represents my engineering value." copy="Public portfolio descriptions are intentionally generalized to protect proprietary customer and implementation details."/><div className="work-grid">{featuredWork.map(item => <article className="work-card" key={item.title}><p className="card-kicker">{item.eyebrow}</p><h3>{item.title}</h3><p>{item.description}</p><ul>{item.highlights.map(h => <li key={h}>{h}</li>)}</ul></article>)}</div></section>
      <section id="approach" className="section section-tint"><div className="shell"><SectionTitle kicker="Engineering Approach" title="Breadth is useful when it is anchored by technical depth." copy="My strongest pattern across architecture, testing, and delivery is understanding the whole system while going deep where correctness matters."/><div className="principles-grid">{principles.map((p,i) => <article className="principle" key={p.title}><span>0{i+1}</span><h3>{p.title}</h3><p>{p.body}</p></article>)}</div></div></section>
      <section id="experience" className="section shell"><SectionTitle kicker="Experience" title="Hands-on engineering with growing system ownership."/><div className="timeline"><article><div className="timeline-meta"><strong>TraxID</strong><span>2024 — Present</span></div><div><h3>Software Developer</h3><p>Architected modern React/.NET systems, led new platforms end-to-end, modernized source control and deployments, led recurring customer/engineering delivery discussions, and provided technical direction across teams of up to 12.</p></div></article><article><div className="timeline-meta"><strong>TraxID</strong><span>2022 — 2023</span></div><div><h3>Full-Stack Software Developer Intern</h3><p>Built and maintained enterprise applications with C#, ASP.NET/.NET, JavaScript, and SQL Server while contributing to application/database design and system-level troubleshooting.</p></div></article><article><div className="timeline-meta"><strong>Inzent</strong><span>2018 — 2019</span></div><div><h3>Java Backend Developer</h3><p>Built enterprise backend services with Java, Spring, and Oracle; improved a 100K-record search workload by approximately 2× and automated performance testing/deployment with JMeter and Jenkins.</p></div></article></div></section>
      <section className="section section-dark"><div className="shell"><SectionTitle kicker="Technology" title="A backend core, with enough breadth to own the delivery path."/><div className="skills-grid">{skills.map(([label,value]) => <div className="skill-row" key={label}><strong>{label}</strong><span>{value}</span></div>)}</div></div></section>
      <section id="projects" className="section shell"><SectionTitle kicker="Earlier Work" title="Projects that shaped the engineer I became." copy="These are intentionally omitted from my current résumé to keep it focused, but they show earlier backend, full-stack, project-leadership, and community experience."/><div className="project-grid">{earlierProjects.map(p => <article className="project-card" key={p.title}><p className="card-kicker">{p.meta}</p><h3>{p.title}</h3><p>{p.body}</p></article>)}</div></section>
      <section className="cta section"><div className="shell cta-inner"><div><p className="kicker">Let’s build something durable.</p><h2>Interested in backend systems, modernization, or technical leadership?</h2></div><a className="button button-light" href="mailto:sksldi0@gmail.com">Email me</a></div></section>
    </main><footer className="footer shell"><span>© 2026 Nayeon Kim</span><span>Built with React + TypeScript + Vite · Hosted on GitHub Pages</span></footer>
  </>
}
export default App
