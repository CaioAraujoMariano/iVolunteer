import React, { useEffect } from 'react';
import '../scss/AvailableServices.scss';
import Header from './Header';
import Footer from './Footer';
import ServiceCard from './ServiceCard';

const AvailableServices = () => {
  const [servicos, setServicos] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/servicos')
      .then((res) => res.json())
      .then((result) => {
        setServicos(result);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="service-card-container">
        {servicos.map((item) => {
          return (
            <ServiceCard
              service={item.nome}
              description={item.descricao}
              className="service-card-item"
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default AvailableServices;
