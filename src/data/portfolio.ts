/**
 * Central portfolio data for MEGALA M
 * MEGALA — CINEMATIC DEVELOPER PORTFOLIO
 * Sourced directly from Megala M's official resume and verified project repositories.
 */
import { contactConfig } from './contact';

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'MEGALA M',
  displayName: 'MEGALA M',
  firstName: 'MEGALA',
  originalLabel: 'MEGALA M',
  role: 'Aspiring Software Developer',
  title: 'Aspiring Software Developer',
  tagline: ['Aspiring Software Developer', 'B.Tech Information Technology', 'Continuous Problem Solver'],
  intro:
    'Building meaningful digital solutions through continuous learning, problem-solving, and software development.',
  objective:
    'Aspiring Software Developer and IT student with practical exposure to Python, Flutter, Firebase, SQL, Power BI, and GitHub. Quick learner with strong problem-solving, adaptability, teamwork, and communication skills, eager to contribute to real-world software projects.',
  aboutText: [
    "Hello, I'm Megala M, an aspiring software developer pursuing B.Tech Information Technology at Excel Engineering College (Autonomous), Komarapalayam.",
    'I enjoy learning new technologies, solving problems, collaborating with others, and building meaningful digital solutions.',
    'Through academic projects and practical learning experiences, I continue to develop my technical skills and explore different areas of software development.',
    'My foundational toolset spans Python programming, SQL databases, Flutter mobile development, Firebase cloud backends, Linux basics, Docker basics, and Power BI visual analytics.',
  ],
  degree: contactConfig.degree,
  college: contactConfig.college,
  graduationYear: contactConfig.graduationYear,
  cgpa: contactConfig.cgpa,
  phone: contactConfig.phone,
  phoneDisplay: contactConfig.phoneDisplay,
  location: contactConfig.location,
  email: contactConfig.email,
  links: {
    linkedin: contactConfig.linkedin,
    github: contactConfig.github,
  },
  resumePdf: '/assets/Megala_M_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Megala M — Aspiring Software Developer',
  },
};

export const education = [
  {
    school: 'Excel Engineering College, Komarapalayam',
    place: 'Namakkal District, Tamil Nadu, India',
    degree: 'B.Tech — Information Technology',
    period: '2023 – 2027',
    score: 'CGPA: 8.2 / 10',
    detail: 'Focusing on core software development, database design, mobile engineering, and emerging AI technologies.',
  },
  {
    school: 'Government Girls Higher Secondary School',
    place: 'Krishnagiri, Tamil Nadu, India',
    degree: 'Higher Secondary Certificate (HSC)',
    period: 'Completed 2023',
    score: 'Percentage: 71%',
    detail: 'Higher secondary education with strong fundamentals in mathematics and science.',
  },
];

