import React from 'react';
import '../scss/Header.scss';
import { Link, Redirect } from 'react-router-dom';

const Header = () => {
  const nivel_usuario = localStorage.getItem('nivel_usuario');
  const nome_usuario = localStorage.getItem('nome');

  const logOut = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top header-container">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand webTitle">
          iVolunteer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              {nivel_usuario == 0 && (
                <Link
                  to="/meus-servicos"
                  className="nav-link active"
                  aria-current="page"
                >
                  Meus serviços
                </Link>
              )}
              {nivel_usuario == 1 && (
                <Link
                  to="/meus-servicos-vulneravel"
                  className="nav-link active"
                  aria-current="page"
                >
                  Meus serviços
                </Link>
              )}
            </li>
            {nivel_usuario == 1 && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {nome_usuario}
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#" onClick={logOut}>
                      Sair
                    </a>
                  </li>
                </ul>
              </li>
            )}
            {nivel_usuario == 0 && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {nome_usuario}
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#" onClick={logOut}>
                      Sair
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
