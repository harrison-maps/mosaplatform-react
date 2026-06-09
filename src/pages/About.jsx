import React from 'react';
import { Link } from 'react-router-dom';
import { COMMITTEE } from '../data/mockData';
import { PageHero, Avatar } from '../components/UI';

export default function About() {
  return (
    <>
      <PageHero eyebrow="Our Heritage" title="About MOSA" subtitle="Preserving the legacy of Mengo Senior School and uniting generations of excellence since 1895." />

      {/* ── MISSION & VISION ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.4rem' }}>Why We Exist</div>
              <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>Our Mission</h2>
              <div className="divider divider-red" />
              <p className="subtitle" style={{ margin: '1.25rem 0 2rem' }}>
                The Mengo Old Students Association (MOSA) exists to foster a lifelong and mutually beneficial relationship between Mengo Senior School and its alumni. We are dedicated to promoting professional excellence, creating networking opportunities, and mobilising resources to support the continuous growth of our beloved alma mater.
              </p>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Our Vision</h3>
              <div className="divider divider-gold" />
              <p className="subtitle" style={{ marginTop: '1rem' }}>
                To be the most vibrant, impactful, and globally connected alumni association in Uganda, empowering our members and ensuring Mengo Senior School remains a premier institution of learning.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--mosa-gold)', borderRadius: '16px', transform: 'translate(12px, 12px)', opacity: 0.2 }} />
              <div style={{ position: 'relative', background: 'var(--mosa-black)', borderRadius: '16px', padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '280px', border: '3px solid #fff', boxShadow: 'var(--shadow-lg)' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '4rem', fontWeight: 900, color: 'var(--mosa-gold)', lineHeight: 1 }}>1895</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '0.5rem' }}>Year Founded</div>
                <div style={{ margin: '1.5rem 0', width: '3rem', height: '2px', background: 'var(--mosa-red)' }} />
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>Mengo Senior School<br />Kampala, Uganda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="section bg-gray">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.4rem' }}>What We Stand For</div>
            <h2 className="section-title">Our Core Values</h2>
            <div className="divider divider-red divider-center" />
          </div>
          <div className="grid-3">
            {[
              { icon: 'fas fa-handshake', title: 'Brotherhood & Sisterhood', desc: 'The Mengonian bond transcends borders, professions, and generations. Once a Mengonian, always a Mengonian.' },
              { icon: 'fas fa-star', title: 'Excellence', desc: 'We uphold the tradition of academic and professional excellence that Mengo Senior School has championed for over 130 years.' },
              { icon: 'fas fa-heart', title: 'Give Back', desc: 'We believe in actively reinvesting in our alma mater and in the next generation of Mengonians through scholarships and development.' },
            ].map(v => (
              <div key={v.title} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: 'var(--mosa-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <i className={v.icon} style={{ color: 'var(--mosa-gold)', fontSize: '1.2rem' }} />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--mosa-muted)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE COMMITTEE ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.4rem' }}>Leadership</div>
            <h2 className="section-title">The Executive Committee</h2>
            <div className="divider divider-red divider-center" />
            <p className="subtitle" style={{ maxWidth: '560px', margin: '0 auto' }}>Meet the dedicated individuals steering MOSA towards greater heights.</p>
          </div>
          <div className="grid-4">
            {COMMITTEE.map(m => (
              <div key={m.name} className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
                <Avatar initials={m.initials} size="xl" style={{ margin: '0 auto 1.25rem', border: '3px solid var(--mosa-gray)' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700 }}>{m.name}</h3>
                <p style={{ color: 'var(--mosa-red)', fontWeight: 600, fontSize: '0.875rem', margin: '0.25rem 0' }}>{m.role}</p>
                <p style={{ color: 'var(--mosa-muted)', fontSize: '0.8rem' }}>Class of {m.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL CHAPTERS ── */}
      <section id="chapters" className="section" style={{ background: 'var(--mosa-black)', color: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.4rem' }}>Around the World</div>
              <h2 className="section-title" style={{ color: '#fff' }}>Global Chapters</h2>
              <div className="divider divider-gold" />
              <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px', lineHeight: 1.7, marginTop: '1rem' }}>
                No matter where life takes you, there is always a Mengonian nearby. Connect with our regional chapters around the world.
              </p>
            </div>
            <Link to="/register" className="btn btn-gold">Join a Chapter</Link>
          </div>
          <div className="grid-3">
            {[
              { icon: 'fas fa-map-marked-alt', color: 'var(--mosa-red)', title: 'East Africa Chapter', desc: 'Based in Kampala, our largest and most active hub driving local initiatives and school development.' },
              { icon: 'fas fa-globe-europe',   color: 'var(--mosa-gold)', title: 'UK & Europe Chapter', desc: 'A strong network of professionals across Europe fostering business connections and mentorship.' },
              { icon: 'fas fa-globe-americas', color: '#60a5fa',         title: 'North America Chapter', desc: 'Spanning the US and Canada, dedicated to annual reunions and global fundraising efforts.' },
            ].map(c => (
              <div key={c.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '2rem', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                <i className={c.icon} style={{ color: c.color, fontSize: '1.75rem', marginBottom: '1rem', display: 'block' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{c.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}