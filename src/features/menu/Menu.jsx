// React & Libraries
import { useLoaderData } from "react-router-dom";

// Services
import { getMenu } from "../../services";
import MenuItem from "./MenuItem";

export async function menuLoader() {
  const menu = await getMenu();

  return menu;
}

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
