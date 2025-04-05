import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// NavBar Component
const NavBar = () => (
  <nav style={{ backgroundColor: '#ffffff', padding: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'center', gap: '1.5rem', borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}>
    <Link to="/" style={navStyle}>Home</Link>
    <Link to="/seminar" style={navStyle}>Seminar</Link>
    <Link to="/lab" style={navStyle}>Laboratory Work</Link>
    <Link to="/contact" style={navStyle}>Contact</Link>
  </nav>
);

const navStyle = {
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  fontWeight: '500',
  color: '#4B5563',
  textDecoration: 'none',
  borderRadius: '0.75rem',
  backgroundColor: 'transparent'
};

// Home Component
const Home = () => (
  <div style={containerStyle}>
    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>Welcome to My Network Projects</h1>
    <p style={{ textAlign: 'center', color: '#6B7280' }}>Use the navigation to view different project sections.</p>
  </div>
);

// Seminar Component
const Seminar = () => {
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...uploadedFiles]);
  };

  return (
    <div style={containerStyle}>
      <h2 style={sectionTitle}>Seminar Work</h2>
      <div style={uploadBox}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Upload Seminar PDF</h3>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: '#2563EB' }}>
          📤 Choose PDF file
          <input type="file" style={{ display: 'none' }} accept="application/pdf" onChange={handleUpload} />
        </label>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {files.map((file, index) => (
          <div key={index} style={cardStyle}>
            <div style={cardContentStyle}>
              <span style={{ fontSize: '0.875rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '70%' }}>{file.name}</span>
              <a
                href={URL.createObjectURL(file)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#3B82F6', fontSize: '0.875rem', textDecoration: 'underline' }}
                download
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Lab Component
const Lab = () => (
  <div style={containerStyle}>
    <h2 style={sectionTitle}>Laboratory Work</h2>
    <p style={{ color: '#6B7280' }}>Upload lab files here (feature coming soon).</p>
  </div>
);

// Contact Component
const Contact = () => (
  <div style={containerStyle}>
    <h2 style={sectionTitle}>Contact</h2>
    <p style={{ color: '#6B7280' }}>
      You can reach me at:
      <a href="mailto:your.email@example.com" style={{ color: '#2563EB', textDecoration: 'underline', marginLeft: '0.25rem' }}>your.email@example.com</a>
    </p>
  </div>
);

const containerStyle = {
  maxWidth: '48rem',
  margin: '0 auto',
  padding: '1.5rem'
};

const sectionTitle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem'
};

const uploadBox = {
  backgroundColor: '#ffffff',
  borderRadius: '1rem',
  padding: '1.5rem',
  marginBottom: '1.5rem',
  boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
};

const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '1rem',
  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  overflow: 'hidden'
};

const cardContentStyle = {
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

export default function App() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F3F4F6' }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seminar" element={<Seminar />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
