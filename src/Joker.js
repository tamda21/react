import React from 'react'

function Joker({joker}){
  let listJok = joker.map((j)=>{
    return(
      <div key={j.id}>
          <div>Name :{j.name}</div>
          <div>Age :{j.age}</div>
          <div>Color :{j.color}</div>
          <hr />
      </div>
      )
  })
  return (
    <div>
    {listJok}
   </div>
    )
}
export default Joker 