import React from 'react';
import '../scss/ButtonContent.scss';

const ButtonContent = ({ href, bgColor, children }) => {
  return (
    <div className="button-content">
      <a href={href} style={{ backgroundColor: bgColor }}>
        {children}
      </a>
    </div>
  );
};

export default ButtonContent;
