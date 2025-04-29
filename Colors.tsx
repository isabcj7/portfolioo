import React from 'react';

// Definindo a interface para cada cor
interface Color {
  name: string;
  code: string;
  background: string;
}

const Colors: React.FC = () => {
  // Paleta de cores baseada no seu projeto
  const colorPalette: Color[] = [
    { name: 'Roxo Principal ୨ৎ', code: 'rgb(204, 128, 255)', background: 'rgb(204, 128, 255)' },
    { name: 'Azul ⋆˙⟡', code: '#E1F5FE', background: '#E6E6FA' },
    { name: 'Rosa Fofinho .𖥔 ݁ ˖', code: '#FFB6C1', background: '#FFB6C1' },
    { name: 'Rosa Gradiente ⋆˚࿔', code: 'rgb(253, 137, 224)', background: 'rgb(253, 137, 224)' },
    { name: 'Branco >ᴗ<', code: '#FFFFFF', background: '#FFFFFF' },
  ];

  return (
    <section id="colors" style={styles.section}>
      <div className="fade-in">
        <h2>⁺‧₊˚ ཐི⋆ Paleta de Cores ⋆ཋྀ ˚₊‧⁺</h2>
        <p style={styles.description}>
          Cores que usei no meu portfólio! ₊˚⊹ ᰔ
        </p>
        <div style={styles.colorGrid}>
          {colorPalette.map((color, index) => (
            <div key={index} style={styles.colorCard}>
              <div style={{ ...styles.colorSample, backgroundColor: color.background }} />
              <div style={styles.colorInfo}>
                <p style={styles.colorName}>{color.name}</p>
                <p style={styles.colorCode}>{color.code}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    background: 'linear-gradient(to right, #FFFFFF, #B3E5FC)', // Mesmo gradiente do Contact
    padding: '60px 20px',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#333',
    marginBottom: '40px',
  },
  colorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  colorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  colorSample: {
    width: '50px',
    height: '50px',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  colorInfo: {
    flex: 1,
  },
  colorName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
    margin: 0,
  },
  colorCode: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
};

export default Colors;