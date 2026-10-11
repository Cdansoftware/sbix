import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import vidd from "../assets/carousel.mp4";
import rulebook from "../assets/SBIX.pdf";
import { generalRules, aiQuizSyllabus, flipAnimations, challengeGuidelines } from "./siteData";


const ChallengeGuidelines = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);



  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = rulebook;
    link.download = "SBIX-Rulebook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          className="text-center max-w-3xl mx-auto mb-12"
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

        {/* Guideline Video Section */}
        <div
          data-aos="zoom-in"
          className="mb-16 p-4 sm:p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                Video Walkthrough
              </span>
              <h2 className="text-2xl font-black text-white mt-2">
                Official Guidelines & Briefing Video
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Watch this quick walkthrough to understand the judging rubric, arena layouts, and presentation criteria.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-red-400 bg-red-500/10 px-3 py-1.5 rounded-xl border border-red-500/20 shrink-0">
              <span>▶️</span>
              <span>Watch Guide</span>
            </div>
          </div>

          {/* Video Container (Replace src with your actual YouTube embed or video link) */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-inner bg-slate-900">
            <iframe
              className="w-full h-full"
              src={vidd}
              title="SBIX 1.0 Guidelines Briefing Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
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
                key={rule.title}
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
                type="button"
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
                  type="button"
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

        {/* Detailed Challenge Cards */}
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
                    <div className="flex items-center gap-3">
                      {item.hasSyllabusButton && (
                        <button
                          type="button"
                          onClick={() => setIsSyllabusOpen(true)}
                          className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 hover:bg-purple-500/40 transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <span>📚</span> View Syllabus
                        </button>
                      )}
                      <span
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold border backdrop-blur-md ${item.badgeColor}`}
                      >
                        {item.category}
                      </span>
                    </div>
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

        {/* Standalone Syllabus Grid Section */}
        <div className="mt-20" data-aos="fade-up">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                Exam Preparation
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-2 flex items-center gap-3">
                🧠 AI Quiz Complete Syllabus
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiQuizSyllabus.map((mod, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:scale-110 transition-transform">
                    {mod.icon}
                  </span>
                  <h3 className="font-bold text-white text-base leading-tight">
                    {mod.module}
                  </h3>
                </div>
                <ul className="space-y-2 pl-2">
                  {mod.topics.map((top, tIdx) => (
                    <li
                      key={tIdx}
                      className="text-xs text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-purple-400 shrink-0">•</span>
                      <span>{top}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
              type="button"
              onClick={handleDownload}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>📥</span>
              DOWNLOAD RULEBOOK PDF
            </button>
          </div>
        </div>
      </div>

      {/* AI Quiz Syllabus Modal */}
      {isSyllabusOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-slate-900 border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl custom-scrollbar">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 sticky top-0 bg-slate-900/90 backdrop-blur-md z-10">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🧠</span>
                <div>
                  <h3 className="text-2xl font-black text-white">
                    AI Quiz Official Syllabus
                  </h3>
                  <p className="text-slate-400 text-xs">
                    Comprehensive topic coverage for Classes 6–12
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsSyllabusOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-lg transition-all"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiQuizSyllabus.map((section, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10"
                >
                  <h4 className="text-sm font-bold text-purple-300 mb-3 flex items-center gap-2">
                    <span>{section.icon}</span>
                    <span>{section.module}</span>
                  </h4>
                  <ul className="space-y-1.5 pl-2">
                    {section.topics.map((t, tIdx) => (
                      <li
                        key={tIdx}
                        className="text-xs text-slate-300 flex items-start gap-2"
                      >
                        <span className="text-purple-400 font-bold">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-white/10 text-right">
              <button
                type="button"
                onClick={() => setIsSyllabusOpen(false)}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-all"
              >
                Close Syllabus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengeGuidelines;