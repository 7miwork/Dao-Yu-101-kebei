export default function ProductCard({ product }) {
  const handleClick = () => {
    alert("Coming soon");
  };

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
          <button onClick={handleClick}>Contact Sales</button>
        ) : (
          <button onClick={handleClick}>Buy Now</button>
        )}
      </div>
    </div>
  );
}