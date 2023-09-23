import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeartImg from '../assets/HeartImg.svg';
import { Link } from 'react-router-dom';
const HeartProblem = () => {
  const [concernHeart,setConcernHeart]=useState("");
  const handleChest=()=>{
    setConcernHeart("Chest Pain");
  }
  const handleShort=()=>{
    setConcernHeart("Shortness of Breath");
  }
  const handleFatigue=()=>{
    setConcernHeart("Fatigue");
  }
  const handleRapid=()=>{
    setConcernHeart("Rapid Heart Beat");
  }
  const handleNausea=()=>{
    setConcernHeart("Nausea");
  }
  const handleSweats=()=>{
    setConcernHeart("Cold Sweats");
  }
  const handleHighBP=()=>{
    setConcernHeart("High Blood Pressure");
  }
  const handleFainting=()=>{
    setConcernHeart("Fainting");
  }
  const sendHeart=async()=>{

  }
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

          <div className='flex flex-col justify-center items-center' onClick={handleChest}>
          <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Chest Pain</div>
          </div>

          <div className='flex flex-col justify-center items-center mx-16' onClick={handleShort}>
            <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Shortness of Breath</div>
          </div>

          <div className='flex flex-col justify-center items-center mr-16' onClick={handleFatigue}>
            <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Fatigue
</div>
          </div>

          <div className='flex flex-col justify-center items-center mr-16' onClick={handleRapid}>
            <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Rapid Heartbeat </div>
          </div>
          
        </div>


        {/* second row */}
        <div className='flex justify-between mt-20'>

<div className='flex flex-col justify-center items-center' onClick={handleNausea}>
  <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Nausea </div>
</div>

<div className='flex flex-col justify-center items-center mx-16' onClick={handleSweats}>
  <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Cold Sweats
</div>
</div>

<div className='flex flex-col justify-center items-center mr-16' onClick={handleHighBP}>
  <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>High Blood Pressure </div>
</div>

<div className='flex flex-col justify-center items-center mr-16' onClick={handleFainting}>
  <img className='w-[167px] h-[164px] top-[280px] left-[222px] hover:drop-shadow-lg' src={HeartImg} />
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1'>Fainting </div>
</div>

</div>

 {/* button */}
 <Link to="/heartInputs">
          <button className="mt-[30px] bg-bluebtn py-3 px-12 text-white rounded-lg fixed right-[20px]" onClick={sendHeart}>
            Proceed
          </button>
        </Link>

      </div>
    </div>
  )
}

export default HeartProblem