import React, { useState } from 'react'
import { FaBirthdayCake, FaHandsWash } from 'react-icons/fa'

const Listitem = (props) => {
  const [clicked, setClicked] = useState(false)
  return (
    <div className='flex justify-around items-center bg-red-500 p-3 rounded-3xl'>
      <img src={props.img} alt="avatar" className='w-16 h-16 rounded-full' />
      <div className='text-xl text-white font-semibold my-auto'>
        <h3>{props.name}</h3>
        <p className='text-sm font-normal'>{props.relation}</p>
      </div>
      <div className='w-16 h-16 rounded-full bg-white flex flex-col justify-center items-center' onClick={() => setClicked(true)}>
        {clicked ? <><FaHandsWash className='text-red-500 text-2xl' /><p className='text-xs text-red-500'>Celebrate</p></> : <><FaBirthdayCake className='text-2xl' /><p>Wish</p></>}
      </div>
    </div>
  )
}

export default Listitem
