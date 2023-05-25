import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Mod from '@/components/Mod'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const mod = () => {
  return (
    <div>
        <Hero heading='Sound Mods' message='Spend extra to make your keyboard pop, thock, clack, or whatever you like'/>
        <div className='flex row-span-2'>
          <Sidebar />
          <Mod />

        </div>
        <Footer />
    </div>
  )
}

export default mod