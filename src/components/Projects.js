import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Clinic Management System',
      description: 'A secure medical system for managing student health records, clinic appointments, and generating health reports.',
      tech: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
      demoLink: 'https://clinic-system-cca.vercel.app/'
    },
    {
      title: 'SASO System',
      description: 'A comprehensive student affairs and services management system for handling student records and administrative tasks.',
      tech: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
      demoLink: 'https://sasosystem-cca.vercel.app/'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing my skills, projects, and professional experience as a frontend developer.',
      tech: ['React', 'CSS3', 'EmailJS'],
      demoLink: 'https://my-porfolio-2-4ztt.vercel.app/'
    }
  ];

  return (
    <section id="projects" style={styles.projects}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle} className="sectionTitle">My Projects</h2>
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={styles.projectCard}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p className="projectDesc" style={styles.projectDesc}>{project.description}</p>
              <div className="techStack" style={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech" style={styles.tech}>{tech}</span>
                ))}
              </div>
              <div className="projectLinks" style={styles.projectLinks}>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="demoLink" style={styles.demoLink}>
                  🔗 Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  projects: {
    padding: '80px 5%',
    backgroundColor: 'white'
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
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  projectCard: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '10px',
    transition: 'transform 0.3s',
    cursor: 'pointer'
  },
  projectTitle: {
    color: '#667eea',
    marginBottom: '1rem'
  },
  projectDesc: {
    color: '#666',
    marginBottom: '1rem',
    lineHeight: '1.5'
  },
  techStack: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    marginBottom: '1rem'
  },
  tech: {
    backgroundColor: '#e0e0e0',
    padding: '0.25rem 0.75rem',
    borderRadius: '15px',
    fontSize: '0.85rem'
  },
  projectLinks: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem'
  },
  demoLink: {
    padding: '6px 12px',
    backgroundColor: '#667eea',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '0.9rem',
    transition: 'background-color 0.3s'
  }
};

export default Projects;