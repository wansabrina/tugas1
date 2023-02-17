import React from 'react'
import Paintings from './Paintings'
import dynamic from 'next/dynamic'

const Front = () => {
  return (
    <section>
    <main className="bg-cover bg-center pt-16 min-h-screen h-screen" style={{ marginTop: '-4rem' }}>
    <div className="w-full h-full flex justify-center items-center" style={{ backgroundImage: 'url("43202.jpg")', paddingTop: '4rem', backgroundSize: 'cover' }}>
      <div className="w-3/4 h-3.5/4 bg-white bg-opacity-50 rounded-md shadow-lg p-8 flex flex-row items-center" style={{ minWidth: '600px' }}>
        <div className="w-1/2 pr-8">
          <h1 className="text-4xl text-left font-bold text-gray-800 mb-4">Vincent Willem van Gogh</h1>
          <p className="text-lg text-justify text-gray-600 mb-4">Vincent van Gogh (1853–1890) is world famous. Learn about his life, read his letters, or explore his paintings and drawings.</p>
          <a href="https://en.wikipedia.org/wiki/Vincent_van_Gogh"><button className="bg-yellow-500 hover:bg-white text-white hover:text-yellow-500 font-bold py-2 px-4 rounded-md">Learn more</button></a>
        </div>
        <div className="w-1/2">
          <img src="/vangoghhh.gif" alt="Gogh Self Portrait" className="w-full h-full rounded-md h-30" />
        </div>
      </div>
    </div>
    </main>

    <Paintings title='Paintings'/>
    </section>
  )
}

export default dynamic (() => Promise.resolve(Front), {ssr: false})