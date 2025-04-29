// src/components/Footer.tsx
import React from 'react';
import catImg from './assets/_cat-removebg-preview.png';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p>
        Feito com ♡ por Mia ૮₍´˶• . • ⑅ ₎ა


      </p>
      <div>
        <img src={require('./assets/Cats Love To Give Kisses Too (10 Gifs).gif')} alt="Animação"
      />
    </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: '#4B0082',
    color: '#E6E6FA',
    textAlign: 'center',
    padding: '20px',
  },
};

export default Footer;