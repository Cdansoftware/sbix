import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { departmentData } from "./siteData";
import Head from "../assets/head.png";
import dhn from "../assets/dhn.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Component ke upar (ya bahar) ye data rakhein
  const leaders = [
    {
      img: Head,
      role: "Event Head",
      name: "Chandan Prajapati",
      desc: "Lead Coordinator & Strategic Mentor",
      aos: "fade-right",
      card: "from-red-500/20 hover:border-red-500/60 border-red-500/30 hover:shadow-red-900/40",
      ring: "from-red-500 via-rose-400 to-red-700",
      glow: "bg-red-600/40",
      badge: "text-red-300 bg-red-500/10 border-red-500/30",
      line: "bg-red-500",
      corner: "border-red-400/60",
    },
    {
      img: dhn,
      role: "Event Co-Head",
      name: "Dhanjeet Kaur",
      desc: "Co-Coordinator & Guidance Lead",
      aos: "fade-left",
      card: "from-amber-500/20 hover:border-amber-500/60 border-amber-500/30 hover:shadow-amber-900/40",
      ring: "from-amber-400 via-yellow-300 to-amber-600",
      glow: "bg-amber-500/40",
      badge: "text-amber-300 bg-amber-500/10 border-amber-500/30",
      line: "bg-amber-400",
      corner: "border-amber-400/60",
    },
  ];

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
        <div className="relative mb-20 px-2">
          {/* Heading */}
          <div
            className="text-center mb-12"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <p className="text-red-400 text-[11px] font-bold uppercase tracking-[0.4em] mb-3">
              The Team Behind
            </p>
            <h2 className="flex items-center justify-center gap-4 text-2xl sm:text-4xl font-black uppercase tracking-wider">
              <span className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-red-500" />
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Event Leadership
              </span>
              <span className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-red-500" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leaders.map((l, i) => (
              // AOS wrapper pe lagaya hai taaki hover transform se conflict na ho
              <div
                key={l.role}
                data-aos={l.aos}
                data-aos-duration="900"
                data-aos-delay={i * 150}
              >
                <div
                  className={`group relative h-full overflow-hidden rounded-[2rem] border bg-gradient-to-br ${l.card} via-white/5 to-white/[0.02] backdrop-blur-xl px-6 pt-10 pb-8 text-center shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                >
                  {/* Shine sweep on hover */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  {/* Corner accents */}
                  <span
                    className={`absolute top-4 left-4 h-5 w-5 border-t-2 border-l-2 rounded-tl-lg ${l.corner}`}
                  />
                  <span
                    className={`absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 rounded-br-lg ${l.corner}`}
                  />

                  {/* Avatar */}
                  <div
                    className="relative mx-auto mb-6 w-fit"
                    data-aos="zoom-in"
                    data-aos-delay={300 + i * 150}
                  >
                    <div
                      className={`absolute inset-0 rounded-3xl ${l.glow} blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-90`}
                    />
                    <div
                      className={`relative rounded-3xl bg-gradient-to-br ${l.ring} p-[3px] shadow-xl`}
                    >
                      <div className="h-32 w-28 sm:h-40 sm:w-36 overflow-hidden rounded-[1.35rem] bg-neutral-900">
                        <img
                          src={l.img}
                          alt={l.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <span
                    data-aos="fade-up"
                    data-aos-delay={450 + i * 150}
                    className={`inline-block rounded-full border px-4 py-1 text-[10px] font-black uppercase tracking-[0.25em] ${l.badge}`}
                  >
                    {l.role}
                  </span>

                  {/* Name */}
                  <h3
                    data-aos="fade-up"
                    data-aos-delay={550 + i * 150}
                    className="mt-4 mb-2 text-2xl sm:text-3xl font-black tracking-tight text-white"
                  >
                    {l.name}
                  </h3>

                  {/* Divider */}
                  <span
                    className={`mx-auto mb-3 block h-0.5 w-10 rounded-full ${l.line} transition-all duration-500 group-hover:w-24`}
                  />

                  {/* Description */}
                  <p
                    data-aos="fade-up"
                    data-aos-delay={650 + i * 150}
                    className="text-xs sm:text-sm tracking-wide text-slate-400"
                  >
                    {l.desc}
                  </p>
                </div>
              </div>
            ))}
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
