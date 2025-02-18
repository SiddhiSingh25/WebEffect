import React from 'react'
import { GiLaurelCrown } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const BecomeAContributor = () => {
    return (
        <div className='linear-bg h-72  flex items-center justify-center flex-col'>
            <div className='flex items-center gap-2'>
                <GiLaurelCrown className='text-[#FFAA00] size-8' /><h1 className='text-[1.55rem] font-bold text-style-shadow  text-[hsla(0,0%,100%,0.9)]'>Web Effects Pro</h1>
            </div>
            <h1 className='text-5xl font-bold text-[hsla(0,0%,100%,0.9)]'>Share your creativity with us</h1>
            <NavLink to="/become-contributor" className='py-[0.6rem] px-7 bg-[hsl(0deg,0%,100%)] text-[#0d1216] rounded-md  font-bold mt-8' style={{ opacity: 0.8 }}>Become A Contributor</NavLink>
        </div>
    )
}

export default BecomeAContributor