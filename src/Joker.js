import React from 'react'

function Joker({joker,deleteData}){
  let listJok = joker.map((j)=>{
    return(
      <div key={j.id} className="show">
          <div>Name :{j.name}</div>
          <div>Age :{j.age}</div>
          <div>Color :{j.color}</div>
          <button onClick={()=>{deleteData(j.id)}}>Delete</button>
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