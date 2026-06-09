// ============================================================
//  Jobs, Mentorship, Business, News, Donate pages
// ============================================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JOBS, MENTORS, BUSINESSES, NEWS } from '../data/mockData';
import { PageHero, Avatar, FilterPills } from '../components/UI';

// ─────────────────────────────────────────────
//  JOBS
// ─────────────────────────────────────────────
export function Jobs() {
  const [search, setSearch] = useState('');
  const filtered = JOBS.filter(j => j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <PageHero eyebrow="Career Opportunities" title="MOSA Jobs Board" subtitle="Exclusive opportunities posted by and for Mengonian professionals worldwide." />

      <div style={{ background: '#fff', padding: '2rem 0', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 280px', position: 'relative' }}>
            <i className="fas fa-search" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input className="form-input" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search jobs…" style={{ paddingLeft: '2.75rem', width: '100%' }} />
          </div>
          <select className="form-select" style={{ flex: '0 1 180px' }}>
            <option>All Sectors</option>
            {['Finance','Medical','Engineering','Legal','Marketing','Architecture'].map(s => <option key={s}>{s}</option>)}
          </select>
          <select className="form-select" style={{ flex: '0 1 160px' }}>
            <option>All Locations</option>
            {['Kampala, UG','Nairobi, KE','London, UK','San Francisco, USA'].map(l => <option key={l}>{l}</option>)}
          </select>
          <button className="btn btn-primary" style={{ flexShrink: 0 }}>Post a Job</button>
        </div>
      </div>

      <section className="section bg-gray">
        <div className="container">
          <p style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--mosa-muted)' }}><strong style={{ color: 'var(--mosa-black)' }}>{filtered.length}</strong> opportunities found</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filtered.map(j => (
              <div key={j.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem 2rem', flexWrap: 'wrap' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '10px', background: 'var(--mosa-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'Playfair Display, serif', fontWeight: 700, color: 'var(--mosa-gold)', fontSize: '1rem' }}>
                  {j.company.slice(0,2).toUpperCase()}
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.2rem' }}>{j.title}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--mosa-muted)', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <span><i className="fas fa-building" style={{ marginRight: '0.3rem' }} />{j.company}</span>
                    <span><i className="fas fa-map-marker-alt" style={{ marginRight: '0.3rem' }} />{j.location}</span>
                    <span><i className="fas fa-user" style={{ marginRight: '0.3rem' }} />{j.postedBy}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className="badge badge-blue">{j.type}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--mosa-muted)' }}>Closes {j.deadline}</span>
                  <button className="btn btn-primary btn-sm">Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────
//  MENTORSHIP
// ─────────────────────────────────────────────
export function Mentorship() {
  return (
    <>
      <PageHero eyebrow="Grow With a Guide" title="MOSA Mentorship" subtitle="Connect with experienced Mengonians for career and personal guidance. One session can change a life." />

      {/* How it works */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">How It Works</h2>
            <div className="divider divider-red divider-center" />
          </div>
          <div className="grid-3">
            {[
              { num: '01', title: 'Browse Mentors', desc: 'Explore profiles of experienced Mengonians across various fields and industries.' },
              { num: '02', title: 'Request a Session', desc: 'Send a mentorship request with a brief note about what guidance you\'re seeking.' },
              { num: '03', title: 'Grow Together', desc: 'Connect via video or in-person and build a lasting professional relationship.' },
            ].map(s => (
              <div key={s.num} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 900, color: 'var(--mosa-red)', opacity: 0.2, lineHeight: 1 }}>{s.num}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, margin: '0.5rem 0' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--mosa-muted)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>Available Mentors</h2>
          <div className="grid-4">
            {MENTORS.map(m => (
              <div key={m.id} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <Avatar initials={m.initials} color={m.color} size="xl" style={{ margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700 }}>{m.name}</h3>
                <p style={{ color: 'var(--mosa-muted)', fontSize: '0.85rem', margin: '0.3rem 0 1rem' }}>{m.expertise}</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--mosa-muted)', marginBottom: '1.25rem' }}>
                  <span>⭐ {m.rating}</span>
                  <span><i className="fas fa-calendar-check" style={{ marginRight: '0.3rem' }} />{m.sessions} sessions</span>
                </div>
                <button className="btn btn-primary" style={{ width: '100%' }}>Request Session</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a mentor */}
      <section className="section" style={{ background: 'var(--mosa-black)', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>Become a Mentor</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Share your expertise and give back to the Mengonian community. Sign up to become a mentor today.
          </p>
          <button className="btn btn-gold btn-lg">Apply to Mentor</button>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────
//  BUSINESS DIRECTORY
// ─────────────────────────────────────────────
export function Business() {
  return (
    <>
      <PageHero eyebrow="Support Fellow Mengonians" title="Business Directory" subtitle="Discover and support businesses owned and run by MOSA members." />

      <section className="section bg-gray">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ position: 'relative', flex: '1 1 280px' }}>
              <i className="fas fa-search" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
              <input className="form-input" placeholder="Search businesses…" style={{ paddingLeft: '2.75rem', width: '100%' }} />
            </div>
            <button className="btn btn-primary">List Your Business</button>
          </div>
          <div className="grid-3">
            {BUSINESSES.map(b => (
              <div key={b.id} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '12px', background: 'var(--mosa-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, color: 'var(--mosa-gold)', fontSize: '1.1rem', flexShrink: 0 }}>
                    {b.initials}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700 }}>{b.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--mosa-muted)' }}>By {b.owner}</div>
                  </div>
                </div>
                <span className="badge badge-gray" style={{ marginBottom: '1rem' }}>{b.sector}</span>
                <div style={{ fontSize: '0.85rem', color: 'var(--mosa-muted)' }}>
                  <div><i className="fas fa-map-marker-alt" style={{ marginRight: '0.4rem', color: 'var(--mosa-gold)' }} />{b.location}</div>
                </div>
                <button className="btn btn-outline-dark btn-sm" style={{ marginTop: '1.25rem', width: '100%' }}>View Profile</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────
//  NEWS
// ─────────────────────────────────────────────
export function News() {
  return (
    <>
      <PageHero eyebrow="Latest Updates" title="MOSA News" subtitle="Stay informed on the latest MOSA activities, alumni achievements, and school developments." />

      <section className="section bg-gray">
        <div className="container">
          {/* Featured news */}
          <div className="card" style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <div style={{ background: 'var(--mosa-black)', flex: '0 0 200px', minWidth: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', borderRadius: '12px 0 0 12px' }}>
              <i className="fas fa-newspaper" style={{ fontSize: '3rem', color: 'var(--mosa-gold)' }} />
            </div>
            <div style={{ flex: 1, padding: '2rem', minWidth: '240px' }}>
              <span className="badge badge-red" style={{ marginBottom: '0.75rem' }}>{NEWS[0].category}</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>{NEWS[0].title}</h2>
              <p style={{ color: 'var(--mosa-muted)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1rem' }}>{NEWS[0].excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--mosa-muted)' }}>{NEWS[0].date}</span>
                <button className="btn btn-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>

          {/* News grid */}
          <div className="grid-3">
            {NEWS.slice(1).map(n => (
              <div key={n.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '0.35rem', background: n.category === 'Achievement' ? 'var(--mosa-gold)' : n.category === 'Education' ? '#10b981' : 'var(--mosa-red)' }} />
                <div style={{ padding: '1.5rem', flex: 1 }}>
                  <span className="badge badge-gray" style={{ marginBottom: '0.75rem' }}>{n.category}</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem', lineHeight: 1.4 }}>{n.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--mosa-muted)', lineHeight: 1.6 }}>{n.excerpt}</p>
                  <div style={{ borderTop: '1px solid #f3f4f6', marginTop: '1.25rem', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--mosa-muted)' }}>{n.date}</span>
                    <button className="btn btn-primary btn-sm">Read</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────
//  DONATE
// ─────────────────────────────────────────────
export function Donate() {
  const [amount, setAmount] = useState('');
  const [custom, setCustom] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tiers = ['50,000', '100,000', '250,000', '500,000'];

  return (
    <>
      <PageHero eyebrow="Give Back" title="Support Mengo Senior School" subtitle="Your generosity funds scholarships, infrastructure, and the dreams of the next generation of Mengonians." />

      {/* Impact stats */}
      <div style={{ background: 'var(--mosa-red)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', textAlign: 'center' }}>
            {[['UGX 2B+','Raised Total'],['500+','Scholarships Given'],['3','Buildings Funded'],['12,000+','Lives Impacted']].map(([v,l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 900, color: '#fff' }}>{v}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section bg-gray">
        <div className="container" style={{ maxWidth: '800px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <div style={{ width: '5rem', height: '5rem', background: '#d1fae5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <i className="fas fa-check" style={{ color: '#10b981', fontSize: '2rem' }} />
              </div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>Thank You, Mengonian!</h2>
              <p style={{ color: 'var(--mosa-muted)', lineHeight: 1.7 }}>Your donation of UGX {amount} has been received. A receipt will be sent to your email.</p>
              <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => setSubmitted(false)}>Donate Again</button>
            </div>
          ) : (
            <div className="card" style={{ padding: '3rem' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Make a Donation</h2>
              <p style={{ color: 'var(--mosa-muted)', marginBottom: '2rem' }}>All donations go directly to the MOSA School Development Fund.</p>

              <div className="form-group">
                <div className="form-label">Select Amount (UGX)</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  {tiers.map(t => (
                    <button key={t} onClick={() => { setAmount(t); setCustom(false); }}
                      style={{ padding: '0.75rem', border: `2px solid ${amount === t && !custom ? 'var(--mosa-red)' : '#d1d5db'}`, borderRadius: '8px', background: amount === t && !custom ? '#fef2f2' : '#fff', color: amount === t && !custom ? 'var(--mosa-red)' : 'var(--mosa-text)', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', fontSize: '0.875rem' }}>
                      {t}
                    </button>
                  ))}
                </div>
                <input className="form-input" placeholder="Or enter custom amount…" value={custom ? amount : ''} style={{ width: '100%' }}
                  onChange={e => { setCustom(true); setAmount(e.target.value); }} />
              </div>

              <div className="form-group">
                <label className="form-label">Donate Towards</label>
                <select className="form-select" style={{ width: '100%' }}>
                  <option>General Development Fund</option>
                  <option>Scholarship Fund</option>
                  <option>ICT Innovation Hub</option>
                  <option>Sports Department</option>
                </select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input className="form-input" placeholder="Your name" style={{ width: '100%' }} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" placeholder="your@email.com" type="email" style={{ width: '100%' }} />
                </div>
              </div>
              <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}
                onClick={() => { if (amount) setSubmitted(true); }}>
                <i className="fas fa-heart" style={{ marginRight: '0.5rem' }} />Donate UGX {amount || '…'}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}