export const internships = [
  {
    company: 'QMOS Technology',
    role: 'Technical Intern — AI-Driven Embedded Systems',
    place: 'Vadapalani, Chennai',
    period: '17 Dec 2025 – 31 Dec 2025 (15 Days)',
    award: 'Awarded Grade A+ & Best Award (Cert ID: QMTIN251230)',
    points: [
      'Gained hands-on experience working with Arduino, NodeMCU, and various IoT sensors in the Software Development & Research department.',
      'Developed basic IoT applications and sensor data communication pipelines using the ThingSpeak cloud platform.',
      'Created data visualizations using Power BI and collaborated closely on embedded system project integrations.',
    ],
  },
  {
    company: 'Techforge (with Mozilla & MSME)',
    role: 'Intern in Full Stack Development',
    place: 'Virtual / Industrial Training',
    period: '23 June 2025 – 07 July 2025 (15 Days)',
    award: 'Certificate of Completion (Moz://a Community Partner)',
    points: [
      'Hands-on exposure to modern full-stack web concepts and client-server workflows.',
      'Practical development exercises covering responsive web interfaces and database connectivity.',
      'Collaborative team development practices and modern version control.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  route: string;
  year: string;
  genre: string;
  category: string;
  logline: string;
  problemStatement: string;
  solution: string;
  features: string[];
  workflow: string[];
  stack: string[];
  build: string[];
  metrics: Metric[];
  testingStatus?: string;
  deploymentStatus?: string;
  github?: string;
  palette: Palette;
  motif: 'campus' | 'compass' | 'shield' | 'analytics';
};

const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#e50914' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };

export const projects: Project[] = [
  {
    id: 'campuslink',
    title: 'CampusLink — Next-Gen Campus Event Platform',
    shortTitle: 'CampusLink',
    route: '/projects/campuslink',
    year: '2025',
    category: 'Mobile Application Development',
    genre: 'Mobile Application • Campus Management',
    logline:
      'A mobile application designed to help students discover and manage campus events, register for activities, and check in using QR codes.',
    problemStatement:
      'College campus events and technical symposiums frequently face scattered announcements, paper-based registration queues, and slow manual attendance check-ins that lead to entrance congestion and fragmented participation records.',
    solution:
      'CampusLink consolidates campus event discovery, authenticated student registration, and instant QR-code entry verification into a sleek, cross-platform mobile application powered by Flutter and Firebase real-time data sync.',
    features: [
      'User Authentication & Student Login',
      'Campus Event Discovery & Departmental Categorization',
      'One-Tap Event Registration & Seat Reservation',
      'QR-Code-Based Rapid Entrance Check-In',
      'Cloud Firestore Real-Time Attendance Synchronization',
    ],
    workflow: [
      'Student signs in with college credentials through Firebase Authentication.',
      'Browses active academic symposiums, technical contests, and cultural workshops.',
      'Registers for chosen events; a unique digital pass with QR code is generated.',
      'Event coordinators scan the student QR ticket at the door for instantaneous verification.',
      'Attendance records sync live to Cloud Firestore for organizers.',
    ],
    stack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'QR Integration'],
    build: [
      'Engineered cross-platform mobile UI in Flutter & Dart supporting smooth 60fps interaction on iOS and Android.',
      'Structured Cloud Firestore NoSQL schema to store event metadata, timestamps, and attendee lists with sub-second synchronization.',
      'Implemented QR-code encoding for verified digital passes and integrated camera scanner modules for rapid physical entry.',
    ],
    metrics: [
      { value: 'Flutter', label: 'Cross-Platform' },
      { value: 'QR Code', label: 'Instant Check-In' },
      { value: 'Cloud Firestore', label: 'Real-Time Sync' },
      { value: 'Mobile', label: 'iOS & Android' },
    ],
    testingStatus: 'Tested on physical Android devices and simulators for registration and QR scanning workflows.',
    deploymentStatus: 'Academic Mobile Project (Flutter / Firebase).',
    // Per instructions: no public repo URL fabricated
    palette: ocean,
    motif: 'campus',
  },
  {
    id: 'kumari360',
    title: 'Kumari360 — Tourism Application',
    shortTitle: 'Kumari360',
    route: '/projects/kumari360',
    year: '2025',
    category: 'Tourism and Mobile Application Development',
    genre: 'Tourism & Mobile Application Development',
    logline:
      'A tourism application that helps users explore tourist destinations in Kanyakumari, discover tourist information, find hotels and restaurants, and navigate using Google Maps.',
    problemStatement:
      'Tourists visiting Kanyakumari often struggle to find consolidated information regarding historic monuments, scenic coastal points, verified local accommodations, and reliable regional dining without jumping across fragmented search results.',
    solution:
      'Kumari360 delivers an all-in-one regional mobile travel companion built with Flutter, pairing rich landmark guides and hospitality discovery with direct Google Maps route navigation.',
    features: [
      'Curated Kanyakumari Tourist Destinations & Historical Highlights',
      'Comprehensive Landmark Timings, Visitor Info & Coastal Points',
      'Hotel & Accommodation Discovery with Distance Estimates',
      'Local Restaurant & Traditional Coastal Cuisine Directory',
      'Interactive Google Maps Navigation with Turn-by-Turn Directions',
    ],
    workflow: [
      'User opens the mobile app and selects destination categories (Memorials, Sunsets, Heritage Sites).',
      'Views rich overview, operating hours, ticket info, and photos of key spots like Vivekananda Rock Memorial.',
      'Explores nearby recommended hotels and restaurants tailored to tourist preferences.',
      'Taps the navigation trigger to launch direct turn-by-turn routing via Google Maps API.',
    ],
    stack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Location Services'],
    build: [
      'Constructed modular Flutter widgets providing an elegant editorial browsing experience across travel spots.',
      'Integrated Google Maps SDK with location services to calculate distances and plot directional markers.',
      'Configured Firebase backend to deliver organized destination records, photos, and verified local recommendations.',
    ],
    metrics: [
      { value: '360°', label: 'Regional Tourism' },
      { value: 'Google Maps', label: 'Turn-by-Turn Navigation' },
      { value: 'Flutter', label: 'Responsive Mobile UI' },
      { value: 'Firebase', label: 'Central Data Store' },
    ],
    testingStatus: 'Tested on mobile devices verifying Google Maps location routing and tourist card renders.',
    deploymentStatus: 'Academic Tourism Application (Flutter / Firebase).',
    // Per instructions: no public repo URL fabricated
    palette: jade,
    motif: 'compass',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI — AI Recruiter Agent',
    shortTitle: 'Agentic AI',
    route: '/projects/agentic-ai',
    year: '2026',
    category: 'Artificial Intelligence / Agentic Systems',
    genre: 'Artificial Intelligence • Agentic Systems',
    logline:
      'An AI-powered recruitment assistant built using Streamlit, LangChain, and Google Gemini API to parse resumes, rank candidates via semantic vector search, and generate tailored interview questions.',
    problemStatement:
      'Recruitment teams handle hundreds of candidate resumes across varied file formats. Manually reading each resume, extracting skills, matching against complex job requirements, and formulating relevant interview questions is time-consuming and subjective.',
    solution:
      'An end-to-end agentic recruitment assistant that automates resume ingestion (PDF/DOCX), structures candidate data in SQLite, computes semantic similarity using Sentence Transformers and FAISS, and uses Google Gemini via LangChain to generate candidate evaluations and customized interview questionnaires.',
    features: [
      'Automated Resume Parsing: Extracts contact, skills, and experience from PDF/DOCX using PyMuPDF & spaCy',
      'Local Database Persistence: Manages candidate profiles, job descriptions, and matches via SQLite',
      'Semantic Vector Search: Employs Sentence Transformers & FAISS index for high-precision candidate-to-job matching',
      'Gemini AI Candidate Assessment: Analyzes candidate suitability and synthesizes targeted interview questions',
      'Interactive Streamlit Recruiter Cockpit: Full-featured multi-page dashboard for job creation and candidate evaluation',
    ],
    workflow: [
      'Recruiter inputs job description or creates a role profile within the Streamlit dashboard.',
      'Recruiter uploads candidate resumes in PDF or Word formats.',
      'Document parsing pipeline extracts text via PyMuPDF/pdfplumber and detects entities via spaCy.',
      'Embeddings are computed using Sentence Transformers and matched against job criteria using FAISS vector search.',
      'LangChain coordinates with Google Gemini to assess fit, identify skill gaps, and generate customized interview questions.',
      'Results and ranking scores are persisted to SQLite and presented in the recruiter cockpit.',
    ],
    stack: [
      'Python',
      'Streamlit',
      'LangChain',
      'Google Gemini API',
      'FAISS',
      'Sentence Transformers',
      'SQLite',
      'spaCy',
      'PyMuPDF',
    ],
    build: [
      'Implemented clean modular Python architecture with agents, database managers, models, and parsers.',
      'Built multi-page Streamlit recruiter dashboard for candidate ingestion, profile viewing, and job matching.',
      'Integrated langchain-google-genai to harness Google Gemini for automated candidate fit evaluation and prompt engineering.',
      'Configured automated unittest suite to validate document parsing, phone/email extractors, and regex utilities.',
    ],
    metrics: [
      { value: 'Gemini', label: 'Google AI LLM' },
      { value: 'FAISS', label: 'Vector Similarity' },
      { value: 'LangChain', label: 'Agent Orchestration' },
      { value: 'Streamlit', label: 'Recruiter UI' },
    ],
    testingStatus: 'Automated test suite implemented using Python unittest (testing text parsing, regex engines, and validators).',
    deploymentStatus: 'Public open-source repository on GitHub (Local Streamlit Cockpit).',
    github: 'https://github.com/markandanmegala-wq/agentic',
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'researchx-ai',
    title: 'ResearchX AI — Multi-Agent Research System',
    shortTitle: 'ResearchX AI',
    route: '/projects/researchx-ai',
    year: '2026',
    category: 'Artificial Intelligence / Research Technology',
    genre: 'Artificial Intelligence • Research Technology',
    logline:
      'An architectural multi-agent system designed for automated research synthesis, deep document analysis, RAG pipelines, and multi-faceted intelligence gathering.',
    problemStatement:
      'Conducting comprehensive academic or technical research requires synthesizing dozens of scientific papers, cross-referencing citations, identifying research gaps, and performing SWOT/trend analysis across dispersed datasets—a tedious manual process prone to information silos.',
    solution:
      'An ambitious multi-agent architecture incorporating specialized autonomous agents (Manager, Paper, PDF, Citation, Fact-Check, Gap, Trend, Summary) orchestrated around a modular Retrieval-Augmented Generation (RAG) pipeline and FastAPI microservices backend.',
    features: [
      'Specialized Multi-Agent Roles: Dedicated agents for PDF parsing, citation validation, fact checking, and trend analysis',
      'Manager Agent Orchestrator: Central coordinator handling task decomposition, agent delegation, and synthesis',
      'Modular RAG Pipeline: Planned architecture with document chunking, dense vector embeddings, and reranker',
      'FastAPI & SQLite Core: Asynchronous REST services backed by research.db and researchx.db storage',
      'Docker Containerization: Container orchestration defined with docker-compose for modular deployment',
    ],
    workflow: [
      'Manager Agent receives research query or target academic paper repository.',
      'PDF & Web Search Agents ingest source documents, extract text, and index content into RAG vector store.',
      'Fact-Check and Citation Agents verify claims against referenced literature.',
      'Research Gap & Trend Agents highlight unexplored questions and domain patterns.',
      'Summary & Report Agents synthesize a unified structured research briefing.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'Multi-Agent Architecture',
      'RAG Pipeline',
      'Vector Embeddings',
      'Docker',
      'SQLite',
    ],
    build: [
      'Architected microservices repository layout separating ai_agents, backend services, rag pipelines, and configs.',
      'Defined modular agent interfaces across 20+ specialized analytical domains (analytics, citation, competitor, reasoning, etc.).',
      'Configured Docker and docker-compose definitions for containerized scalability and reproducible developer environments.',
    ],
    metrics: [
      { value: 'Multi-Agent', label: 'Collaborative Architecture' },
      { value: 'RAG', label: 'Retrieval Pipeline' },
      { value: 'FastAPI', label: 'Async Services' },
      { value: 'Docker', label: 'Containerized' },
    ],
    testingStatus: 'Architectural design, interface specification, and repository scaffolding completed.',
    deploymentStatus: 'In Active Architectural Development on GitHub.',
    github: 'https://github.com/markandanmegala-wq/ResearchX_AI',
    palette: violet,
    motif: 'analytics',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'qmos-best-award',
    title: 'Grade A+ & Best Award — QMOS Technologies',
    org: 'QMOS Technologies (Vadapalani, Chennai)',
    detail: 'Recognized with Grade A+ and Best Award for technical internship on AI-driven Embedded Systems and IoT.',
    laurel: 'Internship Honor',
  },
  {
    id: 'academic-cgpa',
    title: '8.2 CGPA Academic Standing',
    org: 'Excel Engineering College, Komarapalayam',
    detail: 'Consistently strong academic performance in B.Tech Information Technology across core computer science curricula.',
    laurel: 'Academic Excellence',
  },
  {
    id: 'excel-expo-presentation',
    title: 'Project Presentation — Excel Ex-Po 2026',
    org: "Institution's Innovation Council (IIC)",
    detail: 'Presented "AI-Powered Multi Hazard Chain Prediction & Personalized Emergency Response System" at college technical expo.',
    laurel: 'Innovation Recognition',
  },
  {
    id: 'iste-ramanujan-national',
    title: 'National Level Ramanujan Math Competitions',
    org: 'ISTE Tamilnadu Section',
    detail: 'Participated in both Level 2 (State Level) and Level 3 (National Level) of Srinivasa Ramanujan Mathematical Competitions.',
    laurel: 'National Contest',
  },
  {
    id: 'hackerrank-python-cert',
    title: 'HackerRank Python (Basic) Skill Certified',
    org: 'HackerRank (Credential 7D56DFC4654E)',
    detail: 'Officially validated foundational Python syntax, control structures, and computational problem-solving.',
    laurel: 'Verified Skill',
  },
  {
    id: 'agentic-ai-saksham',
    title: 'Agentic AI Saksham Certification',
    org: 'Capabl. & Excel Engineering College',
    detail: 'Completed intensive 2-day hands-on workshop on Building AI Agents using n8n and autonomous agent pipelines.',
    laurel: 'AI Workshop',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming-development',
    title: 'Programming & Development',
    subtitle: 'Core programming languages & development foundations from resume',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary Language' },
      { name: 'SQL Basics', mono: 'Sql', note: 'Relational Queries' },
      { name: 'Flutter', mono: 'Fl', note: 'Mobile Development' },
      { name: 'Firebase', mono: 'Fb', note: 'Auth & Firestore' },
    ],
  },
  {
    id: 'tools-platforms',
    title: 'Tools & Platforms',
    subtitle: 'Developer workflow, containerization & operating systems',
    skills: [
      { name: 'GitHub', mono: 'Gh', note: 'Version Control' },
      { name: 'Docker Basics', mono: 'Dk', note: 'Containerization' },
      { name: 'Linux Basics', mono: 'Lx', note: 'CLI & Environment' },
    ],
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization & Analytics',
    subtitle: 'Business intelligence & data storytelling',
    skills: [
      { name: 'Power BI', mono: 'Bi', note: 'Dashboards & Reports' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Professional Strengths',
    subtitle: 'Workplace collaboration & personal effectiveness',
    skills: [
      { name: 'Self-Motivation', mono: 'Sm', note: 'Independent Drive' },
      { name: 'Adaptability', mono: 'Ad', note: 'Fast Learner' },
      { name: 'Time Management', mono: 'Tm', note: 'Goal-Oriented' },
      { name: 'Collaborative Mindset', mono: 'Cm', note: 'Team Synergy' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Agentic AI (AI Recruiter Agent)', 'L&T EduTech Python Challenge Series', 'HackerRank Python Certification', 'Imagecon Python Fundamentals'],
  'SQL Basics': ['Agentic AI (SQLite Persistence)', 'Academic Database Systems Curriculum'],
  Flutter: ['CampusLink Event Platform', 'Kumari360 Tourism App'],
  Firebase: ['CampusLink (Auth & Cloud Firestore)', 'Kumari360 (Cloud Data Layer)'],
  GitHub: ['github.com/markandanmegala-wq', 'Open-Source AI Recruiter Agent & ResearchX AI'],
  'Docker Basics': ['ResearchX AI Container Architecture', 'Developer Workflow Setup'],
  'Linux Basics': ['Linux Shell Navigation', 'Environment Configuration'],
  'Power BI': ['QMOS Technology Internship Dashboards', 'Karpagam IT Data Analytics Workshop'],
  'Self-Motivation': ['Continuous Self-Directed Learning & Course Pathways'],
  Adaptability: ['Transitioning across Mobile, Data Analytics & AI Domains'],
  'Time Management': ['Balancing Academic Degree (8.2 CGPA) with Technical Projects'],
  'Collaborative Mindset': ['Embedded System Teamwork at QMOS & Technical Symposia'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Academic Foundations',
    period: 'Season 01 · 2023–2024',
    synopsis: 'Building deep foundations in programming, problem-solving, and information technology at Excel Engineering College.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Higher Secondary & IT Commencement',
        description: 'Completed higher secondary education at Government Girls HSS Krishnagiri with 71%, beginning B.Tech Information Technology at Excel Engineering College.',
        tags: ['HSC 71%', 'Excel Engineering College', 'B.Tech IT'],
        runtime: 'Episode 1',
        palette: ocean,
      },
      {
        code: 'S01 E02',
        title: 'Introduction to IT & Python Fundamentals',
        description: 'Mastering core computer principles, algorithmic problem-solving, and Python programming syntax certified by Imagecon Academy.',
        tags: ['Python', 'IT Fundamentals', 'Imagecon Academy'],
        runtime: 'Episode 2',
        palette: crimson,
      },
      {
        code: 'S01 E03',
        title: 'Relational Databases & SQL Basics',
        description: 'Understanding relational schema concepts, structured query language, database normalization, and data persistence.',
        tags: ['SQL Basics', 'Data Modeling', 'Queries'],
        runtime: 'Episode 3',
        palette: jade,
      },
      {
        code: 'S01 E04',
        title: 'Mathematical Reasoning & Srinivasa Ramanujan Contests',
        description: 'Participating in the prestigious National Level Srinivasa Ramanujan Mathematical Competitions across state and national stages.',
        tags: ['ISTE', 'Mathematics', 'Problem Solving'],
        runtime: 'Episode 4',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Development & Applied Skills',
    period: 'Season 02 · 2024–2025',
    synopsis: 'Expanding from language syntax to cross-platform mobile app development, cloud backends, and full-stack workflows.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Cross-Platform Mobile with Flutter',
        description: 'Engineering responsive mobile experiences for Android and iOS using Flutter framework and Dart language.',
        tags: ['Flutter', 'Dart', 'Mobile UI'],
        runtime: 'Episode 1',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'Firebase Authentication & Firestore',
        description: 'Implementing cloud backends with Firebase Auth for user management and Cloud Firestore for sub-second database sync.',
        tags: ['Firebase', 'Auth', 'Cloud Firestore'],
        runtime: 'Episode 2',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'Full Stack Development Internship',
        description: '15-day technical internship with Techforge in partnership with Mozilla and MSME covering end-to-end full stack application flows.',
        tags: ['Techforge', 'Full Stack', 'Mozilla Partner'],
        runtime: 'Episode 3',
        palette: crimson,
      },
      {
        code: 'S02 E04',
        title: 'Python Real-World Problem Solving (L&T EduTech)',
        description: 'Completed 6 courses and 28 hours in Python Challenge Series from L&T EduTech solving complex software problems.',
        tags: ['L&T EduTech', '28 Learning Hours', 'Python'],
        runtime: 'Episode 4',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Projects',
    period: 'Season 03 · 2025–2026',
    synopsis: 'Translating technical capabilities into original project implementations addressing student life, regional tourism, and AI workflows.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'CampusLink — Campus Event Platform',
        description: 'Engineered a mobile app for discovering college events, registering for sessions, and verifying admission via QR codes.',
        tags: ['Flutter', 'Firebase', 'QR Verification'],
        runtime: 'Original',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Kumari360 — Tourism Application',
        description: 'Created a regional tourism mobile app combining destination discovery, hotel/restaurant guides, and Google Maps navigation.',
        tags: ['Flutter', 'Google Maps API', 'Tourism'],
        runtime: 'Original',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'Agentic AI — AI Recruiter Agent',
        description: 'Developed an AI-powered recruitment assistant using Streamlit, LangChain, Google Gemini API, and FAISS vector matching.',
        tags: ['LangChain', 'Gemini API', 'FAISS', 'Streamlit'],
        runtime: 'Original',
        palette: crimson,
      },
      {
        code: 'S03 E04',
        title: 'ResearchX AI — Multi-Agent Architecture',
        description: 'Architecting a collaborative multi-agent research synthesis system with RAG pipelines, FastAPI, and Docker.',
        tags: ['Multi-Agent', 'RAG Pipeline', 'FastAPI', 'Docker'],
        runtime: 'In Progress',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Industrial Exposure & Next Horizons',
    period: 'Season 04 · 2026 & Beyond',
    synopsis: 'Industrial embedded systems internship at QMOS Technology, AI agent certifications, and career preparation.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'AI-Driven Embedded Systems at QMOS',
        description: '15-day technical internship at QMOS Technology (Vadapalani, Chennai) working with Arduino, NodeMCU, IoT sensors, ThingSpeak, and Power BI. Awarded Grade A+ and Best Award.',
        tags: ['QMOS', 'IoT', 'ThingSpeak', 'Power BI', 'Best Award'],
        runtime: 'Internship Honor',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'AI Agents & TCS iON Certification',
        description: 'Completed "Building AI Agents using n8n" and "YUVA AI For All" by TCS iON / IndiaAI, expanding applied AI knowledge.',
        tags: ['Capabl.', 'n8n Agents', 'TCS iON', 'IndiaAI'],
        runtime: 'Certified',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'Excel Ex-Po Presentation',
        description: 'Presented AI-Powered Multi Hazard Chain Prediction & Emergency Response System at college innovation expo.',
        tags: ['IIC', 'Project Presentation', 'Excel Ex-Po'],
        runtime: 'Presentation',
        palette: ocean,
      },
      {
        code: 'S04 E04',
        title: 'Aspiring Software Developer Readiness',
        description: 'Continuous refinement of algorithmic problem-solving, clean code practices, and preparation for software developer internships and placement opportunities.',
        tags: ['Software Engineering', 'Class of 2027', 'Career Ready'],
        runtime: 'Vision 2027',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette; link?: string };

export const topPicks: TopPick[] = [
  { label: 'Mobile Application', title: 'CampusLink', detail: 'Next-gen campus event platform with QR check-in & Flutter', palette: ocean, link: '/projects/campuslink' },
  { label: 'Tourism Technology', title: 'Kumari360', detail: 'Destination discovery & Google Maps mobile guide for Kanyakumari', palette: jade, link: '/projects/kumari360' },
  { label: 'Agentic AI System', title: 'Agentic AI (Recruiter)', detail: 'AI recruiter agent with LangChain, Google Gemini & FAISS search', palette: crimson, link: '/projects/agentic-ai' },
  { label: 'Research Technology', title: 'ResearchX AI', detail: 'Architectural multi-agent research synthesis with RAG & FastAPI', palette: violet, link: '/projects/researchx-ai' },
  { label: 'Core Language', title: 'Python', detail: 'Primary programming language for AI agents, automation & scripts', palette: crimson, link: '/skills' },
  { label: 'Mobile Engineering', title: 'Flutter & Dart', detail: 'Cross-platform mobile UI engineering for Android & iOS', palette: jade, link: '/skills' },
  { label: 'Cloud & Database', title: 'Firebase & SQL', detail: 'Cloud Firestore real-time synchronization and structured SQL basics', palette: ocean, link: '/skills' },
  { label: 'Industrial Experience', title: 'QMOS Technology', detail: '15-day AI-driven Embedded Systems internship • Grade A+ & Best Award', palette: crimson, link: '/journey' },
  { label: 'Verified Credential', title: 'HackerRank Python', detail: 'Official HackerRank Python (Basic) skill certification (ID: 7D56DFC4654E)', palette: jade, link: '/certificates' },
  { label: 'Academic Standing', title: '8.2 CGPA · Class of 2027', detail: 'B.Tech Information Technology at Excel Engineering College', palette: violet, link: '/journey' },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'MEGALA M',
    lines: ['Aspiring Software Developer', 'Building meaningful digital solutions through continuous learning.'],
    chips: ['Aspiring Software Developer', 'B.Tech IT', 'Excel Engineering College'],
  },
  {
    kicker: 'Education',
    title: 'B.Tech · IT (2023–2027)',
    lines: ['Excel Engineering College, Komarapalayam', 'Academic CGPA: 8.2 / 10'],
    chips: ['CGPA: 8.2', 'Class of 2027', 'Information Technology'],
  },
  {
    kicker: 'Technical Toolset',
    title: 'Python · Flutter · SQL',
    lines: ['Firebase, GitHub, Docker Basics, Linux Basics', 'Power BI visualizations and analytical dashboards'],
    chips: ['Python', 'SQL Basics', 'Flutter', 'Firebase', 'GitHub', 'Power BI'],
  },
  {
    kicker: 'Featured Projects',
    title: 'Mobile & AI Systems',
    lines: [
      'CampusLink — Next-gen campus event mobile platform with QR check-in',
      'Kumari360 — Tourism mobile application with Google Maps navigation',
      'Agentic AI — AI Recruiter Agent using LangChain & Google Gemini',
      'ResearchX AI — Multi-agent research synthesis architecture',
    ],
  },
  {
    kicker: 'Industrial Experience',
    title: 'QMOS Technology Internship',
    lines: [
      'AI-Driven Embedded Systems (15 Days) in Vadapalani, Chennai',
      'Awarded Grade A+ on learning perspectives & Best Award recognition',
    ],
    chips: ['Arduino & NodeMCU', 'ThingSpeak IoT', 'Power BI', 'Best Award'],
  },
];

export type ProfileId = 'megala' | 'recruiter' | 'developer' | 'collaborator';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'megala',
    name: 'Megala',
    blurb: 'Complete cinematic portfolio overview',
    color: '#e50914',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Education, skills, projects & resume first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Technical skills, project architecture & GitHub repositories',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'collaborator',
    name: 'Collaborator',
    blurb: 'Projects, achievements & contact opportunities',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'The Developer', meta: 'About Megala • B.Tech IT & Aspirations', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • Education & Internships`, palette: ocean },
  originals: { nav: 'Projects', card: 'Featured Projects', meta: `${projects.length} Engineering Projects`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 Highlights & Milestones', palette: jade },
  skills: { nav: 'Skills', card: 'Technical Skills', meta: `${skillCategories.length} Skill Categories`, palette: ocean },
  moments: { nav: 'Achievements', card: 'Key Milestones', meta: `${achievements.length} Verified Milestones & Awards`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Official Resume • View & Download', palette: violet },
};
