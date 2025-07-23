
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateShipment from "./pages/CreateShipment";
import TrackShipment from "./pages/TrackShipment";
import ProtectedRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";

const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      {isLoggedIn && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            ) : (
              <Navigate to="/auth" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/track"
          element={
            <ProtectedRoute>
              <TrackShipment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateShipment />
            </ProtectedRoute>
          }
        />
        {/* Auth Route */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/create" element={<CreateShipment />} />
        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/auth"} />} />
      </Routes>
    </>
  );
};

export default App;
