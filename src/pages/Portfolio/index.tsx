import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import type { Variants } from 'framer-motion';
import { i } from 'framer-motion/client';

// --- INTERFACES ---
interface SkillCardProps {
  icon: string;
  title: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

interface SkillCategoryCardProps extends React.ComponentProps<typeof motion.div> {
  category: SkillCategory;
}

interface ExperienceItemProps {
  company: string;
  logo: string;
  position: string;
  duration: string;
  description: string;
  isHighlighted?: boolean;
}

interface ProjectItemProps {
  number: string;
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
}

interface TestimonialItemProps {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  isHighlighted?: boolean;
}

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.42, 0, 0.58, 1] } },
};

// --- COMPONENTS ---
const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, ...rest }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex h-full cursor-pointer flex-col gap-4 rounded-[4px] border-2 border-global-1 bg-white p-5 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl md:p-6"
      {...rest}
    >
      <div className="flex items-center gap-3">
        <i className={`${category.icon} text-xl text-global-1 md:text-2xl`}></i>
        <h3 className="font-sora text-lg font-bold text-global-1 md:text-xl">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 md:text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// FIXED: The ExperienceItem component now correctly handles the isHighlighted prop for styling.
const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  logo,
  position,
  duration,
  description,
  isHighlighted = false,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className={`flex w-full flex-col items-center justify-start gap-[12px] rounded-[10px] p-[14px] md:gap-[24px] md:p-[28px] ${
        isHighlighted ? 'bg-global-2' : 'border border-global-3'
      }`}
    >
      <div className="flex w-full flex-col items-start justify-center gap-4 md:flex-row">
        <div className="flex flex-1 flex-row items-center justify-start gap-4">
          <img src={logo} alt={company} className="h-[16px] w-[16px] md:h-[32px] md:w-[32px]" />
          <span
            className={`text-center font-sora text-[12px] font-semibold leading-[16px] text-global-5 md:text-[24px] md:leading-[31px]`}
          >
            {position}
          </span>
        </div>
        <span
          className={`text-center font-sora text-[8px] font-semibold leading-[11px] text-global-4 md:text-[16px] md:leading-[21px]`}
        >
          {duration}
        </span>
      </div>
      <p
        className={`w-full text-left font-sora text-[8px] font-normal leading-[12px] text-global-4 md:text-[16px] md:leading-[24px]`}
      >
        {description}
      </p>
    </motion.div>
  );
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  number,
  title,
  description,
  image,
  isReversed = false,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className={`flex w-full flex-col items-center justify-start gap-4 p-[10px] ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} md:p-[20px] lg:gap-8`}
    >
      <div className="flex w-full items-center justify-start p-[19px] lg:w-1/2 md:p-[38px]">
        <motion.img
          variants={imageVariants}
          src={image}
          alt={title}
          className="h-auto w-full max-w-[265px] rounded-[9px] md:max-w-[530px] md:rounded-[18px]"
        />
      </div>
      <div className="flex w-full items-center justify-start lg:w-1/2">
        <motion.div
          variants={containerVariants}
          className={`flex w-full flex-col items-start justify-start gap-[11px] md:gap-[22px] ${isReversed ? 'lg:mr-[10px]' : 'lg:ml-[10px]'}`}
        >
          <motion.span
            variants={itemVariants}
            className="font-sora text-[24px] font-extrabold leading-[31px] text-global-5 md:text-[48px] md:leading-[61px]"
          >
            {number}
          </motion.span>
          <motion.h3
            variants={itemVariants}
            className="font-sora text-[16px] font-bold leading-[21px] text-global-5 md:text-[32px] md:leading-[41px]"
          >
            {title}
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="w-full text-left font-sora text-[8px] font-normal leading-[12px] text-global-3 md:text-[16px] md:leading-[24px]"
          >
            {description}
          </motion.p>
          <motion.img
            variants={itemVariants}
            src="/images/img_export.svg"
            alt="External Link"
            className="h-[10px] w-[10px] cursor-pointer transition-opacity hover:opacity-80 md:h-[20px] md:w-[20px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  name,
  role,
  avatar,
  quote,
  isHighlighted = false,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className={`flex w-full max-w-[185px] flex-col items-center justify-center gap-[11px] rounded-[10px] p-[18px] shadow-[0px_4px_8px_rgba(24,39,75,0.08)] md:max-w-[370px] md:gap-[22px] md:rounded-[20px] md:p-[36px] md:shadow-[0px_8px_16px_rgba(24,39,75,0.08)] ${isHighlighted ? 'bg-global-1' : 'bg-global-3'}`}
    >
      <div className="flex w-auto flex-col items-end justify-start">
        <img
          src={avatar}
          alt={name}
          className="h-[48px] w-[48px] rounded-[24px] md:h-[96px] md:w-[96px] md:rounded-[48px]"
        />
        <img
          src={isHighlighted ? '/images/img_frame_17_white_a700.svg' : '/images/img_frame_17.svg'}
          alt="Quote"
          className="h-[15px] w-[15px] -mt-[15px] md:h-[30px] md:w-[30px] md:-mt-[30px]"
        />
      </div>
      <p
        className={`flex-1 text-center font-sora text-[8px] font-normal leading-[10px] md:text-[16px] md:leading-[20px] ${isHighlighted ? 'text-global-5' : 'text-global-2'}`}
      >
        {quote}
      </p>
      <div className="flex w-[60px] flex-col items-center justify-start gap-[10px] md:w-[120px] md:gap-[20px]">
        <div
          className={`h-[1px] w-full md:h-[2px] ${isHighlighted ? 'bg-global-5' : 'bg-global-1'}`}
        ></div>
        <span
          className={`text-center font-sora text-[10px] font-semibold capitalize leading-[13px] md:text-[20px] md:leading-[26px] ${isHighlighted ? 'text-global-5' : 'text-global-2'}`}
        >
          {name}
        </span>
        <span
          className={`text-center font-sora text-[8px] font-semibold leading-[11px] md:text-[16px] md:leading-[21px] ${isHighlighted ? 'text-global-5' : 'text-global-3'}`}
        >
          {role}
        </span>
      </div>
    </motion.div>
  );
};

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

  const experiences = [
    {
      company: 'CodexVeer',
      logo: '/images/CodexVeer.jpeg',
      position: 'Full-Stack Developer Intern',
      duration: 'May 2025 - July 2025',
      description:
        'Developed responsive Flutter UI components using clean architecture and advanced state handling, enhancing usability across Android and web applications. Translated Figma prototypes into pixel-perfect interfaces and integrated RESTful APIs with Node.js and MongoDB to deliver scalable backend features.',
      isHighlighted: true,
    },
    {
      company: 'MEDHWAN EduTech',
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEXLJfmZR2dXg/company-logo_200_200/B4DZhABzgUHYAM-/0/1753420872275/medhwan_logo?e=1759968000&v=beta&t=gIBfF58UnXFyhLYlaNS6pP9lcj1W2dZPe6ZbIF6jcQ0',
      position: 'Front-End Developer [Freelancer]',
      duration: 'May 2025 - June 2025',
      description:
        "Developed and optimized responsive frontend components for MEDHWAN EduTech's 'Prajawal' platform, building an intuitive design system for visual consistency. Collaborated on the seamless integration of user interfaces with backend APIs for robust functionality.",
      isHighlighted: true,
    },
    // {
    //   company: 'YouTube',
    //   logo: '/images/img_youtube.svg',
    //   position: 'Software Engineer at Youtube',
    //   duration: 'Jan 2017 - Oct 2019',
    //   description:
    //     "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    //   isHighlighted: true,
    // },
    // {
    //   company: 'Apple',
    //   logo: '/images/img_apple.svg',
    //   position: 'Junior Software Engineer at Apple',
    //   duration: 'Jan 2016 - Dec 2017',
    //   description:
    //     'During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.',
    // },
  ];

  const projects = [
    {
      number: '01',
      title: 'Pixgen',
      description:
        'PixGen is a full-stack text-to-image generation platform built with React and Node.js. It features a React-based frontend for entering text prompts and a Node.js/Express backend that processes these inputs to generate AI-powered images, providing users with an interactive and seamless image creation experience.',
      image:
        'https://tse4.mm.bing.net/th/id/OIP.OYb4TdSkIqicCI0gVeLPHAHaH1?cb=thfc1&w=745&h=789&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      number: '02',
      title: 'Ride_IO',
      description:
        'Ride_IO is a full-stack ride-sharing platform built with React and Node.js. It features a React-based frontend for users to book rides, view available drivers, and manage ride details, while the Node.js/Express backend handles data management, ride processing, and server-side logic to provide a seamless ride-booking experience.',
      image:
        'https://tse3.mm.bing.net/th/id/OIP.bPo8o02r3QqUk6trAqGXAAHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      isReversed: true,
    },
    {
      number: '03',
      title: 'Voxa',
      description:
        'Voxa is a Node.js framework that helps you build chat and voice apps for platforms like Alexa, Google Assistant, Messenger, and Telegram. It uses a simple structure to manage conversations, making it easy to create smart, interactive apps that work across different platforms.',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/021/626/268/small_2x/system-artificial-intelligence-chatgpt-chat-bot-ai-technology-smart-robot-ai-chat-gpt-application-software-photo.jpg',
    },
    {
      number: '04',
      title: 'TribeTalk',
      description:
        'TribeTalk is a full-stack Reddit-style discussion platform built with Flutter and Firebase. It features a responsive Flutter frontend for creating and managing communities, sharing posts in multiple formats, and engaging with others through voting and commenting, while Firebase powers authentication, user profiles, and theme customization to deliver a seamless interactive experience.',
      image:
        'https://thumbs.dreamstime.com/b/chat-logo-design-chatting-app-icon-bubble-speech-symbol-line-art-style-illustration-vector-226585557.jpg',
    },
  ];

  const testimonials = [
    {
      name: 'Ankit Gautam',
      role: 'Designer',
      avatar: '/images/img_ellipse_2664.png',
      quote:
        'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    },
    {
      name: 'Flora sheen',
      role: 'Designer',
      avatar: '/images/img_ellipse_2664_96x96.png',
      quote:
        'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
      isHighlighted: true,
    },
    {
      name: 'Evren Shah',
      role: 'Designer',
      avatar: '/images/img_ellipse_2664.png',
      quote:
        'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-start bg-global-3">
      <Header />

      <div className="flex w-full flex-col items-center justify-start pt-[128px]">
        {/* Home Section (was About Me) */}
        <div
          id="home"
          className="flex w-full scroll-mt-[50px] flex-col items-center justify-start py-[16px] md:py-[32px]"
        >
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
            <div className="mt-[14px] flex w-full flex-col items-start justify-between gap-8 md:mt-[28px] lg:flex-row lg:items-end">
              {/* Left Column: Contains text and social icons */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex w-full flex-col items-start justify-start lg:w-[40%]"
              >
                <div className="mb-[4px] flex w-full flex-col items-center justify-start gap-[13px] md:mb-[8px] md:gap-[26px]">
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-1 flex-col items-start justify-start gap-[3px] md:gap-[6px]"
                  >
                    <p className="font-sora text-[24px] font-extrabold leading-[31px] text-global-1 md:text-[48px] md:leading-[61px]">
                      <span className="font-normal">Hello I am</span> <b>Ankit Gautam.</b>{' '}
                      <br className="lg:hidden" />
                      {/* <span className="font-extrabold md:font-normal">
                        Creative Developer & Design Enthusiast
                      </span>{' '}
                      <br className="lg:hidden" />
                      <span className="font-normal">Based In</span> <b>India.</b> */}
                    </p>
                  </motion.div>
                  <motion.p
                    variants={itemVariants}
                    className="w-full text-left font-sora text-[8px] font-normal leading-[12px] text-global-3 md:text-[16px] md:leading-[24px]"
                  >
                    BTech student at IIIT Vadodara. I enjoy building seamless digital experiences
                    through responsive web and app development, blending design with functionality.
                    With real-world project and internship experience, I focus on clean code,
                    thoughtful design, and keeping users at the center of every solution. Beyond
                    coding, I love exploring design ideas, contributing to open source, and relaxing
                    with a good cup of coffee.
                  </motion.p>
                </div>

                {/* Social Icons Section */}
                <motion.div
                  variants={containerVariants}
                  className="mt-[20px] flex w-auto flex-row items-center justify-start md:mt-[40px]"
                >
                  <motion.a
                    variants={itemVariants}
                    href="https://www.linkedin.com/in/ankit-gautam-85a807259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex cursor-pointer flex-col items-center justify-start rounded-[4px] border-2 border-global-1 bg-white p-[9px] transition-colors hover:bg-global-1 md:p-[18px]"
                  >
                    <img
                      src="https://www.shareicon.net/data/2016/07/13/606885_linkedin_2048x2048.png"
                      alt="linkedin Icon"
                      className="h-[10px] w-[10px] group-hover:invert md:h-[20px] md:w-[20px]"
                    />
                  </motion.a>
                  <motion.a
                    variants={itemVariants}
                    href="https://github.com/ankitgautam2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group ml-[16px] flex cursor-pointer flex-col items-center justify-start rounded-[4px] border-2 border-global-1 bg-white p-[9px] transition-colors hover:bg-global-1 md:ml-[32px] md:p-[18px]"
                  >
                    <img
                      src="https://pngimg.com/uploads/github/github_PNG40.png"
                      alt="GitHub Icon"
                      className="h-[10px] w-[10px] group-hover:invert md:h-[20px] md:w-[20px]"
                    />
                  </motion.a>
                  <motion.a
                    variants={itemVariants}
                    href="https://x.com/ankit_gautam_03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group ml-[16px] flex cursor-pointer flex-col items-center justify-start rounded-[4px] border-2 border-global-1 bg-white p-[9px] transition-colors hover:bg-global-1 md:ml-[32px] md:p-[18px]"
                  >
                    <img
                      src="/images/img_social_icon_black_900.svg"
                      alt="Twitter Icon"
                      className="h-[10px] w-[10px] group-hover:invert md:h-[20px] md:w-[20px]"
                    />
                  </motion.a>
                  <motion.a
                    variants={itemVariants}
                    href="https://www.instagram.com/ankit_gautam_03/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group ml-[16px] flex cursor-pointer flex-col items-center justify-start rounded-[4px] border-2 border-global-1 bg-white p-[9px] transition-colors hover:bg-global-1 md:ml-[32px] md:p-[18px]"
                  >
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"
                      alt="Insta Icon"
                      className="h-[10px] w-[10px] group-hover:invert md:h-[20px] md:w-[20px]"
                    />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right Column: Banner Image */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                className="flex w-full items-center justify-center lg:w-[60%]"
              >
                <img src="/images/img_banner.svg" alt="Hero Banner" className="h-auto w-full" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex w-full scroll-mt-[50px] flex-row items-center justify-start py-[30px] md:py-[60px]"
        >
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
            <div className="flex w-full flex-col items-center justify-start gap-[10px] md:gap-[20px]">
              <motion.div
                variants={itemVariants}
                className="flex flex-1 flex-row items-start justify-center gap-[8px] p-[5px] md:gap-[16px] md:p-[10px]"
              >
                <span className="mt-[3px] font-sora text-[24px] font-normal leading-[31px] text-global-1 md:mt-[6px] md:text-[48px] md:leading-[61px]">
                  My
                </span>
                <span className="font-sora text-[24px] font-extrabold leading-[31px] text-global-1 md:text-[48px] md:leading-[61px]">
                  Skills
                </span>
              </motion.div>
              <motion.div
                variants={containerVariants}
                className="grid w-full grid-cols-1 gap-4 py-[20px] sm:grid-cols-2 lg:grid-cols-3 md:gap-8 md:py-[40px]"
              >
                {skillCategories.map((category, index) => (
                  <SkillCategoryCard key={index} category={category} />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex w-full scroll-mt-[50px] flex-row items-center justify-start bg-global-1 py-[30px] md:py-[60px]"
        >
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
            <div className="flex w-full flex-col items-center justify-start gap-[10px] md:gap-[20px]">
              <motion.div
                variants={itemVariants}
                className="flex flex-1 flex-row items-end justify-center gap-[8px] p-[5px] md:gap-[16px] md:p-[10px]"
              >
                <span className="mt-[3px] font-sora text-[24px] font-normal leading-[31px] text-global-5 md:mt-[6px] md:text-[48px] md:leading-[61px]">
                  My
                </span>
                <span className="font-sora text-[24px] font-extrabold leading-[31px] text-global-5 md:text-[48px] md:leading-[61px]">
                  Experience
                </span>
              </motion.div>
              <motion.div
                variants={containerVariants}
                className="flex w-full flex-col gap-[16px] px-[12px] py-[20px] md:gap-[32px] md:px-[24px] md:py-[40px]"
              >
                {experiences.map((experience, index) => (
                  <ExperienceItem
                    key={index}
                    company={experience.company}
                    logo={experience.logo}
                    position={experience.position}
                    duration={experience.duration}
                    description={experience.description}
                    isHighlighted={experience.isHighlighted}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          id="about-me"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex w-full scroll-mt-[50px] flex-row items-center justify-start py-[30px] md:py-[60px]"
        >
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
            <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
              <motion.img
                variants={imageVariants}
                src="/images/img_group_1000015845.svg"
                alt="About Me Illustration"
                className="h-auto w-full max-w-[262px] lg:w-[42%] md:max-w-[524px]"
              />
              <motion.div
                variants={containerVariants}
                className="flex w-full flex-col items-center justify-start gap-[10px] lg:w-[50%] md:gap-[20px]"
              >
                <motion.div
                  variants={itemVariants}
                  className="flex flex-1 flex-row items-center justify-start py-[6px] md:py-[12px]"
                >
                  <span className="font-sora text-[24px] font-normal leading-[31px] text-global-1 md:text-[48px] md:leading-[61px]">
                    About
                  </span>
                  <span className="ml-[8px] font-sora text-[24px] font-extrabold leading-[31px] text-global-1 md:ml-[16px] md:text-[48px] md:leading-[61px]">
                    Me
                  </span>
                </motion.div>
                <motion.div
                  variants={containerVariants}
                  className="mb-[16px] flex flex-1 flex-col items-center justify-start gap-[10px] md:mb-[32px] md:gap-[20px]"
                >
                  <motion.p
                    variants={itemVariants}
                    className="w-full text-left font-sora text-[8px] font-normal leading-[12px] text-global-3 md:text-[16px] md:leading-[24px]"
                  >
                    I’m Ankit Gautam, a software developer and B.Tech student at IIIT Vadodara,
                    focused on building digital experiences that feel seamless and meaningful. With
                    a foundation in web and app development, I enjoy creating responsive and
                    visually engaging applications that connect design with functionality.
                  </motion.p>
                  <motion.p
                    variants={itemVariants}
                    className="w-full text-left font-sora text-[8px] font-normal leading-[12px] text-global-3 md:text-[16px] md:leading-[24px]"
                  >
                    Over the past year, I’ve gained hands-on experience through real-world projects
                    and internships, where I collaborated with teams to deliver reliable products
                    and improve performance. I believe in writing clean code, approaching design
                    thoughtfully, and keeping users at the center of every solution.
                  </motion.p>
                  <motion.p
                    variants={itemVariants}
                    className="w-full text-left font-sora text-[8px] font-normal leading-[12px] text-global-3 md:text-[16px] md:leading-[24px]"
                  >
                    Beyond coding, I like exploring new design ideas, contributing to open-source
                    projects, and taking a pause with a good cup of coffee.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex w-full scroll-mt-[50px] flex-col items-center justify-start bg-global-1 py-[30px] md:py-[60px]"
        >
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
            <div className="flex w-full flex-col items-center justify-start gap-[10px] md:gap-[20px]">
              <motion.div
                variants={itemVariants}
                className="flex flex-1 flex-row items-end justify-center gap-[8px] p-[5px] md:gap-[16px] md:p-[10px]"
              >
                <span className="mt-[3px] font-sora text-[24px] font-normal leading-[31px] text-global-5 md:mt-[6px] md:text-[48px] md:leading-[61px]">
                  My
                </span>
                <span className="font-sora text-[24px] font-extrabold leading-[31px] text-global-5 md:text-[48px] md:leading-[61px]">
                  Projects
                </span>
              </motion.div>
              <motion.div variants={containerVariants} className="flex w-full flex-col">
                {projects.map((project, index) => (
                  <ProjectItem
                    key={index}
                    number={`0${index + 1}`}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    isReversed={project.isReversed ?? index % 2 === 1}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section (Contact me section)
        <motion.div
          id="Testimonials"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex w-full scroll-mt-[50px] flex-row items-center justify-start bg-global-3 py-[30px] md:py-[60px]"
        >
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
            <div className="flex w-full flex-col items-center justify-start gap-[10px] md:gap-[20px]">
              <motion.div
                variants={itemVariants}
                className="flex flex-1 flex-row items-start justify-center gap-[8px] p-[5px] md:gap-[16px] md:p-[10px]"
              >
                <span className="mt-[3px] font-sora text-[24px] font-normal leading-[31px] text-global-1 md:mt-[6px] md:text-[48px] md:leading-[61px]">
                  My
                </span>
                <span className="font-sora text-[24px] font-extrabold leading-[31px] text-global-1 md:text-[48px] md:leading-[61px]">
                  Testimonial
                </span>
              </motion.div>
              <motion.div
                variants={containerVariants}
                className="flex w-full flex-col items-center justify-center gap-[14px] px-[12px] py-[20px] md:flex-row md:gap-[28px] md:px-[24px] md:py-[40px]"
              >
                {testimonials.map((testimonial, index) => (
                  <TestimonialItem
                    key={index}
                    name={testimonial.name}
                    role={testimonial.role}
                    avatar={testimonial.avatar}
                    quote={testimonial.quote}
                    isHighlighted={testimonial.isHighlighted}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div> */}
      </div>

      <Footer />

      {/* Bottom Footer */}
      <div className="flex w-full flex-row items-center justify-start bg-global-1 py-[12px] md:py-[24px]">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex w-auto flex-row items-center justify-start">
              <img
                src="/images/MY_LOGO.png"
                alt="Personal Logo"
                className="w-[100px] md:w-[100px] h-[100px] md:h-[100px]"
              />
              {/* <span className="ml-[6px] font-sora text-[16px] font-bold capitalize leading-[21px] text-global-5 md:ml-[12px] md:text-[20px] md:leading-[26px]">
                Ankit Gautam
              </span> */}
            </div>
            <div className="flex flex-1 flex-col items-end justify-start gap-[3px] md:gap-[6px]">
              {/* <span className="text-right font-sora text-[8px] font-semibold leading-[11px] text-global-5 md:text-[16px] md:leading-[21px]">
                @ 2025
              </span> */}
              <span className="text-right font-sora text-[8px] font-semibold leading-[11px] text-global-5 md:text-[16px] md:leading-[21px]">
                Made by Ankit Gautam
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
