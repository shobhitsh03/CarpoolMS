import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20">
        {/* Left: Text */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            Smarter Carpooling. <br />
            Comfortable Rides. Greener Planet.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Share rides with people who match your comfort and personality preferences. 
            Reduce costs, save time, and make your commute enjoyable.
          </p>

          <div className="flex gap-4">
            <Link
              to="/matching"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Find a Ride
            </Link>
            <Link
              to="/dashboard"
              className="border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-200 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              Offer a Ride
            </Link>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://imgs.search.brave.com/s-cKsRFnGSdGZ85_iTACxd0honFuElSmXYSN7uAaikI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hZHZl/bnR1cm91cy1mYW1p/bHktY2FycG9vbGlu/Zy1jb3VudHJ5c2lk/ZS1taW5pdmFuLWNp/bmVtYXRpYy12aW50/YWdlLWluc3BpcmVk/LXJvYWQtdHJpcC1z/Y2VuaWMtbGFuZHNj/YXBlLWNsb3Vkcy0z/MzE0NDExMTEuanBn"
            alt="Carpool Illustration"
            className="w-full max-w-md rounded-xl shadow-lg dark:shadow-blue-800/20"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-800 py-16 px-6 md:px-20 transition-colors duration-300">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Our Carpool Management System?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Personality & Comfort Matching",
              desc: "Ride with people who share similar habits and preferences for a more comfortable experience.",
              icon: "🧍‍♀️🧍‍♂️",
            },
            {
              title: "Real-Time Ride Tracking",
              desc: "Track your carpool rides live and stay updated on arrival times, delays, and routes.",
              icon: "📍",
            },
            {
              title: "Eco-Friendly Commuting",
              desc: "Reduce traffic and carbon emissions by sharing your journey with others.",
              icon: "🌱",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-blue-600 dark:bg-blue-700 text-white py-16 text-center transition-colors duration-300">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Start Carpooling Smarter?
        </motion.h2>
        <Link
          to="/matching"
          className="bg-white text-blue-700 dark:bg-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
