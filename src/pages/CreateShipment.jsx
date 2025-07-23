import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import diningTable from "../assets/dining_table.png";
import bookshelf from "../assets/sheesam_bookshelf.png";
import coffeeTable from "../assets/teak_coffee_table.png";
import wardrobe from "../assets/Wooden_Wardrobe.png";
import bed from "../assets/bed.png";
import chair from "../assets/chair.png";
import shoeRack from "../assets/shoe.png";
import tvUnit from "../assets/tvunit.png";
import sideTable from "../assets/stable.png";
import cabinet from "../assets/scabinet.png";
import plates from "../assets/plates.png";
import tray from "../assets/tray.png";
const itemPrices = {
  "Teak Coffee Table": 9500,
  "Sheesham Bookshelf": 8200,
  "Wooden Wardrobe": 13400,
  "Dining Table Set": 18000,
  "Queen Size Bed": 22000,
  "Rocking Chair": 6200,
  "Shoe Rack": 4500,
  "TV Unit": 7800,
  "Side Table": 3900,
  "Storage Cabinet": 8600,
  "Wooden Plate": 950,
  "Wooden Tray": 1250,
};

const furnitureOptions = [
  { name: "Teak Coffee Table", image: coffeeTable },
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

const woodTypes = ["Teak", "Rosewood", "Maple", "Sheesham", "Oak"];

const CreateShipment = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    address: "",
    item: "",
    weight: "",
    packageSize: "Medium",
    woodType: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleItemSelect = (item) => {
    setFormData((prev) => ({ ...prev, item: item.name }));
    setSelectedImage(item.image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userEmail) {
      alert("Please log in before placing an order.");
      return;
    }

    const price = itemPrices[formData.item] || 0;

    const newShipment = {
      ...formData,
      id: uuidv4(),
      userEmail,
      orderDate: new Date().toISOString(),
      status: "Order Placed",
      image: selectedImage,
      price,
    };

    try {
      const prevData = JSON.parse(localStorage.getItem("shipments")) || [];
      const updatedData = [...prevData, newShipment];
      localStorage.setItem("shipments", JSON.stringify(updatedData));
      localStorage.setItem("lastShipmentId", newShipment.id);

      alert("✅ Shipment Created Successfully!");
      navigate("/track");
    } catch (error) {
      console.error("Failed to store shipment:", error);
      alert("Something went wrong while saving the shipment.");
    }
  };

  return (
    <div className="min-h-screen p-8 bg-[#f4ebe2] text-[#4e342e] font-[sans-serif]">
      <div className="max-w-3xl mx-auto bg-[#fff8f1] rounded-2xl shadow-lg p-8 border border-[#d7ccc8]">
        <h2 className="text-3xl font-bold mb-6 text-center">Order Shipment</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="sender"
              placeholder="Sender Name"
              required
              value={formData.sender}
              onChange={handleChange}
              className="p-3 rounded border border-[#bcaaa4] bg-white"
            />
            <input
              type="text"
              name="receiver"
              placeholder="Receiver Name"
              required
              value={formData.receiver}
              onChange={handleChange}
              className="p-3 rounded border border-[#bcaaa4] bg-white"
            />
            <input
              type="text"
              name="address"
              placeholder="Receiver Address"
              required
              value={formData.address}
              onChange={handleChange}
              className="p-3 rounded border border-[#bcaaa4] bg-white col-span-1 sm:col-span-2"
            />
            <select
              name="packageSize"
              value={formData.packageSize}
              onChange={handleChange}
              className="p-3 rounded border border-[#bcaaa4] bg-white"
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              required
              value={formData.weight}
              onChange={handleChange}
              className="p-3 rounded border border-[#bcaaa4] bg-white"
            />
            <select
              name="woodType"
              value={formData.woodType}
              onChange={handleChange}
              className="p-3 rounded border border-[#bcaaa4] bg-white"
            >
              <option value="">Select Wood Type</option>
              {woodTypes.map((wood) => (
                <option key={wood} value={wood}>
                  {wood}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Select Item</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {furnitureOptions.map((item) => (
                <div
                  key={item.name}
                  className={`cursor-pointer border rounded-xl p-2 text-center shadow-sm transition-all duration-200 hover:shadow-md ${
                    formData.item === item.name
                      ? "border-[#6d4c41] bg-[#efebe9]"
                      : "border-[#d7ccc8]"
                  }`}
                  onClick={() => handleItemSelect(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain mx-auto"
                  />
                  <p className="mt-2 text-sm">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {selectedImage && (
            <div className="mt-6 text-center">
              <h4 className="text-md font-medium mb-2">Selected Item:</h4>
              <img
                src={selectedImage}
                alt="Selected"
                className="mx-auto w-28 h-28 object-contain"
              />
            </div>
          )}

          {formData.item && (
            <p className="text-center text-lg font-semibold text-green-800 mt-2">
              Price: ₹{itemPrices[formData.item] || 0}
            </p>
          )}

          <button
            type="submit"
            className="mt-8 w-full bg-[#6d4c41] hover:bg-[#5d4037] text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Place Shipment Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateShipment;
