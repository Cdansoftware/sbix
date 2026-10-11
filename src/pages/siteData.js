// Import your category images here
import tinkercadImg from "../assets/tinker-cad.png";
import InnovationImg from "../assets/innovation.png";
import aiquizImg from "../assets/ai-quiz.png";
import roboraceImg from "../assets/robo-race.png";
import PPT from "../assets/SBIXidea.pdf";
import { Award, BookOpen, Bot, Cpu, Sparkles } from "lucide-react";

export const ResultData = {
  headers: [
    { id: "srNo", label: "Sr. No.", align: "text-center" },
    { id: "schoolName", label: "School Name", align: "text-left" },
    { id: "teamName", label: "Team Name", align: "text-left" },
    { id: "teamCode", label: "Team Code", align: "text-left" },
    { id: "mentorName", label: "Mentor Name", align: "text-left" },
    { id: "projectName", label: "Project Name", align: "text-left" },
    { id: "ppt", label: "PPT Presentation", align: "text-center" },
  ],
};

export const EventSchedule = [
  {
    time: "08:30 AM",
    event: "Reporting & On-Spot Registration",
    desc: "Check-in at main desk and team kit allocation.",
  },
  {
    time: "09:30 AM",
    event: "Opening Ceremony",
    desc: "Welcome address, keynote speaker, and rules briefing.",
  },
  {
    time: "10:15 AM",
    event: "Competitions Begin",
    desc: "All track events commence simultaneously across labs.",
  },
  {
    time: "01:30 PM",
    event: "Lunch Break & Jury Round",
    desc: "Refreshments provided; judges finalize preliminary scores.",
  },
  {
    time: "03:30 PM",
    event: "Valedictory & Award Ceremony",
    desc: "Declaration of winners and trophy distribution.",
  },
];

// Categories list matching with your data keys or categories
export const categories = [
  {
    key: "innovation",
    title: "💡 Innovation Challenge",
    borderColor: "border-red-500",
    badgeColor: "bg-red-100 text-red-800",
  },
  {
    key: "tinkercad",
    title: "⚡ Tinkercad Circuits",
    borderColor: "border-emerald-500",
    badgeColor: "bg-emerald-100 text-emerald-800",
  },
  {
    key: "roborace",
    title: "🤖 Robo Race",
    borderColor: "border-blue-500",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    key: "aiquiz",
    title: "🧠 AI Quiz",
    borderColor: "border-purple-500",
    badgeColor: "bg-purple-100 text-purple-800",
  },
];

export const allParticipants = {
  innovation: [
    {
      id: 1,
      schoolName: "Satya Bharti Adarsh Sen. Sec. School, Rauni",
      teamName: "Innovate X",
      teamCode: "SBX-9981",
      members: ["Chandan Prajapati", "Aman Sharma"],
    },
  ],
  tinkercad: [
    {
      id: 2,
      schoolName: "Govt Senior Secondary School, Khanna",
      teamName: "Circuit Wizards",
      teamCode: "SBX-1024",
      members: ["Rahul Verma"],
    },
  ],
  roborace: [
    {
      id: 3,
      schoolName: "BCM Arya Model Senior Secondary School",
      teamName: "Speed Bots",
      teamCode: "SBX-2055",
      members: ["Sahil Gupta", "Karan Singh"],
    },
  ],
  aiquiz: [
    {
      id: 4,
      schoolName: "Sacred Heart Convent School",
      teamName: "Neural Knights",
      teamCode: "SBX-3091",
      members: ["Priya Sharma", "Neha Mehra"],
    },
  ],
};

