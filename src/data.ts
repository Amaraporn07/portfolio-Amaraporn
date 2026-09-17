import { Project, Skill, Experience, Certificate } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'dsa-service-welfare',
    title: 'DSA Service And Welfare (ระบบจัดการงานบริการและสวัสดิการ)',
    description: 'Web Application ระบบองค์กรที่พัฒนาขึ้นเพื่อให้ กองกิจการนิสิต มหาวิทยาลัยพะเยา ใช้งานจริง',
    longDescription: 'โปรเจคซอฟต์แวร์ระดับองค์กร (Production-level) ที่ออกแบบและพัฒนาเพื่อใช้งานจริงใน "กองกิจการนิสิต มหาวิทยาลัยพะเยา" (Division of Student Affairs) ช่วยยกระดับการจัดการงานบริการและสวัสดิการให้เป็นระบบดิจิทัล รองรับการใช้งานของบุคลากรและนิสิตด้วยสถาปัตยกรรมที่ทันสมัย ปลอดภัย และผ่านกระบวนการทดสอบคุณภาพโค้ดมาตรฐานสากล',
    category: 'fullstack',
    tags: ['React 19', 'TypeScript', 'Node.js', 'Hono', 'MySQL', 'Docker', 'AWS'],
    color: 'purple',
    githubUrl: '',
    repositories: [
      { name: 'Web', url: 'https://gitlab.com/final_project.se/UP_FMS-Web.git' },
      { name: 'API', url: 'https://gitlab.com/final_project.se/UP_FMS-API.git' }
    ],
    demoUrl: 'https://dsaservicewelfare.duckdns.org/login',
    status: 'completed',
    featured: true,
    features: [
      'พัฒนาระบบเพื่อให้บริการจริง (Production) สำหรับกองกิจการนิสิต มหาวิทยาลัยพะเยา',
      'ระบบยืนยันตัวตนระดับองค์กร (SSO) ผ่าน UP Account (Microsoft Entra ID) ด้วย JWT',
      'วางระบบทดสอบอย่างครอบคลุม: API Testing (Postman) และ E2E Automation Test (Robot Framework + Selenium)',
      'ควบคุมมาตรฐานและสแกนคุณภาพโค้ดด้วย SonarCloud เพื่อความเสถียรสูงสุดของระบบ'
    ],
    architecture: [
      'Frontend: React 19, TypeScript, Vite, Tailwind CSS',
      'Backend: Node.js, Hono, MySQL',
      'Deployment: Docker บน AWS (Amazon Web Services)'
    ]
  },
  {
    id: 'fall-detection-web',
    title: 'Fall Detection Web AI',
    description: 'ระบบตรวจจับการล้มด้วย AI ผ่านกล้องเว็บแคม (Custom Trained Model)',
    longDescription: 'เว็บแอปพลิเคชันสำหรับตรวจจับและแจ้งเตือนการล้ม พัฒนาโดยการเทรนโมเดล AI ด้วยตัวเอง (Custom Trained) เพื่อวิเคราะห์ท่าทางแบบ Real-time และนำมาต่อยอดเป็นระบบช่วยเหลือผู้สูงอายุหรือผู้ป่วย',
    category: 'ai',
    tags: ['TypeScript', 'JavaScript', 'CSS', 'AI/ML', 'Model Training'],
    color: 'pink',
    githubUrl: 'https://github.com/Aman050102/fall-detection-web.git',
    demoUrl: 'https://fall-detection-web-tawny.vercel.app/',
    status: 'completed',
    features: [
      'เทรนโมเดล AI (Custom Model) ด้วยตัวเองเพื่อใช้สำหรับตรวจจับการล้มโดยเฉพาะ',
      'วิเคราะห์และตรวจจับท่าทาง (Pose Estimation) แบบ Real-time ผ่านกล้องเว็บแคม',
      'พัฒนาระบบ Web Application เพื่อให้ง่ายต่อการใช้งานและแจ้งเตือน',
      'รองรับการทำงานบนบราวเซอร์โดยไม่ต้องติดตั้งโปรแกรมเพิ่มเติม'
    ],
    architecture: [
      'AI/ML: Custom Trained Model สำหรับตรวจจับการล้ม',
      'Frontend: TypeScript, JavaScript, CSS, WebRTC (สำหรับการเข้าถึงกล้อง)',
      'Deployment: Vercel'
    ]
  },
  {
    id: 'floricode',
    title: 'FloriCode (ภาษาดอกไม้ & จัดช่อดอกไม้เสมือนจริง)',
    description: 'เว็บแอปค้นหาความหมายดอกไม้และระบบจำลองจัดช่อดอกไม้เสมือนจริงแบบ Interactive',
    longDescription: 'เว็บแอปพลิเคชันเชิงโต้ตอบสไตล์ Cute & Minimal สำหรับค้นหาความหมายของดอกไม้ และมีระบบจำลองการจัดช่อดอกไม้เสมือนจริง ผู้ใช้สามารถเลือกดอกไม้ จัดเรียง ปรับขนาด เลือกกระดาษห่อ และบันทึกภาพช่อดอกไม้ของตัวเองได้ พร้อมคำนวณความหมายรวมของช่อดอกไม้',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'pink',
    githubUrl: 'https://github.com/Amaraporn07/floricode.git',
    demoUrl: 'https://floricode.vercel.app/',
    status: 'completed',
    features: [
      'พจนานุกรมดอกไม้: ค้นหาและกรองความหมายดอกไม้ตามโอกาสหรืออารมณ์',
      'ระบบจัดช่อดอกไม้เสมือนจริง: เลือกดอกไม้, ลาก/ปรับขนาด/หมุนองศา (Drag & Drop)',
      'ประมวลผลความหมาย: สรุปความหมายรวมของช่อจากดอกไม้ที่เลือก',
      'Export & Share: บันทึกภาพผลงานเป็นไฟล์ PNG และสร้างการ์ดอวยพรดิจิทัล'
    ],
    architecture: [
      'Frontend: React 18, TypeScript, Vite, Tailwind CSS',
      'Animations & Interactive: Framer Motion, html-to-image',
      'Deployment: Vercel, Docker Supported'
    ]
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    name: 'HTML5 & CSS3',
    level: 5,
    category: 'frontend',
    icon: 'Code2',
    color: 'orange',
    description: 'Design and build beautiful, responsive web pages for all screen sizes'
  },
  {
    name: 'JavaScript & TypeScript',
    level: 4,
    category: 'frontend',
    icon: 'Zap',
    color: 'purple',
    description: 'Develop Interactive UI, Async Programming, and Type-safe Code'
  },
  {
    name: 'React.js',
    level: 4,
    category: 'frontend',
    icon: 'Layers',
    color: 'blue',
    description: 'Build Component-based UI, Hooks, State Management, and Performance Optimization'
  },
  {
    name: 'Node.js & Express',
    level: 3,
    category: 'backend',
    icon: 'Server',
    color: 'teal',
    description: 'Create RESTful APIs, Middleware, Authentication, and Session Management'
  },
  {
    name: 'MySQL & PostgreSQL',
    level: 4,
    category: 'database',
    icon: 'Database',
    color: 'pink',
    description: 'Design Database Schemas, write Complex SQL Queries, and Optimization'
  },
  {
    name: 'PHP',
    level: 3,
    category: 'backend',
    icon: 'FileCode',
    color: 'purple',
    description: 'Develop Server-side web applications using OOP PHP and MVC Pattern'
  },
  {
    name: 'Git & GitHub',
    level: 4,
    category: 'devops',
    icon: 'GitBranch',
    color: 'orange',
    description: 'Version Control, Branching Strategy, Pull Requests, and Team Collaboration'
  },
  {
    name: 'UI/UX Design (Figma)',
    level: 4,
    category: 'design',
    icon: 'Palette',
    color: 'pink',
    description: 'Design Wireframes, Prototypes, and Design Systems using Figma'
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    role: 'Software Engineering Student',
    company: 'University of Phayao',
    period: '2024 - Present',
    description: [
      'Pursuing a Bachelor of Engineering in Software Engineering',
      'Passionate about building high-performance web applications and optimizing infrastructure',
      'Consistently striving for academic excellence with a GPA of 3.28'
    ],
    color: 'purple'
  },
  {
    role: 'Full-Stack Developer (Initial Development)',
    company: 'Sports Facility Usage Tracking & Analytics System — Phase 1',
    period: 'Year 2, Semester 1',
    description: [
      'Developed a Minimum Viable Product (MVP) to collect and analyze sports facility usage data',
      'Utilized Python (Django), Tailwind CSS, and Cloudflare D1 for the initial tech stack',
      'Successfully implemented a functional prototype for data tracking and statistical reporting'
    ],
    color: 'teal'
  },
  {
    role: 'Full-Stack Developer (System Re-Architecture & Optimization)',
    company: 'Sports Facility Usage Tracking & Analytics System — Phase 2',
    period: 'Year 2, Semester 2',
    description: [
      'Executed a complete system re-architecture to resolve performance bottlenecks and high operational costs',
      'Transitioned Tech Stack to Node.js (Hono) and TypeScript for better type safety and high-performance execution',
      'Migrated high-volume workloads from Cloudflare D1 to a self-managed MySQL environment for cost optimization',
      'Implemented Docker containerization and deployed the application on AWS for a scalable production environment'
    ],
    color: 'blue'
  }
];

