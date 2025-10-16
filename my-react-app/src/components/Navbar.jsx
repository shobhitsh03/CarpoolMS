      import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-sm p-4 rounded-lg">
      <h1 className="text-xl font-semibold text-blue-700 dark:text-blue-400">Carpool Management System</h1>
      <ThemeToggle />
    </header>
  );
}
