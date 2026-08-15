export const personal = {
  name: 'Md Faisal Alam',
  initials: 'MFA',
  role: 'Java Developer · Full Stack Engineer',
  tagline: 'SPRING BOOT · REACT · REST APIs',
  email: 'faisal032767@gmail.com',
  phone: '+91 7717766587',
  location: 'Hyderabad, India',
  availability: 'Open to Opportunities',
  resume: 'Download Resume',
  summary:
    'Motivated Java Developer with hands-on experience building scalable web applications. Passionate about clean architecture, reliable APIs, and elegant code that scales.',
}

export const experience = [
  {
    id: 1,
    role: 'Software Trainee — Java Developer',
    company: 'NGS Pvt Ltd',
    location: 'Hyderabad',
    period: 'May 2025 – Dec 2025',
    description:
      'Developed a web-based system to automate the Letter of Credit (LC) application process for banking operations. The system allowed users to submit LC requests, view application details, and track approval status — reducing manual processing and improving data accuracy.',
    responsibilities: [
      'Assisted in developing backend modules using Java and Spring Boot.',
      'Created and tested REST APIs for creating and retrieving LC applications.',
      'Implemented database integration using Hibernate with MySQL.',
      'Participated in API testing, bug fixing, and issue resolution.',
    ],
    tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'REST API'],
  },
]

export const projects = [
  {
    id: '01',

  title: 'NEXORA',
  subtitle: 'Secure Digital Platform',
  description:
    'A modern full-stack web application with responsive React interfaces, Spring Security with JWT-based authentication, role-based access control, protected user and admin routes, user CRUD management, profile management, and an interactive admin dashboard.',
  tags: ['React', 'JavaScript', 'Spring Boot', 'Spring Security', 'JWT', 'Supabase'],
},
  {
    id: '02',
    title: 'BOOTCAMP',
    subtitle: 'Learning Platform',
    description:
      'A full-featured web-based learning platform built with Spring Boot and Java. Features a dynamic course catalog, role-based access control differentiating Students from Admins, and secure course material access post-purchase. Backed by Hibernate/JPA and MySQL.',
    tags: ['Spring Boot', 'Java', 'Hibernate', 'MySQL', 'RBAC'],
  },

  
  {
    id: '03',
    title: 'LC AUTOMATION',
    subtitle: 'Banking Operations System',
    description:
      'Enterprise-grade web system automating the Letter of Credit application process for banking. Enabled users to submit LC requests, track approvals, and reduced manual processing overhead with REST API-driven integration.',
    tags: ['Spring Boot', 'REST API', 'Hibernate', 'Banking', 'NGS Pvt Ltd'],
  },
]

export const skills = [
  {
    category: 'Backend',
    items: [
      { name: 'Java', level: 90 },
      { name: 'Spring Core / MVC', level: 78 },
      { name: 'Spring Boot', level: 82 },
      { name: 'Spring Security With JWT', level: 73 },
      { name: 'Hibernate / JPA', level: 80 },
      { name: 'REST API Development', level: 83 },
      
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5 / CSS3', level: 85 },
      { name: 'JavaScript', level: 72 },
      { name: 'React.js', level: 68 },
      { name: 'Tailwind CSS', level: 70 },
      { name: 'GSAP', level: 67 },
    ],
  },
  {
    category: 'Database & Tools',
    items: [
      { name: 'MySQL', level: 80 },
      { name: 'Maven', level: 75 },
      { name: 'Postman', level: 78 },
      { name: 'IntelliJ / VS Code', level: 82 },
      { name: 'Microservices (Basics)', level: 50 },
    ],
  },
]

export const education = [
  { degree: 'MCA', institution: 'Magadh University', year: '2021', score: '73%', icon: '🎓' },
  { degree: 'BCA', institution: 'Magadh University', year: '2015', score: '65%', icon: '📘' },
]

export const certifications = [
  { title: 'PG-DAC', institute: 'SM VITA, Mumbai', year: '2022', color: 'var(--cyan)' },
  { title: 'Full Stack Java Development', institute: 'Ducat, Delhi', year: '2023', color: 'var(--amber)' },
  { title: 'Full Stack Java Development', institute: 'JSpiders, Hyderabad', year: '2024', color: 'var(--magenta)' },
]

export const languages = [
  { name: 'Hindi', level: 'Native', variant: 'primary' },
  { name: 'English', level: 'Professional', variant: 'primary' },
  { name: 'Urdu', level: 'Conversational', variant: 'secondary' },
]

export const marqueeItems = [
  'NGS PVT LTD', 'SPRING BOOT', 'MAGADH UNIVERSITY',
  'SM VITA MUMBAI', 'DUCAT DELHI', 'JSPIDERS HYDERABAD',
  'REST API DEVELOPMENT', 'HIBERNATE / JPA', 'REACT.JS', 'MYSQL',
]
