import React from 'react'

export default function Conditions({setData}) {
  const no="anis sayyad";
  const handleClick=()=> {
    setData((e)=>({...e,rollNo:no}))
  }
  return (
    <div>
      <h1>hello</h1>
      <button onClick={handleClick}>click</button>
    </div>
  )
}
