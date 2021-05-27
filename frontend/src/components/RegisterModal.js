import React from 'react';
import '../scss/RegisterModal.scss';

const RegisterModal = ({ modalRef, className }) => {
  return (
    <div ref={modalRef} className={`${className} modal`}>
      <p>Ola mundo</p>
    </div>
  );
};

export default RegisterModal;
