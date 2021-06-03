import React from 'react';
import '../scss/Button.scss';

const Button = ({ href, bgColor, children, ...props }) => {
  return (
    <div className="button-container" style={{ ...props }}>
      <a href={href} style={{ backgroundColor: bgColor }}>
        {children}
      </a>
    </div>
  );
};

export default Button;
