import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, imageVariants } from './variants';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export interface ProjectItemData {
  number?: string;
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  alt?: string;
  technologies?: string[];
}

interface ProjectItemProps extends ProjectItemData {
  htmlId?: string;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ number, title, description, image, isReversed = false, githubUrl, liveUrl, alt, technologies, htmlId }) => (
  <motion.div
    id={htmlId}
    variants={itemVariants}
    className={`flex w-full flex-col items-center justify-start gap-4 p-[10px] ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} md:p-[20px] lg:gap-8`}
  >
    <div className="flex w-full items-center justify-start p-[19px] lg:w-1/2 md:p-[38px]">
      {image ? (
        <motion.img variants={imageVariants} src={image} alt={alt || title} className="h-auto w-full max-w-[265px] rounded-[9px] md:max-w-[530px] md:rounded-[18px]" />
      ) : (
        <div className="h-[200px] w-full max-w-[265px] rounded-[9px] bg-gray-200 md:max-w-[530px] md:rounded-[18px]" />
      )}
    </div>
    <div className="flex w-full items-center justify-start lg:w-1/2">
      <motion.div variants={containerVariants} className={`flex w-full flex-col items-start justify-start gap-[11px] md:gap-[22px] ${isReversed ? 'lg:mr-[10px]' : 'lg:ml-[10px]'}`}>
        {number && (
          <motion.span variants={itemVariants} className="font-sora text-[24px] font-extrabold leading-[31px] text-global-5 md:text-[48px] md:leading-[61px]">
            {number}
          </motion.span>
        )}
        <motion.h3 variants={itemVariants} className="font-sora text-[16px] font-bold leading-[21px] text-global-5 md:text-[32px] md:leading-[41px]">
          {title}
        </motion.h3>
        <motion.p variants={itemVariants} className="w-full text-left font-sora text-[8px] font-normal leading-[12px] text-global-3 md:text-[16px] md:leading-[24px]">
          {description}
        </motion.p>
        {technologies && technologies.length > 0 && (
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-1">
            {technologies.map((tech, i) => (
              <span key={`${title}-tech-${i}`} className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] md:text-xs text-gray-700">
                {tech}
              </span>
            ))}
          </motion.div>
        )}
        <div className="flex items-center gap-3 md:gap-4 mt-2">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2">
              <img src="https://pngimg.com/uploads/github/github_PNG40.png" alt="GitHub" className="h-[16px] w-[16px] md:h-[20px] md:w-[20px] filter invert" />
              <span className="text-xs md:text-sm text-global-3 group-hover:underline">Code</span>
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2">
              <img src="/images/img_export.svg" alt="Live" className="h-[12px] w-[12px] md:h-[20px] md:w-[20px] filter invert" />
              <span className="text-xs md:text-sm text-global-3 group-hover:underline">Live</span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

interface ProjectsProps {
  items: ProjectItemData[];
  initialCount?: number;
}

const Projects: React.FC<ProjectsProps> = ({ items, initialCount = 3 }) => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const safeItems = useMemo(
    () => (Array.isArray(items) ? items.filter((p) => p && typeof p.title === 'string' && typeof p.image === 'string') : []),
    [items]
  );
  const itemsWithIndex = useMemo(() => safeItems.map((it, idx) => ({ it, idx })), [safeItems]);
  const visibleItems = itemsWithIndex.slice(0, initialCount);

  return (
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
          <motion.div variants={itemVariants} className="flex flex-1 flex-row items-end justify-center gap-[8px] p-[5px] md:gap-[16px] md:p-[10px]">
            <span className="mt-[3px] font-sora text-[24px] font-normal leading-[31px] text-global-5 md:mt-[6px] md:text-[48px] md:leading-[61px]">My</span>
            <span className="font-sora text-[24px] font-extrabold leading-[31px] text-global-5 md:text-[48px] md:leading-[61px]">Projects</span>
          </motion.div>
          <motion.div variants={containerVariants} className="flex w-full flex-col">
            {visibleItems.map(({ it, idx }) => (
              <ProjectItem
                key={`${it.title}-${it.image}`}
                htmlId={`project-item-${idx}`}
                {...it}
                isReversed={it.isReversed ?? idx % 2 === 1}
              />
            ))}
          </motion.div>
          {safeItems.length > initialCount && (
            <div className="mt-6">
              <Button
                onClick={() => {
                  navigate('/projects', { state: { items: safeItems } });
                }}
                className="text-[16px] md:text-[20px] font-sora font-semibold text-left bg-white text-black hover:bg-black hover:text-white transition-colors rounded-[4px] px-[16px] py-[10px] border border-global-5"
              >
                See more
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
