import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase md:text-2xl  px-4 py-4 border-b  border-stone-200 gap-3 items-center flex flex-col sm:px-6 sm:flex-row sm:justify-around">
      <Link className="tracking-widest" to="/">Fast React Pizza Company</Link>
      <SearchOrder />
      {/* <p>Nifemi</p> */}
      <UserName/>
    </header>
  );
}

export default Header;
