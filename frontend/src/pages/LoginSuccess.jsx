import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import loginSuccessPic from '../assets/LoginSuccessPic.svg';

const LoginSuccess = () => {
  return (
    <div>
    <Navbar url='/irisScan'/>

    <div className='w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>

        <Link to='/concern1'>
          <button className='w-[254px] h-[250px] top-[464px] left-[583px] mt-36'>
            <img src={loginSuccessPic}/>
          </button>
        </Link>

        <div className='font-[600] text-[22px] leading-[42px] w-[231px] h-[42px] top-[654px] left-[605px] mt-2'>
        Login successful
        </div>

        </div>
    </div>

  )
}

export default LoginSuccess