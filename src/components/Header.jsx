export default function Header({ user, logout }) {
  return (
    <header style={{
      height: "60px",
      borderBottom: "1px solid #E2E8F0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      backgroundColor: "#fff"
    }}>
      <div style={{ fontSize: "18px", fontWeight: "500" }}>Dashboard</div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "10px", color: "#666" }}>
          {user?.role}
        </span>
        <button 
          onClick={logout}
          style={{
            padding: "8px 16px",
            backgroundColor: "#f1f5f9",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}