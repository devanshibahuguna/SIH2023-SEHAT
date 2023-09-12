import React from 'react'
import Navbar from '../components/Navbar'
import ConsultDoctor from '../assets/ConsultDoctor.svg';
import { Link } from 'react-router-dom';

const Concern1 = () => {
  return (
    <div>
        <Navbar url='/loginSuccess' loginUser='true' title='Please Choose your concern'/>

        <div className='w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>

        {/* first row */}
        <div className='flex justify-between mt-10'>

<div className='flex flex-col justify-center items-center'>
  <Link to='/concern2'><img className='w-[187px] h-[224px] top-[280px] left-[222px]' src={ConsultDoctor}/></Link>
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[18px] leading-[33px] mt-3'>Body/General checkup</div>
</div>

<div className='flex flex-col justify-center items-center mx-16'>
  <Link to='/concern2'><img className='w-[187px] h-[224px] top-[280px] left-[222px]' src={ConsultDoctor}/></Link>
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[18px] leading-[33px] mt-3'>Heart Checkup</div>
</div>

<div className='flex flex-col justify-center items-center mr-16'>
  <Link to='/concern2'><img className='w-[187px] h-[224px] top-[280px] left-[222px]' src={ConsultDoctor}/></Link>
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[18px] leading-[33px] mt-3'>Diabetes Checkup</div>
</div>

<div className='flex flex-col justify-center items-center'>
  <Link to='/concern2'><img className='w-[187px] h-[224px] top-[280px] left-[222px]' src={ConsultDoctor}/></Link>
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[18px] leading-[33px] mt-3'>Skin Checkup</div>
</div>
</div>


        {/* second row */}
        <div className='flex justify-between mt-10'>

            <div className='flex flex-col justify-center items-center'>
              <Link to='/concern2'><img className='w-[187px] h-[224px] top-[280px] left-[222px]' src={ConsultDoctor}/></Link>
              <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[18px] leading-[33px] mt-3'>Body/General checkup</div>
            </div>

            <div className='flex flex-col justify-center items-center mx-16'>
              <Link to='/concern2'><img className='w-[187px] h-[224px] top-[280px] left-[222px]' src={ConsultDoctor}/></Link>
              <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[18px] leading-[33px] mt-3'>Heart Checkup</div>
            </div>

            <div className='flex flex-col justify-center items-center mr-16'>
              <Link to='/concern2'><img className='w-[187px] h-[224px] top-[280px] left-[222px]' src={ConsultDoctor}/></Link>
              <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[18px] leading-[33px] mt-3'>Diabetes Checkup</div>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <Link to='/concern2'><img className='w-[187px] h-[224px] top-[280px] left-[222px]' src={ConsultDoctor}/></Link>
              <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[18px] leading-[33px] mt-3'>Skin Checkup</div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Concern1