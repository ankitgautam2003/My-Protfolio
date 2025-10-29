import React, { useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './sections/variants';
import type { ProjectItemData } from './sections/Projects';
import { ProjectItem } from './sections/Projects';
import Button from '../../components/ui/Button';

const AllProjects: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as { state?: { items?: ProjectItemData[] } };
  const items: ProjectItemData[] = Array.isArray(location.state?.items) ? location.state!.items! : [];

  useEffect(() => {
    // Ensure page opens from the top
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-start bg-global-3">
      <Header />

      {/* Projects section wrapper identical to homepage */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex w-full flex-col items-center justify-start pt-[128px]"
      >
        <motion.div
          id="projects"
          variants={containerVariants}
          className="flex w-full scroll-mt-[50px] flex-col items-center justify-start bg-global-1 py-[30px] md:py-[60px]"
        >
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
            <div className="flex w-full flex-col items-center justify-start gap-[10px] md:gap-[20px]">
              <motion.div variants={itemVariants} className="flex flex-1 flex-row items-end justify-between gap-[8px] p-[5px] md:gap-[16px] md:p-[10px] w-full">
                <div className="flex items-end gap-[8px] md:gap-[16px]">
                  <span className="mt-[3px] font-sora text-[24px] font-normal leading-[31px] text-global-5 md:mt-[6px] md:text-[48px] md:leading-[61px]">My</span>
                  <span className="font-sora text-[24px] font-extrabold leading-[31px] text-global-5 md:text-[48px] md:leading-[61px]">Projects</span>
                </div>
                <Button variant="outline" onClick={() => navigate(-1)} className="bg-white text-black border border-global-5">
                  Back
                </Button>
              </motion.div>
              <motion.div variants={containerVariants} className="flex w-full flex-col">
                {items.length === 0 && (
                  <motion.p variants={itemVariants} className="text-global-3 text-sm md:text-base">
                    No projects to display. Please navigate here via the See more button from the homepage.
                  </motion.p>
                )}
                {items.map((it, idx) => (
                  <ProjectItem key={`${it.title}-${it.image}`} htmlId={`all-project-${idx}`} {...it} isReversed={it.isReversed ?? idx % 2 === 1} />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <Footer />

      {/* Bottom Footer identical to homepage */}
      <div className="flex w-full flex-row items-center justify-start bg-global-1 py-[12px] md:py-[24px]">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex w-auto flex-row items-center justify-start">
              <img src="/images/MY_LOGO.png" alt="Personal Logo" className="w-[100px] md:w-[100px] h-[100px] md:h-[100px]" />
            </div>
            <div className="flex flex-1 flex-col items-end justify-start gap-[3px] md:gap-[6px]">
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

export default AllProjects;
