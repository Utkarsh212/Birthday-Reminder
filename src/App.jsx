import './App.css'
import List from './components/List'
import Form from './components/Form'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem("birthdays")) || [])

  return (
    <section className='bg-red-500 flex flex-col justify-start items-center min-h-screen pt-28 space-y-5'>
      <h1 className='text-5xl font-semibold text-white mb-5'>🎉Birthdays Today✨</h1>
      <Form setData={setData}/>
      <List data={data} setData={setData}/>
    </section>
  )
}

export default App
