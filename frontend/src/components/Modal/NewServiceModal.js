import React from 'react';
import '../../scss/NewServiceModal.scss';

const NewServiceModal = ({ modalRef, className }) => {
  return (
    <div ref={modalRef} className={`${className} createNewService-modal`}>
      <div className="newService-modal-container">
        <label htmlFor="service">Nome do Serviço ;)</label>
        <input type="text" id="service" placeholder="Compra no Mercado" />
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          placeholder="Comprar um litro de leite"
        />
        <label htmlFor="name">Nome do Vulnerável:</label>
        <input type="text" id="name" placeholder="Paulinho da Silva" />
        <label htmlFor="date-limit">Data Limite:</label>
        <input type="date" id="date-limit" />
        <button className="buttonRegisterService">
          Cadastrar Novo Serviço
        </button>
      </div>
    </div>
  );
};

export default NewServiceModal;
