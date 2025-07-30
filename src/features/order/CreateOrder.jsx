/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { createOrder } from "../../services/apiRestaurant";
import EmptyCart from "../../ui/EmptyCart";
import {
  Form,
  useActionData,
  useLoaderData,
  redirect,
  useNavigation,
} from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/CartSlice";
// import store from "";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [priority, setPriority] = useState(false);

  const handlePriorityChange = function () {
    setPriority((p) => !p);
  };
  const dispatch = useDispatch();
  console.log(priority);
  // const cart = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // const isSubmitting = true;
  const {
    userName,
    status: addressStatus,
    position,
    address,
  } = useSelector((state) => state.user);
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const isLoadingAddress = addressStatus === "loading";
  console.log(cart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = priority
    ? totalCartPrice + 0.2 * totalCartPrice
    : totalCartPrice;
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="mt-8">
      <h2>Ready to order? Let&rsquo;s go!</h2>
      {/* <button
        onClick={() => {
          dispatch(fetchAddress());
        }}
      >
        Get Position
      </button> */}
      <Form method="POST">
        <div className="mt-9 mb-9">
          <label className="label" htmlFor="customer">
            First Name
          </label>
          <input
            defaultValue={userName}
            className="input"
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="mb-9">
          <label className="label">Phone number</label>
          <div className="mb-9">
            <input className="input" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-9">
          <label className="label">Address</label>
          <div className="relative">
            <input
              className="input mb-4"
              type="text"
              name="address"
              disabled={isLoadingAddress || isSubmitting}
              required
              defaultValue={address}
            />
            {!position.latitude && !position.longitude && (
              <span className="absolute bottom-3 sm:bottom-5  right-[2px] z-10">
                <Button
                  disabled={isLoadingAddress || isSubmitting}
                  type=""
                  click={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  Get Address
                </Button>
              </span>
            )}
            {addressStatus === "error" && (
              <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">
                {formErrors.address}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-5 mt-8 mb-3 ">
          <input
            className="h-6 w-6 accent-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            value={priority}
            onChange={handlePriorityChange}
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="text-sm font-bold sm:text-lg">
            Want to your give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing Orders..."
              : `Order Now from ${formatCurrency(priorityPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const isValidNumber = isValidPhone(data.phone);
  // console.log(isValidNumber);

  const errors = {};
  if (!isValidNumber) {
    errors.phone =
      "Please give us Your Correct Phone Number. We might need to contact you.";
  }

  if (Object.keys(errors).length > 0) return errors;

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  store.dispatch(clearCart());
  console.log(order);
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
  // return null;
}
