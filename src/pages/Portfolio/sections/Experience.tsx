import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './variants';

export interface ExperienceItemData {
  company: string;
  logo: string;
  position: string;
  duration: string;
  description: string;
  isHighlighted?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemData> = ({
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
          <span className="text-center font-sora text-[12px] font-semibold leading-[16px] text-global-5 md:text-[24px] md:leading-[31px]">
            {position}
          </span>
        </div>
        <span className="text-center font-sora text-[8px] font-semibold leading-[11px] text-global-4 md:text-[16px] md:leading-[21px]">
          {duration}
        </span>
      </div>
      <p className="w-full text-left font-sora text-[8px] font-normal leading-[12px] text-global-4 md:text-[16px] md:leading-[24px]">
        {description}
      </p>
    </motion.div>
  );
};

interface ExperienceProps {
  items: ExperienceItemData[];
}

const Experience: React.FC<ExperienceProps> = ({ items }) => (
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
        <motion.div variants={itemVariants} className="flex flex-1 flex-row items-end justify-center gap-[8px] p-[5px] md:gap-[16px] md:p-[10px]">
          <span className="mt-[3px] font-sora text-[24px] font-normal leading-[31px] text-global-5 md:mt-[6px] md:text-[48px] md:leading-[61px]">My</span>
          <span className="font-sora text-[24px] font-extrabold leading-[31px] text-global-5 md:text-[48px] md:leading-[61px]">Experience</span>
        </motion.div>
        <motion.div variants={containerVariants} className="flex w-full flex-col gap-[16px] px-[12px] py-[20px] md:gap-[32px] md:px-[24px] md:py-[40px]">
          {items.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default Experience;
