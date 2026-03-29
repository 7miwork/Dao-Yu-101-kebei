export default function Sidebar({ user }) {
  const role = user?.role;

  return (
    <aside style={{
      width: "220px",
      borderRight: "1px solid #E2E8F0",
      padding: "20px",
      backgroundColor: "#fff"
    }}>
      <h2 style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>Dao-Yu-101</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {role === "student" && (
          <>
            <a href="/#/dashboard/student" style={{ textDecoration: "none", color: "#333", padding: "8px 0" }}>Overview</a>
          </>
        )}

        {role === "teacher" && (
          <>
            <a href="/#/dashboard/teacher" style={{ textDecoration: "none", color: "#333", padding: "8px 0" }}>Classes</a>
          </>
        )}

        {role === "parent" && (
          <>
            <a href="/#/dashboard/parent" style={{ textDecoration: "none", color: "#333", padding: "8px 0" }}>Child Progress</a>
          </>
        )}

        {role === "school" && (
          <>
            <a href="/#/dashboard/school" style={{ textDecoration: "none", color: "#333", padding: "8px 0" }}>School Panel</a>
          </>
        )}

        {role === "admin" && (
          <>
            <a href="/#/dashboard/admin" style={{ textDecoration: "none", color: "#333", padding: "8px 0" }}>Admin Panel</a>
          </>
        )}
      </nav>
    </aside>
  );
}