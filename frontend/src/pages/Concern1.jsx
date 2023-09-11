import React from 'react'
import Navbar from '../components/Navbar'

const Concern1 = () => {
  return (
    <div>
        <Navbar url='/loginSuccess' loginUser='true' title='Please Choose your concern'/>

        <div className='w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'></div>
    </div>
  )
}

export default Concern1