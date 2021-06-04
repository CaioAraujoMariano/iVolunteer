import React from 'react'
import '../../scss/ServiceCardModal.scss';

const ServiceCardModal = ( modalRef, className ) => {
    return (
        <div ref={modalRef} className={`${className} service-modal`}>
            <div className="service-card-modal">
                <h2>Tem certeza que deseja se voluntariar para este serviço?</h2>
                <button>Sim, quero ser um voluntário.</button>
            </div>
        </div>
    )
}

export default ServiceCardModal;
