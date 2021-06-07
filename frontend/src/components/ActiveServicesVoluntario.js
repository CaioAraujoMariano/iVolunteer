import React, { useRef, useEffect } from 'react';
import '../scss/ActiveServicesVoluntario.scss';
import Button from './Button';
import ViewDetails from './Modal/ViewDetailsModal';
import axios from 'axios';

const ActiveServicesVoluntario = () => {
  const [services, setServices] = React.useState([]);

  useEffect(() => {
    let id_voluntario = localStorage.getItem('id');
    axios
      .post(`http://localhost:8000/servicos/voluntario`, {
        id: id_voluntario,
      })
      .then((resp) => {
        setServices(resp.data);
      });
  }, []);

  console.log('services', services);

  return (
    <>
      <div className="activeServices-container">
        <Button bgColor="#FFF500" href="./servicos-disponiveis">
          Serviços Disponíveis
        </Button>
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
      </div>
    </>
  );
};

export default ActiveServicesVoluntario;
