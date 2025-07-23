import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const getStatus = (orderDate) => {
  const now = new Date();
  const placed = new Date(orderDate);
  const hours = (now - placed) / (1000 * 60 * 60);

  if (hours >= 53) return 'Delivered';
  if (hours >= 48) return 'Out for Delivery';
  if (hours >= 24) return 'In Transit';
  return 'Order Placed';
};

const getProgress = (status) => {
  switch (status) {
    case 'Order Placed': return 25;
    case 'In Transit': return 50;
    case 'Out for Delivery': return 75;
    case 'Delivered': return 100;
    default: return 0;
  }
};

const TrackShipment = () => {
  const [shipments, setShipments] = useState([]);
  const [userEmail, setUserEmail] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });

    return () => unsubscribe(); // clean up listener
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shipments')) || [];

    if (userEmail) {
      const userShipments = data.filter(ship => ship.userEmail === userEmail);

      // Sort by most recent
      const sorted = userShipments.sort(
        (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
      );

      setShipments(sorted);
    }
  }, [userEmail]);

  if (!userEmail) {
    return <div className="p-6 text-center text-gray-600">Please log in to view your shipments.</div>;
  }

  if (shipments.length === 0) {
    return <div className="p-6 text-center text-gray-600">No shipments found for {userEmail}.</div>;
  }

  const displayShipments = showAll ? shipments : [shipments[0]];

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-amber-800">Your Shipment(s)</h2>

      {displayShipments.map((ship, i) => {
        const status = getStatus(ship.orderDate);
        const progress = getProgress(status);

        return (
          <div key={i} className="bg-white p-6 mb-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img src={ship.image} alt={ship.item} className="w-24 h-24 object-contain rounded border" />
              <div className="flex-1">
                <p><strong>Item:</strong> {ship.item}</p>
                <p><strong>Wood Type:</strong> {ship.woodType}</p>
                <p><strong>Weight:</strong> {ship.weight} kg</p>
                <p><strong>Package Size:</strong> {ship.packageSize}</p>
                <p><strong>Sender:</strong> {ship.sender}</p>
                <p><strong>Receiver:</strong> {ship.receiver}</p>
                <p><strong>Address:</strong> {ship.address}</p>
                <p><strong>Order Date:</strong> {new Date(ship.orderDate).toLocaleString()}</p>
                <p><strong>Status:</strong> {status}</p>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 mt-4 mb-2">
              <div
                className="bg-green-500 h-4 rounded-full text-white text-xs flex justify-center items-center"
                style={{ width: `${progress}%` }}
              >
                {progress}%
              </div>
            </div>

            <ul className="text-sm text-gray-700 space-y-1 mt-2">
              <li className={progress >= 25 ? 'font-bold text-green-700' : ''}>✔ Order Placed</li>
              <li className={progress >= 50 ? 'font-bold text-green-700' : ''}>✔ In Transit</li>
              <li className={progress >= 75 ? 'font-bold text-green-700' : ''}>✔ Out for Delivery</li>
              <li className={progress === 100 ? 'font-bold text-green-700' : ''}>✔ Delivered</li>
            </ul>
          </div>
        );
      })}

      {shipments.length > 1 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
          >
            {showAll ? 'Show Latest Only' : 'Show All'}
          </button>
        </div>
      )}
    </div>
  );
};

export default TrackShipment;
