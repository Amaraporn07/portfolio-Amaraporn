import { Project, Skill, Experience, Certificate } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'dsa-service-welfare',
    title: 'DSA Service And Welfare (ระบบการจัดการงานบริการ และสวัสดิการ)',
    description: 'ระบบแอปพลิเคชันสำหรับการจัดการงานบริการและสวัสดิการ เพื่ออำนวยความสะดวกในการเข้าถึงข้อมูล',
    longDescription: 'ระบบแอปพลิเคชันสำหรับการจัดการงานบริการและสวัสดิการต่างๆ (DSA Service And Welfare) พร้อมระบบล็อกอินและการจัดการข้อมูลที่มีประสิทธิภาพ',
    category: 'fullstack',
    tags: ['Web Application', 'Service Management', 'Welfare System'],
    color: 'purple',
    githubUrl: '',
    demoUrl: 'https://dsaservicewelfare.duckdns.org/login',
    status: 'completed',
    features: [
      'ระบบจัดการงานบริการ',
      'ระบบการจัดการสวัสดิการ',
      'ระบบล็อกอินและจัดการสิทธิ์ผู้ใช้งาน'
    ],
    architecture: [
      'Web Application System'
    ]
  },
  {
    id: 'ecommerce-app',
    title: 'E-Commerce Platform',
    description: 'Full-stack online store with payment system, product management, shopping cart, and order tracking',
    longDescription: 'Built a comprehensive e-commerce platform including storefront, inventory management, shopping cart, payment gateway, tracking status, and seller dashboard.',
    category: 'fullstack',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Vercel'],
    color: 'pink',
    githubUrl: 'https://github.com/developer/ecommerce-platform',
    demoUrl: 'https://developer-shop.vercel.app',
    status: 'completed',
    features: [
      'Shopping cart with state persistence via LocalStorage and Server-side',
      'Payment processing via Stripe Payment Gateway with Webhook Handler',
      'Advanced product search and filtering with Fuzzy Search',
      'Seller dashboard summarizing sales, revenue charts, and stock management'
    ],
    architecture: [
      'Frontend: Next.js 14 App Router, TypeScript, Tailwind CSS',
      'Backend: Next.js API Routes + tRPC for type-safe APIs',
      'Database: PostgreSQL with Prisma ORM',
      'Payment: Stripe API + Stripe Webhooks'
    ]
  },
  {
    id: 'library-system',
    title: 'Digital Library System',
    description: 'Digital library management system supporting book borrowing, searching, and member management. Created as a Database Management course project.',
    longDescription: 'A Database Management System course project developing a full-featured digital library system, including ER Diagram design, Database Normalization, Stored Procedures, and Triggers for automated borrowing and returning.',
    category: 'backend',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'XAMPP'],
    color: 'blue',
    githubUrl: 'https://github.com/developer/library-system',
    status: 'completed',
    features: [
      'Complete ER Diagram and Relational Schema design in 3NF',
      'Automated book borrowing and returning with fine calculation',
      'Full-Text Search for books',
      'Stored Procedures and Triggers for Business Logic management'
    ],
    architecture: [
      'Frontend: HTML5, Bootstrap 5 CSS Framework',
      'Backend: PHP 8 with PDO for Database Connection',
      'Database: MySQL 8 with Stored Procedures & Triggers',
      'Server: XAMPP Local Development Environment'
    ]
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'Beautiful weather forecast app fetching data from OpenWeather API, interactive UI, and weather trend charts.',
    longDescription: 'A visually appealing and user-friendly weather forecast web application. Fetches real-time data from OpenWeather API, displays charts using Chart.js, features global city search, and saves favorite cities.',
    category: 'fullstack',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'CSS3', 'PWA', 'LocalStorage'],
    color: 'teal',
    githubUrl: 'https://github.com/developer/weather-dashboard',
    demoUrl: 'https://weather-developer.netlify.app',
    status: 'completed',
    features: [
      'Real-time weather data and 7-day forecast',
      'Temperature and humidity trend charts using Chart.js',
      'City search with Autocomplete Suggestion',
      'PWA (Progressive Web App) support for mobile installation'
    ],
    architecture: [
      'Frontend: React 18 + Vite, CSS Modules',
      'Data Source: OpenWeather API (Free Tier)',
      'Charts: Chart.js with React-Chartjs-2',
      'State: React Context API + useReducer'
    ]
  },
  {
    id: 'todo-app',
    title: 'Smart Task Manager',
    description: 'Smart task management app with categorization, priority setting, and reminders. Beautiful UI with CSS Animations.',
    longDescription: 'A task management application designed for ease of use and aesthetics. Supports task creation, Priority, Tags, Due Date, Subtasks, advanced Filter and Search, saving data locally via IndexedDB.',
    category: 'fullstack',
    tags: ['Vue.js', 'Vuex', 'SCSS', 'IndexedDB', 'Web Notifications API'],
    color: 'orange',
    githubUrl: 'https://github.com/developer/smart-task-manager',
    demoUrl: 'https://smart-tasks-developer.vercel.app',
    status: 'completed',
    features: [
      'Drag & Drop task sorting using Vue Draggable',
      'Task reminders via Web Push Notifications API',
      'Offline Support using IndexedDB',
      'Customizable themes and Dark/Light Mode'
    ],
    architecture: [
      'Frontend: Vue.js 3 Composition API, SCSS',
      'State Management: Vuex 4',
      'Storage: IndexedDB (Dexie.js)',
      'Notifications: Web Push API'
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
    role: '3rd Year Student / University of Phayao (Currently studying)',
    company: 'Computer Science — University of Phayao',
    period: '2023 - Present',
    description: [
      'Core subjects: Database Management, Web Development, Data Structures & Algorithms, Software Engineering, and Computer Networks',
      'Cumulative GPA: 3.28, consistently striving for academic excellence',
      'Participated in student activities and professional skill development programs in the Faculty of Science'
    ],
    color: 'purple'
  },
  {
    role: 'Web Developer in Project-Based Learning',
    company: 'Database Management System Project — UP',
    period: '2024 (1 Semester)',
    description: [
      'Developed a full-stack digital library system in a team of 3',
      'Designed ER Diagram and wrote Stored Procedures for automated book borrowing and returning',
      'Achieved an A grade in the course and was selected to present the project to junior students'
    ],
    color: 'blue'
  },
  {
    role: 'Freelance Web Developer',
    company: 'Freelance — Web Design and Development',
    period: '2024 - Present',
    description: [
      'Designed and developed small business websites and Landing Pages for local clients',
      'Used WordPress, React, and Plain HTML/CSS according to client requirements',
      'Practiced client communication, requirement gathering, and on-time project delivery'
    ],
    color: 'teal'
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
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

