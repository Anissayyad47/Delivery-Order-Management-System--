import React from 'react'
import "./Css/Details.css"
import { FiX } from 'react-icons/fi';

export default function Details({detailPopup,sendDetails,currentTime,currentDate}) {
  
  return (
    <div className='Detail-box'>
        <div className='detail-cancel'>
        <h1>Order Details</h1>
        <FiX className='detail-cancel-icon' onClick={detailPopup}></FiX>
        </div>
        <div className='detail-s-a-c'>
            <p className='detail-title'>Seller Name :</p>
            <p className='detail-input'>{sendDetails.sellerName}</p>
        </div>
        <div className='detail-s-a-c'>
            <p className='detail-title'>Order Address :</p>
            <p className='detail-input'>{sendDetails.orderAddress}</p>
        </div>
        <div className='detail-s-a-c'>
            <p className='detail-title'>Customer Contact :</p>
            <p className='detail-input'>{sendDetails.contact}</p>
        </div>
        <div className='detail-date-time'>
            <p className='detail-title1'>Order Date :</p>
            <p className='detail-input1'>{currentDate}</p>
            <p className='detail-title1-1'>Order Time :</p>
            <p className='detail-input1'>{currentTime}</p>
        </div>
        <div className='detail-km-charges'>
            <p className='detail-title1'>Order Distance in Km</p>
            <p className='detail-input1'>{sendDetails.km}</p>
            <p className='detail-title1-1'>Delivery Charges:</p>
            <p className='detail-input1'>{sendDetails.charges}</p>
        </div>
        <div className='detail-s-a-c'>
            <p className='detail-title'>Delivery Status :</p>
            <p className='detail-input'>status details</p>
        </div>
    </div>
  )
}
