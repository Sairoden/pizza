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
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
