import React, { useRef } from 'react';
import '../scss/StatusServices.scss';
import Header from './Header';
import Background from './Background';
import Button from './Button';
import Footer from './Footer';
import NewServiceModal from './Modal/CreateServiceModal';

const StatusServices = () => {
  const [newServiceShow, setNewServiceShow] = React.useState('');
  const [closeButton, setCloseButton] = React.useState('');
  const modalRef = useRef(null);

  const showNewServiceModal = () => {
    console.log('show');
    setNewServiceShow('show');
    onClickClose();
  };

  const closeModalFunction = (event) => {
    setNewServiceShow('');
    setCloseButton('');
  };

  function onClickClose() {
    if (setNewServiceShow === '') {
      setCloseButton('');
    } else {
      setCloseButton('show');
      console.log('mostrando');
    }
  }

  return (
    <div className="status-services-container">
      <Header />
      <Background title="Olá Fulano!">
        Acompanhe os seus serviços ativos ;)
      </Background>
      <div className="CTAButtons">
        <Button href="./meus-servicos" bgColor="#FFFFFF">
          Meus Serviços
        </Button>
        <div onClick={showNewServiceModal}>
          <Button bgColor="#FFF500">Novo Serviço</Button>
        </div>
      </div>
      <p className="p_status">Status do Serviço</p>
      <div className="status-container">
        <div className="status-content1"></div>
        <div className="status-content2"></div>
        <div className="status-content3"></div>
        <div className="status-content4"></div>
      </div>
      <div className="modals">
        <NewServiceModal className={newServiceShow} modalRef={modalRef} />
        <div
          className={`${closeButton} closeModal`}
          onClick={closeModalFunction}
        >
          Fechar X
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StatusServices;
