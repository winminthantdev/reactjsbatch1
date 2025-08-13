import React from 'react'


export default function CardEight(){

 const listgroup = {
  // backgroundColor: 'blue',
  borderRadius: '5px',
  padding: '8px 16px',
  color: 'red',
  listStyle: 'none'
 }

 const  colors = ['red','green', 'blue', 'white', 'black']
 return (
  <div>
   <ul style={listgroup}>
    {colors.map((color,idx) =>(
     <li key={idx}>{color}</li>
    ))}
   </ul>
  </div>
 )
}