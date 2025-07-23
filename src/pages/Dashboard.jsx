import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f8f4ee] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-[#5c3d1c] mb-6">Welcome to TimberFlow</h1>

      <nav className="space-x-4">
        <Link
          to="/home"
          className="bg-[#5c3d1c] text-white px-4 py-2 rounded hover:bg-[#472d16]"
        >
          Home
        </Link>
        <Link
          to="/track"
          className="bg-[#5c3d1c] text-white px-4 py-2 rounded hover:bg-[#472d16]"
        >
          Track Shipment
        </Link>
        <Link
          to="/create"
          className="bg-[#5c3d1c] text-white px-4 py-2 rounded hover:bg-[#472d16]"
        >
          Create
        </Link>
      </nav>
    </div>
  );
};

export default Dashboard;

