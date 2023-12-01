import React from 'react'
import Luti from "../files/Luti gendang.jpg";


function kuliner() {
  return (
    <div className=''>
        <h1 className='text-center text-4xl font-extrabold text-white'>
            Silahkan yang bagiannya kuliner, mulai coding di file ini :D <br/>
        </h1>
        <img src={Luti} alt="Luti Gendang"/>
    </div>
  )
}

export default kuliner