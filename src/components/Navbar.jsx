"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem("lpl_admin") === "true";
      setIsAdmin(loggedIn);
    };

    checkAuth(); // initial check

    window.addEventListener("auth-change", checkAuth);

    return () => {
      window.removeEventListener("auth-change", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("lpl_admin");

    // ✅ notify navbar instantly
    window.dispatchEvent(new Event("auth-change"));

    setIsAdmin(false);
    router.push("/");
  };

  return (
    <nav className="bg-[#071c39] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-yellow-400 flex gap-2 items-center"
        >
          <img
            src="https://i.ibb.co/nq25fX5D/Picsart-26-01-14-22-56-27-888.png"
            className="h-12"
            alt="LPL Logo"
          />
          LPL
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>

          <Link href="/teams" className="hover:text-yellow-400">
            Teams
          </Link>

          <Link href="/players" className="hover:text-yellow-400">
            Players
          </Link>

          <Link href="/matches" className="hover:text-yellow-400">
            Matches
          </Link>

          {/* ✅ Show Admin Dashboard only if logged in */}
          {isAdmin && (
            <Link href="/admin" className="hover:text-yellow-400">
              Dashboard
            </Link>
          )}

          {/* ✅ Login / Logout toggle */}
          {!isAdmin ? (
            <Link href="/login" className="hover:text-yellow-400">
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
