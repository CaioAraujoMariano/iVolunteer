import React from 'react'
import '../scss/HomeContent.scss'
import ButtonContent from './ButtonContent'
import HomeImage1 from '../img/Ellipse14.png'
import HomeImage2 from '../img/Ellipse17.png'


const HomeContent = () => {
    return (
        <div className="home-content">
            <p>Seja um vonluntário e ajude as pessoas ;)</p>
            <img src={HomeImage2} className="home-image2"/>
            <img src={HomeImage1} className="home-image1"/>
            <ButtonContent href="#" bgColor="#FFF500">
                Cadastre-se aqui ;) 
            </ButtonContent>
        </div>
    )
}

export default HomeContent
