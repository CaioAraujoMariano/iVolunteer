import React, { useState, useRef, useEffect } from 'react';
import '../scss/ActiveServices.scss';
import Button from './Button';
import NewServiceModal from './Modal/NewServiceModal';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const ActiveServices = () => {
  const [show, setShow] = React.useState(false);
  const [services, setServices] = React.useState([]);
  const [nome, setNome] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [limit, setLimit] = React.useState('');

  const myChangeHandlerName = (event) => {
    setNome(event.target.value);
  };

  const myChangeHandlerDescription = (event) => {
    setDescription(event.target.value);
  };

  const myChangeHandlerLimit = (event) => {
    setLimit(event.target.value);
  };

  const sendService = () => {
    let id_vulneravel = localStorage.getItem('id');
    axios
      .post('http://localhost:8000/servicos', {
        nome: nome,
        descricao: description,
        data_limite: limit,
        id_vulneravel: id_vulneravel,
      })
      .then((resp) => {
        alert('Serviço cadastrado com sucesso!');
        window.location.reload();
      });
  };

  const deleteService = (id) => {
    axios
      .delete(`http://localhost:8000/servicos/${id}`
      )
      .then((resp) => {
        alert('Serviço deletado!');
        window.location.reload();
      });
  };

  useEffect(() => {
    let id_vulneravel = localStorage.getItem('id');
    axios
      .post(`http://localhost:8000/servicos/usuario`, {
        id: id_vulneravel,
      })
      .then((resp) => {
        setServices(resp.data);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="activeServices-container">
      <div className="row">
        <div className="col-12 d-flex justify-content-end mt-5 pt-5 mb-5">
          <div onClick={handleShow}>
            <Button bgColor="#FFF500">Novo Serviço</Button>
          </div>
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
                        <div className="service-buttons">
                          <button
                            className="button-viewDetails"
                            onClick={() => {
                              window.location.href = `/status-services/${item.idservicos}`;
                            }}
                          >
                            Ver Detalhes
                          </button>
                          <button className="button-deleteService" onClick={()=>{
                            deleteService(item.idservicos)
                          }}>
                            Excluir
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
      <Modal 
      show={show} 
      onHide={handleClose}
      className="modalNewServiceContainer">
        <Modal.Header closeButton>
          <Modal.Title>Novo Serviço ;)</Modal.Title>
        </Modal.Header>
        <Modal.Body className="new-service-modal-container">
          <label htmlFor="service">Nome do Serviço:</label>
          <input
            type="text"
            id="service"
            placeholder="Exemplo: Compra no mercado."
            onChange={myChangeHandlerName}
          />
          <label htmlFor="description">Descrição:</label>
          <input
            type="text"
            id="description"
            placeholder="Escreva detalhadamente o serviço ;)"
            onChange={myChangeHandlerDescription}
          />
          <label htmlFor="date-limit">Data Limite:</label>
          <input type="date" id="date-limit" onChange={myChangeHandlerLimit} />
        </Modal.Body>
        <Modal.Footer>
          <button className="buttonRegisterService" onClick={sendService} >
            Cadastrar Novo Serviço
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ActiveServices;
