// React & Libraries
import { useSelector } from "react-redux";

// UI Components
import { Button } from "../../ui";

// Feature Components
import { DeleteCartItem, UpdateCartItemQuantity } from "../index";

// Utilities
import { formatCurrency } from "../../utils/helpers";

// Slices
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  useSelector;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateCartItemQuantity
          currentQuantity={currentQuantity}
          pizzaId={pizzaId}
        />
        <DeleteCartItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
