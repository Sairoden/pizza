// React & Libraries
import { useDispatch } from "react-redux";

// UI Components
import { Button } from "../../ui";

// Slices
import { deleteItem } from "./cartSlice";

function DeleteCartItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteCartItem;
