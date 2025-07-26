/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button, { ButtonSecondary } from "../../ui/Button";
import CartItem from "./CartItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./CartSlice";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector(getCart);
  // const [newCart, setNewCart] = useState(cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    console.log("Clearing cart");
    dispatch(clearCart());
  };
  const userName = useSelector((state) => state.user.userName);
  // console.log(userName);
  return (
    <div>
      {/* <Link
        className="text-blue-500 hover:underline text-sm hover:text-blue-700"
        to="/menu"
      >
        &larr; Back to menu
      </Link> */}

      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      {cart.length > 0 ? (
        <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>
      ) : (
        <h2 className="mt-7 text-xl font-semibold">
          Your cart is empty {userName}
        </h2>
      )}

      {cart.length > 0 ? (
        <ul key={cart.id} className="divide-y divide-stone-200 border-b mt-3">
          {cart.map((item) => (
            <CartItem key={item.pizzaId} item={item} />
          ))}
        </ul>
      ) : (
        <p>Start by adding items to your cart</p>
      )}
      {cart.length > 0 && (
        <div className="mt-6  space-x-5">
          <Button to="/order/new">Order pizzas</Button>
          <ButtonSecondary click={() => handleClearCart()}>
            Clear cart
          </ButtonSecondary>
        </div>
      )}
    </div>
  );
}

export default Cart;
