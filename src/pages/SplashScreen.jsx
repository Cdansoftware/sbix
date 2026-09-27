import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo_sbix.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">

      {/* Logo Animation */}
      <div className="relative flex items-center justify-center">

        {/* Rotating outer ring */}
        <div className="absolute w-44 h-44 rounded-full border-4 border-red-200 border-t-red-600 animate-spin"></div>

        {/* Floating logo */}
        <div className="logo-float relative w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-red-600">

          <img
            src={logo}
            alt="Satya Bharti"
            className="w-24 h-24 object-contain rounded-full"
          />

        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold text-red-600 tracking-wide">
          Satya Bharti
        </h1>

        <h2 className="text-xl font-semibold text-gray-800 mt-1">
          InnovateX
        </h2>

        <p className="text-sm text-gray-500 mt-2 tracking-widest">
          SBIX 1.0 • 2026
        </p>
      </div>

      {/* Loading dots */}
      <div className="flex gap-2 mt-8">
        <span className="loading-dot"></span>
        <span className="loading-dot delay-200"></span>
        <span className="loading-dot delay-400"></span>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Loading experience...
      </p>

    </div>
  );
};

export default SplashScreen;