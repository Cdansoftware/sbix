import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import tinkercadImg from "../assets/tinker-cad.png";
import innovationImg from "../assets/innovation.png";
import aiquizImg from "../assets/ai-quiz.png";
import roboraceImg from "../assets/robo-race.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Competitions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // AOS animations ki array
  const animations = ["flip-left", "flip-right", "flip-up", "flip-down"];

  // Competitions List Data with Image, Theme Colors, and Icons
  const competitions = [
    {
      id: "tinkercad",
      title: "Tinkercad Circuits",
      category: "Junior",
      classes: "Classes 6–8",
      teamSize: "1 Member (Individual)",
      icon: "⚡",
      image: tinkercadImg,
      btnBg: "bg-emerald-500 hover:bg-emerald-600",
      accentBg: "bg-emerald-100 text-emerald-600",
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
      category: "Senior",
      classes: "Classes 9–12",
      teamSize: "2 Members",
      icon: "🤖",
      image: roboraceImg,
      btnBg: "bg-blue-600 hover:bg-blue-700",
      accentBg: "bg-blue-100 text-blue-600",
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
      image: innovationImg, // Replace with innovationImg
      btnBg: "bg-red-600 hover:bg-red-700",
      accentBg: "bg-red-100 text-red-600",
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
      btnBg: "bg-purple-600 hover:bg-purple-700",
      accentBg: "bg-purple-100 text-purple-600",
      description:
        "Test your knowledge across Artificial Intelligence fundamentals, Machine Learning, Computer Vision, and modern tech trends.",
      highlights: [
        "Machine Learning & AI Concepts",
        "Speed & Accuracy Assessment",
        "Scenario-based Questions",
      ],
    },
  ];

  // Innovation Themes Data
  const innovationThemes = [
    {
      title: "AI & Digital Innovation",
      icon: "🌐",
      points: [
        "Smart Cities & Infrastructure",
        "Responsible AI for real-world issues",
        "Community Problem Solving",
      ],
    },
    {
      title: "Environmental Sustainability",
      icon: "🌱",
      points: [
        "Waste reduction & Water conservation",
        "Local environmental protection",
        "Data-driven green solutions",
      ],
    },
    {
      title: "Healthcare & Healthtech",
      icon: "🩺",
      points: [
        "Early disease detection & monitoring",
        "Rehabilitation & Recovery tech",
        "Accessible healthcare for everyone",
      ],
    },
    {
      title: "Agriculture & Agritech",
      icon: "🌾",
      points: [
        "Smart farming with robotics",
        "Sustainable resource management",
        "AI for crop yield enhancement",
      ],
    },
  ];

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
