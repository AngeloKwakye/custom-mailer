import React from 'react'
import { Sidebar } from '../components/sidebar'

export const Trash = () => {
  return (
    <div className="flex flex-row h-screen">
    <div className="">
      <Sidebar />
    </div>
      <div className="w-full flex justify-center items-center max-h-screen overflow-y-auto bg-cyan-800 bg-opacity-70">
      <span className='text-2xl animate-pulse'>Trash Page is Under Construction 😁</span>
      </div>
  </div>
  )
}
