import React from 'react';
import '../scss/Home.scss';
import Header from './Header';
import HomeContent from './HomeContent';
import Footer from './Footer';
import Button from './Button';
import Background from './Background';

const Home = () => {
  return (
    <div>
      <Header />
      <Background title="Nossa missão é ajudar o próximo ;)"/>
      <div className="CTAButtons">
        <Button href="#" bgColor="#FFFFFF">
          Login
        </Button>
        <Button href="#" bgColor="#FFF500">
          Cadastre-se
        </Button>
      </div>
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Home;
