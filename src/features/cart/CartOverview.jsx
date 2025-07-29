import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const price = useSelector(getTotalCartPrice);
  if (!totalCartQuantity) return null;
  return (
    <div className="bg-stone-800 px-4 py-4 text-stone-200 uppercase sm:px-6 flex justify-between items-center">
      <p className="text-stone-300 font-semibold gap-5 text-sm md:text-base flex space-x-4">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(price)}</span>
      </p>
      <Link className="text-white" to="/cart">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
