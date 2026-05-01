import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <h2>My Portfolio</h2>
      </div>
      
      <div style={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>
      
      <ul style={{...styles.navLinks, ...(isMenuOpen ? styles.active : {})}}>
        <li><a href="#home" style={styles.link} className="link">Home</a></li>
        <li><a href="#about" style={styles.link} className="link">About</a></li>
        <li><a href="#skills" style={styles.link} className="link">Skills</a></li>
        <li><a href="#projects" style={styles.link} className="link">Projects</a></li>
        <li><a href="#contact" style={styles.link} className="link">Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 5%',
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    flexWrap: 'wrap'
  },
  logo: {
    color: '#667eea',
    fontSize: '1.5rem'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    transition: 'color 0.3s'
  },
  menuIcon: {
    display: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer'
  },
  active: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center',
    padding: '1rem 0'
  }
};

export default Header;