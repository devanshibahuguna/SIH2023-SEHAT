import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ButtonSelevtor from '../components/ButtonSelevtor';

const Bh2 = () => {
  return (
    <div>
    <Navbar url="/body" loginUser="true" title="Body Health" />

    <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
      

      <div className=" mt-[60px] top-[160px] flex flex-col justify-center items-center">
        <div className="">
          <span className="mr-2 font-[600] text-[18px]">
            Please select the problems you are facing
          </span>
        </div>
      </div>

{/* all problems */}
     <ButtonSelevtor/>
      
      <Link to="/bodyRecord">
        <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg right-[60px] bottom-[60px] fixed">
          Next
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Bh2