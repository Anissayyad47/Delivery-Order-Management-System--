import React, { useState } from 'react'
import Comp1 from './Components/Comp1'

export default function Popup() {
    const [one,setOne]=useState(false);
  return (
    <div>
      <h1>Hi there !</h1>
      <h1>are you above age 18?  if yes <button onClick={()=> setOne(true)}>Click this shit!</button></h1>
      {one===true && (
        <Comp1 onClose={()=>setOne(false)}></Comp1>
      )}
    </div>
  )
}
