import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='flex justify-center text-4xl font-bold text-gray-800'>TO-DO</h1>
      
      <div className='flex justify-center'>
      <button className=' bg-blue-500 text-white font-bold py-2 px-4 rounded'>Add</button>
      </div>
     
      <Card/>

    </>
  )
}

export default App
