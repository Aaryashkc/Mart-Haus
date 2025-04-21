import React from 'react'

const Footer = () => {
  return (
    <div className="bg-fortext text-white w-full bottom-0 relative">
      <div className="container mx-auto flex flex-col items-center justify-center py-4">
        <p className="text-center">Copyright &copy; 2025 Mart haus</p>
        <p className="text-center">All rights reserved</p>
        <p className="text-center">Terms of Service | Privacy Policy</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </div>
    </div>


  )
}

export default Footer
