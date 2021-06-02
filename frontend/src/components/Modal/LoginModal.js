import React from 'react';
import '../../scss/LoginModal.scss';

const LoginModal = ({ modalRef, className }) => {
  return (
    <div ref={modalRef} className={`${className} login-modal`}>
      <div className="login-modal-container">
        <p>Login ;)</p>
        <label htmlFor="cpf">CPF:</label>
        <input type="text" id="cpf" placeholder="111.222.333-00"/>
        <label htmlFor="senha">Senha:</label>
        <input type="text" id="senha" placeholder="*****"/>
      </div>
      
    </div>
  );
};

export default LoginModal;
