import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiMapPinUserLine } from "react-icons/ri";

const departmentData = [
  {
    department: "Overall",
    student: "Vansh Verma",
    teacher: "Chandan Prajapati",
  },
  {
    department: "Discipline",
    student: "Arshpreet Singh",
    teacher: "P. E. Department",
  },
  {
    department: "Technical",
    student: "Jasmanpreet Singh",
    teacher: "Amninder Singh",
  },
  {
    department: "Hosting Hub",
    student: "Harnoor Kaur",
    teacher: "Harpreet Kaur",
  },
  {
    department: "Registration",
    student: "Nimrat Kaur",
    teacher: "Dhanjeet Kaur",
  },
  {
    department: "Guidance & Queries",
    student: "Ritika Modgill",
    teacher: "Dhanjeet Kaur",
  },
  {
    department: "Decoration",
    student: "Gitika Sharma",
    teacher: "Sapreet Kaur",
  },
  {
    department: "Design & Display",
    student: "Amandeep Singh",
    teacher: "Chandan Prajapati",
  },
  {
    department: "Venue Management",
    student: "Sidakpreet Kaur",
    teacher: "Navdeep Kaur",
  },
  {
    department: "Refreshment",
    student: "Gurleen Kaur",
    teacher: "Jaisleen Kaur",
  },
  {
    department: "Cultural (Bhangra)",
    student: "Aamin",
    teacher: "Manjit Singh",
  },
  {
    department: "Cultural (Music)",
    student: "Armaan Singh",
    teacher: "Jasroye",
  },
  {
    department: "Cleanliness",
    student: "Kirandeep",
    teacher: "Meenu Agarwaal",
  },
  {
    department: "Hospitality",
    student: "Tanish Verma",
    teacher: "Kamaljeet Kaur",
  },
  { department: "Finance", student: "Ritika Modgill", teacher: "Rajveer Kaur" },
  {
    department: "Photography",
    student: "Dilpreet Singh",
    teacher: "Gurpreet Singh",
  },
  {
    department: "Documentation",
    student: "Gurdev Singh",
    teacher: "Kamaljeet Kaur",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-4 sm:px-6 font-sans overflow-hidden">
      {/* Background Glow Lights */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-10 right-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-down"
        >
          <span className="inline-block px-4 py-1.5 bg-red-500/10 text-red-400 font-bold text-xs tracking-widest uppercase rounded-full border border-red-500/20 mb-4">
            Meet The Team
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            About SBIX 1.0 & Organizing Committee
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The driving force behind SBIX 1.0 Tech Fest. Dedicated educators and
            student leaders collaborating to empower young tech innovators in
            association with Bharti Foundation.
          </p>
        </div>

        {/* Leadership Section (Head & Co-Head) */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-xl font-extrabold text-white text-center mb-8 uppercase tracking-wider flex items-center justify-center gap-2">
            <span>⭐</span> Event Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Head */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-red-500/20 via-white/5 to-white/5 backdrop-blur-xl border border-red-500/30 text-center relative overflow-hidden group hover:border-red-500/60 transition-all">
              <RiMapPinUserLine className="w-20 h-24 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform" />

              <span className="text-[10px] font-black uppercase tracking-widest text-red-400 px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20">
                Event Head
              </span>
              <h3 className="text-2xl font-black text-white mt-3 mb-1">
                Chandan Prajapati
              </h3>
              <p className="text-xs text-slate-400">
                Lead Coordinator & Strategic Mentor
              </p>
            </div>

            {/* Co-Head */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-white/5 to-white/5 backdrop-blur-xl border border-amber-500/30 text-center relative overflow-hidden group hover:border-amber-500/60 transition-all">
              <RiMapPinUserLine className="w-20 h-24 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform" />

              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
                Event Co-Head
              </span>
              <h3 className="text-2xl font-black text-white mt-3 mb-1">
                Dhanjeet Kaur
              </h3>
              <p className="text-xs text-slate-400">
                Co-Coordinator & Guidance Lead
              </p>
            </div>
          </div>
        </div>

        {/* Departmental Heads Table / Cards */}
        <div data-aos="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white tracking-tight mb-2">
              Departmental Heads
            </h2>
            <p className="text-xs text-slate-400">
              Student and Teacher leads managing event operations across all
              departments.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-red-500/10 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-red-300">
                  <th className="py-4 px-6">Department</th>
                  <th className="py-4 px-6">Student Incharge</th>
                  <th className="py-4 px-6">Teacher Incharge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs">
                {departmentData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="py-3.5 px-6 font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400"></span>
                      {item.department}
                    </td>
                    <td className="py-3.5 px-6 text-slate-300">
                      {item.student}
                    </td>
                    <td className="py-3.5 px-6 text-slate-300 font-medium">
                      {item.teacher}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Responsive Grid View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {departmentData.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-400">
                    {item.department}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Dept #{index + 1}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/5 space-y-1 text-xs">
                  <p className="text-slate-300">
                    <strong className="text-slate-400">Student:</strong>{" "}
                    {item.student}
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-slate-400">Teacher:</strong>{" "}
                    {item.teacher}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
