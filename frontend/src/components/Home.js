import React from 'react';
import '../scss/Home.scss';
import Header from './Header';
import HomeContent from './HomeContent';
import Footer from './Footer';
import Button from './Button';
import Background from './Background';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Home = () => {
  const [loginShow, setLoginShow] = React.useState(false);
  const [registerShow, setRegisterShow] = React.useState(false);

  return (
    <div>
      <Header />
      <Background title="Nossa missão é ajudar o próximo ;)" />
      <div className="CTAButtons">
        <Button href="#" bgColor="#FFFFFF" onClick={() => setLoginShow(true)}>
          Login
        </Button>
        <Button
          href="#"
          bgColor="#FFF500"
          onClick={() => setRegisterShow(true)}
        >
          Cadastre-se
        </Button>
      </div>
      {loginShow === true && <LoginModal />}
      {registerShow === true && <RegisterModal />}
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Home;
