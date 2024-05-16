import React from 'react'
import Sidebar from "./sidebar.jsx"
import Image from 'next/image.js'
export default function page() {
  return (
    <div className='flex flex-row h-full max-h-full bg-sky-950'>
      {/* Sidebar */}
      <sidebar className="flex flex-col h-full max-h-full bg-sky-900 w-80 p-4">
      
        <Sidebar />
      </sidebar>

      {/* Main Content */}
      <div className='w-full h-full max-h-full p-4'>
        <navbar className="max-w-screen-md"></navbar>
        <h1 className='text-white'>navbar</h1>
        {/* dashboard */}
        <dashboard className="text-white">
          <h1>dashboard</h1>
        </dashboard>
      </div>
    </div>

  )
}
