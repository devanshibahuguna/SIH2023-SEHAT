import React from 'react'
import {FaArrowLeft} from 'react-icons/fa';
import {GoHome} from 'react-icons/go';
import {LuRefreshCcw} from 'react-icons/lu';
import { Link } from 'react-router-dom';
import {IoMdLogOut} from 'react-icons/io';

const Navbar = (props) => {

  return (
    <div>
        <div className='bg-bgcolor w-[1440px] h-[100px] flex items-center justify-between '>
        <Link to={props.url}> 
                <div className='w-[40px] h-[40px] top-[20px] left-[100px] bg-gray-300 rounded-full flex justify-center items-center ml-14'>
                   <FaArrowLeft/>
                </div>
                </Link>

                  {props.loginUser&&<div className='text-white mb-[-16px] ml-28 text-[20px]'>
                    {props.title}
                  </div>}

                <div className='text-white text-2xl font-bold mr-14 flex'>
                    <div className=' w-[32px] h-[32px] top-[24px] left-[1256px] mr-4 '><GoHome/></div>
                    <div className=' w-[32px] h-[32px] top-[24px] left-[1256px] mr-4'><LuRefreshCcw/></div>

                    {props.loginUser&&<div className=' w-[70px] h-[32px] top-[24px] left-[1256px] mr-4 text-[20px] font-[500] mt-[-4px]'><button className='flex justify-center items-center border-2 rounded-lg bg-white text-black px-2'>
                      <IoMdLogOut/> <div className='text-[14px]'>Logout</div>
                      </button></div>}

                </div>
            </div>

            <div className='w-[1440px] h-[20px] mt-[-20px] rounded-t-full bg-bgall'>
            </div>
    </div>
  )
}

export default Navbar