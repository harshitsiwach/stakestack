import React from 'react';

interface PixelatedTextProps {
  text: string;
  className?: string;
  fontSize?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const PixelatedText: React.FC<PixelatedTextProps> = ({
  text,
  className = '',
  fontSize = '3rem',
  tag = 'h1'
}) => {
  const renderTag = () => {
    const pixelatedStyle: React.CSSProperties = {
      fontFamily: 'monospace, "Courier New", Courier, monospace', // More pixel-like font
      fontSize: fontSize,
      fontWeight: 'bold',
      letterSpacing: '2px', // Wider spacing for more pixelated feel
      textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000', // Add pixel-style shadow
      color: '#ffffff', // Keep the white color
      lineHeight: 1.2,
      margin: 0,
      padding: 0
    };

    const classes = `pixelated-text ${className}`;

    switch (tag) {
      case 'h1':
        return (
          <h1 style={pixelatedStyle} className={classes}>
            {text}
          </h1>
        );
      case 'h2':
        return (
          <h2 style={pixelatedStyle} className={classes}>
            {text}
          </h2>
        );
      case 'h3':
        return (
          <h3 style={pixelatedStyle} className={classes}>
            {text}
          </h3>
        );
      case 'h4':
        return (
          <h4 style={pixelatedStyle} className={classes}>
            {text}
          </h4>
        );
      case 'h5':
        return (
          <h5 style={pixelatedStyle} className={classes}>
            {text}
          </h5>
        );
      case 'h6':
        return (
          <h6 style={pixelatedStyle} className={classes}>
            {text}
          </h6>
        );
      case 'p':
        return (
          <p style={pixelatedStyle} className={classes}>
            {text}
          </p>
        );
      case 'span':
        return (
          <span style={pixelatedStyle} className={classes}>
            {text}
          </span>
        );
      default:
        return (
          <h1 style={pixelatedStyle} className={classes}>
            {text}
          </h1>
        );
    }
  };

  return renderTag();
};

export default PixelatedText;