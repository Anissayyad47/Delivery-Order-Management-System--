import React, { useState } from 'react'
import Conditions from './Conditions'
export default function Experiment() {
  const [data,setData]=useState({
    name:'',
    age:'',
    rollNo:''
  })
  const handleClick=()=> {
    const yourName="Anis Sayyad"
    setData({name:yourName,age:21});
  }
  
  return (
    <div>
      <h1>you are : {data.name}</h1>
      <h1>your age : {data.age}</h1>
      <h1>Roll no: {data.rollNo}</h1>
      <button onClick={handleClick}>click</button>
      <Conditions setData={setData}></Conditions>
    </div>
  )
}
