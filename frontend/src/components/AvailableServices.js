import React from 'react';
import '../scss/AvailableServices.scss';
import Header from './Header';
import Footer from './Footer';
import ServiceCard from './ServiceCard';

const AvailableServices = () => {
    return (
        <div>
            <Header/>
            <ServiceCard/>
            <Footer/>
        </div>
    )
}

export default AvailableServices
