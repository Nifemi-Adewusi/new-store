/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
function OptionComponent({ img, header, to = "/", arrowIcon, text, specialClass }) {
    const navigate = useNavigate();
    const navigateTo = function () { 
        navigate(to)
    }
  return (
      <div
          onClick={navigateTo}
      className={`px-5 py-4 ${specialClass} rounded-2xl border-[4px]  mb-11 flex items-center gap-6`}
    >
      <img src={img} alt="" />
      <div>
        <h1 className="text-xl font-bold ">{header}</h1>
        <p className="text-sm">{text}</p>
      </div>
      <img className="cursor-pointer" src={arrowIcon} alt="" />
    </div>
  );
}
export default OptionComponent;