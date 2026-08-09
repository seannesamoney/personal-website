const projects = [
  { n:'01', type:'startup · product · AI', title:'Docly', desc:'An AI health assistant concept for making fragmented personal health data easier to understand.', art:'docly' },
  { n:'02', type:'design · engineering · health', title:'Stanford Bio-X', desc:'Designing tools with clinicians to make pediatric cardiovascular data more useful and accessible.', art:'heart' },
  { n:'03', type:'clinical research', title:'GLP-1 research', desc:'Investigating gastrointestinal function and gastromyoelectric activity in the context of GLP-1 receptor agonists.', art:'glp' },
  { n:'04', type:'consulting · medtech', title:'Kx Advisors', desc:'Commercial research, modeling, and strategy work across the medical technology market.', art:'strategy' },
  { n:'05', type:'software · AI · healthcare', title:'LLMonFHIR', desc:'Collaborative work on an LLM-powered platform for synthesizing patient data and supporting better outcomes.', art:'fhir' },
  { n:'06', type:'teaching · human biology', title:'Human Biology tutor', desc:'Helping Stanford students build intuition in genetics, molecular biology, and physiology.', art:'bio' },
]

function Rocket({small=false}:{small?:boolean}) {
  return <svg className={small ? 'rocket small' : 'rocket'} viewBox="0 0 160 240" aria-hidden="true">
    <path className="rb" d="M80 18C52 38 38 74 40 126c1 32 11 57 40 79 29-22 39-47 40-79 2-52-12-88-40-108Z"/>
    <circle className="rw" cx="80" cy="87" r="18"/><path className="rf" d="M42 130 17 170l29-5 15-24ZM118 130l25 40-29-5-15-24Z"/>
    <path className="flame" d="M63 198c5 22 12 33 17 42 5-9 12-20 17-42Z"/>
  </svg>
}

function Art({kind}:{kind:string}) {
  if(kind==='docly') return <div className="art dark"><div className="mini"><small>today</small><strong>Health data,<br/>made human.</strong><div className="bars"><i/><i/><i/><i/><i/></div></div></div>
  if(kind==='heart') return <div className="art dark pulse"><svg viewBox="0 0 500 170" preserveAspectRatio="none"><polyline points="0,110 28,105 54,112 80,64 102,126 130,105 158,110 186,68 213,124 244,104 274,111 304,60 333,129 362,105 391,111 421,70 452,121 500,104"/></svg></div>
  if(kind==='glp') return <div className="art coral"><b>GLP–1</b><span className="orbit"/></div>
  if(kind==='strategy') return <div className="art pale"><span className="chip c1">market</span><span className="chip c2">signal</span><span className="chip c3">strategy</span></div>
  if(kind==='fhir') return <div className="art dark network"><i/><i/><i/><span/><span/></div>
  return <div className="art pale bio"><b>bio</b><span>genes<br/>cells<br/>systems</span></div>
}

export default function Home() {
  return <main>
    <header><a className="brand" href="#top">sean nesamoney</a><nav><a href="#work">work</a><a href="#about">about</a><a href="#play">music</a><a href="/resume.pdf">résumé</a></nav></header>

    <section className="hero" id="top"><div className="eyebrow">design · technology · health · startups · music</div><div className="heroMain"><div><h1>Sean<br/>Nesamoney</h1><p>I design, build, and explore ideas that aim a little higher.</p></div><div className="rocketBox"><Rocket/></div></div><a className="down" href="#work">see what I’m working on ↓</a></section>

    <section className="work" id="work"><div className="label">01 / selected work</div><div className="sectionIntro"><h2>Things I’ve worked on</h2><p>A mix of products, research, engineering, and strategy.</p></div><div className="gallery">{projects.map(p=><article className="tile" key={p.n}><div className="tileTop"><span>{p.type}</span><span>{p.n}</span></div><Art kind={p.art}/><h3>{p.title}</h3><p>{p.desc}</p><span className="more">more ↗</span></article>)}</div></section>

    <section className="manifesto"><div className="label">02 / operating system</div><h2>I like <em>big</em> ideas.</h2><p>Especially the ones sitting between disciplines.</p><div className="cross"><div>Design <b>×</b> Medicine</div><div>AI <b>×</b> Human behavior</div><div>Science <b>×</b> Storytelling</div><div>Technology <b>×</b> People</div></div></section>

    <section className="about" id="about"><div className="label">03 / about</div><div className="two"><h2>Hi, I’m Sean.</h2><div><p className="lead">I’m drawn to problems that don’t fit neatly inside one box.</p><p>I study Design and Biomedical Data Science at Stanford and spend most of my time somewhere between making, analyzing, researching, and asking too many questions.</p><p>I’m especially interested in healthcare, AI, entrepreneurship, and how thoughtful design can make complicated systems feel more human.</p></div></div></section>

    <section className="play" id="play"><div className="label">04 / side quests</div><h2>Not everything needs a KPI.</h2><div className="playGrid"><article className="music"><small>music</small><h3>Raagapella</h3><p>Former President + Music Director. Arranging, performing, directing, competing, and making a lot of noise with people I love.</p></article><article className="experiments"><small>experiments</small><h3>Things I’m trying.</h3><p>Startup ideas, interface experiments, strange prototypes, and other work that may or may not become something.</p><b>*</b></article></div></section>

    <section className="trajectory"><div className="label">05 / trajectory</div><h2>Still climbing.</h2><div className="path"><div><i/>past<strong>Design. Science. Music.</strong></div><div><i/>now<strong>Building things.</strong></div><div><i/>next<strong>????</strong><Rocket small/></div></div></section>

    <footer><small>you made it to space.</small><h2>Let’s make something cool.</h2><div className="links"><a href="mailto:nsean23@stanford.edu">email ↗</a><a href="https://www.linkedin.com/in/seannesamoney/">LinkedIn ↗</a><a href="/resume.pdf">résumé ↗</a></div><div className="foot">Sean Nesamoney <span>© 2026</span><span>Earth — for now</span></div></footer>
  </main>
}
