/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import Button from "./Button"
import { decreaseItemQuantity, increaseItemQuantity } from "../features/cart/CartSlice"

function ChangeItemQuantity({ pizzaId }) {
    const dispatch = useDispatch()
    return (
        <div className="flex items-center gap-2">
            <Button click={()=> dispatch(increaseItemQuantity(pizzaId))} type={"small"}>+</Button>
            <Button click={()=> dispatch(decreaseItemQuantity(pizzaId))} type={"small"}>-</Button>
        </div>
    )
}


export default ChangeItemQuantity
