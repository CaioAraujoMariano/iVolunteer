import React from 'react';
import '../scss/Button.scss';

const Button = ({ href, bgColor, children }) => {
  return (
    <div className="button-container">
      <a href={href} style={{ backgroundColor: bgColor }}>
        {children}
      </a>
    </div>
  );
};

export default Button;
