// =======================
// Skills Section Logos
// =======================

import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// =======================
// Education & Experience Logos
// =======================

import college_logo from './assets/education_logo/college_logo.png';
import school_logo from './assets/education_logo/school_logo.png';
import mylogo from './assets/education_logo/mylogo.png';
import zidioLogo from './assets/education_logo/zidio_logo.png';

// =======================
// Certificate Images
// =======================

import apnaCertificate from './assets/apna_certificate.png';
import zidioCertificate from './assets/zidio_certificate.png';

// =======================
// Project Images
// =======================

import aiNotesImg from './assets/projects/ai-notes.png';
import ruhelabnbImg from './assets/projects/ruhelabnb.png';
import portfolioImg from './assets/projects/portfolio.png';

// =======================
// Skills Data
// =======================

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },

  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },

  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },

  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

// =======================
// Experience Data
// =======================

export const experiences = [
  {
    id: 0,
    img: mylogo,
    role: 'Full Stack Web Development',
    company: 'APNA College',
    date: '2024 - 2025',

    desc: 'Completed full-stack web development specialization through the Sigma Batch. Built responsive MERN stack applications, modern UI interfaces, and scalable backend systems with real-world development practices.',

    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React JS',
      'Node JS',
      'Express JS',
      'MongoDB',
      'Tailwind CSS',
    ],

    certificate: apnaCertificate,
  },

  {
    id: 1,
    img: zidioLogo,
    role: 'Web Development Intern',
    company: 'Zidio Development',
    date: 'Jun 2026 - Aug 2026',

    desc: 'Completed a Web Development internship at Zidio Development, contributing to modern web application development, responsive user interfaces, and full-stack development workflows using current industry practices.',

    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React JS',
      'Node JS',
      'Express JS',
      'MongoDB',
      'REST APIs',
      'Git',
      'GitHub',
    ],

    certificate: zidioCertificate,
  },
];

// =======================
// Education Data
// =======================

export const education = [
  {
    id: 0,
    img: college_logo,
    school: 'Kalka Institute for Research and Advanced Studies, Meerut',
    date: 'Sept 2024 - Aug 2026',
    grade: '73.2%',
    desc: "Completed Bachelor's degree in Computer Application (BCA) from Kalka Institute for Research and Advanced Studies, Meerut.",
    degree: 'Bachelor of Computer Application - BCA',
  },

  {
    id: 1,
    img: school_logo,
    school: 'Shiksha International School, Modinagar',
    date: 'Apr 2022 - March 2023',
    grade: '70%',
    desc: 'Completed class 12 education under CBSE board.',
    degree: 'CBSE(XII) - PCM with Computer Science',
  },
];

// =======================
// Projects Data
// =======================

export const projects = [
  {
    id: 0,
    title: 'AI Exam Notes Generator',
    description:
      'An AI-powered SaaS web application that helps students generate concise and smart exam notes instantly using AI. Built using the MERN stack with modern responsive UI and seamless user experience.',
    image: aiNotesImg,
    tags: [
      'React JS',
      'Node JS',
      'Express JS',
      'MongoDB',
      'AI',
      'Tailwind CSS',
    ],
    github: 'https://github.com/aadityaruhela777-code/1.ExamNotesAI',
    webapp: 'https://one-examnotesaiclient-mfkb.onrender.com/auth',
  },

  {
    id: 1,
    title: 'RuhelaBnB',
    description:
      'RuhelaBnB is a modern full-stack Airbnb-inspired vacation rental platform where users can browse beautiful property listings, explore accommodation details, and enjoy a clean, responsive booking experience built with the MERN stack.',
    image: ruhelabnbImg,
    tags: [
      'React JS',
      'Node JS',
      'Express JS',
      'MongoDB',
      'Tailwind CSS',
      'JWT',
    ],
    github: 'https://github.com/aadityaruhela777-code/ruhelabnb',
    webapp: 'https://ruhelabnbwebsite.lovable.app/',
  },

  {
    id: 2,
    title: 'Developer Portfolio',
    description:
      'A modern animated portfolio website showcasing projects, technical skills, education, and professional experience with a premium responsive UI built using React and Tailwind CSS.',
    image: portfolioImg,
    tags: [
      'React JS',
      'Tailwind CSS',
      'JavaScript',
      'Framer Motion',
    ],
    github: 'https://github.com/aadityaruhela777-code/Portfolio-website',
    webapp: 'https://aadityaruhela-portfolio.onrender.com/',
  },
];
