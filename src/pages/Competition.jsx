import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { innovationThemes } from "./siteData";


const Competitions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-red-100 via-white to-gray-400 min-h-screen py-12 md:py-20 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          data-aos="fade-down"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 font-bold text-xs tracking-widest uppercase rounded-full border border-red-100 mb-4">
            SBIX 1.0 Challenges
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Competitions & Categories
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Choose your track, assemble your team, and showcase your innovation
            across robotics, AI, and technology.
          </p>
        </div>

     

        {/* Innovation Challenge Themes Section */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-800/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 bg-red-600/30 text-red-400 font-bold text-xs uppercase tracking-widest rounded-full border border-red-500/30 mb-3">
                Focus Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                Themes for Innovation Challenge
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                Choose one of these themes to build your innovative solution and
                working prototype.
              </p>
            </div>

            {/* Themes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {innovationThemes.map((theme, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/80 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-2xl mb-4">
                      {theme.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-4">
                      {theme.title}
                    </h4>
                    <ul className="space-y-2">
                      {theme.points.map((pt, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-red-500 mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
