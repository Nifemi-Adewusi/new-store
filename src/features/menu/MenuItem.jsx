/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { formatCurrency } from "../../utils/helpers";
 import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/CartSlice";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  //  const updateCart = useSelector
  const dispatch = useDispatch();
  return (
    <li className="sm:flex gap-4 py-2">
      <img
        className={`h-24 ${soldOut ? "opacity-50 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex pt-0.5 flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="md:mt-auto mt-2 flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && (
            <Button click={() => dispatch(addItem(id))} type="small">
              Add To Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
