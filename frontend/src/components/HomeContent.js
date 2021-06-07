import React from 'react';
import '../scss/HomeContent.scss';
import Button from './Button';
import HomeImage1 from '../img/Ellipse14.png';
import HomeImage2 from '../img/Ellipse17.png';

const HomeContent = ({ onClickFunction }) => {
  return (
    <div className="home-content">
      <p>Seja um voluntário e ajude as pessoas ;)</p>
      <img src={HomeImage2} className="home-image2" alt='Imagem de Elipse'/>
      <img src={HomeImage1} className="home-image1" alt='Imagem de Elipse'/>
      <div onClick={onClickFunction}>
        <Button
          href="#"
          bgColor="#FFF500"
          position="absolute"
          right="40px"
          top="50px"
        >
          Cadastre-se aqui ;)
        </Button>
      </div>
    </div>
  );
};

export default HomeContent;
