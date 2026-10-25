import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product, onAdded }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
    onAdded(product.name);
  };

  return (
    <article className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <div className="card-body">
        <p className="card-category">{product.category}</p>
        <h3 className="card-title">{product.name}</h3>
        <div className="card-footer">
          <span className="price">${product.price.toFixed(2)}</span>
          <button className="btn btn-primary" onClick={handleAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
