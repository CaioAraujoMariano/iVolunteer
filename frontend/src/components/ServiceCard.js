import React, { useState, useRef, useEffect } from 'react';
import '../scss/ServiceCard.scss';
import ServiceCardModal from './Modal/ServiceCardModal'

const ServiceCard = ({ service, description }) => {

  const [serviceCardShow, setServiceCardShow] = React.useState('');
  const [closeButton, setCloseButton] = React.useState('');
  const modalRef = useRef(null);

  const showServiceCardModal = () => {
    console.log('show');
    setServiceCardShow('show');
    onClickClose();
  };

  const closeModalFunction = (event) => {
    setServiceCardShow('');
    setCloseButton('');
  };

  function onClickClose() {
    if (setServiceCardShow === '') {
      setCloseButton('');
    } else {
      setCloseButton('show');
      console.log('mostrando');
    }
  }

  return (
    <div className="service-card">
      <div className="service-card-title">
        <h3>Serviço:</h3>
        <p>{service}</p>
      </div>
      <div className="service-card-content">
        <p>{description}</p>
        <button className="button-voluntario" onClick={showServiceCardModal}>Ser Voluntário</button>
      </div>
      <div className="modals">
        <ServiceCardModal className={serviceCardShow} modalRef={modalRef} />
        <div
          className={`${closeButton} closeModal`}
          onClick={closeModalFunction}
        >
          Fechar X
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
