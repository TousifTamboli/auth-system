import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      alert(data.message ?? "Signup failed");

      if (res.ok) {
        navigate("/");
      }
    } catch {
      alert("Could not connect to server. Make sure backend is running.");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="p-6 shadow-lg rounded-xl w-80">
        <h2 className="text-xl mb-4">Signup</h2>

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
          onClick={handleSignup}
        >
          Signup
        </button>

        <p className="mt-3 text-sm">
          Already have an account? <Link to="/">Go to login</Link>
        </p>
      </div>
    </div>
  );
}
