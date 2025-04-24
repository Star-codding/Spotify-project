import React from 'react'
import "./Header.css"

export function Header() {
    return (
        <div className='w-[100%] p-[15px] flex justify-evenly bg-[black] text-white items-center'>
            <div className='flex w-[45%] justify-evenly items-center'>
                <i class="fa-brands fa-spotify fa-2xl" ></i>
               <div className='p-[10px]  rounded-[20px] bg-[rgb(31,31,31)]'> <i class="fa-solid fa-house fa-xl"></i></div>
                <input type="text" placeholder='What Do You Want to Play' className='border p-[10px_20px] rounded-[20px] w-[450px] bg-[rgb(31,31,31)]'  />
            </div>
            <div className='flex p-[5px] w-[33%] items-center justify-around text-[#ccc]'>
                <p className='ml-[160px]'>Premium</p>
                <p>Support</p>
                <p>Download</p>
                <p>|</p>
            </div>
            <div className='  flex w-[33%] items-center justify-evenly text-[#ccc]'>
                <p><i class="fa-solid fa-download fa-l"></i>Install</p>
               <button>Sign up</button>
               <button className='mr-[160px] w-[100px] border rounded-[20px] bg-[white] text-black p-[10px]'>Log in</button>
            </div>
            
            
        </div>
    )
}
