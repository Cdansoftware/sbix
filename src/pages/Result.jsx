import { useState, useMemo } from "react";
import { ResultData, selectedStudentsData } from "./siteData";

export default function Result() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the data based on search term matching any key value
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return selectedStudentsData;
    const lowerQuery = searchTerm.toLowerCase();

    return selectedStudentsData.filter((item) => {
      return (
        item.schoolName?.toLowerCase().includes(lowerQuery) ||
        item.teamName?.toLowerCase().includes(lowerQuery) ||
        item.mentorName?.toLowerCase().includes(lowerQuery) ||
        item.category?.toLowerCase().includes(lowerQuery)
      );
    });
  }, [searchTerm]);

  // Helper function to highlight matching text
  const highlightText = (text, query) => {
    if (!query || !text) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="bg-yellow-200 text-gray-900 rounded px-0.5 font-medium">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    // Outer Container: Mobile me 0 padding, min-h-screen flex layout
    <div className="min-h-screen bg-gray-50 p-0 sm:p-6 md:p-10 flex flex-col">
      <div className="w-full flex-grow max-w-7xl mx-auto bg-white shadow-none sm:shadow-md rounded-none sm:rounded-xl overflow-hidden border-0 sm:border sm:border-gray-200 flex flex-col">
        
        {/* Header & Search Bar Section */}
        <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 bg-white">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Student Team Results</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Showing {filteredData.length} of {selectedStudentsData.length} entries
            </p>
          </div>
          <div className="w-full sm:w-80">
            <input
              type="text"
              placeholder="Search by school, team, mentor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto flex-grow">
          <table className="w-full border-collapse text-left min-w-[600px] sm:min-w-full">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold tracking-wider border-b border-gray-200">
                {ResultData.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`py-3 px-4 sm:py-3.5 sm:px-6 ${header.align}`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
              {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                  <tr 
                    key={row.id} 
                    className="hover:bg-gray-50/80 transition-colors"
                  >
                    {/* Sr. No. */}
                    <td className="py-3 px-4 sm:py-4 sm:px-6 text-center font-medium text-gray-500">
                      {index + 1}
                    </td>
                    {/* School Name */}
                    <td className="py-3 px-4 sm:py-4 sm:px-6 font-medium text-gray-900">
                      {highlightText(row.schoolName, searchTerm)}
                    </td>
                    {/* Team Name */}
                    <td className="py-3 px-4 sm:py-4 sm:px-6">
                      {highlightText(row.teamName, searchTerm)}
                    </td>
                    {/* Mentor Name */}
                    <td className="py-3 px-4 sm:py-4 sm:px-6">
                      {highlightText(row.mentorName, searchTerm)}
                    </td>
                    {/* Category */}
                    <td className="py-3 px-4 sm:py-4 sm:px-6">
                      <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full uppercase ${
                        row.category?.toLowerCase() === 'junior' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {highlightText(row.category, searchTerm)}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={ResultData.headers.length} className="text-center py-10 text-gray-400">
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}