import React from 'react';
import '../scss/LoginModal.scss';

const LoginModal = ({ modalRef, className }) => {
  return (
    <div ref={modalRef} className={`${className} modal`}>
      <p>Ola mundo</p>
    </div>
  );
};

export default LoginModal;
