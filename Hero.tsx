// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" style={styles.hero}>
      <div className="fade-in" style={styles.content}>
        <h1>oláa, sou a Mia!</h1>
        <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          saiba maiss!
        </button>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    background: 'linear-gradient(to right, #FFFFFF, #B3E5FC)',
    textAlign: 'center',
    padding: '100px 20px',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  subtitle: {
    fontSize: '20px',
    color: '#4B0082',
    margin: '20px 0',
  },
};

export default Hero;