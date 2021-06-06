import React, { useState, useRef, useEffect } from 'react';
import '../scss/ActiveServices.scss';
import Button from './Button';
import NewServiceModal from './Modal/NewServiceModal';

const ActiveServices = () => {
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
    <div className="activeServices-container">
      <div onClick={showNewServiceModal}>
        <Button bgColor="#FFF500">Novo Serviço</Button>
      </div>

      <h2>Serviços ativos</h2>
      <div className="servicesList">
        <ul>
          <li>
            <p>
              <span>Serviço:</span> Ajuda no mercado
            </p>
            <button
              onClick={() => {
                window.location.href = '/status-services';
              }}
            >
              Ver Detalhes
            </button>

          </li>
          <li>
            <p>
              <span>Serviço:</span> Levar pet pra passear
            </p>
            <button
              onClick={() => {
                window.location.href = '/status-services';
              }}
            >
              Ver Detalhes
            </button>
          </li>
          <li>
            <p>
              <span>Serviço:</span> Levar no dentista
            </p>
            <button
              onClick={() => {
                window.location.href = '/status-services';
              }}
            >
              Ver Detalhes
            </button>
          </li>
        </ul>
      </div>
      <div className="modals">
        <NewServiceModal className={newServiceShow} modalRef={modalRef} />
        <div
          className={`${closeButton} closeModal`}
          onClick={closeModalFunction}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default ActiveServices;
