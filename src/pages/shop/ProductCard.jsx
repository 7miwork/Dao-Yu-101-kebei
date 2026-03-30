export default function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #E2E8F0",
      borderRadius: "16px",
      padding: "20px",
      background: "#fff"
    }}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>

      <strong>{product.price}</strong>

      <div style={{ marginTop: "10px" }}>
        {product.type === "school" ? (
          <button>Contact Sales</button>
        ) : (
          <a href={`/#/checkout?product=${product.id}`}>
            <button>Buy Now</button>
          </a>
        )}
      </div>
    </div>
  );
}
