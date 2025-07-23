import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import timberflowLogo from "../assets/timberflow.png";
import homeIcon from "../assets/home.png";
import createIcon from "../assets/create.png";
import trackIcon from "../assets/track.png";
import loginIcon from "../assets/login.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/auth");
  };

  const navLinks = [
    { to: "/", label: "Home", icon: homeIcon },
    { to: "/create", label: "Order", icon: createIcon },
    { to: "/track", label: "Track", icon: trackIcon },
  ];

  return (
    <nav className="bg-white px-6 py-4 flex justify-between items-center shadow-md">
 
      <div className="flex items-center gap-3">
        <img src={timberflowLogo} alt="TimberFlow" className="w-10 h-10" />
        <span className="text-xl font-bold text-[#3B2F2F]">TimberFlow</span>
      </div>
      <div className="flex gap-6">
        {navLinks.map(({ to, label, icon }) => (
          <NavLink
            to={to}
            key={to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1 rounded transition ${
                isActive ? "bg-[#f0e8df]" : ""
              } hover:bg-[#f0e8df]`
            }
          >
            <img src={icon} alt={label} className="w-5 h-5" />
            <span className="text-[#3B2F2F] font-medium">{label}</span>
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#a97c50] text-white hover:bg-[#3B2F2F] group transition-all duration-300"
        >
          <img src={loginIcon} alt="Logout" className="w-5 h-5" />
          <span className="font-medium">Logout</span>
          <span className="ml-1 transform opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            ➜
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
