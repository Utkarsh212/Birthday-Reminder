import React, { useState } from 'react'

const Form = (props) => {
  const options = ['Relative', 'Friend', 'Colleague']
  const [formData, setFormData] = useState({
    name: '',
    img: '',
    relation: '',
    id: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      id: new Date().getTime().toString()
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { img, name, relation } = formData
    if (img && name && relation) {
      const data = JSON.parse(localStorage.getItem("birthdays")) || []
      data.push(formData)
      props.setData(data)
      localStorage.setItem("birthdays", JSON.stringify(data))
      setFormData({
        name: '',
        img: '',
        relation: '',
        id: ''
      })
    }
    else {
      window.alert("Some of the fields are empty!!")
    }
  }

  return (
    <form onSubmit={handleSubmit} className='bg-white w-3/4 p-5 rounded-3xl flex flex-col justify-center items-center space-y-5'>
      <div className='space-x-5'>
        <label className='text-xl'>
          Name:&nbsp;
          <input className="border-b-2 border-red-500 focus:outline-none" type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label className='text-xl'>
          Avatar:&nbsp;
          <input className="border-b-2 border-red-500 focus:outline-none" type="text" name="img" value={formData.img} onChange={handleChange} />
        </label>
        <label className='text-xl'>
          Relation:&nbsp;
          <select onChange={handleChange} name="relation" value={formData.relation}>
            <option>Please choose one option</option>
            {options.map((option, index) => {
              return <option key={index} value={option}>
                {option}
              </option>
            })}
          </select>
        </label>
      </div>
      <button type="submit" className='bg-red-500 p-3 rounded-3xl w-1/6 min-w-[100px] text-xl text-white'>Add</button>
    </form>
  )
}

export default Form