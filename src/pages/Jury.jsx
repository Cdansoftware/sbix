import Jasmen from "../assets/jasmeen.png";
import Akshita from "../assets/Akshita.jpeg";
import Sanchit from "../assets/Sanchit.jpeg";
import Hard from "../assets/Harsh.jpeg";
import Vrun from "../assets/Vrun.png";
import Depak from "../assets/Depak.jpeg";
import Jasmeen from "../assets/jasmeen.png";
import { FaGavel } from "react-icons/fa";

const juryMembers = [
  {
    id: 1,
    name: "Jasmeen Gill",
    role: "Professor || Associate Head (CSE) at RIMT University",
    image: Jasmen,
  },
  {
    id: 2,
    name: "Varun Batra",
    role: "Manager of Makerspace At Plaksha University",
    image: Vrun,
  },
  {
    id: 3,
    name: "Sanchit Gupta",
    role: "Founder of Agriguru Techbologies",
    image: Sanchit,
  },
  {
    id: 4,
    name: "Harsh Mishra",
    role: "AI/ML Engineer at Millipixels Interactive",
    image: Hard,
  },
  {
    id: 5,
    name: "Akshita",
    role: "Founder of Tinkerminds",
    image: Akshita,
  },
];

const juryData = [
  {
    category: "TinkerCAD",
    badgeColor: "bg-red-600 border-red-500",
    lightBg: "bg-red-500/10 border-red-500/20",
    textColor: "text-red-500",
    jury: ["Akshita", "Harsh Mishra"],
  },
  {
    category: "Robo-Race",
    badgeColor: "bg-amber-600 border-amber-500",
    lightBg: "bg-amber-500/10 border-amber-500/20",
    textColor: "text-amber-500",
    jury: ["Varun Batra"],
  },
  {
    category: "Senior Innovation",
    badgeColor: "bg-blue-600 border-blue-500",
    lightBg: "bg-blue-500/10 border-blue-500/20",
    textColor: "text-blue-500",
    jury: ["Jasmeen Gill"],
  },
  {
    category: "Junior Innovation",
    badgeColor: "bg-emerald-600 border-emerald-500",
    lightBg: "bg-emerald-500/10 border-emerald-500/20",
    textColor: "text-emerald-500",
    jury: ["Sanchit Gupta"],
  },
];

