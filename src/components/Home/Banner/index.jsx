import React from "react";
import './styles.css';
import imag1 from './banner.png'
import Logo from "../../Common/Logo";

const Banner=()=>{
    return(<header>
        <div className='header-content'>
            <Logo/>
            <div className='content-main'>
                <h1>Delicious food for your cravings </h1>
                <p>we made fresh and healthy  mals with different recipes</p>
                <button>View Menu <i className='fas fa-long-arrow-alt-right'></i></button>

            </div>

        </div>
        <img src={imag1}
     alt="pas imag" className='header-img'/>
    </header>
    )
}
export default Banner