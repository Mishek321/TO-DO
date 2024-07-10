import React from 'react'

export default function Card() {
  return (
    <>
    <body class="bg-gray-100 felx items-center  h-screen">
    <div class="bg-white shadow-md rounded-lg p-6 max-w-sm">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold text-gray-800">Title</h2>
            <button class="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700">Delete</button>
            <button class="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700">Edit</button>
        </div>
        <p class="text-gray-700">This is a simple card. You can put any content you like here.</p>
    </div>
    </body>
    </>
  )
}
