import React, { useState, useEffect } from "react";
import loginImage from "../assets/login.png";
import registerImage from "../assets/register.png";
import timberLogo from "../assets/timberflow.png";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccess("✅ Logged in successfully! Please refresh the screen.");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccess("✅ Registered successfully! Please refresh the screen.");
      }

      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f1ea] p-4">
      <div className="bg-white shadow-lg rounded-xl flex flex-col md:flex-row items-center max-w-4xl w-full p-8">
        
        <div className="flex flex-col items-center justify-center md:w-1/2 mb-4 md:mb-0">
          <img
            src={isLogin ? loginImage : registerImage}
            alt="Auth"
            className="w-40 h-40 object-contain mb-4"
          />
          <p className="text-xl font-semibold text-gray-700">
            {isLogin ? "Login to TimberFlow" : "Register to TimberFlow"}
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="flex items-center justify-center mb-6">
            <img src={timberLogo} alt="Logo" className="w-10 h-10 mr-2" />
            <h2 className="text-2xl font-bold text-[#7c4f20]">TimberFlow</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />

            {error && <p className="text-red-600 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <button
              type="submit"
              className="w-full py-2 bg-[#7c4f20] text-white rounded-md hover:bg-[#603d18] disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#7c4f20] font-semibold cursor-pointer"
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
