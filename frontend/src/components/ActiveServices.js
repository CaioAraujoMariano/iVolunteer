import React, { useState, useRef, useEffect } from 'react';
import '../scss/ActiveServices.scss';
import Button from './Button';
import NewServiceModal from './Modal/NewServiceModal';
import axios from 'axios';

const ActiveServices = () => {
  const [newServiceShow, setNewServiceShow] = React.useState('');
  const [closeButton, setCloseButton] = React.useState('');
  const [services, setServices] = React.useState([]);
  const modalRef = useRef(null);

  const showNewServiceModal = () => {
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
    }
  }

  useEffect(() => {
    let id_vulneravel = localStorage.getItem('id');
    axios
      .post(`http://localhost:8000/servicos/usuario`, {
        id: id_vulneravel,
      })
      .then((resp) => {
        setServices(resp.data);
      });
  }, []);

  console.log('services', services);

  return (
    <div className="activeServices-container">
      <div onClick={showNewServiceModal}>
        <Button bgColor="#FFF500">Novo Serviço</Button>
      </div>
      <h2>Serviços ativos</h2>
      <div className="servicesList">
        {services.length > 0 ? (
          <ul>
            {services.map((item) => {
              return (
                <li>
                  <p>
                    <span>Serviço:</span> {item.nome}
                  </p>
                  <button
                    onClick={() => {
                      window.location.href = `/status-services/${item.idservicos}`;
                    }}
                  >
                    Ver Detalhes
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2 className="no-service">Você não tem nenhum serviço ativo ;(</h2>
        )}
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
