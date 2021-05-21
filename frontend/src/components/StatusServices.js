import React from 'react';
import '../scss/StatusServices.scss';
import Header from './Header';
import Background from './Background';
import Button from './Button';
import Footer from './Footer';


const StatusServices = () => {
  return (
    <div className="status-services-container">
      <Header/>
        <Background title="Olá Fulano!">Acompanhe os seus serviços ativos ;)</Background>
        <div className="CTAButtons">
          <Button href="#" bgColor="#FFFFFF"> 
            Meus Serviços
          </Button>
          <Button href="#" bgColor="#FFF500"> 
            Novo Serviço
          </Button>
        </div>
        <p className="p_status">
          Status do Serviço
        </p>
        <div className="status-container">
          <div className="status-content1">

          </div>
          <div className="status-content2">

          </div>
          <div className="status-content3">

          </div>
          <div className="status-content4">

          </div>
        </div>
      <Footer/>
    </div>
  );
};

export default StatusServices;