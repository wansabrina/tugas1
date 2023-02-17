import React from 'react'
import dynamic from 'next/dynamic'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-10 shadow-xl rounded-full z-10">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="w-1/4">
          <ul className="flex justify-start items-center">
            <li className="mr-6">
              <a href="/" className="text-gray-800 font-semibold hover:text-white">Home</a>
            </li>
            <li className="mr-6">
              <a href="/paintings" className="text-gray-800 font-semibold hover:text-white">Paintings</a>
            </li>
            <li className="mr-6">
              <a href="/services" className="text-gray-800 font-semibold hover:text-white">Services</a>
            </li>
          </ul>
        </div>
        <div className="w-2/4 text-center">
          <a href="/" className="font-bold text-3xl text-gray-800 font-crimson">Van Gogh</a>
        </div>
        <div className="w-1/4">
          <ul className="flex justify-end items-center">
            <li className="mr-6">
              <a href="/contact" className="text-gray-800 font-semibold hover:text-white">Contact</a>
            </li>
            <li>
              <form className="flex" action="#" method="get">
                <input className="rounded-full py-1 px-3  border-t mr-0 mx-2 border-b border-l text-gray-800 border-gray-200 bg-white text-sm" type="search" name="search" placeholder="Search..." />
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})