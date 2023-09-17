import React from 'react'
import maleBody from '../assets/MaleBody.svg';

const MaleBody = () => {
  return (
    <div>
        <img src={maleBody}/>

        <button value='shoulder' className='fixed top-[240px] left-[400px] bg-bluebtn text-white px-4 py-1 rounded-lg'>Shoulder</button>

        <button value='arm' className='fixed top-[360px] left-[360px] bg-bluebtn text-white px-4 py-1 rounded-lg'>Arm</button>

        <button value='chest' className='fixed top-[270px] left-[520px] bg-bluebtn text-white px-4 py-1 rounded-lg'>Chest</button>

        <button value='stomach' className='fixed top-[360px] left-[500px] bg-bluebtn text-white px-4 py-1 rounded-lg'>Stomach</button>

        <button value='thigh' className='fixed top-[470px] left-[530px] bg-bluebtn text-white px-4 py-1 rounded-lg'>Thigh</button>

        <button value='leg' className='fixed top-[620px] left-[420px] bg-bluebtn text-white px-4 py-1 rounded-lg'>Leg</button>

        <button value='neck' className='fixed top-[210px] left-[940px] bg-bluebtn text-white px-4 py-1 rounded-lg'>Neck</button>

        <button value='back' className='fixed top-[310px] left-[910px] bg-bluebtn text-white px-4 py-1 rounded-lg'>Back</button>
    </div>
  )
}

export default MaleBody