import React from "react";

export default function Profile() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Profile</h2>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
        />
        <input
          type="text"
          placeholder="Car Model"
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Save
        </button>
      </form>
    </div>
  );
}
