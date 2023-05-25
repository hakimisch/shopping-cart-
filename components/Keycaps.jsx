import React from 'react';
import PostsImg from './PostsImg';
import PostImg1 from '../public/D60lite.jpg';
import PostImg2 from '../public/gmk87.jpg';
import PostImg3 from '../public/redragon-tl84.jpg';

const Keycaps = () => {
  return (
    <div className='max-w-[80%] flex '>
        <div className='flex'>
        <div className="max-w-[80%] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300">
                <PostsImg socialImg={PostImg1}/>
                <h2 className="text-2xl font-bold text-center py-8" >Single User</h2>
                <p className="text-center text-4xl font-bold" >$149</p>
                <div className="text-center font-medium" >
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                </div>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300">
                <PostsImg socialImg={PostImg2}/>
                <h2 className="text-2xl font-bold text-center py-8" >Double User</h2>
                <p className="text-center text-4xl font-bold" >$200</p>
                <div className="text-center font-medium" >
                    <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
                    <p className="py-2 border-b mx-8">2 Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 4 GB</p>
                </div>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300">
                <PostsImg socialImg={PostImg3}/>
                <h2 className="text-2xl font-bold text-center py-8" >Triple User</h2>
                <p className="text-center text-4xl font-bold" >$300</p>
                <div className="text-center font-medium" >
                    <p className="py-2 border-b mx-8 mt-8">3 TB Storage</p>
                    <p className="py-2 border-b mx-8">3 Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 8 GB</p>
                </div>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300">
                <PostsImg socialImg={PostImg1}/>
                <h2 className="text-2xl font-bold text-center py-8" >Single User</h2>
                <p className="text-center text-4xl font-bold" >$149</p>
                <div className="text-center font-medium" >
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                </div>
            </div>
        </div>
        <div>
            
        </div>
    </div>
    </div>
  )
}

export default Keycaps