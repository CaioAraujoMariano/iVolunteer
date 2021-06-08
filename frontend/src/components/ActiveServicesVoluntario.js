import React, { useRef, useEffect } from 'react';
import '../scss/ActiveServicesVoluntario.scss';
import Button from './Button';
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

  return (
    <>
      <div className="activeServices-volunteer-container">
        <div className="row">
          <div className="col-12 d-flex justify-content-end mt-5 pt-5 mb-5">
            <Button bgColor="#FFF500" href="./servicos-disponiveis">
              Serviços Disponíveis
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-3">
            <h2>Serviços Ativos</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="servicesList">
              {services.length > 0 ? (
                <ul class="list-group list-group-flush">
                  {services.map((item) => {
                    return (
                      <li class="list-group-item">
                        <div className="col-6 d-flex justify-content-start">
                          <p classname="align-start">
                            <span>Serviço:</span> {item.nome}
                          </p>
                        </div>
                        <div className="col-6 d-flex-justify-content-end">
                          <div className="service-buttonsVolunteer">
                            <button
                              className="button-viewDetails"
                              onClick={() => {
                                window.location.href = `/status-services/${item.idservicos}`;
                              }}
                            >
                              Ver Detalhes
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <h2 className="no-service">
                  Você não tem nenhum serviço ativo ;(
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveServicesVoluntario;
