import { products } from "../../data/products";
import ProductCard from "./ProductCard";

export default function Shop() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Shop</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}