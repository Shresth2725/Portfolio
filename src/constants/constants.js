export const projects = [
  {
    title: 'DevPulse',
    description:
      'A social web app like "Tinder for Developers" to connect and collaborate. Features real-time chat (WebSockets), skill-based recommendations, profile media uploads via Cloudinary, and Razorpay payment gateway for premium features. Backend deployed on AWS EC2.',
    image: '/images/1.png',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'Cloudinary', 'Razorpay', 'AWS EC2'],
    source: 'https://github.com/Shresth2725/DevPulse',
    visit: 'https://github.com/Shresth2725',
    id: 0,
  },
  {
    title: 'Chatterly',
    description:
      'A real-time chatting application with secure REST APIs for authentication and user management. Uses JWT-based auth, TanStack Query for API state management, and Stream Chat API for real-time messaging, channels, user presence, reactions, and message threads.',
    image: '/images/2.png',
    tags: ['React.js', 'Node.js', 'Stream Chat', 'TanStack Query', 'JWT', 'JavaScript'],
    source: 'https://github.com/Shresth2725/Chatterly',
    visit: 'https://github.com/Shresth2725',
    id: 1,
  },
  {
    title: 'DevOps – DevPulse CI/CD Pipeline',
    description:
      'Production-style end-to-end CI/CD pipeline for a multi-service application using Jenkins, Docker, and AWS. Infrastructure provisioned with Terraform (IaC), automated with Ansible. Containerised frontend (Nginx) and backend (Node.js) deployed via Docker Compose.',
    image: '/images/3.jpg',
    tags: ['Jenkins', 'Docker', 'AWS EC2', 'Terraform', 'Ansible', 'CI/CD', 'Linux'],
    source: 'https://github.com/Shresth2725/devpulse-devops',
    id: 2,
  },
  {
    title: 'Complaint Registration Portal',
    description:
      'A full-stack MERN application for efficient complaint management. Features secure JWT auth, image uploads via Cloudinary, automated location capture with Geolocation API, and real-time status tracking. Admin dashboard enables streamlined resolution workflows with automated email notifications via Nodemailer.',
    image: '/images/4.png',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Cloudinary', 'Nodemailer', 'JWT'],
    source: 'https://github.com/Shresth2725/ComplaintRegisterPortal',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2021, text: 'Completed High School with 88% — Aditya Birla Public School' },
  { year: 2023, text: 'Completed Higher Secondary (12th) with 78% & started B.Tech CSE at LPU' },
  { year: 2024, text: 'Began freelancing — built a Telegram bot & website for a bike rental business' },
  { year: 2025, text: 'Solved 500+ LeetCode problems, earned Annual Badge (300+ day streak)' },
  { year: 2025, text: 'Certified: Namaste NodeJS & HackerRank Frontend Developer (React)' },
  { year: 2025, text: 'Built DevPulse, Chatterly & a full production CI/CD DevOps pipeline' },
];