import certAiGame from './assets/images/cert_AMARAPORN_ONKHOKSUNG.png';

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-ai-game',
    title: 'พื้นฐานการสร้างเกมด้วย AI ฉบับเข้าใจง่าย',
    issuer: 'FutureSkill | depa',
    date: 'July 2026',
    description: 'Basic AI Game Creation. Studied how to use AI tools for game development. Certified by Digital Skill Roadmap (depa).',
    color: 'purple',
    icon: 'Code2',
    credentialUrl: certAiGame
  },
  {
    id: 'cert-html-css',
    title: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    date: 'June 2024',
    description: 'Studied and passed tests in HTML5, CSS3, Flexbox, Grid, and responsive web design. Spent over 300 hours.',
    color: 'orange',
    icon: 'Award',
    credentialUrl: 'https://freecodecamp.org/certification/developer/responsive-web-design'
  },
  {
    id: 'cert-js',
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'August 2024',
    description: 'Completed JavaScript training from basics to advanced, covering ES6+, Regular Expressions, Debugging, and Data Structures.',
    color: 'purple',
    icon: 'Code2',
    credentialUrl: 'https://freecodecamp.org/certification/developer/javascript-algorithms-and-data-structures'
  },
  {
    id: 'cert-react',
    title: 'React - The Complete Guide',
    issuer: 'Udemy (Academind)',
    date: 'October 2024',
    description: 'Comprehensive online course on React covering Hooks, Context, Redux, React Router, and app deployment.',
    color: 'blue',
    icon: 'Layers',
    credentialUrl: 'https://udemy.com/certificate/react-complete-guide'
  },
  {
    id: 'cert-sql',
    title: 'SQL for Data Science',
    issuer: 'Coursera (UC Davis)',
    date: 'March 2024',
    description: 'Studied the use of SQL in data analysis, covering SELECT, JOIN, Subqueries, Aggregation Functions, and Window Functions.',
    color: 'teal',
    icon: 'Database',
    credentialUrl: 'https://coursera.org/verify/sql-data-science'
  },
  {
    id: 'cert-github',
    title: 'GitHub Foundations Certification',
    issuer: 'GitHub',
    date: 'January 2025',
    description: 'Official certification from GitHub covering Git usage, GitHub, Collaboration Workflows, and GitHub Actions.',
    color: 'pink',
    icon: 'GitBranch',
    credentialUrl: 'https://examregistration.github.com/certification/GHF'
  },
  {
    id: 'cert-figma',
    title: 'Figma UI Design Essentials',
    issuer: 'Designlab',
    date: 'November 2024',
    description: 'Practiced UI/UX design skills with Figma from Wireframes, Design Systems, and Prototyping to developer Handoff.',
    color: 'orange',
    icon: 'Palette',
    credentialUrl: 'https://designlab.com/certificate/figma'
  }
];

