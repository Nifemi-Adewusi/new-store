/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { deleteItem } from "./CartSlice";
import ChangeItemQuantity from "../../ui/ChangeItemQuantity";
import DeleteBtn from "../../ui/DeleteBtn";
function CartItem({ item }) {
  const dispatch = useDispatch();

  const { id, name, quantity, totalPrice } = item;
  // console.log(pizzaId);
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-center">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center sm:gap-6 justify-between grow">
        <p className="text-sm font-bold sm:mt-1 sm:ml-4">
          {formatCurrency(totalPrice)}
        </p>
      <ChangeItemQuantity/>
        <DeleteBtn pizzaId={id} />
      </div>
    </li>
  );
}

export default CartItem;
