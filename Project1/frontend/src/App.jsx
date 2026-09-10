import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Link, Navigate, useNavigate } from 'react-router-dom';
import { api } from './services/api';

const defaultConcepts = [
  ['The Model (LLM)', 'Foundations', 'Understand the AI model as the engine behind responses.'],
  ['Tokens', 'Foundations', 'Learn how AI reads and writes in pieces of text.'],
  ['Prompt & System Prompt', 'Foundations', 'Separate permanent instructions from today’s task.'],
  ['Context Window', 'Foundations', 'Understand how much information AI can handle at one time.'],
  ['The Agent Loop', 'Foundations', 'Try, check, fix and repeat.'],
  ['Skills', 'Capabilities', 'Turn repeatable jobs into reusable instructions.'],
  ['Tools', 'Capabilities', 'Let AI use business software and utilities.'],
  ['Commands', 'Capabilities', 'Use quick instructions for recurring tasks.'],
  ['Memory', 'Capabilities', 'Retain useful brand information for future work.'],
  ['Context', 'Capabilities', 'Give AI the information relevant right now.'],
  ['Agents', 'Capabilities', 'End-to-end virtual teammates for specific jobs.'],
  ['Sub-Agents', 'Capabilities', 'Specialist helpers that divide the work.'],
  ['Workflows', 'Capabilities', 'Fixed steps like a business SOP.'],
  ['Orchestrations', 'Capabilities', 'Coordinate multiple AI teammates.'],
  ['MCPs', 'Capabilities', 'Adapters that help AI connect to software.'],
  ['Connectors', 'Capabilities', 'Live hookups to stores, ads, inboxes and tools.'],
  ['Artifacts', 'Capabilities', 'Useful deliverables AI creates and you keep.'],
  ['RAG / Retrieval', 'The Bridge', 'Pull the right information from your own documents.'],
  ['Structured Output', 'The Bridge', 'Return clean, organized information.'],
  ['Evals / Testing', 'The Ceiling', 'Test AI for accuracy and brand alignment.'],
  ['Guardrails / Safety', 'The Ceiling', 'Rules that stop unsafe or unapproved actions.'],
  ['Human-in-the-loop', 'The Ceiling', 'Draft first, approve before important actions.'],
  ['Cost, Speed & Observability', 'The Ceiling', 'Watch usage, performance and activity.'],
  ['AI Teammate, End to End', 'Finale', 'Bring the pieces together into one AI teammate.']
];

