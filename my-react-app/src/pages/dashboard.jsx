import React from "react";
import RideCard from "../components/RideCard";

const rides = [
  { route: "Downtown → University", time: "8:30 AM", seats: 2 },
  { route: "Mall → Airport", time: "10:00 AM", seats: 3 },
];

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Available Rides</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {rides.map((r, i) => (
          <RideCard key={i} ride={r} />
        ))}
      </div>
    </div>
  );
}
