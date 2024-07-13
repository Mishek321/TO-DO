import axios from 'axios'
import React, { useEffect, useState } from 'react'
import App from './App'

export default function Card() {
  const [data, setData] = useState([]);
  const [todos, setTodos] = useState([]) 
  const [flag, setFlag] = useState(0);
  // arrow function   ()=>{}

const getData = async()=>{
  const response = await axios.get('http://localhost:5600/api/read').then((res)=>{
    const data = res.data.data
    setTodos(data)
  
  }) 
}
console.log(todos)

useEffect (()=>{
  getData()

},[])

const handleDelete = async (id) => {
  alert("Are you sure?");
  await axios.post(`http://localhost:5600/api/delete/${id}`).then((res) => {
    setFlag(flag + 1);
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
}
console.log(setFlag)

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  // handle form submission logic here
  console.log(formData);
  setIsOpen(false);
};



  return (
    <>
    <div class="bg-gray-100 felx items-center  h-screen">
      {todos.map((item,key)=>(
    <div key={key} class="bg-white shadow-md rounded-lg p-6 max-w-sm">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold text-gray-800">{item.title}</h2>

            <button class="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700" onClick={() => {handleDelete()}}>Delete</button>
            <button class="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700">Edit</button>
        </div>
        <p class="text-gray-700">{item.description}</p>
    </div>

      ))}
    </div>
    </>
  )
}
