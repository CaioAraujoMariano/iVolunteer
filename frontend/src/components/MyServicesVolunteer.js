import React from 'react';
import '../scss/MyServicesVolunteer.scss';
import Header from './Header';
import Background from './Background';
import ActiveServices from './ActiveServices';
import Footer from './Footer';

const MyServices = () => {
  return (
    <div>
      <Header />
      <div className="myServices-content">
        <Background title="Olá Fulano!">
          Acompanhe os seus serviços ativos ;)
        </Background>
        <ActiveServices />
      </div>
      <Footer />
    </div>
  );
};

export default MyServices;
