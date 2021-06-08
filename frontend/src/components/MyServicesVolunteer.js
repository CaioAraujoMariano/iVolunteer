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
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex justify-content-end mt-5 pt-5">
            <Background title="Acompanhe os seus serviços ativos ;)" />
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center mt-5">
            <ActiveServicesVoluntario />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyServicesVolunteer;
