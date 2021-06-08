import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../scss/StatusServices.scss';
import Header from './Header';
import Background from './Background';
import Button from './Button';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const StatusServices = () => {
  const nivel_usuario = localStorage.getItem('nivel_usuario');
  const [service, setServicos] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [services, setServices] = React.useState([]);
  const [nome, setNome] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [limit, setLimit] = React.useState('');
  const { id } = useParams();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  useEffect(() => {
    fetch(`http://localhost:8000/servicos/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setServicos(result);
      });
  }, [id]);

  return (
    <div className="status-services-container">
      <Header />
      <div className="container-fluid mt-5">
        <div className="row pt-5 pb-5">
          <div className="col-sm-12 col-md-6 d-flex justify-content-end mt-5">
            <Background title="Acompanhe o status do seu serviço ;)">
            </Background>
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column  mt-5">
            <div className="row">
              <div className="CTAButtons mt-5">
                {nivel_usuario == 1 && (
                  <Button href="/meus-servicos-vulneravel" bgColor="#FFF500">
                    Meus Serviços
                  </Button>
                )}
                {nivel_usuario == 0 && (
                  <Button href="/meus-servicos" bgColor="#FFF500">
                    Meus Serviços
                  </Button>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="title-serviceStatus">Status do Serviço</h2>
                {service.map((item) => {
                  return (
                    <div className="status-container">
                      <div className="title">
                        <span>Serviço:</span>
                        {item.nome}
                      </div>
                      <div className="description">
                        <span>Descrição:</span>
                        {item.descricao}
                      </div>
                      <div className="limite">
                        <span>Data limite:</span>
                        {item.limite}
                      </div>
                      <div className="status">
                        <span>Status:</span>
                        {item.id_voluntario === null && (
                          <p>Aguardando Voluntário</p>
                        )}
                        {item.id_voluntario !== null && <p>Em andamento</p>}
                        {item.id_voluntario === 'Finalizado' && <p>Finalizado</p>}
                      </div>
                      {nivel_usuario == 0 && (
                        <button className="button-finalizarServico">
                          Finalizar Serviço
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Cadastro</Modal.Title>
                </Modal.Header>
                <Modal.Body className="new-service-modal-container">
                  <label htmlFor="service">Nome do Serviço ;)</label>
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
                    placeholder="Escreva os detalhes específicos do serviço como: Itens, região e entre outros detalhes ;)"
                    onChange={myChangeHandlerDescription}
                  />
                  <label htmlFor="date-limit">Data Limite:</label>
                  <input
                    type="date"
                    id="date-limit"
                    onChange={myChangeHandlerLimit}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <button
                    className="buttonRegisterService"
                    onClick={sendService}
                  >
                    Cadastrar Novo Serviço
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StatusServices;
