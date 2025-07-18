// import greenArrow from './home-images/green.png';
// import filter from "./DriverImages/filter.png";
/* eslint-disable react/prop-types */
import heart from "./DriverImages/heart.png";
import verification from './DriverImages/verify.png';
import rating from './DriverImages/rating.png';
import {useNavigate} from 'react-router-dom';
import { useDriverContext } from './Flow';
import { useState } from "react";

function DriverComponent({ driverName, driverImage, driverRate, border, disableClick }) {
  const navigate = useNavigate();
    const rate = driverRate.toLocaleString("en-US");
    const driverInfo = {
      driverName,
      driverImage,
      driverRate,
    };
    const [like, setLike] = useState(false);
   const {setDriver}= useDriverContext()
    const navigateToDriver = function(){
        if(disableClick) return;
      setDriver(driverInfo);
      navigate('/profile');
    }
    return (
      <li className={`flex items-center  gap-6 max-[352px]:gap-2 p-3 ml-4 mr-4 mb-7 ${border ? "border-[2px]" : ""} rounded-xl`}>
        <img onClick = {navigateToDriver} src={driverImage} className="mb-24 cursor-pointer" alt={driverName} />
        <div>
          <div className="flex items-center gap-4">
            <h1 onClick={navigateToDriver} className="cursor-pointer">{driverName}</h1>

            <img src={verification} alt="verification Badge" />
          </div>

          <p className="mb-2">Ikeja, Lagos 02:30</p>
          <div className="flex items-center gap-4 max-[352px]:gap-2 max-[352px]:ml-[-5px]">
            <img src={rating} alt="" />
            <p>Top rated</p>
            <p>{rate}/hr</p>
          </div>
          <div className="flex gap-2 mt-3 max-[352px]:mt-5">
            <button className="bg-[#00B907] px-4 py-2 rounded-full text-white">
              Message
            </button>
            <button className="border border-[#00B907] rounded-full px-5 py-2">
              Hire
            </button>
          </div>
        </div>
        <div
          onClick={() => setLike(!like)}
          className={`mb-28 ml-14 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-500 max-[410px]:ml-2 max-[352px]:ml-0 ${
            like ? "bg-red-500 scale-110" : "bg-gray-200"
          }`}
        >
          <img src={heart} alt="like" className="w-5 h-5" />
        </div>
      </li>
    );
    
}
export default DriverComponent
