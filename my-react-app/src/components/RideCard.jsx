import React from "react";
import { motion } from "framer-motion";

export default function RideCard({ ride }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-4 rounded-lg shadow bg-white dark:bg-gray-800"
    >
      <h3 className="text-lg font-semibold">{ride.route}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {ride.time} | Seats: {ride.seats}
      </p>
    </motion.div>
  );
}
