import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Bh1 = () => {
  return (
    <div>
    <Navbar url="/concern1" loginUser="true" title="Body Health" />

    <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
      

      <div className="w-[1440px] mt-[60px] top-[160px] flex flex-col justify-center items-center">
        <div className="">
          <span className="mr-2 font-[600] text-[18px]">
            Please choose your area of concern
          </span>
        </div>

        {/* <div className="flex justc  items-center">
          <input
            type="text"
            className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4"
          />
        </div> */}
      </div>

      
      <Link to="/bodyProblem">
        <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg ">
          Next
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Bh1