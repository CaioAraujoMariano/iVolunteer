import React from 'react';
import '../scss/ActiveServices.scss';
import Button from './Button';

const ActiveServices = () => {
  return (
    <div className="activeServices-container">
      <h2>Serviços ativos</h2>
      <div className="servicesList">
        <ul>
          <li>
            <p>
              <span>Serviço:</span> Ajuda no mercado
            </p>
            <button>Ver Detalhes</button>
          </li>
          <li>
            <p>
              <span>Serviço:</span> Levar pet pra passear
            </p>
            <button>Ver Detalhes</button>
          </li>
          <li>
            <p>
              <span>Serviço:</span> Levar no dentista
            </p>
            <button>Ver Detalhes</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActiveServices;
