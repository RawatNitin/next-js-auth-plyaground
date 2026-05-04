"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const { data: session } = useSession();

  const isLoggedIn = !!session?.user?.email;

  const handleLogin = async () => {
    signIn();
  };

  const handleLogout = async () => {
    signOut();
  };

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

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
