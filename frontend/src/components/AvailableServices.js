import React, { useEffect, useRef } from 'react';
import '../scss/AvailableServices.scss';
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const AvailableServices = () => {
  const [servicos, setServicos] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [serviceId, setServiceId] = React.useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch('http://localhost:8000/servicos')
      .then((res) => res.json())
      .then((result) => {
        setServicos(result);
      });
  }, []);

  let id_voluntario = localStorage.getItem('id');
  const sendConfirmation = (id) => {
    axios.put(`http://localhost:8000/servicos/${id}`, {
      id_voluntario: id_voluntario,
    });
  };

  return (
    <div>
      <Header />
      <div className="service-card-container">
        <div className="container">
          <div className="row">
            {servicos.map((item) => {
              return (
                <>
                  <div className="col-12 col-md-4 mb-5">
                    <div class="card serviceCard">
                      <div class="card-header serviceCardTitle">Serviço</div>
                      <div class="card-body">
                        <h5 class="card-title serviceTitle">{item.nome}</h5>
                        <p class="card-text serviceDescription">
                          {item.descricao}
                        </p>
                        <button
                          className="btn btn-success confirmationButton"
                          onClick={handleShow}
                        >
                          Ser Voluntário
                        </button>
                      </div>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Cadastro</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="new-service-modal-container">
                          <div>
                            <h2>
                              Tem certeza que deseja se voluntariar para este
                              serviço?
                            </h2>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <button
                            onClick={() => {
                              sendConfirmation(serviceId);
                            }}
                          >
                            Sim, quero ser um voluntário.
                          </button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AvailableServices;
