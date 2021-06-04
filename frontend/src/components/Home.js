import React, { useState, useRef, useEffect } from 'react';
import '../scss/Home.scss';
import Header from './Header';
import HomeContent from './HomeContent';
import Footer from './Footer';
import Button from './Button';
import Background from './Background';
import LoginModal from './Modal/LoginModal';
import RegisterModal from './Modal/RegisterModal';

const Home = () => {
  const [loginShow, setLoginShow] = React.useState('');
  const [registerShow, setRegisterShow] = React.useState('');
  const [closeButton, setCloseButton] = React.useState('');
  const modalRef = useRef(null);

  const showRegisterModal = () => {
    console.log('show');
    setRegisterShow('show');
    onClickClose();
  };

  const showLoginModal = () => {
    console.log('show');
    setLoginShow('show');
    onClickClose();
  };

  const closeModalFunction = (event) => {
    setLoginShow('');
    setRegisterShow('');
    setCloseButton('');
  };

  function onClickClose() {
    if (setLoginShow === '' || setRegisterShow === '') {
      setCloseButton('');
    } else {
      setCloseButton('show');
      console.log('mostrando');
    }
  }

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
      <div className="modals">
        <RegisterModal className={registerShow} modalRef={modalRef} />
        <LoginModal className={loginShow} modalRef={modalRef} />
        <div
          className={`${closeButton} closeModal`}
          onClick={closeModalFunction}
        >
          Fechar X
        </div>
      </div>
      <HomeContent onClickFunction={showRegisterModal} />
      <Footer />
    </div>
  );
};

export default Home;
