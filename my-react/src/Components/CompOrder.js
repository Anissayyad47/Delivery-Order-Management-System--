//import React, { useState } from 'react'
import "./Css/CompOrder.css";

export default function CompOrder({onClose,CompOrderData,setDetails,details}) {
  
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setDetails((e)=>{
            return {...e,[name]:value}
        });
    }
    const handleClick=()=> {
      onClose();
      CompOrderData(details);
      console.log(details);
      
    }
    
  return (
    <div className='Order-template'>
        <ul className='Order-list'>
            <li><input type='text' placeholder='Seller name' name='sellerName' onChange={handleChange}></input></li>
            <li><input type='text' placeholder='Order Address' name='orderAddress' onChange={handleChange}></input></li>
            <li><input type='text' placeholder='Order City' name='city' onChange={handleChange}></input></li>
            <li><input type='text' placeholder=' Order Contact' name='contact' onChange={handleChange}></input></li>
            <li><input type='text' placeholder='Distance in Km' name='km' onChange={handleChange}></input ></li>
            <li><input type='text' placeholder='Charges' name='charges' onChange={handleChange}></input></li>
            <li><button onClick={onClose}>Cancel</button><button onClick={handleClick}>Place Order</button></li>
         </ul>
    </div>

  )
}
