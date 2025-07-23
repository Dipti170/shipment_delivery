// import { useEffect, useState } from "react";
// import { auth } from "../firebase";
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const [shipments, setShipments] = useState([]);
//   const [userEmail, setUserEmail] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("shipments")) || [];
//     setShipments(stored);

//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUserEmail(user.email);
//       } else {
//         navigate("/login");
//       }
//     });

//     return () => unsubscribe();
//   }, [navigate]);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error.message);
//     }
//   };

//   const clearShipments = () => {
//     localStorage.removeItem("shipments");
//     setShipments([]);
//   };

//   const total = shipments.length;
//   const delivered = shipments.filter((s) => s.status === "Delivered").length;
//   const inTransit = shipments.filter((s) => s.status === "In Transit").length;
//   const pending = total - delivered;

//   return (
//     <div className="min-h-screen bg-[#f4efe6] px-6 py-8">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold text-[#6b4f3b]">🪵 TimberFlow Dashboard</h2>
//         <div>
//           <p className="text-sm text-[#6b4f3b]">Welcome, <strong>{userEmail}</strong></p>
//           <button
//             onClick={handleLogout}
//             className="mt-1 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//         <Card title="Total Shipments" value={total} color="bg-[#8b5e3c]" />
//         <Card title="Delivered" value={delivered} color="bg-green-600" />
//         <Card title="In Transit" value={inTransit} color="bg-yellow-500" />
//         <Card title="Pending" value={pending} color="bg-red-500" />
//       </div>

//       {/* Clear Button */}
//       {total > 0 && (
//         <div className="mb-4 text-right">
//           <button
//             onClick={clearShipments}
//             className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded text-sm"
//           >
//             Clear All Shipments
//           </button>
//         </div>
//       )}

//       {/* Recent Shipments */}
//       <div className="bg-white p-6 rounded-xl shadow border border-[#c6a477]">
//         <h3 className="text-xl font-bold text-[#6b4f3b] mb-4">
//           📦 Recent Shipments
//         </h3>

//         {shipments.length === 0 ? (
//           <p className="text-gray-600">No shipments available.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full table-auto border-collapse">
//               <thead>
//                 <tr className="bg-[#8b5e3c] text-white">
//                   <th className="p-2 text-left">Tracking ID</th>
//                   <th className="p-2 text-left">Item</th>
//                   <th className="p-2 text-left">Sender</th>
//                   <th className="p-2 text-left">Receiver</th>
//                   <th className="p-2 text-left">Status</th>
//                   <th className="p-2 text-left">Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {shipments
//                   .slice(-5)
//                   .reverse()
//                   .map((s) => (
//                     <tr key={s.id} className="border-b">
//                       <td className="p-2">{s.id}</td>
//                       <td className="p-2">{s.item}</td>
//                       <td className="p-2">{s.sender}</td>
//                       <td className="p-2">{s.receiver}</td>
//                       <td className="p-2">{s.status}</td>
//                       <td className="p-2">{s.date}</td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function Card({ title, value, color }) {
//   return (
//     <div className={`p-6 rounded-xl text-white shadow flex flex-col items-center ${color}`}>
//       <p className="text-lg font-semibold">{title}</p>
//       <p className="text-2xl font-bold mt-2">{value}</p>
//     </div>
//   );
// }



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

