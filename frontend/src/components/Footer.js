import React from 'react';
import '../scss/Footer.scss';

const Footer = () => {
  return (
    <div className="footer-container fixed-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-md-start">
            <a href="#">Quem Somos?</a>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-md-end">
            <p>Copyright</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
