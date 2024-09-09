import React, { useState,useEffect } from 'react'
import "./Css/CompOrder1.css"
import Details from './Details';
export default function CompOrder1({details,updateOrder}) {
  const [currentDate, setCurrentDate] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const [detailPopup,setDetailPopup]=useState(false);
  const [pick,setPick]=useState(false);
  const [deliveryBoy,setDeliveryBoy]=useState("");

  useEffect(() => {
    const now = new Date();
    setCurrentDate(now.toLocaleDateString()); // Get only the date
    setCurrentTime(now.toLocaleTimeString()); // Get only the time
  }, []);
  
  const placeOrder=()=> {
      updateOrder({
    ...details,
    orderTime:currentTime,
    date:currentDate
  });
  }

  const handlePick = (e) => {
    if (e.target.value === "Pick ?") {
      setPick(true);
      setDeliveryBoy("Anis");

      const now = new Date();
      //update attributes
      updateOrder({
        ...details,
        pickTime:now.toLocaleTimeString(),
        deliveryBoyName: "Anis",
        status:"In-Processing"
      });
    }
  };
  return (
    <>
    <div className='Order-list'>
    <div className='order1'>
      <h2>{details.sellerName}</h2><h2>{details.city}</h2>
      <h2>{currentDate}</h2>
      <h2>{currentTime}</h2>
      <h2 onClick={()=> setDetailPopup(true)}>Details</h2>
      {pick ===true ? (
        <select>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      ):(
        <select onChange={handlePick}>
        <option>Not Picked</option>
        <option>Pick ?</option>
      </select>
      )}
    </div>
    {detailPopup && (
      <Details detailPopup={()=> setDetailPopup(false)} sendDetails={details} currentDate={currentDate} currentTime={currentTime}></Details>
    )}
    {pick===true && (
      <div className='Picked-by'>. . . picked by {deliveryBoy}</div>
    )}
    </div>
    <div>boy:{details.deliveryBoyName}
      <p>curent data:{details.date}</p>
      <p>order time:{details.orderTime}</p>
      <p>pick time:{details.pickTime}</p>
      <p>drop time:{details.completeTime}</p>
      <p>statis "{details.status}</p>
    </div>
    </>

  )
}
