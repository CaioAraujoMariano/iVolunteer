import React, { useState, useRef, useEffect } from 'react';
import '../scss/ActiveServices.scss';
import Button from './Button';
import ViewDetails from './Modal/ViewDetailsModal';
import Header from './Header';
import Footer from './Footer';

const ActiveServicesVoluntario = () => {
  const [detailsShow, setDetailsShow] = React.useState('');
  const [closeButton, setCloseButton] = React.useState('');
  const modalRef = useRef(null);

  const showViewDetailsModal = () => {
    console.log('show');
    setDetailsShow('show');
    onClickClose();
  };

  const closeModalFunction = (event) => {
    setDetailsShow('');
    setCloseButton('');
  };

  function onClickClose() {
    if (setDetailsShow === '') {
      setCloseButton('');
    } else {
      setCloseButton('show');
      console.log('mostrando');
    }
  }

  return (
    <>
      <Header />
      <div className="activeServices-container">
        <Button bgColor="#FFF500" href="./servicos-disponiveis">
          Serviços Disponíveis
        </Button>
        <h2>Serviços ativos</h2>
        <div className="servicesList">
          <ul>
            <li>
              <p>
                <span>Serviço:</span> Ajuda no mercado
              </p>
              <button>Ver Detalhes</button>
            </li>
            <li>
              <p>
                <span>Serviço:</span> Levar pet pra passear
              </p>
              <button>Ver Detalhes</button>
            </li>
            <li>
              <p>
                <span>Serviço:</span> Levar no dentista
              </p>
              <button onClick={showViewDetailsModal}>Ver Detalhes</button>
            </li>
          </ul>
        </div>
        <div className="modals">
          <ViewDetails className={detailsShow} modalRef={modalRef} />
          <div
            className={`${closeButton} closeModal`}
            onClick={closeModalFunction}
          >
            X
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActiveServicesVoluntario;
