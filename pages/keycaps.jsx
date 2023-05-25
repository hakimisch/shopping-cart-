import React from 'react';
import Hero from '@/components/Hero';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import Keycaps from '@/components/Keycaps';

const keyboards = () => {
  return (
    <div>
        <Hero heading='Keycaps' message='Choose different keycap materials and profile!'/>
        <div className='flex row-span-2'>
          <Sidebar />
          <Keycaps />

        </div>
        <Footer />
    </div>
  )
}

export default keyboards