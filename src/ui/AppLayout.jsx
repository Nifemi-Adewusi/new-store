import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from './Loader';
// import { getTotalCartQuantity } from "../features/cart/CartSlice";

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {isLoading && <Loader />}
      <Header />
      {/* <div className="overflow-scroll"> */}
      <main className=" max-w-3xl mx-auto">
        <Outlet />
      </main>
      {/* </div> */}

      <CartOverview />
    </div>
  );
}

export default AppLayout;
