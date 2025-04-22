import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
function UpdateOrder({ order }) {
  // we want fetcher write data so we use form instead of loader
  const fetcher = useFetcher();
  return (
    // this fetcher form: submit the form and revalidate(rerender the page after change) the page
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
// we need to connect this action with the page so we go to the app.js
// we dont need request (that passed to the action but wrote here to know it can be exist)
export async function action({ request, params }) {
  // we need just pass id and the data to the updateOrder function and can get the id from params
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
