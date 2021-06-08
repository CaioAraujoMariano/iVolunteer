import React from 'react';
import '../scss/Background.scss';
import BackgroundImage from '../img/Background-Image.png';

const Background = ({ title, children }) => {
  return (
    <div className="background-container">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center position-relative">
            <img src={BackgroundImage} />
            <p className="position-absolute title">{title}</p>
            <p className="position-absolute top-50">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
