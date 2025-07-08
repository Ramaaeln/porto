import { NavLink, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="w-full ">
      <nav className="flex absolute justify-between items-center gap-7 px-8 py-3 rounded-full shadow-lg
  bg-gradient-to-r from-blue-500/20 via-blue-300/10 to-blue-500/20
  border border-white/20 backdrop-blur-sm
  fixed top-10 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-4xl">
  
  <div>
    <h1 className="text-[var(--color-accent)] font-bold text-lg">portorama</h1>
  </div>

  <div className="flex gap-6">
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-[var(--color-text)] font-semibold"
          : "text-[var(--color-accent)] hover:text-blue-300"
      }
    >
      <span className="ri-home-9-line"></span>Overview
    </NavLink>

    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive
          ? "text-[var(--color-text)] font-semibold"
          : "text-[var(--color-accent)] hover:text-blue-300"
      }
    >
      <span className="ri-user-smile-line"></span>About
    </NavLink>
  </div>

  <div>
    <a href="/public/CV ABDULLAH RAMADAN ELANSARY.pdf" download><span className="ri-download-2-line">{" "}</span>Resume</a>
  </div>
</nav>


      <div className="pt-28"> 
        <Outlet />
      </div>
    </div>
  );
}
