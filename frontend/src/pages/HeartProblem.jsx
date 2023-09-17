import React from 'react'
import Navbar from '../components/Navbar'
import HeartImg from '../assets/HeartImg.svg';
import { Link } from 'react-router-dom';
const HeartProblem = () => {
  return (
    <div>
      <Navbar url='/concern1' loginUser='true' title='Heart Checkup' />

      <div className='w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>

            <div>
                <div className='text-[19px] mt-8'>
                    Please Choose your concern
                </div>
            </div>
        {/* first row */}
        <div className='flex justify-between mt-10'>

          <div className='flex flex-col justify-center items-center'>
          <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Chest Pain</div>
          </div>

          <div className='flex flex-col justify-center items-center mx-16'>
            <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Unexpected fatigue</div>
          </div>

          <div className='flex flex-col justify-center items-center mr-16'>
            <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Family history</div>
          </div>

          <div className='flex flex-col justify-center items-center mr-16'>
            <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Rapid/irregular heartbeat</div>
          </div>
          
        </div>


        {/* second row */}
        <div className='flex justify-between mt-20'>

<div className='flex flex-col justify-center items-center'>
  <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Chest pain</div>
</div>

<div className='flex flex-col justify-center items-center mx-16'>
  <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Unexpected fatigue</div>
</div>

<div className='flex flex-col justify-center items-center mr-16'>
  <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Family history</div>
</div>

<div className='flex flex-col justify-center items-center mr-16'>
  <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Rapid/irregular heartbeat</div>
</div>

</div>

 {/* button */}
 <Link to="/heartInputs">
          <button className="mt-[30px] bg-bluebtn py-3 px-12 text-white rounded-lg fixed right-[20px]">
            Proceed
          </button>
        </Link>

      </div>
    </div>
  )
}

export default HeartProblem