import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaDirections, FaWhatsapp } from "react-icons/fa";
import Gmail from "../assets/gmicon.png";
import Head from "../assets/head.png";
import dhn from "../assets/dhn.png";

const Contact = () => {
  const mapLink = "https://maps.app.goo.gl/f2LRfZySJPFA3FGn7";
  const whatsappGroupLink = "https://chat.whatsapp.com/KKRMVUteyO95zC2gJ81DFj";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Component ke upar (ya bahar) ye data rakhein
  const leaders = [
    {
      img: Head,
      role: "Event Head",
      name: "Chandan Prajapati",
      desc: "Lead Coordinator & Strategic Mentor",
      aos: "fade-right",
      card: "from-red-500/20 hover:border-red-500/60 border-red-500/30 hover:shadow-red-900/40",
      ring: "from-red-500 via-rose-400 to-red-700",
      glow: "bg-red-600/40",
      badge: "text-red-300 bg-red-500/10 border-red-500/30",
      line: "bg-red-500",
      corner: "border-red-400/60",
    },
    {
      img: dhn,
      role: "Event Co-Head",
      name: "Dhanjeet Kaur",
      desc: "Co-Coordinator & Guidance Lead",
      aos: "fade-left",
      card: "from-amber-500/20 hover:border-amber-500/60 border-amber-500/30 hover:shadow-amber-900/40",
      ring: "from-amber-400 via-yellow-300 to-amber-600",
      glow: "bg-amber-500/40",
      badge: "text-amber-300 bg-amber-500/10 border-amber-500/30",
      line: "bg-amber-400",
      corner: "border-amber-400/60",
    },
  ];

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

        {/* Leadership Section (Head & Co-Head) */}
        <div className="relative mb-20 px-2">
          {/* Heading */}
          <div
            className="text-center mb-12"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <p className="text-red-400 text-[11px] font-bold uppercase tracking-[0.4em] mb-3">
              The Team Behind
            </p>
            <h2 className="flex items-center justify-center gap-4 text-2xl sm:text-4xl font-black uppercase tracking-wider">
              <span className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-red-500" />
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Event Leadership
              </span>
              <span className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-red-500" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leaders.map((l, i) => (
              // AOS wrapper pe lagaya hai taaki hover transform se conflict na ho
              <div
                key={l.role}
                data-aos={l.aos}
                data-aos-duration="900"
                data-aos-delay={i * 150}
              >
                <div
                  className={`group relative h-full overflow-hidden rounded-[2rem] border bg-gradient-to-br ${l.card} via-white/5 to-white/[0.02] backdrop-blur-xl px-6 pt-10 pb-8 text-center shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                >
                  {/* Shine sweep on hover */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  {/* Corner accents */}
                  <span
                    className={`absolute top-4 left-4 h-5 w-5 border-t-2 border-l-2 rounded-tl-lg ${l.corner}`}
                  />
                  <span
                    className={`absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 rounded-br-lg ${l.corner}`}
                  />

                  {/* Avatar */}
                  <div
                    className="relative mx-auto mb-6 w-fit"
                    data-aos="zoom-in"
                    data-aos-delay={300 + i * 150}
                  >
                    <div
                      className={`absolute inset-0 rounded-3xl ${l.glow} blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-90`}
                    />
                    <div
                      className={`relative rounded-3xl bg-gradient-to-br ${l.ring} p-[3px] shadow-xl`}
                    >
                      <div className="h-32 w-28 sm:h-40 sm:w-36 overflow-hidden rounded-[1.35rem] bg-neutral-900">
                        <img
                          src={l.img}
                          alt={l.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <span
                    data-aos="fade-up"
                    data-aos-delay={450 + i * 150}
                    className={`inline-block rounded-full border px-4 py-1 text-[10px] font-black uppercase tracking-[0.25em] ${l.badge}`}
                  >
                    {l.role}
                  </span>

                  {/* Name */}
                  <h3
                    data-aos="fade-up"
                    data-aos-delay={550 + i * 150}
                    className="mt-4 mb-2 text-2xl sm:text-3xl font-black tracking-tight text-white"
                  >
                    {l.name}
                  </h3>

                  {/* Divider */}
                  <span
                    className={`mx-auto mb-3 block h-0.5 w-10 rounded-full ${l.line} transition-all duration-500 group-hover:w-24`}
                  />

                  {/* Description */}
                  <p
                    data-aos="fade-up"
                    data-aos-delay={650 + i * 150}
                    className="text-xs sm:text-sm tracking-wide text-slate-400"
                  >
                    {l.desc}
                  </p>
                </div>
              </div>
            ))}
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

        {/* Official Communication Box (Email & WhatsApp Group) */}
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
            Stay Connected & Official Communication
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-md mx-auto">
            Send your queries or project ideas to our official email, or join
            our official WhatsApp group for instant announcements and updates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Email Action Button */}
            <a
              href="mailto:sbix.sbasrauni@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-lg hover:shadow-red-500/25 transition-all text-xs tracking-wider uppercase"
            >
              <span>sbix.sbasrauni@gmail.com</span>
              <span className="text-sm">✉️</span>
            </a>

            {/* WhatsApp Group Join Button */}
            <a
              href={whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all text-xs tracking-wider uppercase hover:scale-105"
            >
              <FaWhatsapp className="text-base" />
              <span>Join WhatsApp Group</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
