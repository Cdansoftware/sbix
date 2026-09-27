import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import rulebook from "../assets/SBIX_1.0.pdf";

const ChallengeGuidelines = () => {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // AOS Flip Animations Array
  const flipAnimations = ["flip-left", "flip-right", "flip-up", "flip-down"];

  // General Competition Rules (Applies to Everyone)
  const generalRules = [
    {
      title: "Eligibility & Registration",
      desc: "All participants must be currently enrolled in Classes 6–12. Valid school ID cards are mandatory at check-in.",
      icon: "🪪",
    },
    {
      title: "Reporting & Punctuality",
      desc: "Teams must report 30 minutes prior to their event time slot. Late arrivals will lead to immediate disqualification.",
      icon: "⏰",
    },
    {
      title: "Code of Conduct",
      desc: "Fair play and ethical behavior are required. Any form of plagiarism or unsportsmanlike conduct will result in ejection.",
      icon: "🤝",
    },
    {
      title: "Equipment & Safety",
      desc: "Participants are responsible for their own laptops, tools, and hardware. Safety goggles are required for physical robot arenas.",
      icon: "🛡️",
    },
  ];

  // Detailed Guidelines for Each Competition Challenge
  const challengeGuidelines = [
    {
      id: "tinkercad",
      title: "Tinkercad Circuits",
      category: "Junior (Classes 6–8)",
      icon: "⚡",
      badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/30",
      accentGlow: "from-amber-500/10 to-orange-500/10",
      overview:
        "Design and simulate virtual electronic circuits and microcontroller setups on the spot within 60 minutes using Tinkercad.",
      specifications: [
        "Duration: Exactly 60 minutes.",
        "Team Size: 1 Member (Individual competition).",
        "Allowed Tools: Web browser with active Tinkercad account.",
      ],
      rules: [
        "Participants MUST bring their own laptops with Wi-Fi capability and pre-tested Tinkercad login.",
        "The problem statement / circuit design brief will be revealed on the spot at time 00:00.",
        "No pre-built circuits or imported external code libraries are allowed.",
        "Internet access is restricted strictly to the Tinkercad platform and event portal.",
      ],
      judgmentCriteria: [
        "Circuit Functionality & Accuracy (40%)",
        "Efficiency & Clean Wiring Layout (30%)",
        "Code / Logic Correctness (20%)",
        "Speed of Completion (10%)",
      ],
    },
    {
      id: "roborace",
      title: "Robo Race",
      category: "Senior (Classes 9–12)",
      icon: "🤖",
      badgeColor: "bg-blue-400/20 text-blue-300 border-blue-400/30",
      accentGlow: "from-blue-500/10 to-indigo-500/10",
      overview:
        "Build and navigate custom wired/wireless bots through a complex track featuring speed runs, obstacles, and sharp curves.",
      specifications: [
        "Max Bot Dimensions: 30cm × 30cm × 30cm.",
        "Max Bot Weight: 3.0 kg.",
        "Power Supply: Max 12V onboard battery supply.",
      ],
      rules: [
        "Robots can be wired or wireless (Bluetooth/RF/Wi-Fi). RC car chassis modifications are permitted.",
        "Lego kits, ready-made toy cars, or pre-assembled commercial kits are STRICTLY PROHIBITED.",
        "A maximum of 2 restarts/touches per run are permitted, with a 10-second penalty per touch.",
        "Track inspection will happen 15 minutes before the official heat starts.",
      ],
      judgmentCriteria: [
        "Total Track Completion Time (50%)",
        "Hurdles Cleared & Checkpoints Reached (30%)",
        "Penalties / Touches Deductions (10%)",
        "Bot Design & Engineering Innovation (10%)",
      ],
    },
    {
      id: "innovation",
      title: "Innovation Challenge",
      category: "Junior & Senior (Classes 6–12)",
      icon: "💡",
      badgeColor: "bg-rose-400/20 text-rose-300 border-rose-400/30",
      accentGlow: "from-rose-500/10 to-red-500/10",
      overview:
        "Present practical, innovative tech solutions and working physical/digital prototypes solving real-world challenges.",
      specifications: [
        "Presentation Time: 4 Minutes Pitch + 3 Minutes Jury Q&A.",
        "Team Size: 1–2 Members.",
        "Mandatory Requirement: Functional Working Prototype.",
      ],
      rules: [
        "Every team must present a working prototype along with a maximum 8-slide presentation deck.",
        "Projects must fall under one of the 4 designated themes (AI, Sustainability, HealthTech, AgriTech).",
        "Plagiarized projects or direct store-bought school models will be disqualified immediately.",
        "Teams must bring all necessary extension cords, power adapters, and display materials.",
      ],
      judgmentCriteria: [
        "Innovation & Originality (30%)",
        "Working Prototype Functionality (30%)",
        "Feasibility & Real-World Impact (20%)",
        "Presentation & Defense during Q&A (20%)",
      ],
    },
    {
      id: "aiquiz",
      title: "AI Quiz",
      category: "Open Category (Classes 6–12)",
      icon: "🧠",
      badgeColor: "bg-purple-400/20 text-purple-300 border-purple-400/30",
      accentGlow: "from-purple-500/10 to-indigo-500/10",
      overview:
        "Test speed, accuracy, and knowledge depth in Artificial Intelligence, Machine Learning, Computer Vision, and Emerging Tech.",
      specifications: [
        "Round 1: Online Speed Quiz (Elimination Round).",
        "Round 2: Stage Buzzer Round (Top 6 Teams).",
        "Team Size: 2 Members.",
      ],
      rules: [
        "Use of mobile phones, smartwatches, or external assistance during quiz rounds is strictly prohibited.",
        "In Round 1, tie-breakers will be determined based on submission speed.",
        "For Round 2 (Buzzer Round), negative points apply for incorrect answers after pressing the buzzer.",
        "The Quizmaster's decision is final and binding on all participating teams.",
      ],
      judgmentCriteria: [
        "Round 1 Score & Speed Ranking (Qualification)",
        "Buzzer Accuracy in Final Stage Round",
        "Scenario & Problem-Solving Speed",
      ],
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = rulebook;
    link.download = "SBIX-Rulebook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter challenges based on tab
  const filteredGuidelines =
    activeTab === "all"
      ? challengeGuidelines
      : challengeGuidelines.filter((c) => c.id === activeTab);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-4 sm:px-6 font-sans overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-down"
        >
          <span className="inline-block px-4 py-1.5 bg-red-500/10 text-red-400 font-bold text-xs tracking-widest uppercase rounded-full border border-red-500/20 mb-4">
            Official Rulebook
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Challenge Guidelines & Rules
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Please review the general code of conduct and track-specific
            guidelines thoroughly before the event day.
          </p>
        </div>

        {/* General Regulations Grid */}
        <div className="mb-20">
          <h2
            className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
            data-aos="fade-right"
          >
            <span className="text-red-500">📌</span> General Code of Conduct
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generalRules.map((rule, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-start gap-4 hover:border-white/20 transition-all"
              >
                <span className="text-3xl p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  {rule.icon}
                </span>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">
                    {rule.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="mb-12">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-red-500">🎯</span> Competition Specific
              Rules
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "all"
                    ? "bg-red-500 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                All Tracks
              </button>
              {challengeGuidelines.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === item.id
                      ? "bg-red-500 text-white shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Challenge Cards with AOS Flip Animations */}
        <div className="space-y-12">
          {filteredGuidelines.map((item, index) => {
            const currentFlip = flipAnimations[index % flipAnimations.length];

            return (
              <div
                key={item.id}
                data-aos={currentFlip}
                className="relative rounded-3xl p-6 sm:p-8 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden group hover:border-white/20 transition-all duration-300"
              >
                {/* Background Glow */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.accentGlow} rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl`}
                />

                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                          {item.overview}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold border backdrop-blur-md ${item.badgeColor}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Rules Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Column 1: Specs */}
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                        <span>⚙️</span> Specifications
                      </h4>
                      <ul className="space-y-2">
                        {item.specifications.map((spec, sIdx) => (
                          <li
                            key={sIdx}
                            className="text-xs text-slate-300 flex items-start gap-2"
                          >
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: Key Regulations */}
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                        <span>📜</span> Mandatory Rules
                      </h4>
                      <ul className="space-y-2">
                        {item.rules.map((rule, rIdx) => (
                          <li
                            key={rIdx}
                            className="text-xs text-slate-300 flex items-start gap-2"
                          >
                            <span className="text-amber-400 font-bold shrink-0">
                              ✓
                            </span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 3: Judgment Criteria */}
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                        <span>⚖️</span> Evaluation Criteria
                      </h4>
                      <ul className="space-y-2">
                        {item.judgmentCriteria.map((crit, cIdx) => (
                          <li
                            key={cIdx}
                            className="text-xs text-slate-300 flex items-start gap-2"
                          >
                            <span className="text-emerald-400 font-bold shrink-0">
                              📊
                            </span>
                            <span>{crit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Download Button Banner */}
        <div data-aos="zoom-in" className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="text-left">
              <h4 className="font-bold text-white text-base">
                Need an offline copy?
              </h4>
              <p className="text-slate-400 text-xs">
                Download the official complete Rulebook PDF for printable
                reference.
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>📥</span>
              DOWNLOAD RULEBOOK PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeGuidelines;
