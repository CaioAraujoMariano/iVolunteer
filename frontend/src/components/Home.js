import React, { useState } from 'react';
import '../scss/Home.scss';
import Header from './Header';
import HomeContent from './HomeContent';
import Footer from './Footer';
import Button from './Button';
import Background from './Background';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Home = () => {
  const [loginShow, setLoginShow] = React.useState('');
  const [registerShow, setRegisterShow] = React.useState('');

  const showRegisterModal = () => {
    console.log('show');
    setRegisterShow('show');
  };

  const closeRegisterModal = (event) => {
    console.log('hidden');
    setRegisterShow('');
    document.body.removeEventListener('click', closeRegisterModal);
  };

  const showLoginModal = () => {
    console.log('show');
    setLoginShow('show');
  };

  const closeLoginModal = (event) => {
    console.log('hidden');
    setLoginShow('');
    document.body.removeEventListener('click', closeLoginModal);
  };

  return (
    <div>
      <Header />
      <Background title="Nossa missão é ajudar o próximo ;)" />
      <div className="CTAButtons">
        <div onClick={showLoginModal}>
          <Button bgColor="#FFFFFF">Login</Button>
        </div>
        <div onClick={showRegisterModal}>
          <Button bgColor="#FFF500">Cadastre-se</Button>
        </div>
      </div>
      <RegisterModal className={registerShow} />
      <LoginModal className={loginShow} />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Home;
