import React from 'react'
import dynamic from 'next/dynamic'

type PaintingsProps = {
    title : string 
} 

const Paintings = ({title}: PaintingsProps) => {
  return (
    <section className='bg-yellow-100'>
    <div className="w-full py-16">
      <h2 className="text-4xl text-center font-bold text-gray-800 mb-8 font-crimson">Paintings</h2>
      <div className="w-full flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <img src="selfportrait.jpg" alt="Product 1" className="w-full h-64 rounded-md hover:shadow-xl" />
          <h3 className="text-lg text-center font-bold text-gray-800 mt-4">Van Gogh self-portrait</h3>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img src="flower.jpg" alt="Product 2" className="w-full h-64 rounded-md hover:shadow-xl" />
          <h3 className="text-lg text-center font-bold text-gray-800 mt-4">The Sunflower</h3>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img src="landscape.jpg" alt="Product 3" className="w-full h-64 rounded-md hover:shadow-xl" />
          <h3 className="text-lg text-center font-bold text-gray-800 mt-4">The Starry Night</h3>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img src="sea.jpg" alt="Product 4" className="w-full h-64 rounded-md hover:shadow-xl" />
          <h3 className="text-lg text-center font-bold text-gray-800 mt-4">Seascape at Saintes-Maries</h3>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img src="scenes.jpg" alt="Product 5" className="w-full h-64 rounded-md hover:shadow-xl" />
          <h3 className="text-lg text-center font-bold text-gray-800 mt-4">The Bedroom</h3>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img src="landscape2.jpg" alt="Product 6" className="w-full h-64 rounded-md hover:shadow-xl" />
          <h3 className="text-lg text-center font-bold text-gray-800 mt-4">Starry Night Over the Rhône</h3>
        </div>
      </div>
    </div>
    </section>
  )
}

export default dynamic (() => Promise.resolve(Paintings), {ssr: false})