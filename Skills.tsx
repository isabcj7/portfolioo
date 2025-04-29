// src/components/Skills.tsx
import React from 'react';
import { FaUtensils, FaLightbulb, FaPaintBrush } from 'react-icons/fa';
import IconWrapper from './IconWrapper';

const Skills: React.FC = () => {
  const skills = [
    {
      name: '˙ ✩°˖ Cozinhar˙ ⋆｡˚꩜',
      icon: (
        <IconWrapper
          icon={FaUtensils}
          style={{ fontSize: '50px', color: '#6A5ACD' }}
        />
      ),
    },
    {
      name: '⋆⭒˚.⋆ Criatividade ⭒˚.⋆',
      icon: (
        <IconWrapper
          icon={FaLightbulb}
          style={{ fontSize: '50px', color: '#6A5ACD' }}
        />
      ),
    },
    {
      name: '˖ ֹ੭୧ Arte ⊹ ࣪ ⑅',
      icon: (
        <IconWrapper
          icon={FaPaintBrush}
          style={{ fontSize: '50px', color: '#6A5ACD' }}
        />
      ),
    },
  ];

  return (
    <section id="skills" style={styles.skills}>
      <div className="fade-in">
        <h2>my skills ૮꒰◞ ˕ ◟ ྀི꒱ა</h2>
        <div style={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillCard}>
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  skills: {
    background: 'linear-gradient(to right, #FFFFFF, #B3E5FC)',
    padding: '60px 20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  skillCard: {
    backgroundColor: '#E6E6FA',
    padding: '20px',
    borderRadius: '20px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
};

export default Skills;