/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { createOrder } from "../../services/apiRestaurant";
import {
  Form,
  useActionData,
  useLoaderData,
  redirect,
  useNavigation,
} from "react-router-dom";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

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

function CreateOrder() {
  // const cart = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // const isSubmitting = true;

  const formErrors = useActionData();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  // const originalCart = useLoaderData();

  return (
    <div className="mt-8">
      <h2>Ready to order? Let&rsquo;s go!</h2>

      <Form method="POST">
        <div className="mt-9">
          <label className="label" htmlFor="customer">
            First Name
          </label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div>
          <label className="label">Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
            {formErrors?.phone && <p>{formErrors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="label">Address</label>
          <div>
            <input className="input" type="text" name="address" required />
          </div>
        </div>

        <div className="flex items-center gap-5 mt-3 mb-3 ">
          <input
            className="h-6 w-6 accent-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="text-sm font-bold sm:text-lg">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing Orders..." : "Order Now"}
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
    priority: data.priority === "on",
  };
  console.log(order);
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}
