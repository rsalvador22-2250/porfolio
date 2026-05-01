import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML5', level: '90%' },
    { name: 'CSS3', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '75%' },
    { name: 'Node.js', level: '70%' },
    { name: 'Git/GitHub', level: '85%' }
  ];

  return (
    <section id="skills" style={styles.skills}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle} className="sectionTitle">My Skills</h2>
        <div style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={styles.skillCard}>
              <h3 style={styles.skillName}>{skill.name}</h3>
              <div style={styles.progressBar} className="progressBar">
                <div style={{...styles.progress, width: skill.level}}></div>
              </div>
              <p style={styles.percentage} className="percentage">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  skills: {
    padding: '80px 5%',
    backgroundColor: '#f8f9fa'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#333'
  },
  skillsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  skillCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s'
  },
  skillName: {
    marginBottom: '1rem',
    color: '#667eea'
  },
  progressBar: {
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
    height: '10px'
  },
  progress: {
    backgroundColor: '#667eea',
    height: '100%',
    borderRadius: '10px',
    transition: 'width 1s ease'
  },
  percentage: {
    marginTop: '0.5rem',
    textAlign: 'right',
    color: '#666'
  }
};

export default Skills;