import { useState, useEffect} from 'react'
import axios from "axios"

import './App.css'
import Card from './Card.jsx'


function App() {
  // const [data, setData] = useState([]);
  const [flag, setFlag] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleCreate = async()=>{
    const response = await axios.post('http://localhost:5600/api/create', {title: title, description: description}).then (()=>{
      setTitle('');
      setDescription('');
    })
  }


  useEffect(()=>{
    console.log(description)
  },[description])


  const[formVisible, setFormVisible] = useState(false)


      const [isOpen, setIsOpen] = useState(false);
      const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: ''
      });
    
      const handleChange = (e) => {
        const { title, value } = e.target;
        setFormData({
          ...formData,
          [title]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
        console.log(formData);
        setIsOpen(false);
      };

      //Update Function
      // const response = axios.put(url,{})

      
      
      



  return (
    <>
      <h1 className='flex justify-center text-4xl font-bold text-gray-800'>TO-DO</h1>
      
      <div className='flex justify-center'>
      <button className=' bg-blue-500 text-white font-bold py-2 px-4 rounded' onClick={()=>setFormVisible(true)}>Add</button>
      </div>
     
      <Card/>

      {
        formVisible && 
        <div className='layout'>
          <form action="">
            <button onClick={()=>{setFormVisible(false)}}>&times;</button>
            <input onChange={(event)=>setTitle(event.target.value)} type="text" name="title" id="" placeholder='title'/>
            <input onChange={(event)=>setDescription(event.target.value)} type="text" name="description" id="" placeholder='description'/>
            <button onClick={()=>{handleCreate()}}>Create</button>
          </form>
        </div>
      }

    </>
  )
}//}

export default App
