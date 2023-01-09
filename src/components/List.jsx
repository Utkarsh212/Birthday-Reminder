import React, { useEffect, useState } from 'react'
import Listitem from './Listitem'

const List = (props) => {
    const handleClick = () => {
        localStorage.removeItem("birthdays")
        props.setData([])
    }
    return (
        <div className='bg-white w-3/4 text-center p-5 rounded-3xl space-y-5'>
            {props.data.length ? <ul className='space-y-3'>
                {props.data.map(birthday => <Listitem key={birthday.id} {...birthday} />)}
            </ul> : <p className='text-xl font-semibold'>No Birthdays Today...</p>}
            <button type="button" onClick={handleClick} className='bg-red-500 p-3 rounded-3xl w-1/6 min-w-[100px] text-xl text-white'>Clear All</button>
        </div>
    )
}

export default List
