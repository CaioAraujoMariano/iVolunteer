import React from 'react';
import '../scss/MyServicesVolunteer.scss';
import Header from './Header';
import Background from './Background';
import ActiveServicesVoluntario from './ActiveServicesVoluntario';
import Footer from './Footer';

const MyServicesVolunteer = () => {
  return (
    <div>
      <Header />
      <div className="myServices-content">
        <Background title="Olá Fulano!">
          Acompanhe os seus serviços ativos ;)
        </Background>
        <ActiveServicesVoluntario />
      </div>
      <Footer />
    </div>
  );
};

export default MyServicesVolunteer;
