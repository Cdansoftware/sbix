import React from 'react';

const AiQuiz = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSduHeiR3dIVPwqpjq8uIOfZiAyE8rXSQXQ_u5OC5lAh9Lsgug/viewform?usp=header";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-white flex flex-col items-center justify-center px-4 py-24">
      <div className="max-w-2xl w-full text-center space-y-8" data-aos="fade-up">
        
        {/* Header Section */}
        <div className="space-y-4">
          <span className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
            Interactive Assessment
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            AI Quiz Hub
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Test your knowledge and challenge yourself with our curated AI quiz. Click the button below to get started!
          </p>
        </div>

        {/* Action Button Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-900/60 border border-gray-800 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center space-y-6">
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Start AI Quiz</span>
            <svg 
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p className="text-xs text-gray-500">
            Opens securely in a new tab via Google Forms.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AiQuiz;