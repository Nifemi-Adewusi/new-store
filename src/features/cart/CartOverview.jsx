import { Link } from "react-router-dom";


function CartOverview() {
  return (
    <div className="bg-stone-800 px-4 py-4 text-stone-200 uppercase sm:px-6 flex justify-between items-center">
      <p className="text-stone-300 font-semibold gap-5 text-sm md:text-base flex space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link className="" to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
