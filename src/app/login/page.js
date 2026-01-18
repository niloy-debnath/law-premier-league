"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "../lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("lpl_admin", "true");

      // ✅ notify navbar instantly
      window.dispatchEvent(new Event("auth-change"));

      router.push("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white py-3 rounded">
          Login
        </button>
      </form>
    </main>
  );
}
