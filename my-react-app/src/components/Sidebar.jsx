import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, LayoutDashboard, User, Users } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/matching", label: "Matching", icon: Users },
  { to: "/profile", label: "Profile", icon: User },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="w-56 bg-gray-100 dark:bg-gray-800 p-4 space-y-2">
      {links.map(({ to, label, icon: Icon }) => (
        <Link
          key={to}
          to={to}
          className={`flex items-center gap-3 p-2 rounded-lg text-sm font-medium transition-all ${
            location.pathname === to
              ? "bg-blue-600 text-white"
              : "text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700"
          }`}
        >
          <Icon size={18} />
          {label}
        </Link>
      ))}
    </aside>
  );
}