const JuryCards = () => {
 const ChiefGuestsData = [
  {
    name: "Mr. Deepak Garg",
    title: "Chief Guest",
    designation: "CEO of Innow8",
    organization: "Innow8",
    image: Depak,
    bio: "Leading pioneer in emerging technologies, AI research, and fostering grassroots student innovation across national platforms.",
  },
  {
    name: "Mr. Varun Batra",
    title: "Chief Guest",
    designation: "Manager of Makerspace at Plaksha University",
    organization: "Plaksha University",
    image: Vrun,
    bio: "Accomplished technologist and mentor dedicated to mentoring young minds in robotics, embedded systems, and automated design.",
  },
  {
    name: "Dr. Jasmeen Gill", // Only if her doctorate is confirmed
    title: "Chief Guest of Honour",
    designation: "Professor and Head (CSE), RIMT University",
    organization: "RIMT University",
    image: Jasmeen,
    bio: "Distinguished academic leader contributing to computer science education and innovation.",
  },
];

  return (
    <section className="bg-none px-4 mb-5 overflow-hidden">
      <div className="mx-auto w-full">
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-neutral-900 to-slate-950 text-white flex flex-col justify-center items-center px-4 py-12 sm:p-10 mb-4 rounded-2xl">
          {/* Background decorative glows */}
          <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-red-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-red-500/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="relative w-full max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-14 sm:mb-20">
              <h1 className="text-3xl sm:text-6xl font-black tracking-wide mb-3 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                SBIX 1.0{" "}
                <span className="bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
                  InnovateX
                </span>
              </h1>

              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-px w-10 sm:w-20 bg-gradient-to-r from-transparent to-red-500" />
                <p className="text-red-400 font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm">
                  Satya Bharti InnovateX
                </p>
                <span className="h-px w-10 sm:w-20 bg-gradient-to-l from-transparent to-red-500" />
              </div>

              <div className="relative inline-block overflow-hidden bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold text-xs sm:text-sm px-7 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-red-900/40 ring-1 ring-white/20">
                <span className="relative z-10">
                  Guests of Honour
                </span>
                <span className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>
            </div>

            

            {/* Guests Grid */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
              {ChiefGuestsData.map((guest, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 200}
                  className="group relative w-full max-w-xs flex flex-col items-center text-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-6 pt-8 pb-7 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:bg-white/10"
                >
                  {/* Glow behind image */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-52 h-52 rounded-3xl bg-red-600/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Image with gradient ring */}
                  <div className="relative mb-6 p-[3px] rounded-3xl bg-gradient-to-br from-red-500 via-rose-400 to-red-700 shadow-xl shadow-red-950/60">
                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-[1.4rem] overflow-hidden bg-neutral-900">
                      <img
                        src={guest.image}
                        alt={guest.name}
                        loading="lazy"
                        className="w-full h-full object-cover bg-slate-50 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <h3 className="relative text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 transition-colors group-hover:text-red-100">
                    {guest.name}
                  </h3>
                  <span className="relative block h-0.5 w-10 bg-red-500 rounded-full mb-3 transition-all duration-500 group-hover:w-20" />
                  <p className="relative text-red-400 font-medium text-sm sm:text-base tracking-wider uppercase">
                    {guest.designation}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="text-center text-slate-400 text-xs sm:text-sm mt-14 pt-6 border-t border-white/10">
              We are honored to welcome our esteemed guests to{" "}
              <span className="text-red-400 font-medium">
                SBIX 1.0 — Satya Bharti InnovateX
              </span>
              .
            </div>
          </div>
        </section>

        {/* Section Header */}
        <div data-aos="fade-down" data-aos-duration="800">
          <h2 className="mb-2 text-center text-3xl font-bold text-red-600">
            Our Jury Members
          </h2>
          <p className="mb-12 text-center text-slate-500">
            Meet the experts who will judge the event
          </p>
        </div>

        {/* Individual Jury Members Grid with Staggered Delays */}

        {/* Individual Jury Members Grid with Staggered Delays */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          {juryMembers.map((member) => (
            <div
              key={member.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 border-2 border-slate-100 hover:border-red-500"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-slate-800">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-indigo-600 font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Category Tracks & Jury Mapping Section */}
        <div className="w-full max-w-xl mx-auto px-2 sm:px-4 py-8">
          <div
            className="text-center mb-8"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              Evaluation Panel
            </span>
            <h2 className="text-2xl font-black text-slate-600 mt-2">
              Official Jury Tracks & Members
            </h2>
          </div>

          <div className="space-y-5">
            {juryData.map((item, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 150} // Tracks ek ke baad ek slide honge
                data-aos-duration="700"
                className="flex items-center relative group py-1"
              >
                {/* 1. Left Circle Badge (Category) */}
                <div
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full ${item.badgeColor} border-2 shadow-xl z-20 flex flex-col items-center justify-center text-center p-1.5 text-white font-bold shrink-0 shadow-black/20`}
                >
                  <span className="text-[9px] uppercase tracking-wider opacity-80">
                    Track
                  </span>
                  <span className="text-xs sm:text-sm leading-tight font-extrabold">
                    {item.category}
                  </span>
                </div>

                {/* 2. Right Attached Container (Jury Names) */}
                <div
                  className={`-ml-5 sm:-ml-6 flex-1 py-4 pl-8 sm:pl-10 pr-4 rounded-r-2xl border backdrop-blur-xl ${item.lightBg} shadow-md flex flex-col justify-center transition-all duration-300 group-hover:border-slate-300`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">
                    Jury Members
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.jury.map((name, idx) => (
                      <span
                        key={idx}
                        className="text-xs sm:text-sm font-bold text-slate-800 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-sm"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${item.textColor.replace(
                            "text-",
                            "bg-",
                          )}`}
                        ></span>
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JuryCards;
