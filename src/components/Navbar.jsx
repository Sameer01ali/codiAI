import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { signOut } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;
  const isLearningPage = pathname === "/learning";

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };

  // Hide navbar on auth pages
  if (pathname === "/" || pathname === "/sign-in" || pathname === "/sign-up") {
    return null;
  }

  return (
    <nav className="bg-zinc-950 border-b border-zinc-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/home"
          className="text-2xl font-bold tracking-tighter 
            bg-gradient-to-r from-white via-red-500 to-red-800 
            bg-clip-text text-transparent hover:opacity-80"
        >
          GYAN HUB
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-6">

          {/* BACK BUTTON (Learning page only) */}
          {isLearningPage && (
            <button
              onClick={handleBack}
              className="text-zinc-400 font-medium hover:text-white transition text-sm"
            >
              ← Back
            </button>
          )}

          {/* FULL NAV */}
          <Link
            to="/home"
            className="text-yellow-400 font-medium hover:text-yellow-300 transition text-sm"
          >
            Home
          </Link>
          <Link
            to="/learning"
            className="text-yellow-400 font-medium hover:text-yellow-300 transition text-sm"
          >
            Learning
          </Link>
          <Link
            to="/about"
            className="text-yellow-400 font-medium hover:text-yellow-300 transition text-sm"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-yellow-400 font-medium hover:text-yellow-300 transition text-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* USER SECTION */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-zinc-500 text-[10px] uppercase tracking-widest">
              Logged in as
            </span>
            <span className="text-zinc-200 text-sm font-medium">
              {user?.firstName || "User"}
            </span>
          </div>

          <button
            onClick={() => signOut(() => (window.location.href = "/"))}
            className="bg-zinc-100 text-black text-xs font-bold px-4 py-2 rounded-full 
              hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            SIGN OUT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
