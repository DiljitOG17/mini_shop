import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount, selectCartTotal } from "../features/cart/cartSlice";

export default function Navbar() {
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);

  // NavLink gives us `isActive` so we can highlight the current page
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          Corner Shop
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart
            <span className="badge" aria-label={`${count} items in cart`}>{count}</span>
            <span className="nav-total">${total.toFixed(2)}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
