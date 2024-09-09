import { useState } from 'react';
import './App.css';
import CompOrder from './Components/CompOrder';
import CompOrder1 from './Components/CompOrder1';
function App() {
  const [orderPopup,setOrderPopup]=useState(false);
  const [lists, setList] = useState([]);
  const [details,setDetails]=useState({
    sellerName: '',
    orderAddress: '',
    city:'',
    contact: '',
    km: '',
    charges: '',
    deliveryBoyName: '',
    date:'',
    orderTime:'',
    pickTime:'',
    completeTime:'',
    status:''
    });
    const getCompOrderData=(d)=>{
      //setDetails(d);
        setList([...lists, d]);  // Add new task without losing previous tasks        
    }

    const updateOrder = (index, updatedDetails) => {
      setList((prevList) => 
        prevList.map((item, i) => 
          i === index ? updatedDetails : item  // Update the specific order
        )
      );
    };
  return (
    <div>
      <nav >
        <ul className='nav-ul'>
          <li>Home</li>
          <li onClick={()=>setOrderPopup(true)}>Add</li>
        </ul>
      </nav>
      {orderPopup===true &&(
        <CompOrder onClose={()=> setOrderPopup(false)} CompOrderData={getCompOrderData} setDetails={setDetails} details={details} ></CompOrder>
      )}
      {lists.map((lists,index) => (
          <CompOrder1 key={index} details={lists} setDetails={setDetails} updateOrder={(updatedDetails) => updateOrder(index, updatedDetails)}></CompOrder1>  // Display tasks in a list
        ))}
    </div>
  );
}

export default App;
