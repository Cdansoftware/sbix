import Jasmen from "../assets/jasmeen.png";
import Akshita from "../assets/Akshita.jpeg";
import Sanchit from "../assets/Sanchit.jpeg";
import Hard from "../assets/Harsh.jpeg";
import Vrun from "../assets/Vrun.png";
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
  return (
    <section className="bg-slate-50 px-4 py-16 mb-5 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <div data-aos="fade-down" data-aos-duration="800">
          <h2 className="mb-2 text-center text-3xl font-bold text-slate-800">
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
            <h2 className="text-2xl font-black text-slate-900 mt-2">
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
