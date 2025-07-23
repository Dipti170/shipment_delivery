import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import diningTable from "../assets/dining_table.png";
import bookshelf from "../assets/sheesam_bookshelf.png";
import Table from "../assets/teak_coffee_table.png";
import wardrobe from "../assets/Wooden_Wardrobe.png";
import bed from "../assets/bed.png";
import chair from "../assets/chair.png";
import shoeRack from "../assets/shoe.png";
import tvUnit from "../assets/tvunit.png";
import sideTable from "../assets/stable.png";
import cabinet from "../assets/scabinet.png";
import plates from "../assets/plates.png";
import tray from "../assets/tray.png";
import teak from "../assets/teak.png";
import rosewood from "../assets/rosewood.png";
import maple from "../assets/maple.png";
import oak from "../assets/oak.png";
import walnut from "../assets/walnut.png";
import sheesham from "../assets/sheesham.png";

const furnitureOptions = [
  { name: "Teak Coffee Table", image: Table },
  { name: "Sheesham Bookshelf", image: bookshelf },
  { name: "Wooden Wardrobe", image: wardrobe },
  { name: "Dining Table Set", image: diningTable },
  { name: "Queen Size Bed", image: bed },
  { name: "Rocking Chair", image: chair },
  { name: "Shoe Rack", image: shoeRack },
  { name: "TV Unit", image: tvUnit },
  { name: "Side Table", image: sideTable },
  { name: "Storage Cabinet", image: cabinet },
  { name: "Wooden Plate", image: plates },
  { name: "Wooden Tray", image: tray },
];

const woods = [
  { name: "Teak", image: teak },
  { name: "Rosewood", image: rosewood },
  { name: "Maple", image: maple },
  { name: "Walnut", image: walnut },
  { name: "Oak", image: oak },
  { name: "Sheesham", image: sheesham },
];

const Home = () => {
  const navigate = useNavigate();

  const scrollToFurniture = () => {
    document.getElementById("furniture")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#F4E8D7] text-[#4B2E1D]">
      {/* Hero */}
      <section className="py-20 text-center bg-[#EADBC8]">
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold">
          Welcome to TimberFlow
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-4 text-lg">
          Delivering Timeless Wooden Furniture with Care
        </motion.p>
        <motion.button onClick={scrollToFurniture} className="mt-8 px-6 py-3 bg-[#4B2E1D] text-white rounded-xl hover:bg-[#3c2315] transition">
          Explore Collection
        </motion.button>
        <div className="mt-4 flex justify-center gap-4">
          <button onClick={() => navigate("/track")} className="underline text-[#4B2E1D] hover:text-[#36200f]">
            Track Shipment
          </button>
          <button onClick={() => navigate("/create")} className="underline text-[#4B2E1D] hover:text-[#36200f]">
            Create Shipment
          </button>
        </div>
      </section>

      {/* Furniture Collection */}
      <section id="furniture" className="py-14 px-6 md:px-12">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Furniture Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {furnitureOptions.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-3 rounded-xl shadow-md text-center"
            >
              <img src={item.image} alt={item.name} className="h-32 mx-auto mb-2 object-contain" />
              <h3 className="text-md font-medium">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wood Types */}
      <section className="py-14 px-6 md:px-12 bg-[#EADBC8]">
        <h2 className="text-3xl font-semibold text-center mb-10">Types of Wood We Use</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {woods.map((wood, index) => (
            <div key={index} className="text-center">
              <img src={wood.image} alt={wood.name} className="h-20 mx-auto object-contain" />
              <p className="mt-2 font-medium">{wood.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-6 md:px-12">
        <h2 className="text-3xl font-semibold text-center mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Loved the craftsmanship and delivery speed!",
            "Great support and beautifully packed furniture.",
            "Smooth tracking and wonderful quality!",
          ].map((quote, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6">
              <p className="italic text-[#4B2E1D]">“{quote}”</p>
              <p className="mt-2 text-sm font-bold text-right">- Customer {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-6 md:px-12 bg-[#EADBC8]">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          <div>
            <h3 className="text-3xl font-bold text-[#4B2E1D]">500+</h3>
            <p>Orders Delivered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#4B2E1D]">300+</h3>
            <p>Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#4B2E1D]">12+</h3>
            <p>Wood Types</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#4B2E1D]">24x7</h3>
            <p>Support</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4B2E1D] text-white py-6 text-center">
        <p>© 2025 TimberFlow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
