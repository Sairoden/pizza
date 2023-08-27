// React & Libraries
import { Link } from "react-router-dom";

// Feature Components
import { SearchOrder } from "../features";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
