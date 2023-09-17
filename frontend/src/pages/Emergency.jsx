import React from 'react'
import Navbar from "../components/Navbar";

const Emergency = () => {
  return (
    <div>
    <Navbar url="/selectCase" loginUser="false" title="Hospitals near you" />

    <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]"></div>

    </div>
  )
}

export default Emergency