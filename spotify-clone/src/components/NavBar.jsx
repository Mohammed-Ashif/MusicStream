import React from 'react';
import {assets} from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {

  const nav2 = useNavigate();

  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={()=> nav2(-1)} src={assets.arrow_left} className='w-8 p-2 rounded-2xl cursor-pointer' alt=""></img>
                <img onClick={()=> nav2(1)} src={assets.arrow_right} className='w-8 p-2 rounded-2xl cursor-pointer' alt=""></img>
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-green-400 text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
                    Explore Premium
                </p>
                <p className='bg-white text-black px-3 py-1 rounded-2xl text-[15px] cursor-pointer'>
                    Install App
                </p>
                <p className='w-7 h-7 rounded-full overflow-hidden flex items-center justify-center'>
                    <img src={assets.ProPic} className="w-full h-full object-cover" alt="" />
                </p>
            </div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'> All </p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
        </div>
    </>

  )
}

export default NavBar;