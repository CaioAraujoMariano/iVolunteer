import React from 'react';
import '../../scss/RegisterModal.scss';

const RegisterModal = ({ modalRef, className }) => {
  return (
    <div ref={modalRef} className={`${className} register-modal`}>
      <div className="register-modal-container">
        <label htmlFor="name">Nome completo:</label>
        <input type="text" id="name" placeholder="Fulano da Silva" />
        <label htmlFor="cpf">CPF:</label>
        <input type="text" id="cpf" placeholder="000.000.000/00" />
        <label htmlFor="endereco">Endereço:</label>
        <input type="text" id="endereco" placeholder="Digite seu endereço" />
        <label htmlFor="data-nascimento">Data de nascimento:</label>
        <input type="date" id="data-nascimento" />
        <label>Tipo de usuário</label>
          <div className="checkOptions">
            <input type="checkbox" id="voluntario" name="voluntario" />
            <label htmlFor="voluntario">Voluntário</label>
          </div>
          <div className="checkOptions">
            <input type="checkbox" id="vulneravel" name="vulneravel" />
            <label htmlFor="vulneravel">Vulnerável</label>
          </div>
        <button>Cadastrar Usuário</button>
      </div>
    </div>
  );
};

export default RegisterModal;