export const selectedStudentsData = [
  {
    id: 1,
    schoolName: "Satya Bharti Adarsh Sen. Sec. School, Rauni",
    teamName: "Innovate X",
    teamCode: "SBX-1001",
    mentorName: "Chandan Prajapati",
    projectName: "Smart EV",
    pptFile: PPT,
  },
  // {
  //   id: 2,
  //   schoolName: "Govt. Model Senior Secondary School, Patiala",
  //   teamName: "RoboSpark",
  //   teamCode: "SBX-1002",
  //   mentorName: "Rajesh Kumar",
  //   projectName: "Automated Agriculture Bot",
  //   pptFile: PPT,
  // },
];

export const footerData = {
  quickLinks: [
    { id: "home", title: "Home", path: "/home" },
    { id: "guidelines", title: "Guidelines & Rules", path: "/guidelines" },
    {
      id: "registration",
      title: "Registration & Submissions",
      path: "/registration",
    },
    { id: "contact", title: "Contact Us", path: "/contact" },
  ],
  competitions: [
    {
      id: "tinkercad",
      title: "Tinkercad Circuits",
      icon: "⚡",
      color: "text-amber-400",
    },
    { id: "roborace", title: "Robo Race", icon: "🤖", color: "text-blue-400" },
    {
      id: "innovation",
      title: "Innovation Challenge",
      icon: "💡",
      color: "text-rose-400",
    },
    { id: "aiquiz", title: "AI Quiz", icon: "🧠", color: "text-purple-400" },
  ],
};

export const animations = ["flip-left", "flip-right", "flip-up", "flip-down"];

// AOS Flip Animations Sequence
export const flipAnimations = [
  "flip-left",
  "flip-right",
  "flip-up",
  "flip-down",
];

export const CHALLENGES = [
  {
    id: "tinkercad",
    title: "Tinkercad Challenge",
    category: "Tinker-Cad",
    floor: "first",
    room: "Language + Smart Lab",
    desc: "3D modeling, circuit simulation, and creative CAD design challenge.",
    icon: Cpu,
    color: "bg-indigo-500",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-400",
    pinCoords: { x: 860, y: 150 },
    directions: [
      "Stairs se 1st Floor par aayein.",
      "Main corridor me Right muden.",
      "Corridor ke end tak chalein (Science & Computer Lab ke paas).",
      'Right side me "Language + Smart Lab" milega.',
    ],
  },
  {
    id: "robo-race",
    title: "Robo Race Challenge",
    category: "Robotics",
    floor: "ground",
    room: "UKG Room (P-A / P.P.A)",
    desc: "Autonomous & remote-controlled bots navigating custom obstacle tracks.",
    icon: Bot,
    color: "bg-cyan-500",
    borderColor: "border-cyan-500",
    textColor: "text-cyan-400",
    pinCoords: { x: 330, y: 690 },
    directions: [
      'Ground Floor "YOU ARE HERE" entrance point par khade ho.',
      "Aapke bilkul peeche/adjacent left me UKG (P-A / P.P.A) room hai.",
      "Target room bas 5 steps ki doori par hai.",
    ],
  },
  {
    id: "ai-quiz",
    title: "AI Quiz Challenge",
    category: "Robotics",
    floor: "first",
    room: "Robotics Lab",
    desc: "Interactive quiz testing knowledge on Artificial Intelligence & ML.",
    icon: Sparkles,
    color: "bg-rose-500",
    borderColor: "border-rose-500",
    textColor: "text-rose-400",
    pinCoords: { x: 540, y: 820 },
    directions: [
      "Ground Floor se staircase lekar 1st Floor aayein.",
      "Stairs se bahar nikalte hi Right turn karein.",
      "Aapke bilkul saamne/right me Robotics Lab hai.",
    ],
  },
  {
    id: "senior-innovation",
    title: "Senior Innovation Challenge",
    category: "Innovation",
    floor: "ground",
    room: "Library",
    desc: "Advanced tech prototypes and working models by senior students.",
    icon: Award,
    color: "bg-amber-500",
    borderColor: "border-amber-500",
    textColor: "text-amber-400",
    pinCoords: { x: 500, y: 720 },
    directions: [
      'Ground Floor entry "YOU ARE HERE" pin se face karein.',
      "Right corridor me seedhe aage badhein.",
      "Classroom I-A ke bilkul paas Right side me Library hai.",
    ],
  },
  {
    id: "junior-innovation",
    title: "Junior Innovation Challenge",
    category: "Innovation",
    floor: "ground",
    room: "Activity Hall",
    desc: "Creative STEM models and working projects by junior innovators.",
    icon: BookOpen,
    color: "bg-emerald-500",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-400",
    pinCoords: { x: 820, y: 220 },
    directions: [
      "Ground Floor entry point se Right corridor pakdein.",
      "ICT Lab ke baad Left turn lekar long vertical wing me jaayein.",
      "Wing ke end me Right side par Activity Hall milega.",
    ],
  },
];

