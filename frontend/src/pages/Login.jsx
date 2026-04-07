import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login successful");
      } else {
        alert(data.message ?? "Login failed");
      }
    } catch {
      alert("Could not connect to server. Make sure backend is running.");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="p-6 shadow-lg rounded-xl w-80">
        <h2 className="text-xl mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-black text-white p-2 w-full"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="mt-3 text-sm">
          New user? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
