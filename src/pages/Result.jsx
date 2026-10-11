import { useState, useEffect } from "react";
import logoImg from "../assets/logo_sbix.png";
import PPT from "../assets/SBIXidea.pdf";

const Result = () => {
  const [loading, setLoading] = useState(true);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [isPresenting, setIsPresenting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedStudents([
        {
          id: 1,
          schoolName: "Satya Bharti Adarsh Sen. Sec. School, Rauni",
          teamName: "Innovate X",
          teamCode: "SBX-9981",
          mentorName: "Chandan Prajapati",
          projectName: "Smart EV",
          pptFile: PPT,
        },
      ]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  /* ---------- Presentation (Full-screen) logic ---------- */

  // Office Viewer needs a full public URL of the .pptx
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

  // Called directly inside the click handler so the browser allows fullscreen
  const handleStartPresentation = (item) => {
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

  // If the user presses ESC (exits fullscreen), close the presenter too
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

  // Stop page scrolling while presenting
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
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        <div className="relative flex items-center justify-center p-2">
          <div className="absolute w-24 h-24 border-4 border-red-600/30 rounded-full animate-ping"></div>
          <img
            src={logoImg}
            alt="SBIX Logo"
            className="w-16 h-16 object-contain animate-pulse rounded-full relative z-10"
          />
        </div>
        <p className="mt-6 text-lg font-medium text-slate-700 animate-pulse">
          Loading Selected Teams...
        </p>
      </div>
    );
  }

  /* ---------- Main UI ---------- */

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            SBIX 1.0 - Selected Students List
          </h1>
          <p className="text-slate-600 mt-2">
            Congratulations to all the selected teams moving to the final round!
          </p>
        </div>

        {/* Announcement Message Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-sm font-bold text-amber-800 flex items-center justify-center gap-2">
            <span>📢</span> Official Announcement Notice:
          </p>
          <p className="text-xs text-slate-700 mt-1">
            The final results will be announced on{" "}
            <strong className="text-slate-900">
              13 Oct by EOD (End of the Day)
            </strong>{" "}
            via official notification and email.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 max-w-md mx-auto">
          <div className="relative flex items-center shadow-sm rounded-xl overflow-hidden border border-slate-200 bg-white">
            <span className="pl-4 text-slate-400">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by school, team, code, mentor, project..."
              className="w-full py-3 px-3 bg-transparent text-xs sm:text-sm text-slate-800 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="pr-4 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-red-900 text-white text-sm uppercase tracking-wider">
                  <th className="py-3 px-4 font-semibold text-center">
                    Sr. No.
                  </th>
                  <th className="py-3 px-4 font-semibold">School Name</th>
                  <th className="py-3 px-4 font-semibold">Team Name</th>
                  <th className="py-3 px-4 font-semibold">Team Code</th>
                  <th className="py-3 px-4 font-semibold">Mentor Name</th>
                  <th className="py-3 px-4 font-semibold">Project Name</th>
                  <th className="py-3 px-4 font-semibold text-center">
                    PPT Presentation
                  </th>
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
        <div className="fixed inset-0 z-[100] bg-black flex flex-col">
          {/* Top Control Bar */}
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

          {/* Slides Viewer - covers the whole remaining screen */}
          <iframe
            title={`${activeProject.projectName} Presentation`}
            src={getViewerUrl(activeProject.pptFile)}
            className="flex-1 w-full border-0 bg-black"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default Result;
