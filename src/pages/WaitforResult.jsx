import React from 'react';
import logoImg from "../assets/logo_sbix.png"; // Aap apna logo path yahan adjust kar sakte hain

const WaitforResult = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-3xl w-full text-center space-y-6">
        
        {/* Logo / Badge */}
        <div className="flex justify-center">
          <div className="relative flex items-center justify-center p-2">
            <div className="absolute w-28 h-28 border-4 border-red-600/30 rounded-full animate-ping"></div>
            <img
              src={logoImg}
              alt="SBIX Logo"
              className="w-16 h-16 object-contain animate-pulse rounded-full relative z-10"
            />
          </div>
        </div>

        {/* Heading & Notice */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Please Wait for the Result...
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Evaluation is in progress. The final results and notifications will be announced soon. Stay tuned!
          </p>
        </div>

        {/* Video Player Section */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            {/* Apni video ka path yahan daalein */}
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Footer info or back button if needed */}
        <div className="pt-2">
          <span className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">
            SBIX 1.0 Event Committee
          </span>
        </div>

      </div>
    </div>
  );
};

export default WaitforResult;