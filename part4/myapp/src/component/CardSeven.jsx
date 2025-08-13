import React from 'react'

export default function CardSeven(){
 const val = 10;
 const getidx = () =>{
   return val;
 }

 const value = () => val === 0 ? 'Zero Value': `The value is : ${val}`
 const getvalue = () =>{
  if(val === 0){
    return 'Zero Value'
  } else {
    return`The value is : ${val}`
  }
 }
 return (
   <div>
     <p>Index number is : {val}</p>
     <p>Index number is : {getidx()} </p>
     <p>{value()} </p>
     <p>{getvalue()} </p>
   </div>
 )
}