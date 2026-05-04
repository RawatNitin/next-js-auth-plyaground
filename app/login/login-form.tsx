"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = false;

  const handleLogin = async () => {};

  const handleLogout = async () => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: "space-between",
        verticalAlign: "center",
        gap: 10,
      }}
    >
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={isLoggedIn} onClick={handleLogin}>
        Login
      </button>

      <button disabled={!isLoggedIn} onClick={handleLogout}>
        Logout
      </button>

      {isLoggedIn ? "Logged In" : "Logged out"}
    </div>
  );
}
