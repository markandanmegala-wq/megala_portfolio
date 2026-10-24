/**
 * Centralized Certificate Data for MEGALA M
 * Real certificates provided and verified in accordance with strict authenticity guidelines.
 */

export type VerificationStatus = 'Verified' | 'Certificate Uploaded' | 'Verification Available' | 'Unverified';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  recipient: string;
  issueDate: string;
  credentialId?: string;
  file: string;
  fileType: 'image' | 'pdf';
  category: 'Core Certifications' | 'Internship Certificates' | 'Competitions & Workshops';
  description: string;
  verificationStatus: VerificationStatus;
  verificationUrl?: string;
  verificationNote?: string;
}

export const certificates: Certificate[] = [
  {
    id: 'lnt-python-challenge',
    title: 'Python Challenge Series — Solve Real-World Problems',
    issuer: 'L&T EduTech (LearnKonnect)',
    recipient: 'MEGALA M',
    issueDate: 'October 2025',
    credentialId: 'CID: LTE/EI/1000',
    file: '/assets/certificates/cert-lnt-python-challenge.jpg',
    fileType: 'image',
    category: 'Core Certifications',
    description:
      'Completed the comprehensive Course Pathway titled "Python Challenge Series: Solve Real-World Problems" covering 6 specialized courses and 28 hours of rigorous hands-on learning.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: 'Official Certificate of Course Pathway Completion issued by L&T EduTech.',
  },
  {
    id: 'capabl-ai-agents-n8n',
    title: 'Building AI Agents using n8n',
    issuer: 'Capabl. (Agentic AI Saksham)',
    recipient: 'Megala.M',
    issueDate: '04-03-2026',
    file: '/assets/certificates/cert-capabl-ai-agents-n8n.jpg',
    fileType: 'image',
    category: 'Core Certifications',
    description:
      'Actively participated in the specialized workshop on Building AI Agents using n8n workflow automation, tool orchestration, and LLM agentic pipelines.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: 'Accredited by MSME, #startupindia, ISO 9001:2015, incubated by KPMG in India & nasscom.',
  },
  {
    id: 'hackerrank-python-basic',
    title: 'Python (Basic) — HackerRank Skill Certification',
    issuer: 'HackerRank',
    recipient: 'Megala M',
    issueDate: '28 Jul, 2026',
    credentialId: 'ID: 7D56DFC4654E',
    file: '/assets/certificates/cert-hackerrank-python-basic.jpg',
    fileType: 'image',
    category: 'Core Certifications',
    description:
      'The bearer of this certificate has successfully passed the HackerRank skill certification test validating foundational Python syntax, algorithmic data structures, and problem-solving.',
    verificationStatus: 'Verified',
    verificationUrl: 'https://www.hackerrank.com/certificates/7d56dfc4654e',
    verificationNote: 'Official HackerRank credential ID: 7D56DFC4654E with online verification available.',
  },
  {
    id: 'imagecon-python-fundamentals',
    title: 'Introduction to IT — Fundamentals of Python',
    issuer: 'Imagecon Academy (nasscom Certified Member)',
    recipient: 'MEGALA. M',
    issueDate: '11-06-2024',
    credentialId: 'IMAFC24050485',
    file: '/assets/certificates/cert-imagecon-python-fundamentals.jpg',
    fileType: 'image',
    category: 'Core Certifications',
    description:
      'Successfully completed the Introduction to Information Technology -(Fundamental of Python) Course covering key IT principles, computing logic, and Python fundamentals.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: 'Issued by Imagecon Academy (nasscom Certified Member). Certificate ID: IMAFC24050485.',
  },
  {
    id: 'tcs-ion-yuva-ai',
    title: 'YUVA AI For All — TCS iON',
    issuer: 'TCS iON offered by IndiaAI',
    recipient: 'Megala M',
    issueDate: '24 Jan 2026',
    file: '/assets/certificates/cert-tcs-ion-yuva-ai.jpg',
    fileType: 'image',
    category: 'Core Certifications',
    description:
      'Successfully completed the national course on YUVA AI For All through TCS iON, covering essential principles of artificial intelligence, ethical AI, and foundational machine learning.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: 'Official Certificate of Completion issued by Tata Consultancy Services (TCS iON) & IndiaAI with verification QR code.',
  },
  {
    id: 'qmos-embedded-systems',
    title: 'Technical Internship — AI-Driven Embedded Systems',
    issuer: 'QMOS Technologies (Vadapalani, Chennai)',
    recipient: 'Megala M',
    issueDate: '31 DEC 2025 (17 DEC 2025 to 31 DEC 2025)',
    credentialId: 'QMTIN251230',
    file: '/assets/certificates/cert-qmos-embedded-systems.jpg',
    fileType: 'image',
    category: 'Internship Certificates',
    description:
      'Completed 15-day technical internship on AI-driven Embedded Systems under guidance in the Software Development & Research department. Qualified with Grade A+ on learning perspectives and recognized with the Best Award. Gained hands-on experience with Arduino, NodeMCU, IoT sensors, ThingSpeak IoT platform, and Power BI data visualizations.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: 'Official Certificate of Appreciation from Qmos Technologies with Best Award medal and Grade A+ notation.',
  },
  {
    id: 'techforge-fullstack-internship',
    title: 'Internship in Full Stack Development',
    issuer: 'Techforge (with Mozilla & MSME)',
    recipient: 'M. MEGALA',
    issueDate: '07-07-2025 (23.06.2025 to 07-07-2025)',
    file: '/assets/certificates/cert-techforge-fullstack-internship.jpg',
    fileType: 'image',
    category: 'Internship Certificates',
    description:
      'Completed a practical internship in Full Stack Development from 23.06.2025 to 07.07.2025 organized by Techforge in partnership with Mozilla community and MSME.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: 'Official Certificate of Completion issued by Techforge with Mozilla and MSME community partner endorsement.',
  },
  {
    id: 'agentic-ai-saksham-excel',
    title: 'Agentic AI Saksham Program (2-Day Intensive)',
    issuer: 'Excel Engineering College (Autonomous) & Capabl.',
    recipient: 'Megala.M',
    issueDate: '18-4-2026 (17th to 18th April 2026)',
    credentialId: 'CPBLIT26ai2482',
    file: '/assets/certificates/cert-agentic-ai-saksham.jpg',
    fileType: 'image',
    category: 'Competitions & Workshops',
    description:
      'Participated and completed the 2-day Agentic AI Saksham Program held at Excel Engineering College, focusing on autonomous AI agents, tool calling, and prompt workflows.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: 'Official Certificate of Participation with Certificate No: CPBLIT26ai2482.',
  },
  {
    id: 'excel-expo-ai-hazard',
    title: 'Excel Ex-Po 2026 — Project Presentation',
    issuer: "Institution's Innovation Council (IIC), Excel Engineering College",
    recipient: 'MEGALA .M',
    issueDate: '11th August 2026',
    file: '/assets/certificates/cert-excel-expo-ai-hazard.jpg',
    fileType: 'image',
    category: 'Competitions & Workshops',
    description:
      'Presented the project titled "AI-POWERED MULTI HAZARD CHAIN PREDICTION & PERSONALIZED EMERGENCY RESPONSE SYSTEM" at EXCEL EX-PO 2026 organized by the Institution\'s Innovation Council.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: "Official Certificate of Appreciation from Institution's Innovation Council (Ministry of Education Initiative).",
  },
  {
    id: 'iste-ramanujan-level3',
    title: 'Srinivasa Ramanujan Mathematical Competitions — Level 3 (National Level)',
    issuer: 'Indian Society for Technical Education (ISTE) Tamilnadu Section',
    recipient: 'MEGALA M (III Year IT, Excel Engineering College)',
    issueDate: '21st & 22nd February 2026',
    file: '/assets/certificates/cert-iste-ramanujan-level3.jpg',
    fileType: 'image',
    category: 'Competitions & Workshops',
    description:
      'Participated in the prestigious National Level Srinivasa Ramanujan Mathematical Competitions Level 3 (National Level) for Engineering College Students across India.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: 'Official Certificate of Participation issued by ISTE Tamilnadu Section.',
  },
  {
    id: 'iste-ramanujan-level2',
    title: 'Srinivasa Ramanujan Mathematical Competitions — Level 2 (State Level)',
    issuer: 'Indian Society for Technical Education (ISTE) Tamilnadu Section',
    recipient: 'MEGALA M (III Year IT, Excel Engineering College)',
    issueDate: '14th & 15th February 2026',
    file: '/assets/certificates/cert-iste-ramanujan-level2.jpg',
    fileType: 'image',
    category: 'Competitions & Workshops',
    description:
      'Participated and qualified in the National Level Srinivasa Ramanujan Mathematical Competitions Level 2 (State Level) conducted by ISTE Tamilnadu Section.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: 'Official Certificate of Participation issued by ISTE Tamilnadu Section.',
  },
  {
    id: 'imagecon-engineers-day',
    title: 'Engineers Day Contest 2025',
    issuer: 'Imagecon Academy (Member of nasscom)',
    recipient: 'M.MEGALA',
    issueDate: '15.09.2025',
    file: '/assets/certificates/cert-imagecon-engineers-day.jpg',
    fileType: 'image',
    category: 'Competitions & Workshops',
    description:
      'Successfully participated in the Engineers Day Contest 2025 among 10,000 engineering student participants demonstrating technical problem-solving and engineering excellence.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: 'Official Certificate of Participation from Imagecon Academy.',
  },
  {
    id: 'karpagam-data-analytics',
    title: "Varnam '26 — Data Analytics Workshop",
    issuer: 'Karpagam Institute of Technology',
    recipient: 'MEGALA.M',
    issueDate: '03rd - 07th February 2026',
    file: '/assets/certificates/cert-karpagam-data-analytics.jpg',
    fileType: 'image',
    category: 'Competitions & Workshops',
    description:
      'Participated in the "Workshop on Ignite the Insight Engine: Data Analytics Fest" held during the VARNAM \'26 National Level Fest.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: 'Official Certificate of Participation issued by Karpagam Institute of Technology.',
  },
  {
    id: 'karpagam-code-twins',
    title: "Varnam '26 — Code Twins Technical Contest",
    issuer: 'Karpagam Institute of Technology',
    recipient: 'MEGALA M',
    issueDate: '03rd - 07th February 2026',
    file: '/assets/certificates/cert-karpagam-code-twins.jpg',
    fileType: 'image',
    category: 'Competitions & Workshops',
    description:
      'Participated in the "Code Twins" technical pair coding challenge during the VARNAM \'26 National Level Fest.',
    verificationStatus: 'Certificate Uploaded',
    verificationNote: 'Official Certificate of Participation issued by Karpagam Institute of Technology.',
  },
];
