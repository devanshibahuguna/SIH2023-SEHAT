import React from 'react'
import Navbar from '../components/Navbar'
import ConsultDoctor from '../assets/ConsultDoctor.svg';
import { Link } from 'react-router-dom';
const Concern1 = () => {
  return (
    <div>
      <Navbar url='/loginSuccess' loginUser='true' title='Please Choose your concern' />

      <div className='w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>

        {/* first row */}
        <div className='flex justify-between mt-10'>

          <div className='flex flex-col justify-center items-center'>
            <Link to='/bhcInfo'><img className='w-[207px] h-[224px] top-[280px] left-[222px] hover:drop-shadow-lg' src={ConsultDoctor} /></Link>
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>General Checkup</div>
          </div>

          <div className='flex flex-col justify-center items-center mx-36'>
            <Link to='/body'><img className='w-[207px] h-[224px] top-[280px] left-[222px] hover:drop-shadow-lg' src={ConsultDoctor} /></Link>
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Body Checkup</div>
          </div>

          <div className='flex flex-col justify-center items-center mr-16'>
            <Link to='/skinRecord'><img className='w-[207px] h-[224px] top-[280px] left-[222px] hover:drop-shadow-lg' src={ConsultDoctor} /></Link>
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Skin Checkup</div>
          </div>

          
        </div>


        {/* second row */}
        <div className='flex justify-between mt-10'>

<div className='flex flex-col justify-center items-center'>
  <Link to='/Diabetes1'><img className='w-[207px] h-[224px] top-[280px] left-[222px] hover:drop-shadow-lg' src={ConsultDoctor} /></Link>
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Diabetes Checkup</div>
</div>

<div className='flex flex-col justify-center items-center mx-36'>
  <Link to='/healthProblem'><img className='w-[207px] h-[224px] top-[280px] left-[222px] hover:drop-shadow-lg' src={ConsultDoctor} /></Link>
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Heart Checkup</div>
</div>

<div className='flex flex-col justify-center items-center mr-16'>
  <Link to='/cataractImage'><img className='w-[207px] h-[224px] top-[280px] left-[222px] hover:drop-shadow-lg' src={ConsultDoctor} /></Link>
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Cataract Checkup</div>
</div>


</div>

      </div>
    </div>
  )
}

export default Concern1