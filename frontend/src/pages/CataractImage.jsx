import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DragDropFilesCataract from '../components/DragDropFilesCataract';

const CataractImage = () => {
  return (
    <div>
    <Navbar url="/concern1" loginUser="true" title="Cataract Checkup" />

    <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
    

      <div className="w-[1440px] mt-[20px] top-[160px] flex flex-col justify-center items-center">
        <div className="">
          <span className="mr-2 font-[600] text-[18px]">
          Please Stand straight and look into the camera 
          </span>
        </div>
      </div>

{/* for drag and drop */}
<DragDropFilesCataract/>


      {/* button */}
      <Link to="/cataractDoctor">
        <button className="mt-[7px] fixed right-[60px] bottom-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg">
          Proceed
        </button>
      </Link>
    </div>
  </div>
  )
}

export default CataractImage