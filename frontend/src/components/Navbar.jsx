import React from 'react'
import {FaArrowLeft} from 'react-icons/fa';
import {GoHome} from 'react-icons/go';
import {LuRefreshCcw} from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
        <div className='bg-bgcolor w-[1440px] h-[100px] flex items-center justify-between '>
        <Link to={props.url}> 
                <div className='w-[40px] h-[40px] top-[20px] left-[100px] bg-gray-300 rounded-full flex justify-center items-center ml-14'>
                   <FaArrowLeft/>
                </div>
                </Link>

                <div className='text-white flex text-2xl font-bold mr-14'>
                    <div className=' w-[32px] h-[32px] top-[24px] left-[1256px] mr-4 '><GoHome/></div>
                    <div className=' w-[32px] h-[32px] top-[24px] left-[1256px] mr-4'><LuRefreshCcw/></div>
                </div>
            </div>

            <div className='w-[1440px] h-[20px] mt-[-20px] rounded-t-full bg-bgall'>
            </div>
    </div>
  )
}

export default Navbar