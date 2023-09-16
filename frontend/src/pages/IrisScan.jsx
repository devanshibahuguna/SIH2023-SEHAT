import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import irisScanPic from '../assets/IrisScanPic.svg';

const IrisScan = () => {
  return (
    <div>
    <Navbar url='/fingerPrint'/>

    <div className='w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>

      {/* circles */}
        <div className='flex mt-12 mb-6'>
          <div className='bg-gray-300 w-[15px] h-[15px] top-[160px] left-[668px] rounded-full '></div>

        <div className='bg-gray-300 w-[15px] h-[15px] top-[60px] left-[668px] mx-8 rounded-full '></div>

        <div className='bg-bluebtn w-[15px] h-[15px] top-[60px] left-[668px] rounded-full '></div>

        </div>

        <div className='w-[877px] h-[42px] top-[360px] left-[282px] mt-12 mb-4'>
          <div className='font-[600] text-[22px] leading-[42px]'>Please Stand straight and look into the camera for an iris scan</div>
        </div>

        <Link to='/loginSuccess'>
          <button className='w-[204px] h-[250px] top-[364px] left-[593px]'>
            <img src={irisScanPic}  className='hover:drop-shadow-lg'/>
          </button>
        </Link>

        </div>
    </div>
  )
}

export default IrisScan