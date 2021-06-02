import React from 'react'
import '../../scss/ViewDetailsModal.scss'

const ViewDetails = ({ modalRef, className }) => {
    return (
    <div ref={modalRef} className={`${className} viewDetails-modal`}>
        <div className="viewDetails-modal-container">
            <label htmlFor="name">Nome do Vulnerável:</label>
            <input type="text" id="name" placeholder="Fulano da Silva" />
            <label htmlFor="serviceName">Nome do Serviço ;)</label>
            <input type="text" id="serviceName" placeholder="Levar no Dentista" />
            <label htmlFor="description">Descrição do Serviço:</label>
            <input type="text" id="description" placeholder="Preciso de carona para o dentista, pois não dirijo e os transportes públicos estão perigosos devido a pandemia." />
            <label htmlFor="endereco">Endereço:</label>
            <input type="text" id="endereco" placeholder="Rua dos Alpes 556 Bairro Tupiniquim"/>
            <label htmlFor="date">Data:</label>
            <input type="date" id="date" />
        </div>
    </div>
    );
};

export default ViewDetails
