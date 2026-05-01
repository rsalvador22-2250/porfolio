import React from 'react';

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img 
            src="/rio.png"
            alt="Profile"
            style={styles.profileImage}
          />
        </div>
        
        <h1 style={styles.title}>Hi, I'm <span style={styles.name}>RIO SALVADOR</span></h1>
        <h2 style={styles.subtitle}>Frontend Developer & UI Enthusiast</h2>
        <p style={styles.description}>
          I create beautiful and responsive websites that provide amazing user experiences.
        </p>
        <div style={styles.buttons}>
          <a href="#projects" style={styles.btnPrimary}>View Projects</a>
          <a href="#contact" style={styles.btnSecondary}>Contact Me</a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '0 1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  container: {
    maxWidth: '800px'
  },
  imageContainer: {
    marginBottom: '2rem'
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #ffd700',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  name: {
    color: '#ffd700'
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem'
  },
  description: {
    fontSize: '1.1rem',
    marginBottom: '2rem'
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  btnPrimary: {
    padding: '12px 30px',
    backgroundColor: '#ffd700',
    color: '#333',
    textDecoration: 'none',
    borderRadius: '25px',
    fontWeight: 'bold',
    transition: 'transform 0.3s'
  },
  btnSecondary: {
    padding: '12px 30px',
    backgroundColor: 'transparent',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '25px',
    border: '2px solid white',
    fontWeight: 'bold',
    transition: 'transform 0.3s'
  }
};

export default Hero;