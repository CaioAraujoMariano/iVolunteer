import React from 'react';
import '../scss/HomeContent.scss';
import Button from './Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import MaskedInputCpf from './MaskedInputCpf';

const HomeContent = ({ onClickFunction }) => {
  const [registerShow, setRegisterShow] = React.useState(false);
  const [nome, setNome] = React.useState('');
  const [cpf, setCPF] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [date, setDate] = React.useState('');
  const [profile, setProfile] = React.useState();
  const [password, setPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const myChangeHandlerName = (event) => {
    setNome(event.target.value);
  };

  const handleRegisterClose = () => setRegisterShow(false);
  const handleRegisterShow = () => setRegisterShow(true);

  const myChangeHandlerCPF = (event) => {
    setCPF(event.target.value);
  };

  const myChangeHandlerPhone = (event) => {
    setPhone(event.target.value);
  };

  const myChangeHandlerDate = (event) => {
    setDate(event.target.value);
  };

  const myChangeHandlerAddress = (event) => {
    setAddress(event.target.value);
  };

  const myChangeHandlerProfile = (event) => {
    setProfile(event.target.value);
  };

  const myChangeHandlerPassword = (event) => {
    setPassword(event.target.value);
  };
  const sendRegister = () => {
    axios.post('http://localhost:8000/usuarios', {
      nome: nome,
      cpf: cpf,
      telefone: phone,
      data_nascimento: date,
      nivel_usuario: parseInt(profile),
      senha: password,
      endereco: address,
    });
  };
  return (
    <div className="home-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center position-relative">
            <p>Nossa missão é ajudar o próximo ;)</p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-end mt-5">
            <div onClick={handleRegisterShow}>
              <Button href="#" bgColor="#FFF500">
                Cadastre-se aqui ;)
              </Button>
            </div>
            <Modal 
            show={registerShow} 
            onHide={handleRegisterClose}
            className="modalRegisterContainer">
              <Modal.Header closeButton>
                <Modal.Title>Cadastro</Modal.Title>
              </Modal.Header>
              <Modal.Body className="register-modal-container">
                <label htmlFor="name">Nome completo:</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Digite seu nome completo"
                  onChange={myChangeHandlerName}
                />
                <label htmlFor="cpf">CPF:</label>
                <MaskedInputCpf
                  type="cpf"
                  id="text"
                  placeholder="000.000.000/00"
                  onChange={myChangeHandlerCPF}
                />
                <label htmlFor="endereco">Endereço:</label>
                <input
                  type="text"
                  id="endereco"
                  placeholder="Rua Alves da Cunha Nº 556"
                  onChange={myChangeHandlerAddress}
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
                    value="0"
                    onChange={myChangeHandlerProfile}
                    className="inputRadioVoluntario"
                  />
                  <label htmlFor="chooseProfile">Voluntário</label>
                  <input
                    type="radio"
                    id="chooseProfile"
                    name="chooseProfile"
                    value="1"
                    onChange={myChangeHandlerProfile}
                    className="inputRadioVulneravel"
                  />
                  <label htmlFor="chooseProfile">Vulnerável</label>
                </div>
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Crie uma senha"
                  onChange={myChangeHandlerPassword}
                />
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Confirme sua senha ;)"
                  onChange={myChangeHandlerPassword}
                />
                <a href="#">Possui um cadastro?</a>
              </Modal.Body>
              <Modal.Footer>
                <button onClick={sendRegister} className="registerButton">Cadastrar Usuário</button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
