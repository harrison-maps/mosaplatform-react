import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Directory from './pages/Directory';
import Events from './pages/Events';
import { Jobs, Mentorship, Business, News, Donate } from './pages/OtherPages';
import { Login, Register, Profile } from './pages/AuthPages';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

function AuthLayout({ children }) {
  return <main>{children}</main>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth pages — no navbar/footer */}
        <Route path="/login"    element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />

        {/* Main pages */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/directory" element={<Layout><Directory /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/jobs" element={<Layout><Jobs /></Layout>} />
        <Route path="/mentorship" element={<Layout><Mentorship /></Layout>} />
        <Route path="/business" element={<Layout><Business /></Layout>} />
        <Route path="/news" element={<Layout><News /></Layout>} />
        <Route path="/donate" element={<Layout><Donate /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />

        {/* 404 */}
        <Route path="*" element={
          <Layout>
            <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '6rem', fontWeight: 900, color: 'var(--mosa-red)', opacity: 0.15, lineHeight: 1 }}>404</div>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Page Not Found</h1>
                <p style={{ color: 'var(--mosa-muted)', marginBottom: '2rem' }}>This page doesn't exist in the MOSA platform.</p>
                <a href="/" className="btn btn-primary">Back to Home</a>
              </div>
            </div>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}