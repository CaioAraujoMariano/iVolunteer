import React from 'react';
import '../scss/NotFound.scss';
import Header from './Header';
import Footer from './Footer';

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="not-found-container">
        <span>Oops</span>
        <p>
          <span>404</span>Página não encontrada
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
