import React from 'react';
import '../scss/Home.scss';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="CTAButtons">
        <Button href="#" bgColor="#FFFFFF">
          Login
        </Button>
        <Button href="#" bgColor="#FFF500">
          Cadastre-se
        </Button>
      </div>
    </div>
  );
};

export default Home;
