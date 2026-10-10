import { useState, useEffect } from 'react';
import logoImg from "../assets/logo_sbix.png";


const Result = () => {
  const [loading, setLoading] = useState(true);
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    // Simulate loading delay for data fetching
    const timer = setTimeout(() => {
      setSelectedStudents([
        {
          id: 1,
          schoolName: "Satya Bharti Adarsh Sen. Sec. School, Rauni",
          teamName: "Innovate X",
          teamCode: "SBX-9981",
          mentorName: "Chandan Prajapati",
          projectName: "Smart EV",
        },
        // You can easily add more student/team objects here later
      ]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        {/* Animated SBIX Logo */}
        <div className="relative flex items-center justify-center">
          {/* Pulsing outer ring effect */}
          <div className="absolute w-24 h-24 border-4 border-red-600/30 rounded-full animate-ping"></div>
          
          {/* Logo with bounce/pulse animation */}
          <img 
            src={logoImg} 
            alt="SBIX Logo" 
            className="w-16 h-16 object-contain animate-pulse rounded-full relative z-10"
          />
        </div>
        <p className="mt-6 text-lg font-medium text-slate-700 animate-pulse">Loading Selected Teams...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">SBIX 1.0 - Selected Students List</h1>
          <p className="text-slate-600 mt-2">Congratulations to all the selected teams moving to the final round!</p>
        </div>

        {/* Table Container */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-red-900 text-white text-sm uppercase tracking-wider">
                  <th className="py-3 px-4 font-semibold text-center">Sr. No.</th>
                  <th className="py-3 px-4 font-semibold">School Name</th>
                  <th className="py-3 px-4 font-semibold">Team Name</th>
                  <th className="py-3 px-4 font-semibold">Team Code</th>
                  <th className="py-3 px-4 font-semibold">Mentor Name</th>
                  <th className="py-3 px-4 font-semibold">Project Name</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 text-sm">
                {selectedStudents.map((item, index) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center font-medium text-slate-900">{index + 1}</td>
                    <td className="py-4 px-4 font-medium">{item.schoolName}</td>
                    <td className="py-4 px-4">
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {item.teamName}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-mono font-semibold text-slate-600">{item.teamCode}</td>
                    <td className="py-4 px-4">{item.mentorName}</td>
                    <td className="py-4 px-4 font-medium text-slate-900">{item.projectName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;