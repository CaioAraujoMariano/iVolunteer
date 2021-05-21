import React from 'react';
import '../scss/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <p>iVolunteer</p>
      <ul>
        <li>
          <Link to="/" className="header-links">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/meus-servicos" className="header-links">
            Meus serviços
          </Link>
        </li>
        <li>
          <Link to="/status-services" className="header-links">
            Status
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
