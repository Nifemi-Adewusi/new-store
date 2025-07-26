/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { formatCurrency } from "../../utils/helpers";
 import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/CartSlice";
import DeleteBtn from "../../ui/DeleteBtn";
import ChangeItemQuantity from "../../ui/ChangeItemQuantity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  // console.log(pizza);
  const dispatch = useDispatch();

  //  const updateCart = useSelector
  const handleAddCart = () => {
    const newItem = {
      id,
      name,
      soldOut,
      imageUrl,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

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
            <p className="text-sm">
              {formatCurrency(
                !currentQuantity ? unitPrice : unitPrice * currentQuantity
              )}
            </p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {/* {isInCart && <DeleteBtn pizzaId={id} />}
          {isInCart ? (
            <span className="text-sm text-stone-500">
              {currentQuantity} in cart
            </span>
          ) : null}
          {!soldOut &&
            (currentQuantity <= 0 ? (
              <Button click={() => handleAddCart()} type="small">
                Add To Cart
              </Button>
            ) : null)}
          {!soldOut && currentQuantity > 0 && (
            <ChangeItemQuantity pizzaId={id} />
          )} */}
          {!soldOut && !isInCart && (
            <Button click={handleAddCart} type="small">
              Add To Cart
            </Button>
          )}

          {isInCart && (
            <>
              <span className="text-sm text-stone-500">
                {currentQuantity} in cart
              </span>
              <ChangeItemQuantity pizzaId={id} />
              <DeleteBtn pizzaId={id} />
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
