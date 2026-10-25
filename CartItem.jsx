import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li className="cart-item">
      <img src={item.image} alt={item.name} className="cart-img" />
      <div className="cart-info">
        <h3>{item.name}</h3>
        <p className="muted">${item.price.toFixed(2)} each</p>
      </div>
      <div className="qty">
        <button
          className="qty-btn"
          onClick={() => dispatch(decreaseQuantity(item.id))}
          aria-label={`Decrease quantity of ${item.name}`}
        >
          −
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button
          className="qty-btn"
          onClick={() => dispatch(increaseQuantity(item.id))}
          aria-label={`Increase quantity of ${item.name}`}
        >
          +
        </button>
      </div>
      <p className="line-total">${(item.price * item.quantity).toFixed(2)}</p>
      <button
        className="btn btn-ghost"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </li>
  );
}
