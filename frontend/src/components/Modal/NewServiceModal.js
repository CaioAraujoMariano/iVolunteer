import React from 'react';
import '../../scss/NewServiceModal.scss';
import axios from 'axios';

const NewServiceModal = ({ modalRef, className }) => {
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

  return (
    <div ref={modalRef} className={`${className} createNewService-modal`}>
      <div className="newService-modal-container">
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
        <input type="date" id="date-limit" onChange={myChangeHandlerLimit} />
        <button className="buttonRegisterService" onClick={sendService}>
          Cadastrar Novo Serviço
        </button>
      </div>
    </div>
  );
};

export default NewServiceModal;
