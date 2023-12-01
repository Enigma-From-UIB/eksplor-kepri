import React from 'react'
import luti from "../files/Kulinerpage/luti.jpg";


function kuliner() {
  return (
    <div className=''>
        <h1 className='text-center text-4xl font-extrabold text-white'>
            Silahkan yang bagiannya kuliner, mulai coding di file ini :D <br/>
        </h1>
        <img src={luti} alt="luti"/>
    </div>
  )
}

export default kuliner