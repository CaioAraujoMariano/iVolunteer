import React from 'react';
import '../scss/ServiceCard.scss';

const ServiceCard = ({ service, description }) => {
  return (
    <div className="service-card">
      <div className="service-card-title">
        <h3>Serviço:</h3>
        <p>{service}</p>
      </div>
      <div className="service-card-content">
        <p>{description}</p>
        <button className="button-voluntario">Ser Voluntário</button>
      </div>
    </div>
  );
};

export default ServiceCard;
