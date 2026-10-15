import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  stats,
  Allcompetitions,
  flipAnimations,
  EventSchedule,
} from "./siteData";

const EventOverview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto" data-aos="fade-down">
          <span className="inline-block px-4 py-1.5 bg-red-500/10 text-red-400 font-bold text-xs tracking-widest uppercase rounded-full border border-red-500/20 mb-6">
            SBIX 1.0 Tech Fest
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Event Overview &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
              Challenge Tracks
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
            An inter-school robotics and innovation spectacle designed to
            inspire young creators, problem solvers, and future technological
            leaders.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-4 text-left cursor-pointer hover:border-slate-50 transition-colors"
            >
              <div className="text-3xl">{stat.icon}</div>
              <div>
                <p className="text-xs font-semibold text-slate-400">
                  {stat.label}
                </p>
                <p className="text-lg font-bold text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <hr className="border-white/10" /> */}

      {/* 2. Challenge Categories Section */}
      <section
        id="tracks"
        className="py-16 px-4 sm:px-6 max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Choose Your Track
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Select your category, review the guidelines, and get ready to
            compete.
          </p>
        </div>

        {/* Cards Grid / List with Dynamic AOS Flip Animations */}
        <div className="space-y-12">
          {Allcompetitions.map((comp, index) => {
            const currentFlip = flipAnimations[index % flipAnimations.length];
            const isEven = index % 2 === 0;

            return (
              <div
                key={comp.id}
                data-aos={currentFlip}
                className="relative rounded-3xl p-6 sm:p-8 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden group hover:border-white/20 transition-all duration-300"
              >
                {/* Background Card Gradient Accent */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${comp.accentGlow} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl`}
                />

                <div
                  className={`relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 relative h-64 sm:h-72 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                    <img
                      src={comp.image}
                      alt={comp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white border border-white/10 flex items-center gap-2">
                      <span>{comp.icon}</span>
                      <span>{comp.category}</span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                        {comp.title}
                      </h3>

                      {/* Info Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-medium text-slate-200 border border-white/10">
                          🎓 {comp.classes}
                        </span>
                        <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-medium text-slate-200 border border-white/10">
                          👥 {comp.teamSize}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {comp.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                          Highlights :
                        </h4>
                        <ul className="space-y-2">
                          {comp.highlights.map((point, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-sm text-slate-200 font-medium"
                            >
                              <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0">
                                ✓
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div>
                      <button
                        onClick={() => navigate("/registration")}
                        className={`inline-flex items-center gap-3 px-6 py-3 ${comp.btnColor} text-white cursor-pointer font-bold rounded-xl shadow-lg transition-all duration-300 group/btn`}
                      >
                        <span>REGISTER NOW</span>
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white group-hover/btn:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Event Schedule Timeline */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-red-400 font-bold text-xs uppercase tracking-widest">
            Timeline
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            Event Day Schedule
          </h2>
        </div>

        <div className="space-y-4">
          {/* Schedule Cards */}
          {EventSchedule?.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className={`p-5 rounded-2xl backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors border ${
                item.type === "highlight"
                  ? "bg-red-950/20 border-red-500/40 hover:border-red-500/70"
                  : "bg-white/5 border-white/10 hover:border-red-500/40"
              }`}
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="px-3.5 py-1.5 bg-red-500/20 text-red-300 text-xs sm:text-sm font-bold rounded-lg border border-red-500/30 shrink-0">
                  {item.timing}
                </span>
                <div>
                  <h4 className="font-bold text-white text-base sm:text-lg">
                    {item.activity}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                    Venue:{" "}
                    <span className="text-slate-200 font-medium">
                      {item.venue}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Footer Note */}
          <div className="text-center text-slate-400 text-xs sm:text-sm pt-4">
            Note: Activities listed with the same timing may run simultaneously
            in their respective venues.
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventOverview;
