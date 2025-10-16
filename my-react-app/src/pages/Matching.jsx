import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";

export default function Matching() {
  const [rides, setRides] = useState([]);
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedRide, setSelectedRide] = useState(null);

  // Fetch ride data dynamically
  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await fetch("/src/data/ridesData.json");
        const data = await response.json();
        setRides(data);
      } catch (error) {
        console.error("Error loading rides:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRides();
  }, []);

  const filteredRides = rides.filter(
    (ride) =>
      ride.from.toLowerCase().includes(searchFrom.toLowerCase()) &&
      ride.to.toLowerCase().includes(searchTo.toLowerCase()) &&
      (!date || ride.date === date)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8 transition-colors duration-300">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center text-blue-600 dark:text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Find Your Perfect Ride Match
      </motion.h1>

      {/* Search Filters */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md mb-10 grid md:grid-cols-4 gap-4">
        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3">
          <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mr-2" />
          <input
            type="text"
            placeholder="From..."
            value={searchFrom}
            onChange={(e) => setSearchFrom(e.target.value)}
            className="bg-transparent outline-none w-full text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-300"
          />
        </div>
        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3">
          <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mr-2" />
          <input
            type="text"
            placeholder="To..."
            value={searchTo}
            onChange={(e) => setSearchTo(e.target.value)}
            className="bg-transparent outline-none w-full text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-300"
          />
        </div>
        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3">
          <FaCalendarAlt className="text-blue-600 dark:text-blue-400 mr-2" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-transparent outline-none w-full text-gray-800 dark:text-gray-100"
          />
        </div>
        <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition px-4 py-3">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>

      {/* Ride Results */}
      {loading ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          Loading rides...
        </p>
      ) : (
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRides.length > 0 ? (
            filteredRides.map((ride, idx) => (
              <motion.div
                key={ride.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {ride.from} → {ride.to}
                  </h2>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    {ride.price}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <FaCalendarAlt className="inline-block mr-1" /> {ride.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <FaUserFriends className="inline-block mr-1" /> {ride.seats} seats left
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-medium mb-4">
                  Driver: {ride.driver}
                </p>
                <button
                  onClick={() => setSelectedRide(ride)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
                >
                  Request Ride
                </button>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-center text-gray-600 dark:text-gray-400 col-span-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No rides found. Try adjusting your search filters.
            </motion.p>
          )}
        </div>
      )}

      {/* Ride Modal */}
      <AnimatePresence>
        {selectedRide && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-[90%] max-w-md relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                onClick={() => setSelectedRide(null)}
              >
                <FaTimes size={20} />
              </button>

              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Confirm Your Ride
              </h2>

              <div className="space-y-3 mb-6">
                <p>
                  <strong>From:</strong> {selectedRide.from}
                </p>
                <p>
                  <strong>To:</strong> {selectedRide.to}
                </p>
                <p>
                  <strong>Date:</strong> {selectedRide.date}
                </p>
                <p>
                  <strong>Driver:</strong> {selectedRide.driver}
                </p>
                <p className="flex items-center gap-2">
                  <FaPhoneAlt /> +91 98765 43210
                </p>
                <p>
                  <strong>Seats Available:</strong> {selectedRide.seats}
                </p>
                <p>
                  <strong>Fare:</strong>{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    {selectedRide.price}
                  </span>
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
                  onClick={() => {
                    alert("Ride request sent successfully!");
                    setSelectedRide(null);
                  }}
                >
                  Confirm
                </button>
                <button
                  className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 py-2 rounded-lg font-semibold"
                  onClick={() => setSelectedRide(null)}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
