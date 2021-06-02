import React from 'react';
import '../scss/ServiceCard.scss';

const ServiceCard = () => {
    return (
        <div className="service-card-container">
            <div className="service-card">
                <div className="service-card-tittle">
                    <h3>Serviço:</h3>
                    <p>Ajuda no Mercado</p>
                </div>
                <div className="service-card-content">
                    <p>Comprar pão, leite, melância. Muito obrigado ;)</p>
                    <button className="button-voluntario">Ser Voluntário</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard
