import { useState, useEffect } from "react";
import { ideathonData } from "./siteData";

// AOS Library aur CSS import karein
import AOS from "aos";
import "aos/dist/aos.css";

const InnovationChallenge = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Component load hone par AOS initialize karein
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (milliseconds)
      once: true, // Animation sirf ek baar scroll hone par chale
      offset: 50, // Trigger offset
    });
  }, []);

  // Helper function to escape special regex characters to prevent crashes
  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // Helper function to highlight matching text safely
  const highlightText = (text, query) => {
    if (!query || !text) return text;

    const escapedQuery = escapeRegExp(query);
    const parts = text.split(new RegExp(`(${escapedQuery})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={i}
          className="bg-yellow-200 text-gray-900 px-0.5 rounded font-medium"
        >
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  // Filter by category first, then filter by search query
  const filteredData = ideathonData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      item.schoolName.toLowerCase().includes(query) ||
      item.teamName.toLowerCase().includes(query) ||
      item.mentorName.toLowerCase().includes(query) ||
      item.members.some((member) => member.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1300px] mx-auto p-3 sm:p-6 font-sans overflow-x-hidden">
      {/* Header with Fade-Down Animation */}
      <h1
        className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800"
        data-aos="fade-down"
      >
        Innovation Challenge Participation Teams
      </h1>

      {/* Search and Filter Section with Fade-Up Animation */}
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 mb-5 sm:mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Search Input */}
        <div className="w-full md:w-80">
          <input
            type="text"
            placeholder="Search school, team, mentor, or student..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex w-full md:w-auto justify-center gap-2 sm:gap-3">
          {["All", "Junior", "Senior"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-1 md:flex-initial px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer border-none text-center ${
                selectedCategory === cat
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 📱 MOBILE VIEW: Cards (Shown on screens < 768px) */}
      <div
        className="block md:hidden space-y-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {filteredData.length > 0 ? (
          filteredData.map((team, index) => (
            <div
              key={team.id}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm space-y-2.5"
            >
              {/* Header: S.No, Category & Team Name */}
              <div className="flex justify-between items-start gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                    #{index + 1}
                  </span>
                  <h3 className="font-bold text-base text-gray-900 leading-snug">
                    {highlightText(team.teamName, searchQuery)}
                  </h3>
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold shrink-0 ${
                    team.category === "Junior"
                      ? "bg-sky-100 text-sky-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {team.category}
                </span>
              </div>

              {/* Details List */}
              <div className="text-xs text-gray-600 space-y-1.5 pt-1">
                <div>
                  <span className="font-semibold text-gray-700">School: </span>
                  {highlightText(team.schoolName, searchQuery)}
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Mentor: </span>
                  {highlightText(team.mentorName, searchQuery)}
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Students:{" "}
                  </span>
                  {highlightText(team.members.join(", "), searchQuery)}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-6 text-center text-gray-500 text-sm rounded-xl border border-gray-200">
            No matching teams found.
          </div>
        )}
      </div>

      {/* 💻 DESKTOP VIEW: Table (Shown on screens >= 768px) */}
      <div
        className="hidden md:block overflow-x-auto border border-gray-200 rounded-lg shadow-sm bg-white"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-gray-200 text-gray-800">
              <th className="p-4 text-sm font-semibold text-center w-16">
                S.No.
              </th>
              <th className="p-4 text-sm font-semibold">School Name</th>
              <th className="p-4 text-sm font-semibold">Mentor Name</th>
              <th className="p-4 text-sm font-semibold">Team Name</th>
              <th className="p-4 text-sm font-semibold">Category</th>
              <th className="p-4 text-sm font-semibold">Student Members</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((team, index) => (
                <tr
                  key={team.id}
                  className={`border-b border-gray-100 transition-all duration-200 hover:bg-gray-100 hover:shadow-sm ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                  data-aos="zoom-in-up"
                >
                  <td className="p-4 text-sm text-gray-600 text-center font-medium">
                    {index + 1}
                  </td>
                  <td className="p-4 text-sm text-gray-800">
                    {highlightText(team.schoolName, searchQuery)}
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    {highlightText(team.mentorName, searchQuery)}
                  </td>
                  <td className="p-4 text-sm font-bold text-gray-900">
                    {highlightText(team.teamName, searchQuery)}
                  </td>
                  <td className="p-4 text-sm">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold inline-block ${
                        team.category === "Junior"
                          ? "bg-sky-100 text-sky-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {team.category}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    {highlightText(team.members.join(", "), searchQuery)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="p-6 text-center text-gray-500 text-sm"
                >
                  No matching teams found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InnovationChallenge;
