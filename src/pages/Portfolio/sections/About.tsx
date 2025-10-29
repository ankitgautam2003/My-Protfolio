import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, imageVariants } from './variants';

const About: React.FC = () => (
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
        <motion.div variants={containerVariants} className="flex w-full flex-col items-center justify-start gap-[10px] lg:w-[50%] md:gap-[20px]">
          <motion.div variants={itemVariants} className="flex flex-1 flex-row items-center justify-start py-[6px] md:py-[12px]">
            <span className="font-sora text-[24px] font-normal leading-[31px] text-global-1 md:text-[48px] md:leading-[61px]">About</span>
            <span className="ml-[8px] font-sora text-[24px] font-extrabold leading-[31px] text-global-1 md:ml-[16px] md:text-[48px] md:leading-[61px]">Me</span>
          </motion.div>
          <motion.div variants={containerVariants} className="mb-[16px] flex flex-1 flex-col items-center justify-start gap-[10px] md:mb-[32px] md:gap-[20px]">
            <motion.p variants={itemVariants} className="w-full text-left font-sora text-[8px] font-normal leading-[12px] text-global-3 md:text-[16px] md:leading-[24px]">
              I’m Ankit Gautam, a software developer and B.Tech student at IIIT Vadodara, focused on building digital experiences that feel seamless and meaningful. With a foundation in web and app development, I enjoy creating responsive and visually engaging applications that connect design with functionality.
            </motion.p>
            <motion.p variants={itemVariants} className="w-full text-left font-sora text-[8px] font-normal leading-[12px] text-global-3 md:text-[16px] md:leading-[24px]">
              Over the past year, I’ve gained hands-on experience through real-world projects and internships, where I collaborated with teams to deliver reliable products and improve performance. I believe in writing clean code, approaching design thoughtfully, and keeping users at the center of every solution.
            </motion.p>
            <motion.p variants={itemVariants} className="w-full text-left font-sora text-[8px] font-normal leading-[12px] text-global-3 md:text-[16px] md:leading-[24px]">
              Beyond coding, I like exploring new design ideas, contributing to open-source projects, and taking a pause with a good cup of coffee.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default About;
