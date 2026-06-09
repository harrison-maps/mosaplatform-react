import React, { useState } from 'react';
import { ALUMNI } from '../data/mockData';
import { PageHero, AlumniCard, FilterPills } from '../components/UI';

const SECTORS = ['All', 'Medical', 'Engineering', 'Technology', 'Finance', 'Legal', 'Marketing', 'Architecture'];
const YEARS   = ['All Years', '2020s', '2010s', '2000s', '1990s', 'Before 1990'];

export default function Directory() {
  const [search, setSearch]   = useState('');
  const [sector, setSector]   = useState('All');
  const [year, setYear]       = useState('All Years');

  const filtered = ALUMNI.filter(a => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.role.toLowerCase().includes(search.toLowerCase());
    const matchSector = sector === 'All' || a.sector === sector;
    const matchYear = year === 'All Years' 
      || (year === 'Before 1990' && a.year < 1990)
      || (year === '2020s' && a.year >= 2020)
      || (year === '2010s' && a.year >= 2010 && a.year < 2020)
      || (year === '2000s' && a.year >= 2000 && a.year < 2010)
      || (year === '1990s' && a.year >= 1990 && a.year < 2000);
    return matchSearch && matchSector && matchYear;
  });

  return (
    <>
      <PageHero eyebrow="Find Your Fellow Mengonians" title="Alumni Directory" subtitle="Search and connect with over 12,000 Mengo Senior School alumni worldwide." />

      {/* ── SEARCH BAR ── */}
      <div style={{ background: '#fff', padding: '2rem 0', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 280px', position: 'relative' }}>
              <i className="fas fa-search" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
              <input className="form-input" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search by name, profession, or company…"
                style={{ paddingLeft: '2.75rem', width: '100%' }} />
            </div>
            <select className="form-select" value={year} onChange={e => setYear(e.target.value)} style={{ flex: '0 1 180px' }}>
              {YEARS.map(y => <option key={y}>{y}</option>)}
            </select>
            <button className="btn btn-primary" style={{ flexShrink: 0 }}>Search</button>
          </div>
        </div>
      </div>

      {/* ── FILTERS + RESULTS ── */}
      <section className="section bg-gray">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <FilterPills options={SECTORS} active={sector} onChange={setSector} />
            <p style={{ fontSize: '0.875rem', color: 'var(--mosa-muted)', fontWeight: 500 }}>
              <strong style={{ color: 'var(--mosa-black)' }}>{filtered.length}</strong> of 12,045 alumni
            </p>
          </div>
          {filtered.length > 0 ? (
            <div className="grid-4">
              {filtered.map(a => <AlumniCard key={a.id} alumni={a} />)}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--mosa-muted)' }}>
              <i className="fas fa-search" style={{ fontSize: '2.5rem', opacity: 0.3, marginBottom: '1rem', display: 'block' }} />
              <p style={{ fontWeight: 600 }}>No alumni found matching your search.</p>
            </div>
          )}

          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <div className="pagination">
              <button className="page-btn"><i className="fas fa-chevron-left" /></button>
              {[1,2,3,'…',48].map((p, i) => (
                <button key={i} className={`page-btn ${p === 1 ? 'active' : ''}`}>{p}</button>
              ))}
              <button className="page-btn"><i className="fas fa-chevron-right" /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}