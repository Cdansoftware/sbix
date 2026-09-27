import { Link } from "react-router-dom";
import logo from "../assets/logo_sbix.png";

const Home = () => {
  return (
    <section className="text-gray-800 body-font bg-white min-h-screen flex items-center justify-center">
      {/* 
        Key Fix: flex-col-reverse puts Right Side (Logo) first on mobile,
        and md:flex-row restores side-by-side layout on desktop.
      */}
      <div className="container mx-auto flex px-5 py-5 md:py-10 flex-col-reverse md:flex-row items-center">
        {/* Left Content (Text Details) */}
        <div
          data-aos="fade-right"
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center mt-8 md:mt-0 "
        >
          {/* Badge */}
          <div className="mb-5">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-semibold border border-red-100">
              SBIX 1.0 • 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="title-font sm:text-5xl text-4xl mb-5 font-bold text-gray-900 leading-tight">
            Satya Bharti
            <br />
            <span className="text-red-600">InnovateX 1.0</span>
          </h1>

          {/* Description */}
          <p className="mb-6 leading-relaxed text-gray-600 text-lg max-w-xl">
            An inter-school robotics and innovation competition where students
            explore technology, robotics, creativity and real-world problem
            solving.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {/* Date Badge */}
            <div className="group flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-gray-50 to-red-50/30 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 group-hover:scale-110 transition-transform duration-300 text-base">
                📅
              </span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                  Date
                </span>
                <span className="text-sm font-semibold text-gray-800">
                  17 October 2026
                </span>
              </div>
            </div>

            {/* Location Badge */}
            <div className="group flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-gray-50 to-red-50/30 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 group-hover:scale-110 transition-transform duration-300 text-base">
                📍
              </span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                  Venue
                </span>
                <span className="text-sm font-semibold text-gray-800">
                  SBAS Rauni
                </span>
              </div>
            </div>

            {/* Entry Badge */}
            <div className="group flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-gray-50 to-red-50/30 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 group-hover:scale-110 transition-transform duration-300 text-base">
                🎟️
              </span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                  Fee
                </span>
                <span className="text-sm font-semibold text-gray-800">
                  Free Registration
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/registration">
              <button
                className="
      inline-flex
      text-white
      bg-red-600
      border-0
      py-3
      px-7
      focus:outline-none
      hover:bg-red-700
      rounded-lg
      text-base
      font-semibold
      transition
      duration-300
      shadow-md
      cursor-pointer
    "
              >
                Register Your School
              </button>
            </Link>
          </div>

          {/* Participants */}
          <p className="text-sm text-gray-500 mt-6">
            Junior: Classes 6–8 &nbsp; • &nbsp; Senior: Classes 9–12
          </p>
        </div>

        {/* Right Side (Logo Wrapper - Shows on top in mobile) */}
        {/* Right Side (Logo Wrapper) */}
        <div
          data-aos="fade-left"
          className="w-3/4 max-w-xs md:w-1/2 lg:w-[400px] h-full flex justify-center items-center"
        >
          <div className="relative w-full flex justify-center items-center">
            {/* Logo Image */}
            <div className="relative w-full flex justify-center items-center">
              <img
                src={logo}
                alt="Satya Bharti InnovateX"
                className="w-full h-auto object-contain drop-shadow-2xl rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
