// src/components/Header.tsx
import React from 'react';
import IconWrapper from './IconWrapper';
import catImg from './assets/_cat-removebg-preview.png'; // Certifique-se de que a imagem está em src/assets/

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <IconWrapper
          icon={catImg}
          alt="Gatinho Fofinho"
          style={{ marginRight: '10px' }}
          className="cat-icon"
        />
        <span>Mia ૮₍ ˃ ⤙ ˂ ₎ა</span>
      </div>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#hero" style={styles.navLink}>Início</a></li>
          <li><a href="#about" style={styles.navLink}>Sobre</a></li>
          <li><a href="#cats" style={styles.navLink}>Gatos</a></li>
          <li><a href="#projects" style={styles.navLink}>Projetos</a></li>
          <li><a href="#skills" style={styles.navLink}>Habilidades</a></li>
          <li><a href="#colors" style={styles.navLink}>Cores</a></li>
          <li><a href="#contact" style={styles.navLink}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'rgb(204, 128, 255)',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    boxShadow: '0 2px 5px rgb(255, 157, 157)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: '#E6E6FA',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s ease',
  },
};

export default Header;