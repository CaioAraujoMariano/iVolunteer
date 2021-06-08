import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../scss/StatusServices.scss';
import Header from './Header';
import Background from './Background';
import Button from './Button';
import Footer from './Footer';
import NewServiceModal from './Modal/NewServiceModal';

const StatusServices = () => {
  const nivel_usuario = localStorage.getItem('nivel_usuario')
  const [newServiceShow, setNewServiceShow] = React.useState('');
  const [service, setServicos] = React.useState([]);
  const [closeButton, setCloseButton] = React.useState('');
  const modalRef = useRef(null);
  const { id } = useParams();

  const showNewServiceModal = () => {
    setNewServiceShow('show');
    onClickClose();
  };

  const closeModalFunction = (event) => {
    setNewServiceShow('');
    setCloseButton('');
  };

  function onClickClose() {
    if (setNewServiceShow === '') {
      setCloseButton('');
    } else {
      setCloseButton('show');
    }
  }

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
      <Background title="Olá Fulano!">
        Acompanhe os seus serviços ativos ;)
      </Background>
      <div className="CTAButtons">
        {nivel_usuario == 1 &&
          <div onClick={showNewServiceModal}>
            <Button bgColor="#FFF500">Novo Serviço</Button>
          </div>
        }
        {nivel_usuario == 1 &&
          <Button href="/meus-servicos-vulneravel" bgColor="#FFFFFF">
            Meus Serviços
          </Button>
        }
        {nivel_usuario == 0 &&
          <Button href="/meus-servicos" bgColor="#FFFFFF">
            Meus Serviços
          </Button>
        }
      </div>
      <p className="p_status">Status do Serviço</p>
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
              {item.status === 'undefined' && <p>Aguardando Voluntário</p>}
              {item.status === 'Ativo' && <p>Em andamento</p>}
              {item.status === 'Finalizado' && <p>Finalizado</p>}
            </div>
            <button className='button-finalizarServico'>Finalizar Serviço</button>
          </div>
        );
      })}
      <div className="modals">
        <NewServiceModal className={newServiceShow} modalRef={modalRef} />
        <div
          className={`${closeButton} closeModal`}
          onClick={closeModalFunction}
        >
          Fechar X
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StatusServices;
