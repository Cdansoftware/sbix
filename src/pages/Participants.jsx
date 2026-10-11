import { useState } from "react";
import { allParticipants, categories } from "./siteData"; // Apne siteData.js se data import karein

const Participants = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Helper function to highlight search matches
  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
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

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        {/* Header & Search Bar Container (Horizontally Arranged on Desktop) */}
        <div className="flex flex-col bg-slate-950/90 p-2 rounded-xl md:flex-row items-center justify-between gap-6 mb-10">
          {/* Header Section */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-slate-300">
              SBIX 1.0 - Registered Participants
            </h1>
            <p className="text-slate-300 mt-1 text-sm">
              Category-wise breakdown of all registered teams and schools.
            </p>
          </div>

          {/* Global Search Bar */}
          <div className="w-full md:w-80">
            <div className="relative flex items-center shadow-sm rounded-xl overflow-hidden border border-slate-200 bg-white">
              <span className="pl-4 text-slate-400">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by school, team, code..."
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

        {/* Render Separate Tables for Each Category */}
        <div className="space-y-12">
          {categories.map((cat) => {
            // Filter participants belonging to this specific category and matching search query
            const categoryData = (allParticipants[cat.key] || []).filter(
              (item) =>
                item.schoolName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                item.teamName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                item.teamCode
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                item.members.some((m) =>
                  m.toLowerCase().includes(searchQuery.toLowerCase()),
                ),
            );

            return (
              <div
                key={cat.key}
                className={`bg-white shadow-md rounded-xl overflow-hidden border-t-4 ${cat.borderColor} border-x border-b border-slate-200`}
              >
                {/* Category Header */}
                <div className="px-6 py-4 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-800">
                    {cat.title}
                  </h2>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-200 text-slate-700 rounded-full">
                    Total Teams: {categoryData.length}
                  </span>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-800 text-white text-xs uppercase tracking-wider">
                        <th className="py-3 px-4 font-semibold text-center w-16">
                          Sr.
                        </th>
                        <th className="py-3 px-4 font-semibold">School Name</th>
                        <th className="py-3 px-4 font-semibold">Team Name</th>
                        <th className="py-3 px-4 font-semibold">Team Code</th>
                        <th className="py-3 px-4 font-semibold">Members</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 text-sm">
                      {categoryData.length > 0 ? (
                        categoryData.map((item, index) => (
                          <tr
                            key={item.id}
                            className="hover:bg-slate-50 transition-colors"
                          >
                            <td className="py-3 px-4 text-center font-medium text-slate-900">
                              {index + 1}
                            </td>
                            <td className="py-3 px-4 font-medium">
                              {highlightText(item.schoolName, searchQuery)}
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`${cat.badgeColor} text-xs font-semibold px-2.5 py-0.5 rounded`}
                              >
                                {highlightText(item.teamName, searchQuery)}
                              </span>
                            </td>
                            <td className="py-3 px-4 font-mono font-semibold text-slate-600">
                              {highlightText(item.teamCode, searchQuery)}
                            </td>
                            <td className="py-3 px-4">
                              <ul className="list-disc list-inside text-xs space-y-0.5 text-slate-600">
                                {item.members.map((member, mIdx) => (
                                  <li key={mIdx}>
                                    {highlightText(member, searchQuery)}
                                  </li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="5"
                            className="py-6 text-center text-slate-400 text-xs italic"
                          >
                            No participant records found under this category.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Participants;
