import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, imageVariants } from './variants';

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="flex w-full scroll-mt-[50px] flex-col items-center justify-start py-[16px] md:py-[32px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
        <div className="mt-[14px] flex w-full flex-col items-start justify-between gap-8 md:mt-[28px] lg:flex-row lg:items-end">
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
                </p>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="w-full text-left font-sora text-[8px] font-normal leading-[12px] text-global-3 md:text-[16px] md:leading-[24px]"
              >
                BTech student at IIIT Vadodara. I enjoy building seamless digital experiences through
                responsive web and app development, blending design with functionality. With
                real-world project and internship experience, I focus on clean code, thoughtful
                design, and keeping users at the center of every solution. Beyond coding, I love
                exploring design ideas, contributing to open source, and relaxing with a good cup of
                coffee.
              </motion.p>
            </div>

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
  );
};

export default Hero;
