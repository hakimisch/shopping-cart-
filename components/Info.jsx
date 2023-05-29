import React from 'react';

const Info = () => {
  return (
    <div className="w-full py-16 text-white px-4 bg-purple-950">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-gray-100 py-6 pb-12">A place for keyboard lovers and newbies to discover what makes keyboard click and clack!</h1>
                    <div className='flex row-span-4'>
                      <p className="md:text-6xl sm:text-5xl text-2xl font-extrabold pl-2 text-gray-100">Clack?</p>
                      <p className="md:text-6xl sm:text-5xl text-2xl font-extrabold pl-2 text-red-400">Thock?</p>
                      <p className="md:text-6xl sm:text-5xl text-2xl font-extrabold pl-2 text-cyan-400">Thack?</p>
                      <p className="md:text-6xl sm:text-5xl text-2xl font-extrabold pl-2 text-green-400">Click</p>
                    </div>
                      
                    
                    <p className='md:text-2xl sm:text-xl font-semibold py-4 pt-8 text-gray-100'>Check out below guides to have an idea about what you want in your next keyboard</p>
                </div>
            </div>
        </div>
  )
}

export default Info