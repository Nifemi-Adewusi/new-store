/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import Button from "./Button"
import { decreaseItemQuantity, increaseItemQuantity } from "../features/cart/CartSlice"

function ChangeItemQuantity({ pizzaId }) {
    const dispatch = useDispatch()
    return (
      <div className="flex items-center gap-2">
        <Button
          type="round"
          click={() => dispatch(increaseItemQuantity(pizzaId))}
        >
          +
        </Button>
        <Button
          type="round"
          click={() => dispatch(decreaseItemQuantity(pizzaId))}
        >
          -
        </Button>
      </div>
    );
}


export default ChangeItemQuantity
