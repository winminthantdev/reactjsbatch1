import React from 'react'


const accessories = {
 monitor:'AOC',
 keyboard: 'Logictech',
 mouse : 'A4Tech',
 speaker : 'Microlab'
}
const DivEight = () => {
return (
  <div>
    <h1>My Desktop</h1>
    <div>
      <ul>
        <li>{JSON.stringify(accessories)}</li>
        <li>{JSON.stringify(Object.keys(accessories))}</li>
        <li>{JSON.stringify(Object.values(accessories))}</li>
      </ul>

      <ul>
        {Object.keys(accessories).map((key) => (
          <li key={key}>
            {key} = {accessories[key]}
          </li>
        ))}
      </ul>
      <ul>
        {Object.values(accessories).map((value,idx) => (
          <li key={idx}>
            {++idx}= {value}
          </li>
        ))}
      </ul>
    </div>
  </div>
)
}

export default DivEight;