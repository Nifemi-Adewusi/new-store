/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import Button from "./Button"
import { deleteItem } from "../features/cart/CartSlice"
function DeleteBtn({ pizzaId }) {
    const dispatch = useDispatch()
    return <Button  click={() => dispatch(deleteItem(pizzaId))} type="small">
              Delete
            </Button>
}
export default DeleteBtn