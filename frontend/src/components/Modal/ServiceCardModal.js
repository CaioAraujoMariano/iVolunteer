import React from 'react';
import axios from 'axios';
import '../../scss/ServiceCardModal.scss';

const ServiceCardModal = ({ modalRef, className, serviceid }) => {
  let id_voluntario = localStorage.getItem('id')
  const sendConfirmantion = (id) => {
    axios.put(`http://localhost:8000/servicos/${id}`, {
      id_voluntario: id_voluntario
    })
  }

  return (
    <div ref={modalRef} className={`${className} service-modal`}>
      <div className="service-card-modal">
        <div>
          <h2>Tem certeza que deseja se voluntariar para este serviço?</h2>
          <button onClick={()=>{sendConfirmantion(serviceid)}}>Sim, quero ser um voluntário.</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardModal;
