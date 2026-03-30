import { useLocation, Link } from "react-router-dom";
import { products } from "../../data/products";

export default function Checkout() {
  const query = new URLSearchParams(useLocation().search);
  const productId = query.get("product");

  const product = products.find(p => p.id == productId);

  if (!product) return <h1>Product not found</h1>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <strong>{product.price}</strong>

      <div style={{ marginTop: "20px" }}>
        <Link to="/register">
          <button>Continue to Registration</button>
        </Link>
      </div>
    </div>
  );
}
