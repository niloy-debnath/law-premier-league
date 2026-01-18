"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem("lpl_admin") === "true";
      setIsAdmin(loggedIn);
    };

    checkAuth();
    window.addEventListener("auth-change", checkAuth);

    return () => window.removeEventListener("auth-change", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("lpl_admin");
    window.dispatchEvent(new Event("auth-change"));
    setIsAdmin(false);
    setMenuOpen(false);
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
            className="h-10"
            alt="LPL Logo"
          />
          LPL
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks isAdmin={isAdmin} handleLogout={handleLogout} />
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#071c39] px-6 pb-6 space-y-4">
          <NavLinks
            isAdmin={isAdmin}
            handleLogout={handleLogout}
            onClick={() => setMenuOpen(false)}
            mobile
          />
        </div>
      )}
    </nav>
  );
}

/* ========================= */
/* Reusable Nav Links */
/* ========================= */

function NavLinks({ isAdmin, handleLogout, onClick, mobile }) {
  const linkClass = "block hover:text-yellow-400 transition";

  return (
    <>
      <Link href="/" className={linkClass} onClick={onClick}>
        Home
      </Link>

      <Link href="/teams" className={linkClass} onClick={onClick}>
        Teams
      </Link>

      <Link href="/players" className={linkClass} onClick={onClick}>
        Players
      </Link>

      <Link href="/matches" className={linkClass} onClick={onClick}>
        Matches
      </Link>

      {isAdmin && (
        <Link href="/admin" className={linkClass} onClick={onClick}>
          Dashboard
        </Link>
      )}

      {!isAdmin ? (
        <Link href="/login" className={linkClass} onClick={onClick}>
          Login
        </Link>
      ) : (
        <button
          onClick={handleLogout}
          className={`${
            mobile ? "w-full text-left" : ""
          } bg-red-600 px-4 py-2 rounded hover:bg-red-700`}
        >
          Logout
        </button>
      )}
    </>
  );
}
