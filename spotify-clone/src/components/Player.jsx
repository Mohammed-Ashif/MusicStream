import React from "react";
import {songsData} from "../assets/assets";
import {assets} from "../assets/assets";

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>

        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={songsData[0].image} alt="" />
            <div>
                <p>{songsData[0].name}</p>
                <p>{songsData[0].desc.slice(0, 12)}</p>
            </div>
        </div>

        
        <div className='flex flex-col items-center gap-1 m-auto'>
            
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
            </div>

            
            <div className='flex items-center gap-5'>
                <p>0:00</p>
                <div className='w-64 h-1 bg-gray-500 rounded-full cursor-pointer'>
                    <hr className='w-0 h-full bg-white rounded-full'/>
                </div>
                <p>0:00</p>
            </div>
        </div>

        
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4 cursor-pointer' src={assets.plays_icon} alt=""/>
            <img className='w-4 cursor-pointer' src={assets.mic_icon} alt=""/>
            <img className='w-4 cursor-pointer' src={assets.queue_icon} alt=""/>
            <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt=""/>
            <img className='w-4 cursor-pointer' src={assets.volume_icon} alt=""/>

            <div className='w-20 h-1 bg-gray-500 rounded-full cursor-pointer'>
                <hr className='w-1/3 h-full bg-white rounded-full'/>
            </div>
            
            <img className='w-4 cursor-pointer' src={assets.fullscreen_icon} alt=""/>
            <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt=""/>
            <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt=""/>
        </div>
    </div>
  );
}

export default Player;