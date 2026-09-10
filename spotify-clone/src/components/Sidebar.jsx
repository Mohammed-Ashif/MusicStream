import React from "react";
import {assets} from "../assets/assets";
const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>

      <div className='bg-[#292929] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img src={assets.home_icon} alt="" className='w-6'/>
            <p className="font-bold">Home</p>
        </div>   
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img src={assets.search_icon} alt="" className='w-6'/>
            <p className="font-bold">Search</p>
        </div> 
      </div>

      <div className='bg-[#292929] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt=""></img>
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3 cursor-pointer'> 
            <img className='w-5' src={assets.arrow_icon} alt=""></img>
            <img className='w-5' src={assets.plus_icon} alt=""></img>
          </div>
        </div>

        <div className='p-4 bg-[#444444] m-2 rounded font-semibold flex flex-col 
             items-start justify-start gap-1 pl-4'>
          <h1>Create your first playlist</h1>
          <p className='font-light'>It's easy. We will help you</p>
          <button className='py-1.5 px-4 rounded-full bg-green-400 text-[15px] text-black mt-4 cursor-pointer'>
            Create Playlist
          </button>
        </div>

        <div className='p-4 bg-[#444444] m-2 rounded font-semibold flex flex-col 
             items-start justify-start gap-1 pl-4 mt-4'>
          <h1>Let's find some podcast to follow</h1>
          <p className='font-light'>We will keep you update on the latest episodes</p>
          <button className='py-1.5 px-4 rounded-full bg-green-400 text-[15px] text-black mt-4 cursor-pointer'>
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;