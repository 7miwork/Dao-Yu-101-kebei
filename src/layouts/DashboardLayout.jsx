import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({ user, logout, children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar user={user} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header user={user} logout={logout} />

        <main style={{ padding: "20px", overflow: "auto" }}>
          {children}
        </main>
      </div>
    </div>
  );
}