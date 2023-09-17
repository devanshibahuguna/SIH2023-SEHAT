import React from 'react'
import Navbar from '../components/Navbar'
import HeartImg from '../assets/HeartImg.svg';
import { Link } from 'react-router-dom';

const HeartInputs = () => {
  return (
    <div>
      <Navbar url='/healthProblem' loginUser='true' title='Heart Checkup' />

      <div className='w-[100vw]  flex flex-col items-center text-center font-bold text-[16px] bg-bgall h-[calc(100vh-100px)]'>

        {/* first row */}
        <div className='flex justify-between mt-10 text-center'>
            
            <div className='w-[160px] text-left ml-[-140px]'>
                <div className='h-[50px]'>Age</div>
                    <input
                    type='text'
                    className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 h-[45px]"/>
            </div>

            <div className='w-[160px] text-left mx-40'>
                <div className='h-[50px]'>Sex</div>
                    <input
                    type='text'
                    className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 h-[45px]"/>
            </div>

            <div className='w-[160px] text-left mr-40'>
                <div className='h-[50px]'>Resting Blood Pressure</div>
                    <input
                    type='text'
                    className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 h-[45px]"/>
            </div>

            <div className='w-[160px] text-left'>
                <div className='h-[50px]'>Serum Cholestrol <span className='text-gray-400 text-[14px]'>(mg/dl)</span></div>
                    <input
                    type='text'
                    className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 h-[45px]"/>
            </div>

        </div>


        {/* second row */}
        <div className='flex justify-between mt-10'>
            
            <div className=' text-left ml-[-10px] w-[160px]'>
                <div className='h-[50px] '>Exercised Induced Agina</div>
                    <input
                    type='text'
                    className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 h-[45px]"/>
            </div>

            <div className='w-[160px] text-left mx-40'>
                <div className='h-[50px]'>Maximum HeartRate</div>
                    <input
                    type='text'
                    className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 h-[45px]"/>
            </div>

            <div className='w-[160px] text-left mr-40'>
                <div className='h-[50px] w-[200px]'>Fasting Blood Sugar <span className='text-gray-400 text-[14px]'>(120mg/dl)</span></div>
                    <input
                    type='text'
                    className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 h-[45px]"/>
            </div>

            <div className='text-left'>
                <div className='h-[50px] w-[260px]'>ST depression induced by exercise</div>
                    <input
                    type='text'
                    className="flex w-[290px] justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 h-[45px]"/>
            </div>

        </div>


    {/* third row */}
    <div className='flex justify-between mt-10'>
            
            <div className=' text-left ml-[-10px] w-[160px]'>
                <div className='h-[50px] '>Resting Electrocardiographic results</div>
                    <input
                    type='text'
                    className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 h-[45px]"/>
            </div>

            <div className='w-[160px] text-left mx-40'>
                <div className='h-[50px]'>Slope of the peak excercise ST segment</div>
                    <input
                    type='text'
                    className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 h-[45px]"/>
            </div>

            <div className='w-[160px] text-left mr-40'>
                <div className='h-[50px] w-[200px]'>Major vessels coloured by flouroscopy</div>
                    <input
                    type='text'
                    className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 h-[45px]"/>
            </div>

            <div className='text-left'>
                <div className='h-[50px] w-[260px]'>thal:0=normal:1=fixed defect: 2=reversible defect</div>
                    <input
                    type='text'
                    className="flex w-[290px] justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 h-[45px]"/>
            </div>

        </div>

 {/* button */}
 <Link to="/heartInputs">
          <button className="mt-[30px] bg-bluebtn py-3 px-12 text-white rounded-lg fixed right-[20px] bottom-[20px]">
            Proceed
          </button>
        </Link>

      </div>
    </div>
  )
}

export default HeartInputs