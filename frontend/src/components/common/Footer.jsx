import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <span className="text-gray-300">
        Pattaradanai | All Right Reserve &copy; {new Date().getFullYear()}
      </span>
    </footer>
  )
}

export default Footer