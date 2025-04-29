// src/components/IconWrapper.tsx
import React from 'react';
import { IconType } from 'react-icons';

interface IconWrapperProps {
  icon: string | IconType; // Aceita tanto uma string (para imagens) quanto um IconType (para ícones vetoriais)
  alt?: string; // Para imagens PNG
  style?: React.CSSProperties;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, alt = 'Icon', style, className }) => {
  // Verifica se o icon é uma string (imagem PNG) ou um componente (IconType)
  if (typeof icon === 'string') {
    // Caso seja uma imagem PNG
    return (
      <div className={`icon-wrapper ${className || ''}`} style={style}>
        <img src={icon} alt={alt} style={{ width: '32px', height: '32px' }} />
      </div>
    );
  } else {
    // Caso seja um ícone vetorial (IconType)
    const RenderIcon = icon as React.ComponentType<{
      style?: React.CSSProperties;
      className?: string;
    }>;
    return (
      <div className={`icon-wrapper ${className || ''}`}>
        <RenderIcon style={style} className={className} />
      </div>
    );
  }
};

export default IconWrapper;