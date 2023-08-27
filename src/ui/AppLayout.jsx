// React & Libraries
import { Outlet } from "react-router-dom";

// UI Components
import { Header } from "./index";

// Features Components
import { CartOverview } from "../features";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
