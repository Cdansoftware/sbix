import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRegUserCircle, FaMapMarkerAlt, FaDirections } from "react-icons/fa";
import UserIcons from "../assets/userr.png";
import FeUser from "../assets/feuser.png";
import { TfiEmail } from "react-icons/tfi";
import Gmail from "../assets/gmicon.png";

const Contact = () => {
  const mapLink = "https://maps.app.goo.gl/f2LRfZySJPFA3FGn7";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-4 sm:px-6 font-sans overflow-hidden">
      {/* Background Glow Lights */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-10 right-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Page Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-12"
          data-aos="fade-down"
        >
          <span className="inline-block px-4 py-1.5 bg-red-500/10 text-red-400 font-bold text-xs tracking-widest uppercase rounded-full border border-red-500/20 mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have queries regarding SBIX 1.0 submissions, rules, or event
            schedules? Reach out to our Event Leadership directly or visit our
            event venue.
          </p>
        </div>

        {/* Leadership Contact Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          data-aos="fade-up"
        >
          {/* Chandan Prajapati Card */}
          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-xl relative overflow-hidden group hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-28 rounded-2xl bg-red-500/20 border border-red-500/30 text-red-400 flex items-center justify-center text-2xl font-bold group-hover:scale-105 transition-transform">
                  <img
                    src={UserIcons}
                    alt="Chandan Prajapati"
                    className="w-auto h-28 object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded-full border border-red-500/20">
                    Event Head
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Chandan Prajapati
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Incharge of Overall Management, Technical Design & Display
                across all event tracks.
              </p>
            </div>

            <a
              href="tel:+918416847643"
              className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <span>📞</span>
              <span>+91 8416847643</span>
            </a>
          </div>

          {/* Dhanjeet Kaur Card */}
          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-xl relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-28 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center text-2xl font-bold group-hover:scale-105 transition-transform">
                  <img
                    src={FeUser}
                    alt="Dhanjeet Kaur"
                    className="w-auto h-28 object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    Event Co-Head
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Dhanjeet Kaur
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Incharge of Registration, Guidance, & Student Queries for
                participating schools.
              </p>
            </div>

            <a
              href="tel:+919855564456"
              className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <span>📞</span>
              <span>+91 98555 64456</span>
            </a>
          </div>
        </div>

        {/* Event Venue & Google Map Section */}
        <div
          data-aos="fade-up"
          className="mb-12 p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider mb-1">
                <FaMapMarkerAlt className="text-base" />
                <span>Event Venue</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Satya Bharti Adarsh Sen. Sec. School
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Rauni, Punjab - SBIX 1.0 Event Location
              </p>
            </div>

            {/* Direct Google Maps Route Button */}
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all hover:scale-105"
            >
              <FaDirections className="text-base" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-inner relative group">
            <iframe
              title="Satya Bharti Adarsh Sen. Sec. School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.187383893322!2d76.10425667625068!3d30.656829789965684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391007ef1695eddd%3A0xe7a5d3f23230c1e8!2sSatya%20Bharti%20Adarsh%20Senior%20Secondary%20School%2C%20Rauni!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Official Email Communication Box */}
        <div
          data-aos="zoom-in"
          className="p-8 rounded-3xl bg-gradient-to-br from-red-500/10 via-white/5 to-white/5 backdrop-blur-2xl border border-red-500/20 text-center shadow-2xl relative overflow-hidden"
        >
          <img
            src={Gmail}
            alt="Gmail"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-auto h-20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
          />

          <h3 className="text-2xl font-bold text-white mb-2">
            Official Email ID
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-md mx-auto">
            Send your queries, project ideas, or registration confirmations
            directly to our official robotics department email.
          </p>

          <a
            href="mailto:Robotics.sbasrauni@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-lg hover:shadow-red-500/25 transition-all text-xs tracking-wider uppercase"
          >
            <span>Robotics.sbasrauni@gmail.com</span>
            <span className="text-sm">✉️</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
