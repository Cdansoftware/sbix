import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import innovationQr from "../assets/Innovation_QR.png";
import otherEventQr from "../assets/other_event_QR.png";
import InnovationChallengePPT from "../assets/Innovation_challenge_ppt_formate.pdf"; // Import the PDF file

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("innovation");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleDownloadPPT = () => {
     const link = document.createElement("a");
        link.href = InnovationChallengePPT;
        link.download = "Innovation-Challenge-Presentation-Format.pptx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }

  const innovationFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSc44SSWC0-9EnfkBmZKE7K0Q-NV6G7N8o-b3QMxSKSI8dYX9A/viewform?pli=1&authuser=0";
  const otherEventsFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScRf8NevwHP_DPwI5JClQopf63zMOjE5Q52p5MRToOKGzt8kQ/viewform";

  const currentFormUrl =
    selectedTrack === "innovation" ? innovationFormUrl : otherEventsFormUrl;

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-4 sm:px-6 font-sans overflow-hidden">
      {/* Decorative Glow Backgrounds */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-10 right-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-12"
          data-aos="fade-down"
        >
          <span className="inline-block px-4 py-1.5 bg-red-500/10 text-red-400 font-bold text-xs tracking-widest uppercase rounded-full border border-red-500/20 mb-4">
            Bharti Foundation Presentation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Registration & Submissions
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Submit your team details and project ideas before the deadline to
            participate in SBIX 1.0.
          </p>
        </div>

        {/* Important Submission Guidelines Timeline */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16"
          data-aos="fade-up"
        >
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-4">
            <span className="text-3xl">📅</span>
            <div>
              <p className="text-xs font-semibold text-slate-400">
                Submission Deadline
              </p>
              <p className="text-sm font-bold text-red-400">1 OCT 2026</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-4">
            <span className="text-3xl">🏫</span>
            <div>
              <p className="text-xs font-semibold text-slate-400">
                School Requirement
              </p>
              <p className="text-sm font-bold text-white">
                Min. 4 Ideas / School
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-4">
            <span className="text-3xl">🎉</span>
            <div>
              <p className="text-xs font-semibold text-slate-400">
                Results Declaration
              </p>
              <p className="text-sm font-bold text-amber-400">3 OCT 2026</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-4">
            <span className="text-3xl">📧</span>
            <div>
              <p className="text-xs font-semibold text-slate-400">
                Notification
              </p>
              <p className="text-sm font-bold text-emerald-400">Via E-mail</p>
            </div>
          </div>
        </div>

        {/* Registration Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Submission Info Card (Side Panel) */}
          <div
            data-aos="flip-left"
            className="p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📌</span> Rules & Information
              </h3>

              <ul className="space-y-4 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>
                    <strong>Submission Deadline:</strong> All entries must be
                    submitted by <strong>1 OCT 2026</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>
                    <strong>School Quota:</strong> Each participating school
                    must submit a <strong>minimum of 4 ideas</strong> combining
                    both Junior & Senior categories.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>
                    <strong>Results:</strong> Selected teams will be announced
                    on <strong>3 OCT 2026</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>
                    <strong>Selection Notice:</strong> Selected teams will
                    receive official selection letters via registered email.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>

                  <span className="text-sm text-slate-300">
                    <strong className="text-white">
                      Innovation Idea Format:
                    </strong>{" "}
                    Download the prescribed{" "}
                    <button
                      type="button"
                      disabled={loading}
                      onClick={handleDownloadPPT}
                      className="cursor-pointer inline-flex items-center gap-1.5 ml-1 px-3 py-1 rounded-md text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-all disabled:opacity-50"
                    >
                      {loading ? "⏳ Downloading..." : "📥 Download PPT Format"}
                    </button>
                  </span>
                </li>
              </ul>
            </div>

            {/* Event Category Track Selector */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs font-bold text-slate-400 uppercase mb-3">
                Select Registration Type
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedTrack("innovation")}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-left transition-all border ${
                    selectedTrack === "innovation"
                      ? "bg-red-500/20 text-red-300 border-red-500/40"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  💡 Innovation Challenge
                </button>
                <button
                  onClick={() => setSelectedTrack("other")}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-left transition-all border ${
                    selectedTrack === "other"
                      ? "bg-blue-500/20 text-blue-300 border-blue-500/40"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  ⚡ Other Events (Robo-Race, AI Quiz, Tinkercad)
                </button>
              </div>
            </div>
          </div>

          {/* Registration Form (Main Panel) */}
          <div
            data-aos="flip-right"
            className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedTrack === "innovation"
                ? "💡 Innovation Challenge Registration"
                : "⚡ Other Events Registration"}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6 max-w-md">
              {selectedTrack === "innovation"
                ? "Scan the QR code or click the link below to open the Innovation Challenge submission form."
                : "Scan the QR code or click the link below to register for Robo-Race, AI-Quiz, or Tinkercad Circuits."}
            </p>

            {/* Clickable QR Code Card */}
            <a
              href={currentFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl hover:border-red-500/50 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 block cursor-pointer"
            >
              <div className="bg-white p-3 rounded-xl shadow-inner relative overflow-hidden">
                <img
                  src={
                    selectedTrack === "innovation" ? innovationQr : otherEventQr
                  }
                  alt={
                    selectedTrack === "innovation"
                      ? "Innovation Challenge QR Code"
                      : "Other Events Registration QR Code"
                  }
                  className="w-56 h-56 sm:w-64 sm:h-64 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover Overlay Badge */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <span className="px-4 py-2 bg-red-500 text-white font-bold text-xs rounded-full shadow-lg flex items-center gap-1.5">
                    🚀 Open Google Form ↗
                  </span>
                </div>
              </div>

              {/* Corner Styling Elements */}
              <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-red-500 rounded-tl-md"></span>
              <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-red-500 rounded-tr-md"></span>
              <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-red-500 rounded-bl-md"></span>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-red-500 rounded-br-md"></span>
            </a>

            {/* Action Button */}
            <a
              href={currentFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full max-w-xs py-3.5 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold rounded-xl shadow-lg hover:shadow-red-500/25 transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <span>Open Registration Form</span>
              <span className="text-sm">↗</span>
            </a>

            {/* Info Tag */}
            <p className="mt-3 text-[11px] text-slate-400">
              📱 Scan with camera or click to open directly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
