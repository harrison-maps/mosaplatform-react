import React from 'react';

export function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section style={{ background: 'var(--mosa-black)', color: '#fff', padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(139,0,0,0.3) 0%, transparent 50%)', pointerEvents: 'none' }} />
      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>{eyebrow}</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', marginBottom: '0.75rem' }}>{title}</h1>
        <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', color: 'rgba(255,255,255,0.7)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>{subtitle}</p>
      </div>
    </section>
  );
}

export function StatsBar({ stats }) {
  return (
    <div style={{ background: 'var(--mosa-gold)', padding: '1.75rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: 'var(--mosa-black)' }}>{s.value}</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(0,0,0,0.6)', marginTop: '0.15rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AlumniCard({ alumni }) {
  return (
    <Link to="/profile" className="card" style={{ display: 'block', textDecoration: 'none', overflow: 'hidden' }}>
      <div style={{ height: '5rem', background: alumni.sector === 'Engineering' ? 'var(--mosa-red)' : 'var(--mosa-black)', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: '-1.5rem', left: '1rem', width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: '#12102b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 700, color: 'var(--mosa-gold)', fontSize: '1.1rem', border: '3px solid #fff' }}>{alumni.initials}</div>
      </div>
      <div style={{ padding: '2.5rem 1.25rem 1.25rem' }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1rem', marginBottom: '0.15rem' }}>{alumni.name}</div>
        <div style={{ color: 'var(--mosa-gold)', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>Class of {alumni.year}</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--mosa-muted)', marginBottom: '0.1rem' }}><i className="fas fa-briefcase" style={{ width: '1rem', color: '#9ca3af', marginRight: '0.3rem' }} />{alumni.role}</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--mosa-muted)', marginBottom: '0.75rem' }}><i className="fas fa-map-marker-alt" style={{ width: '1rem', color: '#9ca3af', marginRight: '0.3rem' }} />{alumni.location}</div>
        <span className={`badge ${['Medical','Technology','Legal'].includes(alumni.sector) ? 'badge-red' : 'badge-gray'}`}>{alumni.sector}</span>
      </div>
    </Link>
  );
}

export function DateBadge({ month, day }) {
  return (
    <div style={{ background: 'var(--mosa-black)', color: '#fff', borderRadius: '10px', padding: '0.75rem 1rem', textAlign: 'center', minWidth: '4.5rem', flexShrink: 0 }}>
      <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--mosa-gold)', marginBottom: '0.1rem' }}>{month}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 900, lineHeight: 1 }}>{day}</div>
    </div>
  );
}

export function Avatar({ initials, size, color, style: extStyle }) {
  const dim = size === 'xl' ? '4rem' : '3rem';
  return (
    <div style={{ width: dim, height: dim, borderRadius: '50%', background: color || 'var(--mosa-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 700, color: 'var(--mosa-gold)', fontSize: size === 'xl' ? '1.3rem' : '1rem', ...extStyle }}>
      {initials}
    </div>
  );
}

export function FilterPills({ options, active, onChange }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
      {options.map(o => (
        <button key={o} onClick={() => onChange(o)}
          style={{ padding: '0.35rem 0.9rem', borderRadius: '20px', border: 'none', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s', background: o === active ? 'var(--mosa-black)' : '#f3f4f6', color: o === active ? '#fff' : 'var(--mosa-muted)' }}>
          {o}
        </button>
      ))}
    </div>
  );
}
