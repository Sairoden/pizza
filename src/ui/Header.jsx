// React & Libraries
import { Link } from "react-router-dom";

// Feature Components
import { SearchOrder, Username } from "../features";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
