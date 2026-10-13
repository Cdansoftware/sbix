import { useState, useEffect } from "react";
// import logoImg from "../assets/logo_sbix.png";
import waitVideo from "../assets/wait.mp4";
import { ResultData, selectedStudentsData } from "./siteData";
import SplashScreen from "./SplashScreen";

// 1. AOS library & styles import karein
import AOS from "aos";
import "aos/dist/aos.css";

const Result = () => {
  const [loading, setLoading] = useState(true);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [isPresenting, setIsPresenting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [iframeLoading, setIframeLoading] = useState(true);

  // 2. Component mount hone par AOS initialize karein
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      once: true,    // animation sirf ek baar scroll hone par chale
      offset: 50,    // trigger offset
    });
  }, []);

  // Data ko direct import se load karana
  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedStudents(selectedStudentsData);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  /* ---------- Presentation (Full-screen) logic ---------- */

  const getViewerUrl = (pdfPath) => `${pdfPath}#toolbar=0&navpanes=0&view=FitH`;

  const enterFullscreen = () => {
    const el = document.documentElement;
    if (!document.fullscreenElement && el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleStartPresentation = (item) => {
    setIframeLoading(true);
    setActiveProject(item);
    setIsPresenting(true);
    enterFullscreen();
  };

  const handleClosePresentation = () => {
    exitFullscreen();
    setIsPresenting(false);
    setActiveProject(null);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) exitFullscreen();
    else enterFullscreen();
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsPresenting(false);
        setActiveProject(null);
      }
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isPresenting ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPresenting]);

  /* ---------- Search helpers ---------- */

  const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={i}
          className="bg-yellow-300 text-slate-950 px-0.5 rounded font-semibold"
        >
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  const filteredStudents = selectedStudents.filter(
    (item) =>
      item.schoolName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.teamCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mentorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.projectName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  /* ---------- Loading screen ---------- */

  if (loading) {
    return <SplashScreen />;
  }

  /* ---------- Main UI ---------- */

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Fade Down Animation */}
        <div className="text-center mb-8" data-aos="fade-down">
          <h1 className="text-3xl font-bold text-slate-900">
            SBIX 1.0 - Selected Students List
          </h1>
          <p className="text-slate-600 mt-2">
            Congratulations to all the selected teams moving to the final round!
          </p>
        </div>

        {/* Announcement Banner & Search Bar with Fade Up Animation */}
        <div 
          className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 max-w-7xl mx-auto"
          data-aos="fade-up"
        >
          {/* Announcement Message Banner */}
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center md:text-left flex-1 shadow-sm w-full">
            <p className="text-xs font-bold text-amber-800 flex items-center justify-center md:justify-start gap-2">
              <span>📢</span> Official Announcement Notice:
            </p>
            <p className="text-[11px] text-slate-700 mt-0.5">
              The final results will be announced on{" "}
              <strong className="text-slate-900">
                13 Oct by EOD (End of the Day)
              </strong>{" "}
              via official notification and email.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 shrink-0 flex items-center" data-aos="fade-up">
            <div className="relative w-full flex items-center shadow-sm rounded-xl overflow-hidden border border-slate-200 bg-white">
              <span className="pl-4 text-slate-400">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search school, team, code, mentor..."
                className="w-full py-3 px-3 bg-transparent text-xs sm:text-sm text-slate-800 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="pr-4 text-slate-400 hover:text-slate-600 text-xs font-bold cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Table Container with Zoom-In or Fade-Up Animation */}
        <div 
          className="bg-white shadow-md rounded-lg overflow-hidden border border-slate-200"
          data-aos="fade-up"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/90 text-xs text-slate-400 uppercase tracking-wider">
                  {ResultData?.headers?.map((header) => (
                    <th
                      key={header.id}
                      className={`py-3 px-4 font-semibold ${header.align}`}
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 text-sm">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="py-4 px-4 text-center font-medium text-slate-900">
                        {index + 1}
                      </td>
                      <td className="py-4 px-4 font-medium">
                        {highlightText(item.schoolName, searchQuery)}
                      </td>
                      <td className="py-4 px-4">
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                          {highlightText(item.teamName, searchQuery)}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-mono font-semibold text-slate-600">
                        {highlightText(item.teamCode, searchQuery)}
                      </td>
                      <td className="py-4 px-4">
                        {highlightText(item.mentorName, searchQuery)}
                      </td>
                      <td className="py-4 px-4 font-medium text-slate-900">
                        {highlightText(item.projectName, searchQuery)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => handleStartPresentation(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow transition-all cursor-pointer"
                        >
                          <span>📊</span> Show PPT
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="py-8 text-center text-slate-400 text-xs"
                    >
                      No matching records found for "{searchQuery}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Full-Screen Presentation Viewer */}
      {isPresenting && activeProject && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col" >
          <div className="flex items-center justify-between gap-3 px-4 py-2 bg-slate-900 text-white border-b border-white/10">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase text-red-400 truncate">
                Presentation Mode — {activeProject.projectName}
              </p>
              <h3 className="text-sm font-bold truncate">
                Team: {activeProject.teamName}
              </h3>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={activeProject.pptFile}
                download="SBIX_Presentation.pdf"
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold"
              >
                📥 Download
              </a>
              <button
                type="button"
                onClick={toggleFullscreen}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold cursor-pointer"
              >
                ⛶ Fullscreen
              </button>
              <button
                type="button"
                onClick={handleClosePresentation}
                className="w-8 h-8 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold cursor-pointer"
                aria-label="Close presentation"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="relative flex-1 w-full overflow-hidden bg-black" data-aos="fade-up">
            {iframeLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950 p-4">
                {/* Local Please Wait Video Animation */}
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center bg-black mb-3">
                  <video
                    src={waitVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-slate-300 animate-pulse tracking-wide">
                  Please wait, loading presentation...
                </p>
              </div>
            )}

            <iframe
              title={`${activeProject.projectName} Presentation`}
              src={getViewerUrl(activeProject.pptFile)}
              onLoad={() => setIframeLoading(false)}
              className="absolute top-0 left-0 h-full border-0 bg-black"
              style={{ width: "calc(100% + 24px)" }}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;