import React from 'react';
import '../scss/MyServices.scss';
import Header from './Header';
import Background from './Background';
import ActiveServices from './ActiveServices';

const MyServices = () => {
  return (
    <div>
      <Header />
      <div className="myServices-content">
        <Background>Acompanhe os seus serviços ativos ;)</Background>
        <ActiveServices />
      </div>
    </div>
  );
};

export default MyServices;
