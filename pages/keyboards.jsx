import React from 'react';
import Hero from '@/components/Hero';
import Sidebar from '@/components/Sidebar';
import Keyboards from '@/components/Keyboards';
import Footer from '@/components/Footer';

const keyboards = () => {
  return (
    <div>
        <Hero heading='Keyboards' message='Choose keyboards with different case, plate material and colors!'/>
        <div className='flex row-span-2'>
          <Sidebar />
          <Keyboards />

        </div>
        <Footer />
    </div>
  )
}

export default keyboards