// Competitions Data
export const Allcompetitions = [
  {
    id: "tinkercad",
    title: "Tinkercad Circuits",
    category: "Junior Category",
    classes: "Classes 6–8",
    teamSize: "1 Member",
    icon: "⚡",
    image: tinkercadImg,
    accentGlow: "from-amber-500/20 to-orange-500/20",
    badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/30",
    btnColor: "bg-amber-500 hover:bg-amber-600",
    description:
      "Design and simulate virtual electronic circuits and systems on the spot within 60 minutes using Tinkercad.",
    highlights: [
      "60 Minutes On-Spot Challenge",
      "Virtual Circuit Simulation",
      "Must bring own laptop",
    ],
  },
  {
    id: "roborace",
    title: "Robo Race",
    category: "Senior Category",
    classes: "Classes 9–12",
    teamSize: "2 Members",
    icon: "🤖",
    image: roboraceImg,
    accentGlow: "from-blue-500/20 to-indigo-500/20",
    badgeColor: "bg-blue-400/20 text-blue-300 border-blue-400/30",
    btnColor: "bg-blue-600 hover:bg-blue-700",
    description:
      "Build and navigate custom robots through a complex track filled with hurdles, tests for speed, control, and precision.",
    highlights: [
      "Max Dimensions: 30cm × 30cm × 30cm",
      "Point-based Hurdle System",
      "Time & Penalty Scoring",
    ],
  },
  {
    id: "innovation",
    title: "Innovation Challenge",
    category: "Junior & Senior",
    classes: "Classes 6–12",
    teamSize: "1–2 Members",
    icon: "💡",
    image: InnovationImg,
    accentGlow: "from-rose-500/20 to-red-500/20",
    badgeColor: "bg-rose-400/20 text-rose-300 border-rose-400/30",
    btnColor: "bg-rose-600 hover:bg-rose-700",
    description:
      "Present original, practical solutions to real-world problems using tech, AI, or robotics with a working prototype.",
    highlights: [
      "4 Min Presentation + 3 Min Q&A",
      "Working Prototype Compulsory",
      "2-Round Evaluation Process",
    ],
  },
  {
    id: "aiquiz",
    title: "AI Quiz",
    category: "Open Category",
    classes: "Classes 6–12",
    teamSize: "2 Members",
    icon: "🧠",
    image: aiquizImg,
    accentGlow: "from-purple-500/20 to-indigo-500/20",
    badgeColor: "bg-purple-400/20 text-purple-300 border-purple-400/30",
    btnColor: "bg-purple-600 hover:bg-purple-700",
    description:
      "Test your knowledge across Artificial Intelligence fundamentals, Machine Learning, Computer Vision, and modern tech trends.",
    highlights: [
      "Machine Learning & AI Concepts",
      "Speed & Accuracy Assessment",
      "Scenario-based Questions",
    ],
  },
];

// Key Event Stats
export const stats = [
  { label: "Competitions", value: "04 Tracks", icon: "🏆" },
  { label: "Target Audience", value: "Classes 6–12", icon: "🎓" },
  { label: "Trophy", value: "Certificate", icon: "🎁" },
  { label: "Mode", value: "SBAS - Rauni", icon: "📍" },
];

