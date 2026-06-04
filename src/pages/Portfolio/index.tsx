import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import About from './sections/About';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import type { SkillCategory } from './sections/Skills';
import type { ExperienceItemData } from './sections/Experience';
import type { ProjectItemData } from './sections/Projects';
import type { TestimonialItemData } from './sections/Testimonials';

// --- MAIN PORTFOLIO PAGE ---

const Portfolio: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: 'fas fa-code',
      skills: ['C', 'C++', 'Dart', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'LaTeX'],
    },
    {
      title: 'Frameworks',
      icon: 'fas fa-rocket',
      skills: ['Flutter', 'Next.js', 'React', 'Node.js', 'Express.js', 'TailwindCSS', 'Vite'],
    },
    {
      title: 'Databases & Hosting',
      icon: 'fas fa-database',
      skills: ['MySQL', 'Firebase', 'Heroku', 'Netlify', 'Vercel', 'WordPress'],
    },
    {
      title: 'Tools',
      icon: 'fas fa-tools',
      skills: ['Git', 'GitHub', 'Postman'],
    },
    {
      title: 'Design',
      icon: 'fas fa-paint-brush',
      skills: ['Figma', 'Canva'],
    },
  ];

  const experiences: ExperienceItemData[] = [
  {
    company: 'GEO SEO Lab',
    logo: 'https://geoseolab.com/_next/static/media/GeoSeoLogo.24d2f681.webp',
    position: 'Software Engineer Intern',
    duration: 'Apr 2026 - Present',
    description:
      'Working on scalable web applications, AI-powered solutions, and modern software infrastructure. Contributing to frontend and backend development while collaborating on SEO and analytics-based platforms.',
    isHighlighted: true,
  },
  {
    company: 'Indian Oil Corporation Limited (IOCL)',
    logo: 'https://tse3.mm.bing.net/th/id/OIP.Z5W24xbACcuB0cW8LHky0wHaJ4?r=0&pid=ImgDet&w=187&h=249&c=7&dpr=1.3&o=7&rm=3',
    position: 'Software Engineer Intern',
    duration: 'Feb 2026 - Apr 2026',
    description:
      'Worked on software development and automation solutions during the internship. Assisted in developing and optimizing internal tools and gained hands-on experience with enterprise-level workflows and deployment practices.',
    isHighlighted: true,
  },
  {
    company: 'Cardireach Technologies',
    logo: 'https://cardireach.com/Company_Logo.webp',
    position: 'Software Engineer Intern',
    duration: 'Aug 2025 - Feb 2026',
    description:
      'Developed backend and web-based solutions while contributing to software infrastructure and scalable application development. Worked remotely with the team on improving performance and implementing modern development practices.',
    isHighlighted: true,
  },
  {
    company: 'CodexVeer',
    logo: 'https://www.codexveer.com/static/media/codexveer-logo-phone.fef5347d28e5c847c5a6.png',
    position: 'Full-Stack Developer Intern',
    duration: 'May 2025 - July 2025',
    description:
      'Developed responsive Flutter UI components using clean architecture and advanced state handling, enhancing usability across Android and web applications. Translated Figma prototypes into pixel-perfect interfaces and integrated RESTful APIs with Node.js and MongoDB to deliver scalable backend features.',
    isHighlighted: true,
  },
  {
    company: 'MEDHWAN EduTech',
    logo: '/images/medhwan_logo.jpg',
    position: 'Front-End Developer [Freelancer]',
    duration: 'May 2025 - June 2025',
    description:
      "Developed and optimized responsive frontend components for MEDHWAN EduTech's 'Prajawal' platform, building an intuitive design system for visual consistency. Collaborated on the seamless integration of user interfaces with backend APIs for robust functionality.",
    isHighlighted: true,
  },
];

  const projects: ProjectItemData[] = [
    {
      title: "Pixgen",
      description:
        "PixGen is a full-stack text-to-image generation platform built with React and Node.js. It features a React-based frontend for entering text prompts and a Node.js/Express backend that processes these inputs to generate AI-powered images, providing users with an interactive and seamless image creation experience.",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.OYb4TdSkIqicCI0gVeLPHAHaH1?cb=thfc1&w=745&h=789&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Pixgen - Text-to-image AI platform",
      technologies: ["React", "Node.js", "Express"],
      githubUrl: "https://github.com/ankitgautam2003/pixgen.git",
      // liveUrl: "",
    },
    {
      title: "Ride_IO",
      description:
        "Ride_IO is a full-stack ride-sharing platform built with React and Node.js. It features a React-based frontend for users to book rides, view available drivers, and manage ride details, while the Node.js/Express backend handles data management, ride processing, and server-side logic to provide a seamless ride-booking experience.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.bPo8o02r3QqUk6trAqGXAAHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "E-commerce Platform - Modern online store interface",
      technologies: ["React", "Node.js", "MongoDB", "JawaScript", "jwt"],
      githubUrl: "https://github.com/ankitgautam2003/Ride_IO.git",
      // liveUrl: "#",
    },
    {
      title: "Voxa",
      description:
        "Voxa is a Node.js framework that helps you build chat and voice apps for platforms like Alexa, Google Assistant, Messenger, and Telegram. It uses a simple structure to manage conversations, making it easy to create smart, interactive apps that work across different platforms.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/021/626/268/small_2x/system-artificial-intelligence-chatgpt-chat-bot-ai-technology-smart-robot-ai-chat-gpt-application-software-photo.jpg",
      alt: "AI Chat Assistant - Intelligent chatbot conversation interface",
      technologies: ["Node.js", "JavaScript", "React"],
      githubUrl: "https://github.com/ankitgautam2003/voxa.git",
      // liveUrl: "#",
    },
    {
      title: "TribeTalk",
      description:
        "TribeTalk is a full-stack Reddit-style discussion platform built with Flutter and Firebase. It features a responsive Flutter frontend for creating and managing communities, sharing posts in multiple formats, and engaging with others through voting and commenting, while Firebase powers authentication, user profiles, and theme customization to deliver a seamless interactive experience.",
      image:
        "https://thumbs.dreamstime.com/b/chat-logo-design-chatting-app-icon-bubble-speech-symbol-line-art-style-illustration-vector-226585557.jpg",
      alt: "Task Manager App - Kanban board project management interface",
      technologies: ["Dart", "Flutter", "Firebase", "Riverpod"],
      githubUrl: "https://github.com/ankitgautam2003/TribeTalk.git",
      // liveUrl: "#",
    },
    {
      title: "Weather_App",
      description:
        "Weather_App is a cross-platform weather application built with Flutter. It features a Flutter-based responsive interface for Android, iOS, web, and desktop platforms, providing users with a seamless foundation to display real-time weather data and interactive forecasts.",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.NbjnwMg18cby6dPXfW3rQgHaFj?cb=thfc1&w=1080&h=810&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Analytics Dashboard - Data visualization and reporting interface",
      technologies: ["Dart", "Flutter"],
      githubUrl: "https://github.com/ankitgautam2003/Weather_App.git",
      // liveUrl: "#",
    },
    {
      title: "FoodApp",
      description:
        "FoodApp is a cross-platform food application built with Flutter. It provides a responsive foundation for Android, iOS, web, and desktop platforms, serving as a starting point to build features like food browsing, ordering, and recipe management.",
      image:
        "https://shef.com/homemade-food/wp-content/uploads/filipino-food-philippines-history-homemade.jpeg",
      alt: "Social Media App - Mobile-first social networking interface",
      technologies: ["Dart", "Flutter"],
      githubUrl: "https://github.com/ankitgautam2003/FoodApp.git",
      // liveUrl: "#",
    },
    {
      title: "License-Plate-Detection-and-Validation",
      description:
        "Automatic-License-Plate-Detection-and-Validation is a Python-based computer vision project that leverages YOLOv5 for detecting vehicle license plates and Tesseract OCR for extracting plate numbers. Optimized for Google Colab, it supports custom datasets with automated train, validation, and test splits, providing an end-to-end solution for real-time license plate recognition and validation.",
      image:
        "https://s3.amazonaws.com/cms.iterate.ai/img_drive_thru_0dff0702e8.jpg",
      alt: "AI Chat Assistant - Intelligent chatbot conversation interface",
      technologies: [
        "python",
        "PyTorch",
        "YoloV5",
        "Tesseract",
        "OpenCV",
        "Numpy",
        "Pandas",
      ],
      githubUrl:
        "https://github.com/ankitgautam2003/Automatic-License-Plate-Detection-and-Validation.git",
      // liveUrl: "#",
    },
    {
      title: "Disease-prediction",
      description:
        "Disease-prediction is a personalized disease prediction platform built using AI. It features a Flask-based web interface that employs both environmental and genetic data models (via pre-trained classifiers like SVC, Random Forest, etc.) to predict medical conditions, offering a customized and data-driven diagnostic experience.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.p2GIZKc0TCHUj5eres2IuwHaEq?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Creative Portfolio - Modern designer portfolio website interface",
      technologies: [
        "Python",
        "TensorFlow / Keras",
        "OpenCV",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Scikit-learn",
        "Jupyter Notebook",
      ],

      githubUrl: "https://github.com/ankitgautam2003/Disease-prediction.git",
      // liveUrl: "#",
    },
    {
      title: "Image-Forgery-Detection-and-Validation",
      description:
        "Image Forgery Detection and Validation is a Python-based project that uses Error Level Analysis and deep learning to detect and validate manipulated images through both Jupyter workflows and a simple GUI.",
      image:
        "https://c8.alamy.com/comp/2C2MCTT/magnifying-glass-with-id-card-icon-on-old-paper-with-red-vertical-line-background-identification-concept-2C2MCTT.jpg",
      alt: "Creative Portfolio - Modern designer portfolio website interface",
      technologies: ["Three.js", "GSAP", "NEXt.js", "WebGL"],
      githubUrl:
        "https://github.com/ankitgautam2003/Image-Forgery-Detection-and-Validation.git",
      // liveUrl: "#",
    },
  ];

  // const testimonials: TestimonialItemData[] = [
  //   {
  //     name: 'Ankit Gautam',
  //     role: 'Designer',
  //     avatar: '/images/img_ellipse_2664.png',
  //     quote:
  //       'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
  //   },
  //   {
  //     name: 'Flora sheen',
  //     role: 'Designer',
  //     avatar: '/images/img_ellipse_2664_96x96.png',
  //     quote:
  //       'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
  //     isHighlighted: true,
  //   },
  //   {
  //     name: 'Evren Shah',
  //     role: 'Designer',
  //     avatar: '/images/img_ellipse_2664.png',
  //     quote:
  //       'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
  //   },
  // ];

  return (
    <div className="flex w-full flex-col items-center justify-start bg-global-3">
      <Header />

      <div className="flex w-full flex-col items-center justify-start pt-[128px]">
        <Hero />
        <Skills categories={skillCategories} />
        <Experience items={experiences} />
        <About />
        <Projects items={projects} />
        {/* <Testimonials items={testimonials} /> */}
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
