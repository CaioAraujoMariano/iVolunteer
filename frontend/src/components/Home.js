import React, { useRef } from 'react';
import '../scss/Home.scss';
import Header from './Header';
import HomeContent from './HomeContent';
import Footer from './Footer';
import Button from './Button';
import Background from './Background';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const Home = () => {
  const [loginShow, setLoginShow] = React.useState(false);
  const [registerShow, setRegisterShow] = React.useState(false);
  const [nome, setNome] = React.useState('');
  const [cpf, setCPF] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [date, setDate] = React.useState('');
  const [profile, setProfile] = React.useState();
  const [password, setPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [cpfLogin, setCpfLogin] = React.useState('');
  const [passwordLogin, setPasswordLogin] = React.useState('');

  const myChangeHandlerCPFLogin = (event) => {
    setCpfLogin(event.target.value);
  };

  const myChangeHandlerPasswordLogin = (event) => {
    setPasswordLogin(event.target.value);
  };

  const sendLogin = () => {
    axios
      .post('http://localhost:8000/usuarios/login', {
        cpf: cpfLogin,
        senha: passwordLogin,
      })
      .then((resp) => {
        if (resp.data.length > 0) {
          let nivel_usuario = resp.data[0].nivel_usuario;
          if (nivel_usuario === 1) {
            window.location.href = '/meus-servicos-vulneravel';
          } else {
            window.location.href = '/meus-servicos';
          }
          localStorage.clear();
          localStorage.setItem('id', resp.data[0].idusuarios);
          localStorage.setItem('nome', resp.data[0].nome);
          localStorage.setItem('nivel_usuario', resp.data[0].nivel_usuario);
        } else {
          alert('Usuário e/ou senha incorretos');
        }
      });
  };

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

  const handleLoginClose = () => setLoginShow(false);
  const handleLoginShow = () => setLoginShow(true);
  const handleRegisterClose = () => setRegisterShow(false);
  const handleRegisterShow = () => setRegisterShow(true);

  return (
    <div>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row pt-5 pb-5">
          <div className="col-sm-12 col-md-6 d-flex justify-content-end mt-5">
            <Background title="Nossa missão é ajudar o próximo ;)" />
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-end mt-5">
            <div className="CTAButtons mt-5">
              <div onClick={handleLoginShow}>
                <Button bgColor="#FFFFFF">Login</Button>
              </div>
              <div onClick={handleRegisterShow}>
                <Button bgColor="#FFF500">Cadastre-se</Button>
              </div>
            </div>
            <Modal show={registerShow} onHide={handleRegisterClose}>
              <Modal.Header closeButton>
                <Modal.Title>Cadastro</Modal.Title>
              </Modal.Header>
              <Modal.Body className="register-modal-container">
                <label htmlFor="name">Nome completo:</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Fulano da Silva"
                  onChange={myChangeHandlerName}
                />
                <label htmlFor="cpf">CPF:</label>
                <input
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
                  />
                  <label htmlFor="chooseProfile">Voluntário</label>
                  <input
                    type="radio"
                    id="chooseProfile"
                    name="chooseProfile"
                    value="1"
                    onChange={myChangeHandlerProfile}
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
              </Modal.Body>
              <Modal.Footer>
                <button onClick={sendRegister}>Cadastrar Usuário</button>
              </Modal.Footer>
            </Modal>

            <Modal
              show={loginShow}
              onHide={handleLoginClose}
              className="modalContainer"
            >
              <Modal.Header className="modalHeader" closeButton>
                <Modal.Title className="modalTitle">Login</Modal.Title>
              </Modal.Header>
              <Modal.Body className="login-modal-container">
                <label htmlFor="cpf">CPF:</label>
                <input
                  type="text"
                  id="cpf"
                  placeholder="000.000.000-00"
                  onChange={myChangeHandlerCPFLogin}
                />
                <label htmlFor="senha">Senha:</label>
                <input
                  type="password"
                  id="senha"
                  placeholder="Insira sua senha ;)"
                  onChange={myChangeHandlerPasswordLogin}
                />
              </Modal.Body>
              <Modal.Footer>
                <button onClick={sendLogin} className="loginButton">
                  Entrar
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="row">
          <HomeContent />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
