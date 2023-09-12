import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bgimg from "../assets/bg_image.svg";
const Concern2 = () => {
  return (
    <div>
      <Navbar
        url="/concern1"
        loginUser="true"
        title="Please Choose your concern"
      />

      <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
        <div className="flex justify-between mt-20">
          <div className="flex flex-col justify-center items-center">
            <Link to="/DiabetesGlucose">
              <img
                className="w-[187px] h-[224px] top-[280px] left-[222px]"
                src={bgimg}
              />
            </Link>
            <div className="w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[18px] leading-[33px] mt-3">
            Diabetes Checkup
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mx-32">
            <Link to="/bhcInfo">
              <img
                className="w-[187px] h-[224px] top-[280px] left-[222px]"
                src={bgimg}
              />
            </Link>
            <div className="w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[18px] leading-[33px] mt-3">
            Body Health
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Link to="/concern2">
              <img
                className="w-[187px] h-[224px] top-[280px] left-[222px]"
                src={bgimg}
              />
            </Link>
            <div className="w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[18px] leading-[33px] mt-3">
            Skin Health
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Concern2;
