import React from 'react';
import ivyImg from './assets/ivy.jpeg';
import snowImg from './assets/snow2.jpeg';
import bennyImg from './assets/benny.jpeg';
import yummyImg from './assets/yummy.jpeg';

const Cats: React.FC = () => {
  const cats = [
    {
      name: '˙ ✩°˖ ivy ˙ ⋆｡˚꩜',
      icon: (
        <img
          src={ivyImg}
          alt="Ivy"
          style={{
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '16px',
          }}
        />
      ),
      borderColor: '#C084FC', // Roxo
      emoji: '🌸',
      hoverShadow: '0 5px 10px rgba(192, 132, 252, 0.4)',
    },
    {
      name: '⋆⭒˚.⋆ snow ⭒˚.⋆',
      icon: (
        <img
          src={snowImg}
          alt="Snow"
          style={{
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '16px',
          }}
        />
      ),
      borderColor: '#BFDBFE', // Azul claro
      emoji: '❄️',
      hoverShadow: '0 5px 10px rgba(191, 219, 254, 0.4)',
    },
    {
      name: '˖ ֹ੭୧ benny ⊹ ࣪ ⑅',
      icon: (
        <img
          src={bennyImg}
          alt="Benny"
          style={{
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '16px',
          }}
        />
      ),
      borderColor: '#FECDD3', // Rosa
      emoji: '🐾',
      hoverShadow: '0 5px 10px rgba(254, 205, 211, 0.4)',
    },
    {
      name: '˖ ֹ੭୧ yummy ⊹ ࣪ ⑅',
      icon: (
        <img
          src={yummyImg}
          alt="Yummy"
          style={{
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '16px',
          }}
        />
      ),
      borderColor: '#FDE68A', // Amarelo
      emoji: '🍰',
      hoverShadow: '0 5px 10px rgba(253, 230, 138, 0.4)',
    },
  ];

  return (
    <section
      id="cats"
      style={{
        maxWidth: '1024px',
        width: '100%',
        padding: '40px 0',
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#C084FC',
          marginBottom: '28px',
          textAlign: 'center',
        }}
      >
        meus gatos ૮꒰ ˶• ༝ •˶꒱ა ♡
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {cats.map((cat, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#F5F6F5', // Branco gelo
              padding: '16px',
              borderRadius: '16px',
              boxShadow: '0 5px 7px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.3s',
              textAlign: 'center',
              width: '220px',
              border: `3px solid ${cat.borderColor}`,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = cat.hoverShadow)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = '0 5px 7px rgba(0, 0, 0, 0.15)')
            }
          >
            <div
              style={{
                width: '180px',
                height: '180px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#E5E7EB', // Cinza claro para fundo da imagem
                borderRadius: '16px',
              }}
            >
              {cat.icon}
            </div>
            <p
              style={{
                marginTop: '6px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#4B5563',
                lineHeight: '1.3',
              }}
            >
              <span style={{ display: 'block', fontSize: '20px' }}>
                {cat.emoji}
              </span>
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cats;