function Nav({ user, onLogout }) {
  return (
    <header>
      <Link className="brand" to="/">
        <b>V</b>
        <span>Vriksha<small>ACADEMY</small></span>
      </Link>
      <nav>
        <NavLink to="/learn">What you'll learn</NavLink>
        <NavLink to="/programs">Programs</NavLink>
        <NavLink to="/contact">Enquire</NavLink>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link className="navbtn" to="/dashboard">Dashboard</Link>
            <button
              type="button"
              onClick={onLogout}
              style={{
                background: 'transparent',
                border: '1px solid #ccc',
                borderRadius: '999px',
                padding: '9px 15px',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link className="navbtn" to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}

function Foot() {
  return (
    <footer>
      <div>
        <h3>Vriksha Academy</h3>
        <p>AI systems explained for D2C founders. No tech degree required.</p>
      </div>
      <div className="flinks">
        <Link to="/learn">Learn</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/contact">Enquire</Link>
      </div>
      <small>© 2026 Vriksha Academy</small>
    </footer>
  );
}

const Ey = ({ t, s }) => (
  <div className="ey">
    <span>{t}</span>
    <h2>{s}</h2>
  </div>
);

function Home() {
  const outcomes = [
    ['01', 'Business Brain', 'Understand the shared brand brief an AI teammate reads first.'],
    ['02', 'Skills', 'Learn how repeatable jobs become reusable instructions.'],
    ['03', 'Real data', 'See how connectors and CSVs can give AI business context.'],
    ['04', 'Specialist Agents', 'Understand how AI teammates divide work.'],
    ['05', '90-day roadmap', 'See how a Captain turns outputs into an execution plan.']
  ];

  return (
    <>
      <section className="hero">
        <div>
          <label>FOR D2C FOUNDERS · NO CODE REQUIRED</label>
          <h1>Build Your Brand's <i>AI Team.</i></h1>
          <p>Learn how AI systems actually work and how to structure AI teammates around your brand, data and workflows.</p>
          <Link className="btn" to="/programs">Explore programs →</Link>
          <Link className="txt" to="/learn">See what you'll learn</Link>
        </div>
        <div className="visual">
          <div className="orb" />
          <div className="aicard">
            <small>AI TEAM · READY</small>
            <h3>✦ Your AI Teammate</h3>
            <p>Knows your brand · follows your rules</p>
            {['🧠 Business Brain', '🛠 Skills', '🤖 Specialists'].map(x => (
              <div className="mini" key={x}>{x}<b>Ready</b></div>
            ))}
          </div>
        </div>
      </section>

      <div className="strip">
        <span>FOUNDER-FIRST</span>
        <span>NO CODE</span>
        <span>INDIA-FIRST</span>
        <span>APPROVAL ALWAYS</span>
      </div>

      <section>
        <Ey t="WHAT YOU WALK AWAY WITH" s="A glimpse of the team you can build." />
        <div className="outcomes">
          {outcomes.map(x => (
            <article key={x[1]}>
              <small>{x[0]}</small>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
              <b>✓</b>
            </article>
          ))}
        </div>
      </section>

      <section className="dark">
        <Ey t="THE BIG IDEA" s="A team, not a chatbot." />
        <p>One chat can answer questions. A team of specialists can divide the work, share one business brief and produce useful outputs.</p>
        <div className="team">
          <div>
            ◎<strong>One general chatbot</strong>
            <small>Ads · listings · stock · margins</small>
          </div>
          <b>→</b>
          <aside>
            {['Ads', 'Listings', 'Stock', 'Margins'].map(x => <span key={x}>{x}</span>)}
          </aside>
        </div>
      </section>

      <section>
        <Ey t="THE MAP" s="Four building blocks. One Captain." />
        <div className="blocks">
          {[
            ['🧠', 'Business Brain', 'What your AI knows about your business.'],
            ['🛠️', 'Skills', 'Repeatable jobs, done consistently.'],
            ['🔌', 'Connectors', 'Your business data, safely connected.'],
            ['🤖', 'Agents', 'Specialist teammates that do the work.']
          ].map((x, i) => (
            <article key={x[1]}>
              <small>0{i + 1}</small>
              <em>{x[0]}</em>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
        <div className="captain">🎯 The Captain ties the team's work together into one plan.</div>
      </section>

      <section className="principles">
        <div>
          <Ey t="GROUND RULES" s="Founder stays in control." />
          <p>AI is powerful, but the founder remains the final decision-maker.</p>
        </div>
        <div className="plist">
          {[
            ['🙋', 'Plain English', 'No engineering degree required.'],
            ['✋', 'Approval gate', 'Important actions wait for your yes.'],
            ['🔎', 'Cite the source', 'Numbers should be sourced or labelled.'],
            ['🇮🇳', 'India-first', 'Real founder context, real channels.']
          ].map(x => (
            <div key={x[1]}>
              <b>{x[0]} {x[1]}</b>
              <span>{x[2]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <Ey t="READY TO EXPLORE?" s="See what the Academy can teach you." />
        <p>Start with the 24-concept AI foundations or explore the training formats.</p>
        <Link className="btn" to="/learn">Explore 24 concepts</Link>
      </section>
    </>
  );
}

function Learn() {
  const [conceptsList, setConceptsList] = useState(defaultConcepts);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    api.concepts()
      .then(data => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          const mapped = data.map(item => [item.title, item.category, item.description]);
          setConceptsList(mapped);
        }
      })
      .catch(() => {
        // Fallback gracefully to default concepts
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, []);

  const cats = ['All', ...new Set(conceptsList.map(x => x[1]))];
  const vis = filter === 'All' ? conceptsList : conceptsList.filter(x => x[1] === filter);

  return (
    <>
      <div className="pagehero">
        <label>AI FOR D2C FOUNDERS</label>
        <h1>How AI systems actually work.</h1>
        <p>24 founder-friendly concepts — from models and prompts to agents, trust and the AI teammate end to end.</p>
      </div>
      <section>
        <Ey t="24 CONCEPTS" s="Foundations → capabilities → trust" />
        <p className="sub">This is a learning map, not the full workshop. Each card is a glimpse of the idea you'll explore.</p>
        <div className="filters">
          {cats.map(c => (
            <button className={filter === c ? 'on' : ''} onClick={() => setFilter(c)} key={c}>
              {c}
            </button>
          ))}
        </div>
        <div className="concepts">
          {vis.map((x) => (
            <article key={x[0]}>
              <small>{String(conceptsList.indexOf(x) + 1).padStart(2, '0')} · {x[1]}</small>
              <h3>{x[0]}</h3>
              <p>{x[2]}</p>
              <hr />
              <b>Explore in the session →</b>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Programs() {
  const ps = [
    [
      '◉',
      'Group Workshop / Webinar',
      'LEARN TOGETHER',
      'A founder-friendly session covering AI foundations and the AI-team journey.',
      ['AI systems explained simply', 'Business Brain → Agents journey', 'Practical examples', 'Founder Q&A']
    ],
    [
      '↗',
      'One-to-One Founder / CEO',
      'DEEP DIVE',
      'A focused session mapped to the founder’s business context.',
      ['Personalized discussion', 'Business-specific examples', 'Implementation guidance', 'Direct Q&A']
    ],
    [
      '▦',
      'Dedicated Company Session',
      'FOR TEAMS',
      "A private session designed around one company's team and questions.",
      ['Company-specific context', 'Team learning', 'Use-case mapping', 'Practical next steps']
    ],
    [
      '⌂',
      'On-site Training',
      'IN PERSON',
      'An in-person Academy experience for organizations.',
      ['On-site session', 'Team participation', 'Live discussion', 'Action-oriented wrap-up']
    ]
  ];

  return (
    <>
      <div className="pagehero">
        <label>PROGRAMS</label>
        <h1>Choose how you want to learn.</h1>
        <p>From group sessions to one-to-one founder conversations, the Academy can be structured around the way you learn.</p>
      </div>
      <section>
        <Ey t="TRAINING FORMATS" s="A clear glimpse. The full learning happens in the session." />
        <p className="sub">Exact pricing and availability can be confirmed by the Academy team.</p>
        <div className="programs">
          {ps.map((p, i) => (
            <article className={i === 0 ? 'featured' : ''} key={p[1]}>
              <em>{p[0]}</em>
              <label>{p[2]}</label>
              <h2>{p[1]}</h2>
              <p>{p[3]}</p>
              <ul>{p[4].map(x => <li key={x}>✓ {x}</li>)}</ul>
              <strong>Price on enquiry</strong>
              <Link className="outline" to="/contact">Ask about this session</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="light">
        <Ey t="THE LEARNING JOURNEY" s="What you'll see across the experience." />
        <div className="journey">
          {['AI Foundations', 'Business Brain', 'Skills', 'Connectors', 'Agents', 'Captain + Roadmap'].map((x, i) => (
            <div key={x}>
              <small>0{i + 1}</small>
              <b>{x}</b>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Login({ onLoginSuccess }) {
  const [mode, setMode] = useState('login');
  const [f, setF] = useState({ name: '', email: '', password: '' });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setErr('');
    setLoading(true);
    try {
      let res;
      if (mode === 'register') {
        res = await api.register({
          name: f.name.trim(),
          email: f.email.trim(),
          password: f.password
        });
      } else {
        res = await api.login({
          email: f.email.trim(),
          password: f.password
        });
      }

      if (res && res.user) {
        localStorage.setItem('vrikshaUser', JSON.stringify(res.user));
        if (onLoginSuccess) onLoginSuccess(res.user);
        navigate('/dashboard');
      }
    } catch (x) {
      setErr(x.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  }

  function switchMode(newMode) {
    setMode(newMode);
    setErr('');
  }

  return (
    <section className="auth">
      <div>
        <label>VRiksha ACADEMY</label>
        <h1>Your AI learning journey starts here.</h1>
        <p>Sign in to view your learning dashboard, concept map and workshop journey.</p>
      </div>
      <div className="authbox">
        <div className="tabs">
          <button
            type="button"
            className={mode === 'login' ? 'on' : ''}
            onClick={() => switchMode('login')}
          >
            Login
          </button>
          <button
            type="button"
            className={mode === 'register' ? 'on' : ''}
            onClick={() => switchMode('register')}
          >
            Create account
          </button>
        </div>
        <h2>{mode === 'login' ? 'Welcome back.' : 'Create your account.'}</h2>
        {err && <div className="error">{err}</div>}
        <form onSubmit={submit}>
          {mode === 'register' && (
            <label>
              Name
              <input
                required
                value={f.name}
                onChange={e => setF({ ...f, name: e.target.value })}
                placeholder="e.g. Aditi Rao"
              />
            </label>
          )}
          <label>
            Email
            <input
              type="email"
              required
              value={f.email}
              onChange={e => setF({ ...f, email: e.target.value })}
              placeholder="you@company.com"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              minLength="6"
              required
              value={f.password}
              onChange={e => setF({ ...f, password: e.target.value })}
              placeholder="Minimum 6 characters"
            />
          </label>
          <button className="btn full" disabled={loading}>
            {loading ? 'Processing...' : (mode === 'login' ? 'Login →' : 'Create account →')}
          </button>
        </form>
      </div>
    </section>
  );
}

function Dashboard({ user, onLogout }) {
  const navigate = useNavigate();
  const currentUser = user || JSON.parse(localStorage.getItem('vrikshaUser') || 'null');

  if (!currentUser) return <Navigate to="/login" replace />;

  const displayName = currentUser.name ? currentUser.name.split(' ')[0] : 'Founder';

  return (
    <section className="dash">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <label>YOUR DASHBOARD</label>
          <h1>Welcome, {displayName}.</h1>
          <p>Here's your glimpse of the Vriksha learning journey.</p>
        </div>
        <button
          type="button"
          onClick={onLogout}
          style={{
            background: 'transparent',
            border: '1px solid #ccc',
            borderRadius: '999px',
            padding: '10px 18px',
            fontSize: '13px',
            cursor: 'pointer',
            fontWeight: 600,
            marginTop: '20px'
          }}
        >
          Logout
        </button>
      </div>

      <div className="progress">
        <span>LEARNING PROGRESS</span>
        <b>0%</b>
        <hr />
        <small>Start with AI Foundations to begin your journey.</small>
      </div>

      <div className="dashgrid">
        <div className="panel">
          <h2>Start here</h2>
          {defaultConcepts.slice(0, 6).map((x, i) => (
            <Link to="/learn" key={x[0]}>
              <small>{String(i + 1).padStart(2, '0')}</small>
              <b>{x[0]}</b>
              <span>→</span>
            </Link>
          ))}
        </div>
        <div className="panel roadmap">
          <label>WORKSHOP MAP</label>
          <h2>From idea to AI team.</h2>
          {['Business Brain', 'Skills', 'Connectors', 'Agents', 'Captain + 90-day plan'].map((x, i) => (
            <p key={x}>
              <i>{i + 1}</i>
              {x}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [f, setF] = useState({
    name: '',
    email: '',
    company: '',
    sessionType: 'Group Workshop / Webinar',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [err, setErr] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setStatus('');
    setErr('');
    setSubmitting(true);
    try {
      const res = await api.enquiry(f);
      setStatus(res.message || 'Thanks! Your enquiry has been received.');
      setF({ name: '', email: '', company: '', sessionType: 'Group Workshop / Webinar', message: '' });
    } catch (e) {
      setErr(e.message || 'Unable to submit enquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="contact">
      <div>
        <label>ENQUIRE</label>
        <h1>Let's find the right learning format.</h1>
        <p>Tell us what you're looking for. Exact pricing and availability can be confirmed by the Academy team.</p>
      </div>
      <form className="formbox" onSubmit={submit}>
        <Ey t="YOUR DETAILS" s="Send an enquiry" />
        <label>
          Name
          <input
            required
            value={f.name}
            onChange={e => setF({ ...f, name: e.target.value })}
            placeholder="Your name"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            required
            value={f.email}
            onChange={e => setF({ ...f, email: e.target.value })}
            placeholder="you@company.com"
          />
        </label>
        <label>
          Company
          <input
            value={f.company}
            onChange={e => setF({ ...f, company: e.target.value })}
            placeholder="Brand or company name"
          />
        </label>
        <label>
          Session
          <select
            value={f.sessionType}
            onChange={e => setF({ ...f, sessionType: e.target.value })}
          >
            <option>Group Workshop / Webinar</option>
            <option>One-to-One Founder / CEO</option>
            <option>Dedicated Company Session</option>
            <option>On-site Training</option>
          </select>
        </label>
        <label>
          Message
          <textarea
            rows="5"
            value={f.message}
            onChange={e => setF({ ...f, message: e.target.value })}
            placeholder="What would you like to explore or achieve?"
          />
        </label>
        {status && <div className="status">{status}</div>}
        {err && <div className="error">{err}</div>}
        <button className="btn full" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send enquiry →'}
        </button>
      </form>
    </section>
  );
}

function App() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('vrikshaUser') || 'null');
    } catch {
      return null;
    }
  });

  function handleLogout() {
    localStorage.removeItem('vrikshaUser');
    setUser(null);
  }

  return (
    <>
      <Nav user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/login" element={<Login onLoginSuccess={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user} onLogout={handleLogout} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;