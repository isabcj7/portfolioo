import calculadoraImg from './assets/calculadora.png';
import conversorImg from './assets/conversor.png';
import petshopImg from './assets/petshop.png';
import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Projects: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Calculadora com Flutter',
      description: 'Uma calculadora moderna e intuitiva desenvolvida com Flutter, com suporte a operações básicas e interface responsiva.',
      image: calculadoraImg,
    },
    {
      id: 2,
      title: 'Conversor de Unidades com Flutter',
      description: 'Aplicativo Flutter para conversão de unidades como comprimento, peso e temperatura, com design limpo e funcional.',
      image: conversorImg,
    },
    {
      id: 3,
      title: 'Petshop com React',
      description: 'Plataforma web em React para gerenciamento de petshop, incluindo catálogo de produtos e agendamento de serviços.',
      image: petshopImg,
    },
  ];

  const nextProject = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" style={styles.projects}>
      <div className="fade-in">
        <h2>meus projetos ₍ᐢ. .ᐢ₎ </h2>
        <div style={styles.carousel}>
          <button onClick={prevProject} style={styles.arrow}>←</button>
          <div style={styles.projectCard}>
            <img src={projects[current].image} alt={projects[current].title} style={styles.projectImage} />
            <h3>{projects[current].title}</h3>
            <p>{projects[current].description}</p>
          </div>
          <button onClick={nextProject} style={styles.arrow}>→</button>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  projects: {
    background: 'linear-gradient(to right, #FFFFFF, #B3E5FC)',
    padding: '60px 20px',
  },
  carousel: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  projectCard: {
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  projectImage: {
    width: '100%',
    height: '200px',
    borderRadius: '10px',
  },
  arrow: {
    backgroundColor: '#FFB6C1',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Projects;