import React from 'react';
import '../scss/NotFound.scss';
import Header from './Header';
import Footer from './Footer';
import BackgroundImage from '../img/Background-Image.png';

const NotFound = () => {
  return (
    <div>
      <Header />
      <div class class="not-found-container">
        <div className="not-found-content">
        <img src={BackgroundImage}/>
          <span>Oops...</span>
          <p>
            <span>404</span>Página não encontrada
          </p>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
