/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button, { ButtonSecondary } from "../../ui/Button";
import CartItem from "./CartItem";
import { useState } from "react";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const [newCart, setNewCart] = useState(fakeCart);
  const handleDelete = (pizzaId) => {
    const updatedCart = newCart.filter((item) => item.pizzaId !== pizzaId);
    setNewCart(updatedCart);
  };
  const handleClearCart = () => {
    setNewCart([]);
  };
  return (
    <div>
      {/* <Link
        className="text-blue-500 hover:underline text-sm hover:text-blue-700"
        to="/menu"
      >
        &larr; Back to menu
      </Link> */}

      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>
      <ul className="divide-y divide-stone-200 border-b mt-3">
        {newCart.map((item) => (
          <CartItem
            handleDelete={handleDelete}
            key={item.pizzaId}
            item={item}
          />
        ))}
      </ul>
      <div className="mt-6  space-x-5">
        {/* <Link to="/order/new">Order pizzas</Link> */}
        {/* <LinkButton to="/order/new">Order pizzas</LinkButton> */}
        <Button to="/order/new">Order pizzas</Button>
        <ButtonSecondary onClick={handleClearCart}>Clear cart</ButtonSecondary>
      </div>
    </div>
  );
}

export default Cart;
