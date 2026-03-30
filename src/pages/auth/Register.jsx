import { useState } from "react";
import { useAuth } from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // Use demo student account for registration
    const result = await login("student@demo.com", "demo123");
    if (result.success) {
      navigate(result.redirectTo);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Account</h1>

      <input 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        placeholder="Password" 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>
        Create Account
      </button>
    </div>
  );
}
