// React & Libraries
import { useFetcher } from "react-router-dom";

// UI Components
import { Button } from "../../ui";

// Services
import { updateOrder } from "../../services";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export async function updateOrderAction({ request, params }) {
  const data = { priority: true };

  await updateOrder(params.orderId, data);

  return null;
}

export default UpdateOrder;
