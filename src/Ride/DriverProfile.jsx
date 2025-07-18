/* eslint-disable react/prop-types */
import { useDriverContext } from './Flow';
import {useState} from "react"
import DriverComponent from './DriverComponent';
import stars from './home-images/stars.png'
import back from './home-images/back.png';
import {useNavigate} from "react-router-dom";
import car from "./home-images/small-car.png";
function DriverProfile() {
    const {driver} = useDriverContext();
    const {driverName, driverImage, driverRate} = driver;
    // const { driverName, driverImage } = driverInfo;
    const [activeTab, setActiveTab] = useState("about")
    const navigate = useNavigate();
    const handleBack = function(){
        navigate("/hire")
    }
    return <div>
        <div>
            <div className = "flex gap-4 items-center mt-5 px-5">
                 <img onClick = {handleBack} src = {back}/>
                <h1 className = "text-2xl font-bold ml-8">Driver Profile</h1>
           
            </div>
            

           <DriverComponent driverName = {driverName} driverImage = {driverImage} driverRate = {driverRate} disableClick/>
            <div className = "flex items-center ml-10 mb-3 gap-2">
                <p className = "border-[3px] rounded-full p-2 border-[#0160FF]">100</p>
                <p className = "text-sm">Job Success</p>
                <p>|</p>
                <p className = "text-sm">10 Hires</p>
                <p>|</p>
                <p className = "text-sm">2M+ Earned</p>

            </div>
           <hr className = "border-[3px] border-grey-500"/>
           <div className = "flex items-center">
            <div className = "flex items-center gap-2 ml-10 mt-4">

           <button onClick = {()=> setActiveTab("about")} className = {`${activeTab === "about" ? "font-bold" : ""} cursor-pointer`}>About Driver</button>
               <p>|</p>
               <button onClick = {()=> setActiveTab("details")} className ={`${activeTab === "details" ? "font-bold" : ""} cursor-pointer`}>More Details</button>
            </div>

           </div>


        </div>
        <div>
            {activeTab === "about" && <AboutDriver/>}
            {activeTab === "details" && <MoreDetails/>}
        </div>
      
    </div>
}
export default DriverProfile;

function AboutDriver(){
    const {driver} = useDriverContext();
    const {driverName} = driver;
    return <div className = "ml-10">
        <h1 className = "font-bold text-xl">Professional Driver for Cars and Vans</h1>
        <p className = "text-sm tracking-wide mt-4 mb-4 mr-2">
            Experienced and dependable professional driver with a strong track record of safely operating cars and vans for both personal and commercial purposes. 
        </p>
        <p className = "text-sm">
            Skilled in urban and long-distance driving, route planning, vehicle maintenance checks, and providing excellent customer service. See more
        </p>

        <h2 className = "font-bold text-xl mt-8">Reviews from past clients</h2>
        <p className = "font-bold text-sm mt-5">Client rating</p>
        <div className = "flex gap-3 items-center">
        <img src = {stars}/>
           <p className="font-bold">(5.0)</p>
           <p className = "ml-8 text-sm">24/hr-#132,000 Earned</p>
        </div>
        <p className = "mt-3 tracking-wider">{driverName} was professional, courteous, and efficient throughout the entire trip. The vehicle was well-maintained, and his driving was smooth and safe. Will definitely book again.</p>
         <p className = "font-bold text-sm mt-8">Client rating</p>
        <div className = "flex gap-3 items-center">
        <img src = {stars}/>
           <p className="font-bold">(5.0)</p>
           <p className = "ml-8 text-sm">48/hr-#264,000 Earned</p>
        </div>
    </div>
}

function MoreDetails(){
    return <div className = "flex items-center gap-4 px-4 mt-4 ">
        <img src ={car}/>
        <h1 className ="font-bold text-sm">Car Details</h1>
        <p className = "text-sm">Plate No: LA 1234AG</p>
    </div>
}