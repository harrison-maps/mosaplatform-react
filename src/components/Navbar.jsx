import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{ width: '2.2rem', height: '2.2rem', borderRadius: '50%', background: 'var(--mosa-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 900, color: 'var(--mosa-gold)', fontSize: '0.85rem' }}>M</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: 'var(--mosa-black)', fontSize: '1.1rem', lineHeight: 1.1 }}>MOSA</span>
            <span style={{ fontSize: '0.6rem', color: 'var(--mosa-red)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Mengo Senior School</span>
          </div>
        </Link>

        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', fontWeight: 600, fontSize: '0.85rem' }}>
          <Link to="/" style={{ color: 'var(--mosa-text)', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-red)'} onMouseLeave={e => e.target.style.color = 'var(--mosa-text)'}>Home</Link>
          <Link to="/about" style={{ color: 'var(--mosa-text)', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-red)'} onMouseLeave={e => e.target.style.color = 'var(--mosa-text)'}>About</Link>
          <Link to="/directory" style={{ color: 'var(--mosa-text)', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-red)'} onMouseLeave={e => e.target.style.color = 'var(--mosa-text)'}>Alumni Directory</Link>
          <Link to="/events" style={{ color: 'var(--mosa-text)', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-red)'} onMouseLeave={e => e.target.style.color = 'var(--mosa-text)'}>Events</Link>
          <Link to="/news" style={{ color: 'var(--mosa-text)', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-red)'} onMouseLeave={e => e.target.style.color = 'var(--mosa-text)'}>News</Link>
          <Link to="/donate" className="btn btn-primary btn-sm">Give Back</Link>
          <Link to="/login" style={{ border: '2px solid var(--mosa-gold)', padding: '0.4rem 1rem', borderRadius: '8px', fontWeight: 700, color: 'var(--mosa-text)', transition: 'background 0.15s' }} onMouseEnter={e => e.target.style.background = 'var(--mosa-gold)'} onMouseLeave={e => e.target.style.background = 'transparent'}>Login / Join</Link>
        </nav>

        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer' }}><i className="fas fa-bars" /></button>
      </div>
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb', padding: '1rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontWeight: 600, fontSize: '0.9rem' }}>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/directory" onClick={() => setOpen(false)}>Alumni Directory</Link>
            <Link to="/events" onClick={() => setOpen(false)}>Events</Link>
            <Link to="/news" onClick={() => setOpen(false)}>News</Link>
            <Link to="/donate" onClick={() => setOpen(false)}>Give Back</Link>
            <Link to="/login" onClick={() => setOpen(false)}>Login / Join</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
