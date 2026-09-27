import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4 relative overflow-hidden font-sans">
      {/* Background Glowing Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-xl text-center p-8 sm:p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
        {/* Animated 404 Glow Text */}
        <div className="relative mb-6">
          <h1 className="text-8xl sm:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 animate-pulse">
            404
          </h1>
          <span className="absolute -top-4 right-1/4 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full border border-red-500/30 uppercase tracking-widest">
            Page Not Found
          </span>
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
          Lost in Hyperspace?
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl border border-white/20 transition-all text-sm flex items-center justify-center gap-2"
          >
            <span>←</span> Go Back
          </button>

          <Link
            to="/home"
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold rounded-xl shadow-lg hover:shadow-red-500/25 transition-all text-sm flex items-center justify-center gap-2"
          >
            <span>🏠</span> Return Home
          </Link>
        </div>
      </div>

      {/* Footer hint */}
      <p className="relative z-10 text-xs text-slate-500 mt-8">
        SBIX 1.0 Tech Fest • Need help? Contact event support.
      </p>
    </div>
  );
};

export default NotFound;