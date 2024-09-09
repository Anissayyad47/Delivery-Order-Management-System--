import React from 'react'

export default function Comp1({onClose}) {
  return (
    <div>
      <input type=' text' placeholder='Enter name'></input>
      <br></br>
      <input type='text' placeholder='age'></input>
      <br></br>
      <button onClick={onClose}>Add</button>
    </div>
  )
}
