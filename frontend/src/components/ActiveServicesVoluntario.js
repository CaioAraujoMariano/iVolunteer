import React, { useRef } from 'react';
import '../scss/ActiveServicesVoluntario.scss';
import Button from './Button';
import ViewDetails from './Modal/ViewDetailsModal';

/*
const AvailableServices = () => {
  const [servicos, setServicos] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/servicos/usuarios/id')
      .then((res) => res.json())
      .then((result) => {
        setServicos(result);
      });
  }, []);
  
*/

const ActiveServicesVoluntario = () => {

  return (
    <>
      <div className="activeServices-container">
        <Button bgColor="#FFF500" href="./servicos-disponiveis">
          Serviços Disponíveis
        </Button>
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
                className="botao-servicos-disponiveis"
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
                className="botao-servicos-disponiveis"
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
                className="botao-servicos-disponiveis"
              >
                Ver Detalhes
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ActiveServicesVoluntario;
