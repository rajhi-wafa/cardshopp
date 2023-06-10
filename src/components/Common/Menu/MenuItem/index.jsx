import React from "react";
import ButtonAddRemoveItem from '../../ButtonAddRemouveItem';
import './styles.css';
const MenuItem =({item})=>{
    const {id,name,info,price,img}=item
    return(<div className='item'>
       
   <img src={img} alt="no img"/> 
   <div className='item-head-desc'>
    <p className=' head-desc-name'>
        {name}

    </p>
    <p className='head-desc-info'>
        <small> {info}</small>

    </p>


   </div>
   <div className='item-foot-desc'>
    <span className='class-desc-price'>${price}</span>
    <ButtonAddRemoveItem quantity={1}/>
   </div>

    </div>

    )
}
export default MenuItem