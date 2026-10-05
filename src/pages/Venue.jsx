import React, { useState, useRef } from 'react';
import { 
  MapPin, 
  Navigation, 
  Layers, 
  Search, 
  X, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Menu,
  Compass,
  Cpu,
  Bot,
  Sparkles,
  BookOpen,
  Award
} from 'lucide-react';

const CHALLENGES = [
  {
    id: 'tinkercad',
    title: 'Tinkercad Challenge',
    category: 'Tinker-Cad',
    floor: 'first',
    room: 'Language + Smart Lab',
    desc: '3D modeling, circuit simulation, and creative CAD design challenge.',
    icon: Cpu,
    color: 'bg-indigo-500',
    borderColor: 'border-indigo-500',
    textColor: 'text-indigo-400',
    pinCoords: { x: 860, y: 150 },
    directions: [
      'Stairs se 1st Floor par aayein.',
      'Main corridor me Right muden.',
      'Corridor ke end tak chalein (Science & Computer Lab ke paas).',
      'Right side me "Language + Smart Lab" milega.'
    ]
  },
  {
    id: 'robo-race',
    title: 'Robo Race Challenge',
    category: 'Robotics',
    floor: 'ground',
    room: 'UKG Room (P-A / P.P.A)',
    desc: 'Autonomous & remote-controlled bots navigating custom obstacle tracks.',
    icon: Bot,
    color: 'bg-cyan-500',
    borderColor: 'border-cyan-500',
    textColor: 'text-cyan-400',
    pinCoords: { x: 330, y: 690 },
    directions: [
      'Ground Floor "YOU ARE HERE" entrance point par khade ho.',
      'Aapke bilkul peeche/adjacent left me UKG (P-A / P.P.A) room hai.',
      'Target room bas 5 steps ki doori par hai.'
    ]
  },
  {
    id: 'ai-quiz',
    title: 'AI Quiz Challenge',
    category: 'Robotics',
    floor: 'first',
    room: 'Robotics Lab',
    desc: 'Interactive quiz testing knowledge on Artificial Intelligence & ML.',
    icon: Sparkles,
    color: 'bg-rose-500',
    borderColor: 'border-rose-500',
    textColor: 'text-rose-400',
    pinCoords: { x: 540, y: 820 },
    directions: [
      'Ground Floor se staircase lekar 1st Floor aayein.',
      'Stairs se bahar nikalte hi Right turn karein.',
      'Aapke bilkul saamne/right me Robotics Lab hai.'
    ]
  },
  {
    id: 'senior-innovation',
    title: 'Senior Innovation Challenge',
    category: 'Innovation',
    floor: 'ground',
    room: 'Library',
    desc: 'Advanced tech prototypes and working models by senior students.',
    icon: Award,
    color: 'bg-amber-500',
    borderColor: 'border-amber-500',
    textColor: 'text-amber-400',
    pinCoords: { x: 500, y: 720 },
    directions: [
      'Ground Floor entry "YOU ARE HERE" pin se face karein.',
      'Right corridor me seedhe aage badhein.',
      'Classroom I-A ke bilkul paas Right side me Library hai.'
    ]
  },
  {
    id: 'junior-innovation',
    title: 'Junior Innovation Challenge',
    category: 'Innovation',
    floor: 'ground',
    room: 'Activity Hall',
    desc: 'Creative STEM models and working projects by junior innovators.',
    icon: BookOpen,
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-500',
    textColor: 'text-emerald-400',
    pinCoords: { x: 820, y: 220 },
    directions: [
      'Ground Floor entry point se Right corridor pakdein.',
      'ICT Lab ke baad Left turn lekar long vertical wing me jaayein.',
      'Wing ke end me Right side par Activity Hall milega.'
    ]
  }
];

