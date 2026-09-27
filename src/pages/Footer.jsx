import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo_sbix.png";
import {
  FaMapMarkerAlt,
  FaLocationArrow,
  FaCar,
  FaClock,
  FaSpinner,
  FaRegDotCircle,
} from "react-icons/fa";

const Footer = () => {
  const mapLink = "https://maps.app.goo.gl/f2LRfZySJPFA3FGn7";

  // Venue Coordinates (Satya Bharti Adarsh Sen. Sec. School, Rauni)
  const VENUE_LAT = 30.6568297;
  const VENUE_LNG = 76.1042566;

  // Distance & Time State
  const [loading, setLoading] = useState(false);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [error, setError] = useState(null);

  // Fallback Haversine Calculation
  const calculateHaversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth radius in KM
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const roadKm = (R * c * 1.25).toFixed(1); // Approx road factor

    const totalMins = Math.round((roadKm / 45) * 60);
    const hrs = Math.floor(totalMins / 60);
    const mins = totalMins % 60;
    const timeText = hrs > 0 ? `${hrs}h ${mins}m` : `${mins} mins`;

    return { roadKm, timeText };
  };

  // User location & distance fetch handler
  const handleGetDistance = () => {
    setError(null);
    if (!navigator.geolocation) {
      setError("Geolocation not supported.");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        try {
          // Open Source Routing Machine API Call
          const res = await fetch(
            `https://router.project-osrm.org/route/v1/driving/${userLng},${userLat};${VENUE_LNG},${VENUE_LAT}?overview=false`,
          );
          const data = await res.json();

          if (data.routes && data.routes.length > 0) {
            const route = data.routes[0];
            const km = (route.distance / 1000).toFixed(1);
            const totalMins = Math.round(route.duration / 60);
            const hrs = Math.floor(totalMins / 60);
            const mins = totalMins % 60;
            const timeStr = hrs > 0 ? `${hrs}h ${mins}m` : `${mins} mins`;

            setDistance(`${km} km`);
            setDuration(timeStr);
          } else {
            const fallback = calculateHaversineDistance(
              userLat,
              userLng,
              VENUE_LAT,
              VENUE_LNG,
            );
            setDistance(`~${fallback.roadKm} km`);
            setDuration(`~${fallback.timeText}`);
          }
        } catch (err) {
          const fallback = calculateHaversineDistance(
            userLat,
            userLng,
            VENUE_LAT,
            VENUE_LNG,
          );
          setDistance(`~${fallback.roadKm} km`);
          setDuration(`~${fallback.timeText}`);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setLoading(false);
        setError("Location access denied/unavailable.");
      },
      { timeout: 8000 },
    );
  };

  return (
    <footer className="bg-slate-950 text-slate-400 relative overflow-hidden border-t border-white/10 pt-16 pb-8 font-sans">
      {/* Background Glow Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-full mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Event Branding */}
          <div className="space-y-4 lg:col-span-1">
            <Link to="/home" className="inline-flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="SBIX 1.0 Logo"
                className="h-20 rounded-full shadow-2xl border border-slate-200 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl font-black text-white tracking-tight">
                SBIX <span className="text-red-500">1.0</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              An inter-school robotics, AI, and tech innovation challenge
              organized in association with Bharti Foundation to empower young
              technological leaders.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/home"
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/guidelines"
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> Guidelines & Rules
                </Link>
              </li>
              <li>
                <Link
                  to="/registration"
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> Registration & Submissions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Challenge Tracks */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Competitions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">⚡</span> Tinkercad Circuits
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">🤖</span> Robo Race
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-400">💡</span> Innovation Challenge
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">🧠</span> AI Quiz
              </li>
            </ul>
          </div>

          {/* Column 4: Event Venue & Distance Calculator */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Event Venue
            </h4>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-start gap-2.5">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 p-2 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 hover:scale-110 transition-transform cursor-pointer"
                  title="Open Location on Google Maps"
                >
                  <FaMapMarkerAlt className="text-base animate-bounce" />
                </a>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">
                    Offline Venue
                  </p>
                  <p className="text-xs font-bold text-white leading-snug">
                    Satya Bharti Adarsh Sen. Sec. School
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Rauni, Punjab
                  </p>
                </div>
              </div>

              {/* Distance and Time Box / Fetch Button */}
              {distance && duration ? (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <FaCar className="text-red-400 text-xs" />
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase font-bold">
                        Dist
                      </p>
                      <p className="text-xs font-extrabold text-white">
                        {distance}
                      </p>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <FaClock className="text-amber-400 text-xs" />
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase font-bold">
                        Time
                      </p>
                      <p className="text-xs font-extrabold text-white">
                        {duration}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleGetDistance}
                  disabled={loading}
                  className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-slate-200 text-[11px] font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin text-amber-400 text-xs" />
                      <span>Calculating...</span>
                    </>
                  ) : (
                    <>
                      <FaLocationArrow className="text-[10px] text-red-400" />
                      <span>How far from me?</span>
                    </>
                  )}
                </button>
              )}

              {error && (
                <p className="text-[10px] text-red-400 text-center">{error}</p>
              )}

              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-red-600/20 hover:bg-red-600 border border-red-500/30 text-red-400 hover:text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all group"
              >
                <span>Get Directions on Map</span>
                <FaLocationArrow className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 5: Key Dates & Contact */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Key Dates & Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">
                  Submission
                </span>
                <span className="text-xs font-bold text-red-400">
                  1 OCT 2026
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">
                  Results
                </span>
                <span className="text-xs font-bold text-amber-400">
                  3 OCT 2026
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">
                  Grand Finale
                </span>
                <span className="text-xs font-bold text-emerald-400">
                  17 OCT 2026
                </span>
              </div>

              <p className="text-[11px] text-slate-400 pt-1">
                📧 Email:{" "}
                <a
                  href="mailto:Robotics.sbasrauni@gmail.com"
                  className="text-white hover:text-red-400 transition-colors"
                >
                  Robotics.sbasrauni@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-white/10">
          <p>
            © 2026 SBIX 1.0 Tech Fest. In Association with Bharti Foundation.
            All rights reserved.
          </p>
          <p className="flex items-center text-slate-400 font-medium">
            <FaRegDotCircle className="mr-1" />
            Build by{" "}
            <span className="text-red-400 px-1 font-bold hover:underline cursor-pointer">
              Chandan Prajapati
            </span>{" "}
            <span className="text-slate-500 text-[11px]">
              | Software Developer |
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
