import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <Navbar url='/selectCase' />

      <div className='w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>

        {/* circles */}
        <div className='flex mt-12'>
          <div className='bg-bgcircle w-[16px] h-[16px] top-[160px] left-[668px] rounded-full '></div>

          <div className='bg-gray-300 w-[16px] h-[16px] top-[60px] left-[668px] mx-8 rounded-full '></div>

          <div className='bg-gray-300 w-[16px] h-[16px] top-[60px] left-[668px] rounded-full '></div>

        </div>

        <div className='w-[254px] h-[42px] top-[360px] left-[593px] mt-12'>
          <div className='font-[600] text-[28px] leading-[42px]'>Login with Aadhar</div>
        </div>

        <div className='mt-16'>
          <div className='text-[17px]'>Enter your Aadhar number</div>
          <input type="text" required={true}
            className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4"
            placeholder="xxxx-xxxx-xxxx-xxxx"
          />

        </div>

        <Link to='/fingerPrint'>
          <button className='bg-bluebtn rounded-lg px-8 py-2 my-10 text-white font-[100] '>Proceed</button>
        </Link>

      </div>
    </div>
  )
}

export default Login