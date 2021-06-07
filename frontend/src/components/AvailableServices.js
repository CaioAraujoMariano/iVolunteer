import React, { useEffect, useRef } from 'react';
import '../scss/AvailableServices.scss';
import Header from './Header';
import Footer from './Footer';
import ServiceCardModal from './Modal/ServiceCardModal'

const AvailableServices = () => {
  const [servicos, setServicos] = React.useState([]);
  const [serviceCardShow, setServiceCardShow] = React.useState('');
  const [closeButton, setCloseButton] = React.useState('');
  const modalRef = useRef(null);

  const showServiceCardModal = () => {
    setServiceCardShow('show');
    onClickClose();
  };

  const closeModalFunction = (event) => {
    setServiceCardShow('');
    setCloseButton('');
  };

  function onClickClose() {
    if (setServiceCardShow === '') {
      setCloseButton('');
    } else {
      setCloseButton('show');
    }
  }


  useEffect(() => {
    fetch('http://localhost:8000/servicos')
      .then((res) => res.json())
      .then((result) => {
        setServicos(result);
      });
  }, []);

  return ( 
    <div>
      <Header />
      <div className="service-card-container">
        {servicos.map((item) => {
          return (
            <>
              <div className="service-card">
                <div className="service-card-title">
                  <h3>Serviço:</h3>
                  <p>{item.nome}</p>
                </div>
                <div className="service-card-content">
                  <p>{item.descricao}</p>
                  <button className="button-voluntario" onClick={showServiceCardModal}>
                    Ser Voluntário
                  </button>
                </div>
              </div>
              <div className="modals">
                <ServiceCardModal className={serviceCardShow} modalRef={modalRef} serviceid={item.idservicos}/>
                <div
                  className={`${closeButton} closeModal`}
                  onClick={closeModalFunction}
                  >
                  X
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default AvailableServices;
