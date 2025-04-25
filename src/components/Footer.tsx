import React from 'react';
import { Link } from 'react-router-dom';

const footerStyle: React.CSSProperties = {
  marginTop: '40px',
  padding: '20px',
  borderTop: '1px solid #eee',
  fontSize: '0.8em',
  color: '#555',
  lineHeight: '1.4',
  textAlign: 'center',
};

const linkStyle: React.CSSProperties = {
  color: '#003366',
  textDecoration: 'none',
  margin: '0 10px',
};

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p style={{ marginBottom: '5px' }}>
        © {new Date().getFullYear()} Moodle.NRW
      </p>
      <p>
        <Link to="/impressum" style={linkStyle}>Impressum</Link>
        |
        <Link to="/datenschutz" style={linkStyle}>Datenschutz</Link>
        |
        <a href="https://moodlenrw.de/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Weitere Informationen</a>
      </p>
    </footer>
  );
};

export default Footer; 