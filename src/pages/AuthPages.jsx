import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ─────────────────────────────────────────────
//  AUTH WRAPPER
// ─────────────────────────────────────────────
function AuthCard({ title, subtitle, children }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--mosa-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        {/* Logo bar */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'var(--mosa-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 900, color: 'var(--mosa-gold)', fontSize: '1.1rem' }}>M</div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 900, color: 'var(--mosa-black)' }}>MOSA</div>
          </Link>
        </div>
        <div className="card" style={{ padding: '2.5rem' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 900, marginBottom: '0.3rem' }}>{title}</h1>
          <p style={{ color: 'var(--mosa-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  LOGIN
// ─────────────────────────────────────────────
export function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  return (
    <AuthCard title="Welcome Back, Mengonian" subtitle="Sign in to access your MOSA account.">
      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input className="form-input" type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ width: '100%' }} />
      </div>
      <div className="form-group">
        <label className="form-label">Password</label>
        <input className="form-input" type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({...form, password: e.target.value})} style={{ width: '100%' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
        <a href="#" style={{ fontSize: '0.85rem', color: 'var(--mosa-red)' }}>Forgot password?</a>
      </div>
      <button className="btn btn-primary btn-lg" style={{ width: '100%' }}
        onClick={() => alert('Login functionality coming soon!')}>Sign In</button>
      <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--mosa-muted)' }}>
        Not a member? <Link to="/register" style={{ color: 'var(--mosa-red)', fontWeight: 600 }}>Join MOSA</Link>
      </p>
    </AuthCard>
  );
}

// ─────────────────────────────────────────────
//  REGISTER
// ─────────────────────────────────────────────
export function Register() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ fname: '', lname: '', email: '', year: '', sector: '', location: '', password: '' });
  const up = patch => setForm(f => ({...f, ...patch}));

  return (
    <div style={{ minHeight: '100vh', background: 'var(--mosa-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '520px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'var(--mosa-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 900, color: 'var(--mosa-gold)', fontSize: '1.1rem' }}>M</div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 900, color: 'var(--mosa-black)' }}>MOSA</div>
          </Link>
        </div>
        {/* Step indicator */}
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {[1,2,3].map(s => (
            <div key={s} style={{ flex: 1, height: '4px', borderRadius: '2px', background: s <= step ? 'var(--mosa-red)' : '#d1d5db', transition: 'background 0.3s' }} />
          ))}
        </div>
        <div className="card" style={{ padding: '2.5rem' }}>
          {step === 1 && (
            <>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.3rem' }}>Create Your Account</h1>
              <p style={{ color: 'var(--mosa-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Step 1 of 3 — Basic Information</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input className="form-input" placeholder="John" value={form.fname} onChange={e => up({fname: e.target.value})} style={{ width: '100%' }} />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input className="form-input" placeholder="Doe" value={form.lname} onChange={e => up({lname: e.target.value})} style={{ width: '100%' }} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input className="form-input" type="email" placeholder="you@email.com" value={form.email} onChange={e => up({email: e.target.value})} style={{ width: '100%' }} />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input className="form-input" type="password" placeholder="Create a strong password" value={form.password} onChange={e => up({password: e.target.value})} style={{ width: '100%' }} />
              </div>
              <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={() => setStep(2)}>Next Step →</button>
            </>
          )}
          {step === 2 && (
            <>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.3rem' }}>Your Mengo Story</h1>
              <p style={{ color: 'var(--mosa-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Step 2 of 3 — School & Career Details</p>
              <div className="form-group">
                <label className="form-label">Graduation Year</label>
                <select className="form-select" value={form.year} onChange={e => up({year: e.target.value})} style={{ width: '100%' }}>
                  <option value="">Select year…</option>
                  {Array.from({length: 40}, (_, i) => 2024 - i).map(y => <option key={y}>{y}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Professional Sector</label>
                <select className="form-select" value={form.sector} onChange={e => up({sector: e.target.value})} style={{ width: '100%' }}>
                  <option value="">Select sector…</option>
                  {['Medicine','Engineering','Technology','Finance','Legal','Education','Business','Other'].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Current Location</label>
                <input className="form-input" placeholder="e.g. Kampala, Uganda" value={form.location} onChange={e => up({location: e.target.value})} style={{ width: '100%' }} />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button className="btn btn-outline-dark" onClick={() => setStep(1)}>← Back</button>
                <button className="btn btn-primary btn-lg" style={{ flex: 1 }} onClick={() => setStep(3)}>Next Step →</button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.3rem' }}>You're Almost In!</h1>
              <p style={{ color: 'var(--mosa-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Step 3 of 3 — Confirm & Submit</p>
              <div style={{ background: 'var(--mosa-gray)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, marginBottom: '1rem' }}>Your Details</h3>
                {[['Name', `${form.fname} ${form.lname}`], ['Email', form.email], ['Grad Year', form.year], ['Sector', form.sector], ['Location', form.location]].map(([label, val]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', padding: '0.4rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <span style={{ color: 'var(--mosa-muted)' }}>{label}</span>
                    <span style={{ fontWeight: 600 }}>{val || '—'}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button className="btn btn-outline-dark" onClick={() => setStep(2)}>← Back</button>
                <button className="btn btn-gold btn-lg" style={{ flex: 1 }} onClick={() => alert('Welcome to MOSA! Your profile has been created.')}>
                  Join MOSA ✓
                </button>
              </div>
            </>
          )}
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--mosa-muted)' }}>
            Already a member? <Link to="/login" style={{ color: 'var(--mosa-red)', fontWeight: 600 }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  PROFILE
// ─────────────────────────────────────────────
export function Profile() {
  const alumni = { name: 'Dr. Sarah Namazzi', initials: 'SN', role: 'Chief of Surgery', company: "King's College Hospital", year: 2005, location: 'London, UK', sector: 'Medical', bio: 'Passionate physician and proud Mengonian. Committed to advancing healthcare in East Africa. Mentor to the next generation of Mengonian doctors.', connections: 142 };

  return (
    <>
      {/* Cover */}
      <div style={{ height: '14rem', background: 'var(--mosa-black)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(139,0,0,0.4), transparent)' }} />
        <div className="container" style={{ position: 'relative', height: '100%' }} />
      </div>

      {/* Avatar + info */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container" style={{ paddingTop: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem', flexWrap: 'wrap', transform: 'translateY(-3rem)' }}>
            <div style={{ width: '7rem', height: '7rem', borderRadius: '50%', background: '#12102b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: 'var(--mosa-gold)', border: '4px solid #fff', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', flexShrink: 0 }}>
              {alumni.initials}
            </div>
            <div style={{ flex: 1, minWidth: '200px', paddingBottom: '1.5rem' }}>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 900 }}>{alumni.name}</h1>
              <p style={{ color: 'var(--mosa-muted)', marginBottom: '0.5rem' }}>{alumni.role} · {alumni.company}</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.875rem', color: 'var(--mosa-muted)' }}>
                <span><i className="fas fa-map-marker-alt" style={{ color: 'var(--mosa-red)', marginRight: '0.3rem' }} />{alumni.location}</span>
                <span><i className="fas fa-graduation-cap" style={{ color: 'var(--mosa-red)', marginRight: '0.3rem' }} />Class of {alumni.year}</span>
                <span><i className="fas fa-users" style={{ color: 'var(--mosa-red)', marginRight: '0.3rem' }} />{alumni.connections} connections</span>
              </div>
            </div>
            <div style={{ paddingBottom: '1.5rem', display: 'flex', gap: '0.75rem' }}>
              <button className="btn btn-primary">Connect</button>
              <button className="btn btn-outline-dark">Message</button>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="section bg-gray">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'start' }}>
          {/* Sidebar */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, marginBottom: '1rem' }}>About</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--mosa-muted)', lineHeight: 1.7 }}>{alumni.bio}</p>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[['fas fa-briefcase', alumni.role], ['fas fa-building', alumni.company], ['fas fa-map-marker-alt', alumni.location], ['fas fa-tag', alumni.sector]].map(([icon, val]) => (
                <div key={icon} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', alignItems: 'center' }}>
                  <i className={icon} style={{ color: 'var(--mosa-red)', width: '1rem' }} />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, marginBottom: '1rem' }}>Activity</h3>
              {[['Joined the UK Chapter', '2 days ago'], ['Attended MOSA Networking Mixer', '1 week ago'], ['Connected with 5 new Mengonians', '2 weeks ago']].map(([act, time]) => (
                <div key={act} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #f3f4f6', fontSize: '0.875rem' }}>
                  <span>{act}</span>
                  <span style={{ color: 'var(--mosa-muted)' }}>{time}</span>
                </div>
              ))}
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, marginBottom: '1rem' }}>Connections</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1rem' }}>
                {[{i:'DK',c:'#8B0000'},{i:'GA',c:'#1e3a5f'},{i:'ML',c:'#12102b'},{i:'AB',c:'#2d4a22'}].map(({i,c}) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ width:'3.5rem',height:'3.5rem',borderRadius:'50%',background:c,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Playfair Display,serif',fontWeight:700,color:'var(--mosa-gold)',margin:'0 auto 0.4rem',fontSize:'1rem' }}>{i}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--mosa-muted)' }}>Mengonian</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}