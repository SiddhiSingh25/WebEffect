import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import {  useNavigate } from 'react-router';

const Login = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <form className='h-[22rem] w-[28vw] full rounded-3xl border-2 border-emerald-600 border-solid p-10 flex items-center justify-center flex-col relative'>
                <h1 className="text-white font-bold text-2xl text-center absolute top-8">Login</h1>
                <div className='flex p-2 px-5 w-full rounded-full border-2 bg-transparent mt-[5rem] text-gray-400 font-semibold border-emerald-600 border-solid outline-none hover:border-emerald-700 '>
                    <input type="email" aria-label="Email Address" autoComplete='email' required className='bg-transparent h-full w-full outline-none border-none placeholder:text-gray-400' placeholder='Enter your email' />
                    <MdEmail className='w-5 h-5 text-gray-400' />
                </div>
                <div className='flex p-2 mt-3 px-5 w-full rounded-full border-2 bg-transparent text-gray-400 font-semibold border-emerald-600 border-solid outline-none hover:border-emerald-700 '>
                    <input type="password" required  aria-label="Password" autoComplete='password-current' className='bg-transparent h-full w-full outline-none border-none placeholder:text-gray-400' placeholder='Enter your Password' />
                    <RiLockPasswordFill className='w-5 h-5 text-gray-400' />
                </div>
                <input type="submit" className='px-6 py-[0.4rem] mt-4 rounded-full border-2 bg-emerald-700 outline-none text-gray-50 font-semibold border-none ' value="Submit" />
                <p className='text-gray-400 mt-2 text-sm'>Don't have an Account? <a href="#" className='text-emerald-600 font-semibold'>Sign Up</a></p>
            </form>
        </div>
    )
}

export default Login
