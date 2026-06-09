import React, { useState } from 'react';
import { EVENTS } from '../data/mockData';
import { PageHero, FilterPills } from '../components/UI';

const CATS = ['All', 'Gala', 'Reunion', 'Networking', 'Sports'];

export default function Events() {
  const [cat, setCat] = useState('All');
  const [email, setEmail] = useState('');

  const featured  = EVENTS.find(e => e.featured);
  const rest       = EVENTS.filter(e => !e.featured && (cat === 'All' || e.category === cat));

  return (
    <>
      <PageHero eyebrow="Reconnect & Celebrate" title="Upcoming Events" subtitle="From grand galas to campus reunions — there's always a reason to come together." />

      {/* ── FEATURED EVENT ── */}
      {featured && (
        <section className="section" style={{ background: '#fff' }}>
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Featured Event</div>
            <div className="card" style={{ display: 'flex', flexWrap: 'wrap', overflow: 'visible' }}>
              {/* Left banner */}
              <div style={{ background: 'var(--mosa-black)', minWidth: '10rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem', textAlign: 'center', borderRadius: '12px 0 0 12px', flexShrink: 0 }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: '0.85rem', color: 'var(--mosa-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Nov</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: '4.5rem', color: '#fff', lineHeight: 1 }}>15</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '0.25rem' }}>2026</div>
              </div>
              {/* Content */}
              <div style={{ flex: 1, padding: '2.5rem', minWidth: '260px' }}>
                <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>⭐ Featured</span>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontWeight: 900, marginBottom: '0.75rem' }}>{featured.title}</h2>
                <p style={{ color: 'var(--mosa-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{featured.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--mosa-muted)' }}>
                  <div><i className="fas fa-clock" style={{ width: '1.25rem', color: 'var(--mosa-red)' }} /> {featured.time}</div>
                  <div><i className="fas fa-map-marker-alt" style={{ width: '1.25rem', color: 'var(--mosa-red)' }} /> {featured.location}</div>
                  <div><i className="fas fa-ticket-alt" style={{ width: '1.25rem', color: 'var(--mosa-red)' }} /> {featured.price}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <input className="form-input" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address" style={{ flex: '1 1 220px', minWidth: '180px' }} />
                  <button className="btn btn-primary" onClick={() => { if(email) alert('RSVP confirmed! Check your email.'); }}>
                    RSVP Now <i className="fas fa-arrow-right" style={{ marginLeft: '0.4rem' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── UPCOMING SCHEDULE ── */}
      <section className="section bg-gray">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <h2 className="section-title">Upcoming Schedule</h2>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <FilterPills options={CATS} active={cat} onChange={setCat} />
              <button className="btn btn-primary btn-sm">
                <i className="fas fa-calendar-plus" style={{ marginRight: '0.3rem' }} /> Host an Event
              </button>
            </div>
          </div>

          <div className="grid-3">
            {rest.map(ev => (
              <div key={ev.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Colorful top stripe */}
                <div style={{ height: '0.4rem', background: ev.category === 'Reunion' ? 'var(--mosa-red)' : ev.category === 'Networking' ? '#3b82f6' : 'var(--mosa-gold)' }} />
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span className={`badge ${ev.category === 'Reunion' ? 'badge-red' : ev.category === 'Sports' ? 'badge-green' : 'badge-blue'}`}>{ev.category}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--mosa-muted)', fontWeight: 600 }}>
                      <i className="far fa-calendar-alt" style={{ marginRight: '0.25rem' }} />{ev.date}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{ev.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--mosa-muted)', lineHeight: 1.6, flex: 1 }}>{ev.description}</p>
                  <div style={{ borderTop: '1px solid #f3f4f6', marginTop: '1.25rem', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--mosa-muted)' }}>
                      <i className="fas fa-map-marker-alt" style={{ color: 'var(--mosa-gold)', marginRight: '0.3rem' }} />{ev.location.split(',')[0]}
                    </span>
                    <button className="btn btn-primary btn-sm">Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {rest.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--mosa-muted)' }}>
              <i className="fas fa-calendar-times" style={{ fontSize: '2rem', opacity: 0.3, display: 'block', marginBottom: '0.75rem' }} />
              No events in this category yet.
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-outline-dark">View Past Events</button>
          </div>
        </div>
      </section>
    </>
  );
}