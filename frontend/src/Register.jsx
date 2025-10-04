import React, { useState } from "react";
import axios from "axios";
import { ACUTE_API_URL } from "../api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${ACUTE_API_URL}/users/register`, {
        name,
        email,
        password,
      });
      alert(`User registered: ${res.data.name}`);
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 80 }}>
      <div style={{ width: 320, padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
        <h2 style={{ textAlign: "center" }}>Register User</h2>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 12 }}
        />
        <button
          onClick={handleRegister}
          style={{ width: "100%", padding: 10, background: "#003366", color: "#fff", border: "none", borderRadius: 4 }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
