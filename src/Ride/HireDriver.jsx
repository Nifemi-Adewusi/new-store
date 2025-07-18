/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import greenArrow from './home-images/green.png';
import filter from "./DriverImages/filter.png";
import heart from "./DriverImages/heart.png";
import verification from './DriverImages/verify.png';
import rating from './DriverImages/rating.png';

import adekunle from "./DriverImages/adekunle.png";

import alice from "./DriverImages/Alice.png";

import micheal from "./DriverImages/micheal.png";

import olugbenga from "./DriverImages/olugbenga.png";

import samson from './DriverImages/samson.png';

import samuel from './DriverImages/samuel.png';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import { useDriverContext } from './Flow';
import DriverComponent from './DriverComponent';


import checked from './home-images/checked.png';
import cancel from "./home-images/cancel.png";
import unchecked from './home-images/unchecked.png';

const Drivers = [
    {
      driverName:"Micheal A",
      hourlyRate: 5000,
      img:micheal
    },
    {
        driverName: "Olugbenga A",
        hourlyRate: 5000,
        img:olugbenga,
    },

    {
        driverName: "Abuchi Samuel",
        hourlyRate: 4700,
        img:samuel
    },
    {
        driverName: "Samson Idris",
        hourlyRate: 5500,
        img:samson,
    },
    {
        driverName: "Alice A",
        hourlyRate: 5000,
        img: alice,
        
    },
    {
        driverName: "Adebayo Kunle",
        hourlyRate: 4700,
        img:adekunle
    }

]

function HireDriver() {
    const [searchTerm, setSearchTerm] = useState("");
    const {showFilter, setShowFilter} = useDriverContext()
      const filteredDrivers = Drivers.filter((driver) =>
    driver.driverName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openFilter = function(){
    setShowFilter(true);
  }
    return <>
       {showFilter && <ShowFilter/>}
   {!showFilter &&  <div className='mt-8'>
        <h1 className="text-3xl font-bold mt-10 text-center">Hire a Driver</h1>
        <div className = "flex items-center">
        <div className = "relative w-72 ml-4 my-6 max-[352px]:ml-[-1px] pr-5">
            <input value={searchTerm}
                onChange={
                (e)=> setSearchTerm(e.target.value)
            }    className='rounded-full w-full pr-10 p-2 ml-4 placeholder:text-center max-[352px]:ml-0' type="text" placeholder="Adeniyi, Jones" />
           <img className='w-6 h-6 absolute right-1 top-1/2 transform -translate-y-1/2 cursor-pointer' src={greenArrow} alt="" />
        </div>
         <img onClick = {openFilter} className = "ml-8 w-8 h-8 max-[352px]:w-5 max-[35px]:h-5 max-[352px]:ml-3 cursor-pointer" src = {filter}/>
        </div>
       
        <ul>
            {filteredDrivers.map(driver => {
                return <DriverComponent key={driver.driverName} driverImage={driver.img} driverRate={driver.hourlyRate} driverName={driver.driverName}
                border/>
                
            })}
        </ul>
    </div>  }
     </>    
}

// function ShowFilter(){
//   const {setShowFilter} = useDriverContext();
//   const [checkedImage, setCheckedImage] = useState(false);
//   const closeFilter = function(){
//     setShowFilter(false)
//   }
//   const handleCheck = function(){
//     setCheckedImage(checked=> !checked)
//   }
//   return <div className = "mt-96 ml-72">
//       <img className = "ml-80 mb-10 cursor-pointer" onClick = {closeFilter} src = {cancel}/>
//       <h1 className = "font-bold text-2xl mb-4">Filter by</h1>
//       <p>Bus-stop</p>
//       <div className = "flex gap-2 items-center">
//       <img className = "cursor-pointer" onClick = {handleCheck} src = {checkedImage ? checked : unchecked}/>
//       <p>Closest bus-stop</p>
//       </div>
//       <input />
//       <p>Job Type</p>

//       <div className = "flex gap-8 mt-6">
//         <button className = "border-[3px] border-[#00B907] rounded-full px-6 py-3 text-[#00B907] font-bold">Clear Filters</button>
//         <button className ="bg-[#00B907] text-white rounded-full px-8 py-3 font-bold"> Apply Filters</button>
//       </div>
//   </div>
// }

function ShowFilter() {
  const { setShowFilter } = useDriverContext();
  const [checkedImage, setCheckedImage] = useState(false);

  const closeFilter = function () {
    setShowFilter(false);
  };

  const handleCheck = function () {
    setCheckedImage((checked) => !checked);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-start justify-center pt-32">
      {/* Filter Content */}
      <div className=" bg-white rounded-xl p-8 mt-50 shadow-xl relative">
        <img
          className="absolute top-4 right-4 w-6 h-6 cursor-pointer"
          onClick={closeFilter}
          src={cancel}
          alt="Close"
        />

        <h1 className="font-bold text-2xl mb-6 text-center">Filter by</h1>

        <div className="mb-6">
          <p className="font-medium mb-2">Bus-stop</p>
          <div className="flex gap-2 items-center">
            <img
              className="cursor-pointer"
              onClick={handleCheck}
              src={checkedImage ? checked : unchecked}
              alt="checkbox"
            />
            <p>Closest bus-stop</p>
          </div>
          <input
            className="w-full mt-3 border rounded-md p-2"
            placeholder="Enter location..."
          />
        </div>

        <div className="mb-6">
          <p className="font-medium mb-2">Job Type</p>
          {/* Add actual options later */}
        </div>

        <div className="flex gap-6 justify-end">
          <button className="border-2 border-[#00B907] text-[#00B907] font-bold px-6 py-2 rounded-full">
            Clear Filters
          </button>
          <button className="bg-[#00B907] text-white font-bold px-6 py-2 rounded-full">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}


export default HireDriver;

