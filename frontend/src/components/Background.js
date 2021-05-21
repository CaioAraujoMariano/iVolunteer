import React from 'react';
import '../scss/Background.scss';
import BackgroundImage from '../img/Background-Image.png';

const Background = ({ title, children }) => {
  return (
    <div className="background-container">
      <img src={BackgroundImage} />
      <p>{title}</p>
      <p>{children}</p>
    </div>
  );
};

export default Background;
