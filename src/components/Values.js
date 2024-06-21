import React, { useState } from 'react'

export default function Values() {
  const array = ['Customer-Centric Approach', 'Innovation and Excellence', 'Integrity and Transparency', 'Collaboration and Teamwork'];
  const [value, setValue] = useState(array[0]);
  let i = 0;
  let Interval;
  const HandleTransition = () => {
     Interval = setInterval(() => {
        setValue(array[i]);
        i++;
        if(i === 4){
          i = 0;
        }
    }, 2000);
  }
  const ClearTransition=()=>{
    clearInterval(Interval);
  }
  return (
    <div className='ValuesContainer' onMouseEnter={HandleTransition} onMouseLeave={ClearTransition}>
      <div className='ValuesUpperContainer'>
        <div className='ValuesOUR'>
          OUR
        </div>
        <div className='ValuesCORE'>
          CORE
        </div>
        <div className='ValuesVALUES'>
          VALUES
        </div>
      </div>
      <div className='ValuesBottomContainer'>
        {value}
      </div>
    </div>
  )
}
