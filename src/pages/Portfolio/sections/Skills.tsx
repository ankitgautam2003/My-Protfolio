import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './variants';

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

interface SkillCategoryCardProps extends React.ComponentProps<typeof motion.div> {
  category: SkillCategory;
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, ...rest }) => (
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
        <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 md:text-sm">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

interface SkillsProps {
  categories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ categories }) => (
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
        <motion.div variants={itemVariants} className="flex flex-1 flex-row items-start justify-center gap-[8px] p-[5px] md:gap-[16px] md:p-[10px]">
          <span className="mt-[3px] font-sora text-[24px] font-normal leading-[31px] text-global-1 md:mt-[6px] md:text-[48px] md:leading-[61px]">My</span>
          <span className="font-sora text-[24px] font-extrabold leading-[31px] text-global-1 md:text-[48px] md:leading-[61px]">Skills</span>
        </motion.div>
        <motion.div variants={containerVariants} className="grid w-full grid-cols-1 gap-4 py-[20px] sm:grid-cols-2 lg:grid-cols-3 md:gap-8 md:py-[40px]">
          {categories.map((category, index) => (
            <SkillCategoryCard key={index} category={category} />
          ))}
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default Skills;