export default function App() {
  const [activeFloor, setActiveFloor] = useState('ground');
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBottomSheetCollapsed, setIsBottomSheetCollapsed] = useState(false);
  
  // Map pan & zoom controls
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const categories = ['All', 'Innovation', 'Robotics', 'Tinker-Cad'];

  const filteredChallenges = CHALLENGES.filter(c => {
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.room.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectChallenge = (challenge) => {
    setSelectedChallenge(challenge);
    setActiveFloor(challenge.floor);
    setIsBottomSheetCollapsed(false);
    // Mobile par drawer ko automatically band kar do taaki map clear dikhe
    setIsMobileMenuOpen(false);
  };

  // Zoom / Pan handlers
  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.75));
  const handleResetMap = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 font-sans">
      
      {/* ---------------- MOBILE SIDEBAR OVERLAY ---------------- */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* ---------------- LEFT NAVIGATION SIDEBAR ---------------- */}
      <aside className={`
        fixed md:relative z-50 h-full w-[85%] sm:w-96 bg-slate-900/95 border-r border-slate-800 
        flex flex-col transition-transform duration-300 ease-in-out backdrop-blur-xl
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="font-bold text-base tracking-wide text-white">SBIX1.0 Event</h1>
              <p className="text-xs text-slate-400">Interactive Venue Navigator</p>
            </div>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Floor Selection Toggle */}
        <div className="p-4 border-b border-slate-800/80 bg-slate-950/40">
          <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-rose-500" /> Select Floor View
          </label>
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveFloor('ground')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-0.5 ${
                activeFloor === 'ground' 
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-900/40' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>Ground Floor</span>
              <span className="text-[10px] opacity-75 font-normal">3 Events</span>
            </button>
            <button
              onClick={() => setActiveFloor('first')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-0.5 ${
                activeFloor === 'first' 
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-900/40' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>First Floor</span>
              <span className="text-[10px] opacity-75 font-normal">2 Events</span>
            </button>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="p-4 space-y-3 border-b border-slate-800/60">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search challenge or room..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-800 text-rose-400 border border-rose-500/40'
                    : 'bg-slate-950/60 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Challenges List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-slate-400">CHALLENGES ({filteredChallenges.length})</span>
            {selectedChallenge && (
              <button 
                onClick={() => setSelectedChallenge(null)}
                className="text-[11px] text-rose-400 hover:underline"
              >
                Clear Selection
              </button>
            )}
          </div>

          {filteredChallenges.map((challenge) => {
            const Icon = challenge.icon;
            const isSelected = selectedChallenge?.id === challenge.id;
            
            return (
              <div
                key={challenge.id}
                onClick={() => handleSelectChallenge(challenge)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer relative group ${
                  isSelected 
                    ? `bg-slate-800/90 ${challenge.borderColor} shadow-lg shadow-slate-950`
                    : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-lg text-slate-950 font-bold shrink-0 ${challenge.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="font-semibold text-xs text-white truncate">{challenge.title}</h3>
                      <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        {challenge.floor === 'ground' ? 'Ground Fl.' : 'First Fl.'}
                      </span>
                    </div>
                    <p className={`text-[11px] mt-0.5 flex items-center gap-1 font-medium ${challenge.textColor}`}>
                      <MapPin className="w-3 h-3 shrink-0" /> {challenge.room}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{challenge.desc}</p>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300 font-medium group-hover:text-rose-400 transition-colors">
                    <Navigation className="w-3 h-3 text-rose-500" /> View Route
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* ---------------- MAIN MAP CANVAS AREA ---------------- */}
      <main className="flex-1 relative h-full flex flex-col bg-slate-950 overflow-hidden">
        
        {/* Top Floating Control Bar */}
        <header className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto">
            {/* Mobile Sidebar Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-white shadow-xl backdrop-blur-md hover:bg-slate-800"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl px-3.5 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Current Floor: <strong className="text-rose-400 uppercase">{activeFloor} Floor</strong></span>
            </div>
          </div>

          {/* Zoom / Reset Controls */}
          <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 p-1 rounded-xl shadow-xl backdrop-blur-md pointer-events-auto">
            <button 
              onClick={handleZoomIn} 
              title="Zoom In"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button 
              onClick={handleZoomOut} 
              title="Zoom Out"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button 
              onClick={handleResetMap} 
              title="Reset View"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Map Viewport Canvas */}
        <div 
          className="flex-1 w-full h-full cursor-grab active:cursor-grabbing select-none relative overflow-hidden flex items-center justify-center p-4"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div 
            className="transition-transform duration-75 ease-out flex items-center justify-center"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: 'center center'
            }}
          >
            {/* Interactive SVG Floor Map */}
            <div className="relative w-[1000px] h-[900px] bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 shadow-2xl backdrop-blur-md">
              
              <svg viewBox="0 0 1000 900" className="w-full h-full">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  </pattern>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                <rect width="1000" height="900" fill="url(#grid)" />

                {/* Ground Floor Layout */}
                {activeFloor === 'ground' && (
                  <g className="animate-fadeIn">
                    {/* Main Building Wings Structure */}
                    <rect x="100" y="620" width="800" height="140" fill="#1e293b" stroke="#334155" strokeWidth="3" rx="12" />
                    <rect x="640" y="120" width="260" height="500" fill="#1e293b" stroke="#334155" strokeWidth="3" rx="12" />
                    
                    {/* Individual Classrooms & Rooms */}
                    <g stroke="#475569" strokeWidth="2" fill="#0f172a">
                      {/* Left Wing Classrooms */}
                      <rect x="120" y="640" width="80" height="50" rx="4" />
                      <text x="160" y="670" fill="#94a3b8" fontSize="12" textAnchor="middle">8-A</text>
                      
                      <rect x="210" y="640" width="80" height="50" rx="4" />
                      <text x="250" y="670" fill="#94a3b8" fontSize="12" textAnchor="middle">8-A</text>

                      {/* UKG / P-A Venue */}
                      <rect 
                        x="300" y="640" width="90" height="100" rx="6"
                        fill={selectedChallenge?.id === 'robo-race' ? 'rgba(6, 182, 212, 0.25)' : '#0f172a'}
                        stroke={selectedChallenge?.id === 'robo-race' ? '#06b6d4' : '#475569'}
                        strokeWidth={selectedChallenge?.id === 'robo-race' ? '3' : '2'}
                      />
                      <text x="345" y="685" fill={selectedChallenge?.id === 'robo-race' ? '#38bdf8' : '#94a3b8'} fontSize="12" fontWeight="bold" textAnchor="middle">P-A / P.P.A</text>
                      <text x="345" y="705" fill="#64748b" fontSize="10" textAnchor="middle">(UKG)</text>

                      {/* Library Venue */}
                      <rect 
                        x="450" y="640" width="130" height="100" rx="6"
                        fill={selectedChallenge?.id === 'senior-innovation' ? 'rgba(245, 158, 11, 0.25)' : '#0f172a'}
                        stroke={selectedChallenge?.id === 'senior-innovation' ? '#f59e0b' : '#475569'}
                        strokeWidth={selectedChallenge?.id === 'senior-innovation' ? '3' : '2'}
                      />
                      <text x="515" y="695" fill={selectedChallenge?.id === 'senior-innovation' ? '#fbbf24' : '#94a3b8'} fontSize="14" fontWeight="bold" textAnchor="middle">LIBRARY</text>

                      {/* ICT Lab */}
                      <rect x="600" y="640" width="90" height="100" rx="4" />
                      <text x="645" y="695" fill="#94a3b8" fontSize="12" textAnchor="middle">ICT LAB</text>

                      {/* Right Wing Rooms */}
                      <rect x="760" y="440" width="120" height="60" rx="4" />
                      <text x="820" y="475" fill="#94a3b8" fontSize="11" textAnchor="middle">Beauty & Wellness</text>

                      {/* Activity Hall Venue */}
                      <rect 
                        x="760" y="140" width="120" height="180" rx="6"
                        fill={selectedChallenge?.id === 'junior-innovation' ? 'rgba(16, 185, 129, 0.25)' : '#0f172a'}
                        stroke={selectedChallenge?.id === 'junior-innovation' ? '#10b981' : '#475569'}
                        strokeWidth={selectedChallenge?.id === 'junior-innovation' ? '3' : '2'}
                      />
                      <text x="820" y="220" fill={selectedChallenge?.id === 'junior-innovation' ? '#34d399' : '#94a3b8'} fontSize="14" fontWeight="bold" textAnchor="middle">ACTIVITY</text>
                      <text x="820" y="240" fill={selectedChallenge?.id === 'junior-innovation' ? '#34d399' : '#94a3b8'} fontSize="14" fontWeight="bold" textAnchor="middle">HALL</text>

                      {/* MDM Hall */}
                      <rect x="660" y="140" width="90" height="180" rx="4" />
                      <text x="705" y="230" fill="#94a3b8" fontSize="12" textAnchor="middle">MDM HALL</text>
                    </g>

                    {/* Navigation Path Lines */}
                    {selectedChallenge?.id === 'senior-innovation' && (
                      <path d="M 400 750 L 400 720 L 515 720" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="8 6" className="animate-dash" />
                    )}
                    {selectedChallenge?.id === 'junior-innovation' && (
                      <path d="M 400 750 L 400 720 L 720 720 L 720 220 L 820 220" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="8 6" className="animate-dash" />
                    )}
                    {selectedChallenge?.id === 'robo-race' && (
                      <path d="M 400 750 L 400 720 L 345 720" fill="none" stroke="#06b6d4" strokeWidth="4" strokeDasharray="8 6" className="animate-dash" />
                    )}
                  </g>
                )}

                {/* First Floor Layout */}
                {activeFloor === 'first' && (
                  <g className="animate-fadeIn">
                    {/* Main Building Structure */}
                    <rect x="100" y="740" width="800" height="120" fill="#1e293b" stroke="#334155" strokeWidth="3" rx="12" />
                    <rect x="720" y="80" width="180" height="680" fill="#1e293b" stroke="#334155" strokeWidth="3" rx="12" />

                    <g stroke="#475569" strokeWidth="2" fill="#0f172a">
                      {/* Robotics Lab Venue */}
                      <rect 
                        x="480" y="760" width="140" height="80" rx="6"
                        fill={selectedChallenge?.id === 'ai-quiz' ? 'rgba(244, 63, 94, 0.25)' : '#0f172a'}
                        stroke={selectedChallenge?.id === 'ai-quiz' ? '#f43f5e' : '#475569'}
                        strokeWidth={selectedChallenge?.id === 'ai-quiz' ? '3' : '2'}
                      />
                      <text x="550" y="805" fill={selectedChallenge?.id === 'ai-quiz' ? '#fb7185' : '#94a3b8'} fontSize="13" fontWeight="bold" textAnchor="middle">ROBOTICS LAB</text>

                      {/* Language + Smart Lab Venue */}
                      <rect 
                        x="780" y="100" width="100" height="120" rx="6"
                        fill={selectedChallenge?.id === 'tinkercad' ? 'rgba(99, 102, 241, 0.25)' : '#0f172a'}
                        stroke={selectedChallenge?.id === 'tinkercad' ? '#6366f1' : '#475569'}
                        strokeWidth={selectedChallenge?.id === 'tinkercad' ? '3' : '2'}
                      />
                      <text x="830" y="150" fill={selectedChallenge?.id === 'tinkercad' ? '#818cf8' : '#94a3b8'} fontSize="11" fontWeight="bold" textAnchor="middle">LANG. + SMART</text>
                      <text x="830" y="168" fill={selectedChallenge?.id === 'tinkercad' ? '#818cf8' : '#94a3b8'} fontSize="11" fontWeight="bold" textAnchor="middle">LAB</text>

                      {/* Computer Lab */}
                      <rect x="780" y="240" width="100" height="110" rx="4" />
                      <text x="830" y="295" fill="#94a3b8" fontSize="11" textAnchor="middle">COMPUTER LAB</text>

                      {/* Science Lab */}
                      <rect x="780" y="370" width="100" height="110" rx="4" />
                      <text x="830" y="425" fill="#94a3b8" fontSize="11" textAnchor="middle">SCIENCE LAB</text>
                    </g>

                    {/* First Floor Navigation Lines */}
                    {selectedChallenge?.id === 'ai-quiz' && (
                      <path d="M 420 800 L 550 800" fill="none" stroke="#f43f5e" strokeWidth="4" strokeDasharray="8 6" className="animate-dash" />
                    )}
                    {selectedChallenge?.id === 'tinkercad' && (
                      <path d="M 420 800 L 750 800 L 750 160 L 830 160" fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="8 6" className="animate-dash" />
                    )}
                  </g>
                )}

                {/* Entry Point Marker "YOU ARE HERE" */}
                <g transform={activeFloor === 'ground' ? 'translate(400, 780)' : 'translate(420, 800)'}>
                  <circle r="22" fill="#ef4444" opacity="0.25" className="animate-ping" />
                  <circle r="14" fill="#ef4444" stroke="#ffffff" strokeWidth="3" filter="url(#glow)" />
                  <text y="4" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle">ENTRY</text>
                  
                  {/* Floating Tag */}
                  <g transform="translate(0, 36)">
                    <rect x="-55" y="-14" width="110" height="22" rx="11" fill="#ef4444" />
                    <text y="1" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">YOU ARE HERE</text>
                  </g>
                </g>

                {/* Venue Target Pins */}
                {CHALLENGES.filter(c => c.floor === activeFloor).map((challenge) => {
                  const isSelected = selectedChallenge?.id === challenge.id;
                  const Icon = challenge.icon;

                  return (
                    <g 
                      key={challenge.id} 
                      transform={`translate(${challenge.pinCoords.x}, ${challenge.pinCoords.y})`}
                      onClick={() => handleSelectChallenge(challenge)}
                      className="cursor-pointer group"
                    >
                      {isSelected && (
                        <circle r="30" fill="none" stroke={challenge.color.replace('bg-', '')} strokeWidth="2" opacity="0.6" className="animate-ping" />
                      )}
                      
                      <circle 
                        r={isSelected ? "20" : "16"} 
                        className={`transition-all duration-300 ${challenge.color} ${isSelected ? 'shadow-xl' : 'opacity-90 hover:opacity-100'}`}
                        stroke="#ffffff" 
                        strokeWidth="2.5"
                      />
                      <foreignObject x="-10" y="-10" width="20" height="20">
                        <div className="w-full h-full flex items-center justify-center text-slate-950 font-bold">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </foreignObject>

                      {/* Label Card on Hover/Selection */}
                      <g transform="translate(0, -32)" className={isSelected ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}>
                        <rect x="-60" y="-12" width="120" height="24" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                        <text y="3" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                          {challenge.title.split(' ')[0]}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* ---------------- MOBILE FLOATING BOTTOM SHEET ---------------- */}
        {selectedChallenge && (
          <div className="absolute bottom-4 left-4 right-4 z-30 max-w-lg mx-auto transition-all duration-300">
            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 shadow-2xl backdrop-blur-xl text-slate-100">
              
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl text-slate-950 font-bold ${selectedChallenge.color}`}>
                    <selectedChallenge.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-rose-400 uppercase">
                      {selectedChallenge.floor === 'ground' ? 'Ground Floor' : 'First Floor'}
                    </span>
                    <h2 className="text-sm font-bold text-white">{selectedChallenge.title}</h2>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-rose-500" /> {selectedChallenge.room}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setIsBottomSheetCollapsed(!isBottomSheetCollapsed)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 text-xs font-semibold"
                  >
                    {isBottomSheetCollapsed ? 'Expand' : 'Map View'}
                  </button>
                  <button 
                    onClick={() => setSelectedChallenge(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Step-by-Step Navigation Directions */}
              {!isBottomSheetCollapsed && (
                <div className="mt-3 pt-3 border-t border-slate-800 space-y-2">
                  <h4 className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5 text-rose-500" /> Step-by-Step Route Directions
                  </h4>
                  <ol className="space-y-1.5 pl-1">
                    {selectedChallenge.directions.map((step, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-slate-800 text-rose-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -28;
          }
        }
        .animate-dash {
          stroke-dasharray: 8 6;
          animation: dash 1s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}