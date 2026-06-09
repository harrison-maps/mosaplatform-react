import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--mosa-black)', color: '#9ca3af', padding: '3rem 0', borderTop: '4px solid var(--mosa-gold)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 900, color: 'var(--mosa-black)', fontSize: '1rem' }}>M</div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '1.2rem', color: '#fff' }}>MOSA</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>Obunnamengo Bwa Lubeerera. Fostering a lasting bond among former students of Mengo Senior School.</p>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <Link to="/about" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-gold)'} onMouseLeave={e => e.target.style.color = '#9ca3af'}>About Us</Link>
              <Link to="/directory" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-gold)'} onMouseLeave={e => e.target.style.color = '#9ca3af'}>Alumni Directory</Link>
              <Link to="/events" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-gold)'} onMouseLeave={e => e.target.style.color = '#9ca3af'}>Events & Reunions</Link>
              <Link to="/news" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-gold)'} onMouseLeave={e => e.target.style.color = '#9ca3af'}>News & Updates</Link>
              <Link to="/donate" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-gold)'} onMouseLeave={e => e.target.style.color = '#9ca3af'}>Support / Donate</Link>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Network</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <Link to="/business" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-gold)'} onMouseLeave={e => e.target.style.color = '#9ca3af'}>Business Directory</Link>
              <Link to="/jobs" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-gold)'} onMouseLeave={e => e.target.style.color = '#9ca3af'}>Job Board</Link>
              <Link to="/mentorship" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-gold)'} onMouseLeave={e => e.target.style.color = '#9ca3af'}>Mentorship Program</Link>
              <Link to="/about#chapters" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = 'var(--mosa-gold)'} onMouseLeave={e => e.target.style.color = '#9ca3af'}>Global Chapters</Link>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <div><i className="fas fa-map-marker-alt" style={{ color: 'var(--mosa-gold)', marginRight: '0.4rem' }} />Mengo Senior School, Kampala</div>
              <div><i className="fas fa-envelope" style={{ color: 'var(--mosa-gold)', marginRight: '0.4rem' }} />alumni@mengoss.sc.ug</div>
              <div><i className="fas fa-phone" style={{ color: 'var(--mosa-gold)', marginRight: '0.4rem' }} />+256 700 000 000</div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', fontSize: '1.2rem' }}>
              <a href="#" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#9ca3af'}><i className="fab fa-facebook" /></a>
              <a href="#" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#9ca3af'}><i className="fab fa-twitter" /></a>
              <a href="#" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#9ca3af'}><i className="fab fa-linkedin" /></a>
              <a href="#" style={{ color: '#9ca3af', transition: 'color 0.15s' }} onMouseEnter={e => e.target.style.color = '#25D366'} onMouseLeave={e => e.target.style.color = '#9ca3af'}><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1f2937', marginTop: '2rem', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem', textAlign: 'center' }}>
          <p>&copy; 2026 Mengo Old Students Association. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: '#9ca3af' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#9ca3af' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