export const departmentData = [
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

// General Competition Rules
export const generalRules = [
  {
    title: "Eligibility & Registration",
    desc: "All participants must be currently enrolled in Classes 6–12. Valid school ID cards are mandatory at check-in.",
    icon: "🪪",
  },
  {
    title: "Reporting & Punctuality",
    desc: "Teams must report 30 minutes prior to their event time slot. Late arrivals will lead to immediate disqualification.",
    icon: "⏰",
  },
  {
    title: "Code of Conduct",
    desc: "Fair play and ethical behavior are required. Any form of plagiarism or unsportsmanlike conduct will result in Rejection.",
    icon: "🤝",
  },
  {
    title: "Equipment & Safety",
    desc: "Participants are responsible for their own laptops, tools, and hardware. Safety goggles are required for physical robot arenas.",
    icon: "🛡️",
  },
];

// AI Quiz Syllabus Topics
export const aiQuizSyllabus = [
  {
    module: "1. Introduction to Artificial Intelligence",
    icon: "🤖",
    topics: [
      "Definition of AI",
      "History and evolution of AI",
      "Types of AI (Narrow AI, General AI, Super AI)",
      "AI vs Human Intelligence",
    ],
  },
  {
    module: "2. AI Around Us",
    icon: "📱",
    topics: [
      "Virtual Assistants (Siri, Alexa, Google Assistant)",
      "Recommendation Systems (YouTube, Netflix, Spotify)",
      "Face Recognition and Biometrics",
      "AI in Smartphones and Smart Devices",
    ],
  },
  {
    module: "3. Machine Learning Basics",
    icon: "⚙️",
    topics: [
      "What is Machine Learning?",
      "Training Data and Models",
      "Supervised Learning",
      "Unsupervised Learning",
      "Real-life applications of ML",
    ],
  },
  {
    module: "4. Robotics and AI",
    icon: "🦾",
    topics: [
      "Difference between Robotics and AI",
      "AI-powered Robots",
      "Applications of Robotics in Industry, Healthcare, and Space",
    ],
  },
  {
    module: "5. Natural Language Processing (NLP)",
    icon: "💬",
    topics: [
      "Speech Recognition",
      "Language Translation",
      "Chatbots and Virtual Assistants",
      "Text Generation",
    ],
  },
  {
    module: "6. AI Applications",
    icon: "🌐",
    topics: [
      "Healthcare",
      "Education",
      "Agriculture",
      "Transportation",
      "Banking and Finance",
    ],
  },
  {
    module: "7. Current AI Trends",
    icon: "🚀",
    topics: [
      "AI in Self-Driving Cars",
      "AI in Space Exploration",
      "AI in Smart Cities",
      "Emerging AI Technologies",
    ],
  },
];

// Detailed Guidelines for Each Competition Challenge
export const challengeGuidelines = [
  {
    id: "tinkercad",
    title: "Tinkercad Circuits",
    category: "Junior (Classes 6–8)",
    icon: "⚡",
    badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/30",
    accentGlow: "from-amber-500/10 to-orange-500/10",
    overview:
      "Design and simulate virtual electronic circuits and microcontroller setups on the spot within 60 minutes using Tinkercad.",
    specifications: [
      "Duration: Exactly 60 minutes.",
      "Team Size: 1 Member (Individual competition).",
      "Allowed Tools: Web browser with active Tinkercad account.",
    ],
    rules: [
      "Participants MUST bring their own laptops with Wi-Fi capability and pre-tested Tinkercad login.",
      "The problem statement / circuit design brief will be revealed on the spot at time 00:00.",
      "No pre-built circuits or imported external code libraries are allowed.",
      "Internet access is restricted strictly to the Tinkercad platform and event portal.",
    ],
    judgmentCriteria: [
      "Circuit Functionality & Accuracy (40%)",
      "Efficiency & Clean Wiring Layout (30%)",
      "Code / Logic Correctness (20%)",
      "Speed of Completion (10%)",
    ],
  },
  {
    id: "roborace",
    title: "Robo Race",
    category: "Senior (Classes 9–12)",
    icon: "🤖",
    badgeColor: "bg-blue-400/20 text-blue-300 border-blue-400/30",
    accentGlow: "from-blue-500/10 to-indigo-500/10",
    overview:
      "Build and navigate custom wired/wireless bots through a complex track featuring speed runs, obstacles, and sharp curves.",
    specifications: [
      "Max Bot Dimensions: 30cm × 30cm × 30cm.",
      "Max Bot Weight: 3.0 kg.",
      "Power Supply: Max 12V onboard battery supply.",
    ],
    rules: [
      "Robots can be wired or wireless (Bluetooth/RF/Wi-Fi). RC car chassis modifications are permitted.",
      "Lego kits, ready-made toy cars, or pre-assembled commercial kits are STRICTLY PROHIBITED.",
      "A maximum of 2 restarts/touches per run are permitted, with a 10-second penalty per touch.",
      "Track inspection will happen 15 minutes before the official heat starts.",
    ],
    judgmentCriteria: [
      "Total Track Completion Time (50%)",
      "Hurdles Cleared & Checkpoints Reached (30%)",
      "Penalties / Touches Deductions (10%)",
      "Bot Design & Engineering Innovation (10%)",
    ],
  },
  {
    id: "innovation",
    title: "Innovation Challenge",
    category: "Junior & Senior (Classes 6–12)",
    icon: "💡",
    badgeColor: "bg-rose-400/20 text-rose-300 border-rose-400/30",
    accentGlow: "from-rose-500/10 to-red-500/10",
    overview:
      "Present practical, innovative tech solutions and working physical/digital prototypes solving real-world challenges.",
    specifications: [
      "Presentation Time: 4 Minutes Pitch + 3 Minutes Jury Q&A.",
      "Team Size: 1–2 Members.",
      "Mandatory Requirement: Functional Working Prototype.",
    ],
    rules: [
      "Every team must present a working prototype along with a maximum 8-slide presentation deck.",
      "Projects must fall under one of the 4 designated themes (AI, Sustainability, HealthTech, AgriTech).",
      "Plagiarized projects or direct store-bought school models will be disqualified immediately.",
      "Teams must bring all necessary extension cords, power adapters, and display materials.",
    ],
    judgmentCriteria: [
      "Innovation & Originality (30%)",
      "Working Prototype Functionality (30%)",
      "Feasibility & Real-World Impact (20%)",
      "Presentation & Defense during Q&A (20%)",
    ],
  },
  {
    id: "aiquiz",
    title: "AI Quiz",
    category: "Open Category (Classes 6–12)",
    icon: "🧠",
    badgeColor: "bg-purple-400/20 text-purple-300 border-purple-400/30",
    accentGlow: "from-purple-500/10 to-indigo-500/10",
    overview:
      "Test speed, accuracy, and knowledge depth in Artificial Intelligence, Machine Learning, Computer Vision, and Emerging Tech.",
    specifications: [
      "Round 1: Online Speed Quiz (Elimination Round).",
      "Team Size: 2 Members.",
    ],
    rules: [
      "Use of mobile phones, smartwatches, or external assistance during quiz rounds is strictly prohibited.",
      "In Round 1, tie-breakers will be determined based on submission speed.",
      "For Round 2 (Buzzer Round), negative points apply for incorrect answers after pressing the buzzer.",
      "The Quizmaster's decision is final and binding on all participating teams.",
    ],
    judgmentCriteria: [
      "Round 1 Score & Speed Ranking (Qualification)",
      "Buzzer Accuracy in Final Stage Round",
      "Scenario & Problem-Solving Speed",
    ],
    hasSyllabusButton: true,
  },
];

export const competitions = [
  {
    id: "tinkercad",
    title: "Tinkercad Circuits",
    category: "Junior",
    classes: "Classes 6–8",
    teamSize: "1 Member (Individual)",
    icon: "⚡",
    // image: tinkercadImg,
    btnBg: "bg-emerald-500 hover:bg-emerald-600",
    accentBg: "bg-emerald-100 text-emerald-600",
    description:
      "Design and simulate virtual electronic circuits and systems on the spot within 60 minutes using Tinkercad.",
    highlights: [
      "60 Minutes On-Spot Challenge",
      "Virtual Circuit Simulation",
      "Must bring own laptop",
    ],
  },
  {
    id: "roborace",
    title: "Robo Race",
    category: "Senior",
    classes: "Classes 9–12",
    teamSize: "2 Members",
    icon: "🤖",
    // image: roboraceImg,
    btnBg: "bg-blue-600 hover:bg-blue-700",
    accentBg: "bg-blue-100 text-blue-600",
    description:
      "Build and navigate custom robots through a complex track filled with hurdles, tests for speed, control, and precision.",
    highlights: [
      "Max Dimensions: 30cm × 30cm × 30cm",
      "Point-based Hurdle System",
      "Time & Penalty Scoring",
    ],
  },
  {
    id: "innovation",
    title: "Innovation Challenge",
    category: "Junior & Senior",
    classes: "Classes 6–12",
    teamSize: "1–2 Members",
    icon: "💡",
    // image: innovationImg,
    btnBg: "bg-red-600 hover:bg-red-700",
    accentBg: "bg-red-100 text-red-600",
    description:
      "Present original, practical solutions to real-world problems using tech, AI, or robotics with a working prototype.",
    highlights: [
      "4 Min Presentation + 3 Min Q&A",
      "Working Prototype Compulsory",
      "2-Round Evaluation Process",
    ],
  },
  {
    id: "aiquiz",
    title: "AI Quiz",
    category: "Open Category",
    classes: "Classes 6–12",
    teamSize: "2 Members",
    icon: "🧠",
    // image: aiquizImg,
    btnBg: "bg-purple-600 hover:bg-purple-700",
    accentBg: "bg-purple-100 text-purple-600",
    description:
      "Test your knowledge across Artificial Intelligence fundamentals, Machine Learning, Computer Vision, and modern tech trends.",
    highlights: [
      "Machine Learning & AI Concepts",
      "Speed & Accuracy Assessment",
      "Scenario-based Questions",
    ],
  },
];

export const innovationThemes = [
  {
    title: "AI & Digital Innovation",
    icon: "🌐",
    points: [
      "Smart Cities & Infrastructure",
      "Responsible AI for real-world issues",
      "Community Problem Solving",
    ],
  },
  {
    title: "Environmental Sustainability",
    icon: "🌱",
    points: [
      "Waste reduction & Water conservation",
      "Local environmental protection",
      "Data-driven green solutions",
    ],
  },
  {
    title: "Healthcare & Healthtech",
    icon: "🩺",
    points: [
      "Early disease detection & monitoring",
      "Rehabilitation & Recovery tech",
      "Accessible healthcare for everyone",
    ],
  },
  {
    title: "Agriculture & Agritech",
    icon: "🌾",
    points: [
      "Smart farming with robotics",
      "Sustainable resource management",
      "AI for crop yield enhancement",
    ],
  },
];

export const selectedProjectsList = [
  {
    id: 1,
    schoolName: "Satya Bharti Adarsh Sen. Sec. School, Rauni",
    teamName: "Innovate X",
    teamCode: "SBX-9981",
    mentorName: "Chandan Prajapati",
    projectName: "Smart EV",
    description:
      "An automated dual-battery power management and KERS system designed to extend EV operational range by alternating battery packs and harvesting wheel motion energy.",
    pptFileName: "EV_Battery.pptx",
  },
];
