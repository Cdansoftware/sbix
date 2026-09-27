import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your category images here
import tinkercadImg from "../assets/tinker-cad.png";
import InnovationImg from "../assets/innovation.png";
import aiquizImg from "../assets/ai-quiz.png";
import roboraceImg from "../assets/robo-race.png";

const EventOverview = () => {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // AOS Flip Animations Sequence
  const flipAnimations = ["flip-left", "flip-right", "flip-up", "flip-down"];

  // Competitions Data
  const competitions = [
    {
      id: "tinkercad",
      title: "Tinkercad Circuits",
      category: "Junior Category",
      classes: "Classes 6–8",
      teamSize: "1 Member",
      icon: "⚡",
      image: tinkercadImg,
      accentGlow: "from-amber-500/20 to-orange-500/20",
      badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/30",
      btnColor: "bg-amber-500 hover:bg-amber-600",
      description:
        "Design and simulate virtual electronic circuits and systems on the spot within 60 minutes using Tinkercad.",
      highlights: [
        "60 Minutes On-Spot Challenge",
        "Virtual Circuit Simulation",
        "Must bring own laptop",
      ],
    },
    {
      id: "roborace",
      title: "Robo Race",
      category: "Senior Category",
      classes: "Classes 9–12",
      teamSize: "2 Members",
      icon: "🤖",
      image: roboraceImg,
      accentGlow: "from-blue-500/20 to-indigo-500/20",
      badgeColor: "bg-blue-400/20 text-blue-300 border-blue-400/30",
      btnColor: "bg-blue-600 hover:bg-blue-700",
      description:
        "Build and navigate custom robots through a complex track filled with hurdles, tests for speed, control, and precision.",
      highlights: [
        "Max Dimensions: 30cm × 30cm × 30cm",
        "Point-based Hurdle System",
        "Time & Penalty Scoring",
      ],
    },
    {
      id: "innovation",
      title: "Innovation Challenge",
      category: "Junior & Senior",
      classes: "Classes 6–12",
      teamSize: "1–2 Members",
      icon: "💡",
      image: InnovationImg,
      accentGlow: "from-rose-500/20 to-red-500/20",
      badgeColor: "bg-rose-400/20 text-rose-300 border-rose-400/30",
      btnColor: "bg-rose-600 hover:bg-rose-700",
      description:
        "Present original, practical solutions to real-world problems using tech, AI, or robotics with a working prototype.",
      highlights: [
        "4 Min Presentation + 3 Min Q&A",
        "Working Prototype Compulsory",
        "2-Round Evaluation Process",
      ],
    },
    {
      id: "aiquiz",
      title: "AI Quiz",
      category: "Open Category",
      classes: "Classes 6–12",
      teamSize: "2 Members",
      icon: "🧠",
      image: aiquizImg,
      accentGlow: "from-purple-500/20 to-indigo-500/20",
      badgeColor: "bg-purple-400/20 text-purple-300 border-purple-400/30",
      btnColor: "bg-purple-600 hover:bg-purple-700",
      description:
        "Test your knowledge across Artificial Intelligence fundamentals, Machine Learning, Computer Vision, and modern tech trends.",
      highlights: [
        "Machine Learning & AI Concepts",
        "Speed & Accuracy Assessment",
        "Scenario-based Questions",
      ],
    },
  ];

  // Key Event Stats
  const stats = [
    { label: "Competitions", value: "04 Tracks", icon: "🏆" },
    { label: "Target Audience", value: "Classes 6–12", icon: "🎓" },
    { label: "Cash & Prizes", value: "₹ in Case ", icon: "🎁" },
    { label: "Mode", value: "SBAS - Rauni", icon: "📍" },
  ];

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
          {competitions.map((comp, index) => {
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
          {[
            {
              time: "08:30 AM",
              event: "Reporting & On-Spot Registration",
              desc: "Check-in at main desk and team kit allocation.",
            },
            {
              time: "09:30 AM",
              event: "Opening Ceremony",
              desc: "Welcome address, keynote speaker, and rules briefing.",
            },
            {
              time: "10:15 AM",
              event: "Competitions Begin",
              desc: "All track events commence simultaneously across labs.",
            },
            {
              time: "01:30 PM",
              event: "Lunch Break & Jury Round",
              desc: "Refreshments provided; judges finalize preliminary scores.",
            },
            {
              time: "03:30 PM",
              event: "Valedictory & Award Ceremony",
              desc: "Declaration of winners and trophy distribution.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-red-500/40 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs font-bold rounded-lg border border-red-500/30 shrink-0">
                  {item.time}
                </span>
                <div>
                  <h4 className="font-bold text-white text-base">
                    {item.event}
                  </h4>
                  <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventOverview;
