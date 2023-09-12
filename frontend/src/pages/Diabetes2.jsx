import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import sugarImg from "../assets/SugarImg.svg";
const Diabetes2 = () => {
  return (
    <div>
    <Navbar url="/DiabetesGlucose" loginUser="true" title="Diabetes" />

    <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
      <div className="mt-24">
        <img src={sugarImg} />
      </div>

      <div className="w-[1440px] mt-[60px] top-[160px] flex flex-col justify-center items-center">
        <div className="">
          <span className="mr-2 font-[600] text-[18px]">
            Enter Blood sugar level
          </span>
        </div>

        <div className="flex justc  items-center">
          <input
            type="text"
            className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4"
          />
        </div>
      </div>

      {/* button */}
      <Link to="/DiabetesRecord">
        <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg ">
          Proceed
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Diabetes2