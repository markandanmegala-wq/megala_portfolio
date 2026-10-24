/**
 * Centralized Contact Configuration for MEGALA M
 * Single source of truth for all contact links, icons, and buttons.
 */

export const contactConfig = {
  name: 'MEGALA M',
  brandName: 'MEGALA',
  phone: '+919344319884',
  phoneDisplay: '+91 9344319884',
  email: 'markandanmegala@gmail.com',
  github: 'https://github.com/markandanmegala-wq',
  linkedin: 'https://www.linkedin.com/in/megala-megu-73a7742b8/',
  location: 'Erode, Tamil Nadu, India',
  college: 'Excel Engineering College, Komarapalayam',
  degree: 'B.Tech Information Technology',
  graduationYear: '2023–2027',
  cgpa: '8.2',
  title: 'Aspiring Software Developer',
  headline: 'Building meaningful digital solutions through continuous learning, problem-solving, and software development.',
  summary:
    'Aspiring Software Developer and IT student with practical exposure to Python, Flutter, Firebase, SQL, Power BI, and GitHub. Quick learner with strong problem-solving, adaptability, teamwork, and communication skills, eager to contribute to real-world software projects.',
} as const;

export function getMailtoUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const q = params.toString();
  return `mailto:${contactConfig.email}${q ? `?${q}` : ''}`;
}

export function getTelUrl(): string {
  return `tel:${contactConfig.phone}`;
}
