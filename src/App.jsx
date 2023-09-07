// React & Libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// UI Components
import { Home, AppLayout, Error } from "./ui";

// Feature Components
import {
  Menu,
  Cart,
  CreateOrder,
  Order,
  menuLoader,
  orderLoader,
  createOrderAction,
  updateOrderAction,
} from "./features";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// 13
