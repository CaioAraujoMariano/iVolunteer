import React from 'react';
import '../../scss/RegisterModal.scss';
import axios from 'axios';

const RegisterModal = ({ modalRef, className }) => {
  const [nome, setNome] = React.useState('');
  const [cpf, setCPF] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [date, setDate] = React.useState('');
  const [profile, setProfile] = React.useState('');

  const myChangeHandlerName = (event) => {
    setNome(event.target.value);
  };

  const myChangeHandlerCPF = (event) => {
    setCPF(event.target.value);
  };

  const myChangeHandlerPhone = (event) => {
    setPhone(event.target.value);
  };

  const myChangeHandlerDate = (event) => {
    setDate(event.target.value);
  };

  const myChangeHandlerProfile = (event) => {
    setProfile(event.target.value);
  };

  const sendRegister = () => {
    axios
      .post('http://localhost:8000/usuarios', {
        nome: nome,
        cpf: cpf,
        telefone: phone,
        data_nascimento: date,
      })
      .then((resp) => {
        console.log(resp.data);
      });
  };

  return (
    <div ref={modalRef} className={`${className} register-modal`}>
      <div className="register-modal-container">
        <label htmlFor="name">Nome completo:</label>
        <input
          type="text"
          id="name"
          placeholder="Fulano da Silva"
          onChange={myChangeHandlerName}
        />
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          placeholder="000.000.000/00"
          onChange={myChangeHandlerCPF}
        />
        <label htmlFor="telefone">Telefone</label>
        <input
          type="text"
          id="telefone"
          placeholder="Digite seu telefone"
          onChange={myChangeHandlerPhone}
        />
        <label htmlFor="data-nascimento">Data de nascimento:</label>
        <input
          type="date"
          id="data-nascimento"
          onChange={myChangeHandlerDate}
        />
        <label>Tipo de usuário</label>
        <div className="checkOptions">
          <input
            type="radio"
            id="chooseProfile"
            name="chooseProfile"
            onChange={myChangeHandlerProfile}
          />
          <label htmlFor="chooseProfile">Voluntário</label>
          <input
            type="radio"
            id="chooseProfile"
            name="chooseProfile"
            onChange={myChangeHandlerProfile}
          />
          <label htmlFor="chooseProfile">Vulnerável</label>
        </div>
        <button onClick={sendRegister}>Cadastrar Usuário</button>
      </div>
    </div>
  );
};

export default RegisterModal;
