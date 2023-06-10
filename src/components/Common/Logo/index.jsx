import React from "react";
import './styles.css'
import Logoimg from'./logo.png'
const Logo =()=>{
    return(<div className='Logo'>
       
    <div>
       <img src={Logoimg} alt='logoo'/>
       <span>
        <b>Taste</b>
       </span>
    </div>
    <p>
        <b>Restaurant & BBQ</b>
    </p>

    </div>

    )
}
export default Logo