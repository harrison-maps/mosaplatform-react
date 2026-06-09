import React from 'react';
import { Link } from 'react-router-dom';
import { ALUMNI, EVENTS } from '../data/mockData';
import { StatsBar, AlumniCard, DateBadge } from '../components/UI';

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: 'var(--mosa-black)', color: '#fff', padding: '6rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(139,0,0,0.35) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: '-5rem', top: '-5rem', width: '28rem', height: '28rem', borderRadius: '50%', background: 'rgba(212,175,55,0.06)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="fade-in-up">
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>
              <i className="fas fa-globe-africa" style={{ marginRight: '0.5rem' }} />Obunnamengo Bwa Lubeerera
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.4rem, 6vw, 4.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Mengo Old Students<br /><span style={{ color: 'var(--mosa-gold)' }}>Association</span>
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.7)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Connecting Mengonians around the world — preserving our legacy, celebrating achievements, and building the future of Mengo Senior School.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/register" className="btn btn-gold btn-lg">Join MOSA</Link>
              <Link to="/directory" className="btn btn-outline btn-lg">Explore Directory</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsBar stats={[
        { value: '12,000+', label: 'Registered Alumni' },
        { value: '45',      label: 'Global Chapters' },
        { value: '1895',    label: 'Year Founded' },
        { value: 'UGX 2B+', label: 'Given Back' },
      ]} />

      {/* ── ABOUT STRIP ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>Our Story</div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our Legacy & Mission</h2>
          <div className="divider divider-red divider-center" />
          <p className="subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            MOSA is a prestigious global network of alumni dedicated to preserving the rich heritage of Mengo Senior School. We foster lifelong connections among former students, promote professional excellence, and actively give back to ensure our alma mater remains a beacon of premier education in Uganda and beyond.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/donate" className="btn btn-outline-dark">Give Back</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED ALUMNI ── */}
      <section className="section bg-gray">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.4rem' }}>Excellence Everywhere</div>
              <h2 className="section-title">Featured Mengonians</h2>
            </div>
            <Link to="/directory" className="btn btn-outline-dark btn-sm">View All <i className="fas fa-arrow-right" style={{ marginLeft: '0.4rem' }} /></Link>
          </div>
          <div className="grid-4">
            {ALUMNI.slice(0, 4).map(a => <AlumniCard key={a.id} alumni={a} />)}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.4rem' }}>Reconnect & Celebrate</div>
            <h2 className="section-title">Upcoming Events</h2>
            <div className="divider divider-red divider-center" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '860px', margin: '0 auto' }}>
            {EVENTS.slice(0, 3).map(ev => (
              <div key={ev.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', flexWrap: 'wrap' }}>
                <DateBadge month={ev.month} day={ev.day} />
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.3rem' }}>{ev.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--mosa-muted)', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <span><i className="fas fa-clock" style={{ marginRight: '0.3rem', color: 'var(--mosa-red)' }} />{ev.time}</span>
                    <span><i className="fas fa-map-marker-alt" style={{ marginRight: '0.3rem', color: 'var(--mosa-red)' }} />{ev.location}</span>
                  </div>
                </div>
                <Link to="/events" className="btn btn-primary btn-sm" style={{ flexShrink: 0 }}>RSVP</Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/events" className="btn btn-outline-dark">View All Events</Link>
          </div>
        </div>
      </section>

      {/* ── SUB-NETWORKS ── */}
      <section className="section bg-gray">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.4rem' }}>MOSA Sub-Networks</div>
            <h2 className="section-title">Built for Mengonians</h2>
            <div className="divider divider-red divider-center" />
          </div>
          <div className="grid-3">
            {[
              { icon: 'fas fa-briefcase', title: 'Jobs Board', desc: 'Exclusive opportunities posted by and for Mengonian professionals.', to: '/jobs', color: 'var(--mosa-red)' },
              { icon: 'fas fa-handshake', title: 'Mentorship', desc: 'Connect with experienced Mengonians for career and personal guidance.', to: '/mentorship', color: 'var(--mosa-black)' },
              { icon: 'fas fa-store', title: 'Business Directory', desc: 'Discover and support businesses owned and run by MOSA members.', to: '/business', color: '#1e3a5f' },
            ].map(n => (
              <Link key={n.to} to={n.to} className="card" style={{ display: 'block', padding: '2rem', textDecoration: 'none' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '10px', background: n.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <i className={n.icon} style={{ color: 'var(--mosa-gold)', fontSize: '1.2rem' }} />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem' }}>{n.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--mosa-muted)', lineHeight: 1.6 }}>{n.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--mosa-red)', color: '#fff', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>Join the MOSA Network Today</h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Unlock access to a global directory, exclusive events, mentorship opportunities, and the power of the Mengonian brotherhood and sisterhood.
          </p>
          <Link to="/register" className="btn btn-gold btn-lg">Register / Update Profile</Link>
        </div>
      </section>
    </>
  );
}