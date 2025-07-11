import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDarkMode } from "../Fragments/ToggleMode";
import DarkModeToggle from "../Fragments/ButtonToggleMode";

export default function Navigation() {
  const { isDark } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="w-full">
      <nav
        className={`flex justify-between items-center gap-7 px-8 py-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm fixed top-10 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-4xl ${
          isDark
            ? "bg-gradient-to-r from-gray-800/90 via-gray-700/80 to-gray-800/90 border border-gray-600/40 shadow-xl shadow-gray-900/50"
            : "bg-gradient-to-r from-blue-500/20 via-blue-300/10 to-blue-500/20 border border-white/20 shadow-lg"
        }`}
      >
        <h1
          className={`font-bold text-lg transition-colors duration-300 ${
            isDark ? "text-blue-400" : "text-[var(--color-accent)]"
          }`}
        >
          portorama
        </h1>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `flex items-center gap-2 transition-all duration-300 ${
                isActive
                  ? isDark
                    ? "text-blue-400 font-semibold"
                    : "text-[var(--color-accent)] font-semibold"
                  : isDark
                    ? "text-gray-300 hover:text-blue-300"
                    : "text-[var(--color-text)] hover:text-blue-300"
              }`
            }
          >
            <span className="ri-home-9-line"></span>
            <span>Overview</span>
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `flex items-center gap-2 transition-all duration-300 ${
                isActive
                  ? isDark
                    ? "text-blue-400 font-semibold"
                    : "text-[var(--color-accent)] font-semibold"
                  : isDark
                    ? "text-gray-300 hover:text-blue-300"
                    : "text-[var(--color-text)] hover:text-blue-300"
              }`
            }
          >
            <span className="ri-user-smile-line"></span>
            <span>About</span>
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none transition-colors duration-300"
          >
            <i className={`ri-${isMenuOpen ? "close-line" : "menu-line"} ${isDark ? "text-white" : "text-black"}`}></i>
          </button>
        </div>

        {/* Desktop Resume & Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/public/CV ABDULLAH RAMADAN ELANSARY.pdf"
            download
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isDark
                ? "bg-blue-600/80 hover:bg-blue-600 text-white border border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/25"
                : "bg-blue-500/20 hover:bg-blue-500/30 text-[var(--color-accent)] border border-blue-300/30 hover:border-blue-400/50"
            }`}
          >
            <span className="ri-download-2-line"></span>
            <span>Resume</span>
          </a>
          <DarkModeToggle />
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div
          className={`md:hidden fixed top-24 left-1/2 transform -translate-x-1/2 z-30 w-[90%] max-w-4xl rounded-xl p-6 space-y-4 backdrop-blur-md shadow-lg ${
            isDark
              ? "bg-gray-800/90 text-white"
              : "bg-white/90 text-black border border-blue-100"
          }`}
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <span className="ri-home-9-line"></span>
            <span>Overview</span>
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <span className="ri-user-smile-line"></span>
            <span>About</span>
          </NavLink>
          <a
            href="/public/CV ABDULLAH RAMADAN ELANSARY.pdf"
            download
            className="flex items-center gap-2"
          >
            <span className="ri-download-2-line"></span>
            <span>Resume</span>
          </a>
          <DarkModeToggle />
        </div>
      )}

      <div
        className={`pt-28 transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
