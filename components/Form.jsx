/* eslint-disable react/no-unescaped-entities */
import React from 'react';




const Form = () => {
  return (
    <div>
        <div className='bg-white justify-center flex items-center min-h-screen'>
            <div className=' bg-gray-100 flex min-h-screen backdrop:rounded-2xl shadow-lg w-[70%] p-5 rounded-3xl my-16'>
                <div className='w-[95%]'>
                    <h2 className='font-bold text-3xl text-black border-b py-4 border-gray-800 w-[95%]'>Login</h2>

                    <form action="" className='flex flex-col w-[95%] gap-4'>
                        <input className='p-2 mt-8 rounded-xl border' type="text" name='email' placeholder='Email'/>
                        <div>
                            <input className='p-2 rounded-xl border w-full' type="password" name='password' placeholder='Password' />
                        </div>
                        <button className='bg-purple-600 rounded-xl text-white py-3 hover:scale-105 duration-300 my-2'>Login</button>
                    </form>
                    <div className='mt-10 grid grid-cols-3 items-center text-gray-400 w-[95%]'>
                        <hr className='border-gray-400'/>
                        <p className='text-center text-sm'>OR</p>
                        <hr className='border-gray-400'/>
                    </div>

                    <button className='bg-white border rounded-xl mt-5 flex justify-center items-center py-3 text-sm w-[95%] hover:scale-105 duration-300'>Login with Google</button>

                    <p className='mt-5 text-xs border-b border-gray-400 py-4 w-[95%] hover:text-purple-600'>Forgot your password?</p>
                    <div className='mt-3 text-xs flex justify-between items-center w-[95%] hover:text-purple-600'>
                        <p>Don't have an account?</p>
                        <button className='py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 hover:text-purple-600'>Register</button>

                    </div>
                </div>
                <div className='md:block hidden w-1/2 custom-img2 rounded-3xl'>
                    
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Form