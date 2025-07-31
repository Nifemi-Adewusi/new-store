/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFetcher } from "react-router-dom"
import Button from "../../ui/Button"
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
    const fetcher = useFetcher()
    return (
      <fetcher.Form method="PATCH" className="text-right">
        <Button type="primary">Make Priority</Button>
      </fetcher.Form>
    );
}

export default UpdateOrder;

export async function action({request, params}) {
    // console.log("UpdateOrder action called");
    const data = {priority: true};
    const orderId = params.orderId;
    updateOrder(orderId, data);
    return null;
}
