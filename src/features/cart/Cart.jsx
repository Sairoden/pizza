// UI Components
import { LinkButton, Button } from "../../ui";

const fakeCart = [
  {
    pizzId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
