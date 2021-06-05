import React from 'react';
import '../../scss/LoginModal.scss';
import axios from 'axios';

const LoginModal = ({ modalRef, className }) => {
  const [cpf, setCpf] = React.useState('');
  const [password, setPassword] = React.useState('');

  const myChangeHandlerCPF = (event) => {
    setCpf(event.target.value);
  };

  const myChangeHandlerPassword = (event) => {
    setPassword(event.target.value);
  };

  const sendLogin = () => {
    axios
      .post('http://localhost:8000/usuarios/login', {
        cpf: cpf,
        senha: password,
      })
      .then((resp) => {
        if (resp.data.length > 0) {
          let nivel_usuario = resp.data[0].nivel_usuario;
          if (nivel_usuario === 1) {
            window.location.href = '/meus-servicos';
          } else {
            window.location.href = '/voluntario';
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

  return (
    <div ref={modalRef} className={`${className} login-modal`}>
      <div className="login-modal-container">
        <p>Login ;)</p>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          placeholder="111.222.333-00"
          onChange={myChangeHandlerCPF}
        />
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          placeholder="*****"
          onChange={myChangeHandlerPassword}
        />
        <button onClick={sendLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginModal;
