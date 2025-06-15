import React from 'react'
import useGet from '../hooks/useGet'

const Footer = () => {
  const {loading,pages,totalPages,posts}=useGet()
  return (
    <div className='sticky bottom-0 p-2 text-3xl font-bold bg-white border-t-2 shadow-md border-t-gray-300'>
        Footer
    </div>
  )
}

export default Footer