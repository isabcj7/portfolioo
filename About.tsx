// src/components/About.tsx

// Importa o React, necessário para utilizar JSX e criar componentes funcionais
import React from 'react';

// Define um componente funcional chamado About, usando tipagem do TypeScript com React.FC
const About: React.FC = () => {
  // O que será renderizado na tela
  return (
    // Seção principal com id "about" e estilos aplicados
    <section id="about" style={styles.about}>
      
      {/* Div com classe "fade-in" — provavelmente usada para alguma animação CSS */}
      <div className="fade-in">

        {/* Título da seção */}
        <h2>about me ^^</h2>

        {/* Container flexível que agrupa imagem e texto lado a lado */}
        <div style={styles.container}>

          {/* Imagem animada (GIF) com estilo redondo e borda rosa */}
          <img
            src="https://i.pinimg.com/originals/d0/95/8a/d0958a757cbe2dbd3ae0fc8f2abf1813.gif" // URL do GIF
            alt="gatito" // Texto alternativo (acessibilidade)
            style={styles.image} // Aplica os estilos da imagem
          />

          {/* Div para o texto descritivo, ocupa o espaço restante */}
          <div style={styles.text}>
            <p>
              {/* Parágrafo com descrição pessoal */}
              Adoro observar o mundo com sensibilidade, valorizando os pequenos detalhes que tornam cada experiência única — desde o carinho de um gato até o encanto por coisas fofas que despertam o lado mais leve da vida.
              <br /><br />
              Tenho um grande interesse em compreender as pessoas, suas histórias e formas de pensar, o que me torna alguém atento ao que está além do óbvio. Essa característica me guia tanto na vida pessoal quanto nos projetos que desenvolvo, buscando sempre soluções que façam sentido e que toquem quem as utiliza.
              <br /><br />
              Prezo por um ambiente acolhedor, onde a escuta ativa, o respeito e a criatividade caminham juntos. Acredito que unir técnica, empatia e estética é essencial para criar experiências significativas, funcionais e encantadoras.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

// Objeto com os estilos em JavaScript, usando o tipo CSSProperties do React
const styles: { [key: string]: React.CSSProperties } = {
  // Estilo da seção principal: gradiente de fundo e espaçamento interno
  about: {
    background: 'linear-gradient(to right, #FFFFFF, #B3E5FC)', // gradiente branco → azul claro
    padding: '60px 20px', // espaçamento interno
  },

  // Container que organiza o layout em linha, centraliza e dá espaçamento
  container: {
    display: 'flex', // layout em linha
    flexWrap: 'wrap', // permite quebrar linha se precisar
    gap: '40px', // espaço entre os elementos (imagem e texto)
    maxWidth: '1000px', // largura máxima do container
    margin: '0 auto', // centraliza horizontalmente
    alignItems: 'center', // alinha verticalmente ao centro
  },

  // Estilo da imagem: formato redondo, borda rosa e tamanho fixo
  image: {
    borderRadius: '50%', // deixa a imagem redonda
    border: '5px solid #FFB6C1', // borda rosa claro
    width: '200px', // largura da imagem
    height: '200px', // altura da imagem
  },

  // Estilo do texto: ocupa o restante do espaço e define cor/tamanho
  text: {
    flex: 1, // ocupa o restante do espaço do flex container
    fontSize: '18px', // tamanho da fonte
    color: '#4B0082', // cor do texto (roxo escuro / índigo)
  },
};

// Exporta o componente para ser usado em outras partes do app
export default About;
