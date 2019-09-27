import React from 'react'
import background from '../../design files/background.jpg'
//import LoginButton from '../LoginComponents/Login'

const BackgroundImage = () => {
    return (
        <div>
            <img src={background} alt="Background Image" className="background"/>
           
        </div>
    );
}

export default BackgroundImage
