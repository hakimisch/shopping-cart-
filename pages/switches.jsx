
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Sidebar from '@/components/Sidebar'
import Switches from '@/components/Switches'
import React from 'react'

const switches = () => {
  return (
    <div>
        <Hero heading='Switches' message='Different switches for different sound and feel'/>
        <div className='flex row-span-2'>
          <Sidebar />
          <Switches />

        </div>
        <Footer />
    </div>
  )
}

export default switches