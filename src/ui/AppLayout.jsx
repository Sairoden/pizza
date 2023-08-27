// React & Libraries
import { Outlet, useNavigation } from "react-router-dom";

// UI Components
import { Header, Loader } from "./index";

// Features Components
import { CartOverview } from "../features";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(navigation);

  return (
    <div className="layout">
      {isLoading && <Loader />}
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
