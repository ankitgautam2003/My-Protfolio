import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './variants';

export interface TestimonialItemData {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  isHighlighted?: boolean;
}

const TestimonialItem: React.FC<TestimonialItemData> = ({ name, role, avatar, quote, isHighlighted = false }) => (
  <motion.div
    variants={itemVariants}
    className={`flex w-full max-w-[185px] flex-col items-center justify-center gap-[11px] rounded-[10px] p-[18px] shadow-[0px_4px_8px_rgba(24,39,75,0.08)] md:max-w-[370px] md:gap-[22px] md:rounded-[20px] md:p-[36px] md:shadow-[0px_8px_16px_rgba(24,39,75,0.08)] ${
      isHighlighted ? 'bg-global-1' : 'bg-global-3'
    }`}
  >
    <div className="flex w-auto flex-col items-end justify-start">
      <img src={avatar} alt={name} className="h-[48px] w-[48px] rounded-[24px] md:h-[96px] md:w-[96px] md:rounded-[48px]" />
      <img
        src={isHighlighted ? '/images/img_frame_17_white_a700.svg' : '/images/img_frame_17.svg'}
        alt="Quote"
        className="h-[15px] w-[15px] -mt-[15px] md:h-[30px] md:w-[30px] md:-mt-[30px]"
      />
    </div>
    <p className={`flex-1 text-center font-sora text-[8px] font-normal leading-[10px] md:text-[16px] md:leading-[20px] ${isHighlighted ? 'text-global-5' : 'text-global-2'}`}>
      {quote}
    </p>
    <div className="flex w-[60px] flex-col items-center justify-start gap-[10px] md:w-[120px] md:gap-[20px]">
      <div className={`h-[1px] w-full md:h-[2px] ${isHighlighted ? 'bg-global-5' : 'bg-global-1'}`}></div>
      <span className={`text-center font-sora text-[10px] font-semibold capitalize leading-[13px] md:text-[20px] md:leading-[26px] ${isHighlighted ? 'text-global-5' : 'text-global-2'}`}>
        {name}
      </span>
      <span className={`text-center font-sora text-[8px] font-semibold leading-[11px] md:text-[16px] md:leading-[21px] ${isHighlighted ? 'text-global-5' : 'text-global-3'}`}>
        {role}
      </span>
    </div>
  </motion.div>
);

interface TestimonialsProps {
  items: TestimonialItemData[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ items }) => (
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
        <motion.div variants={itemVariants} className="flex flex-1 flex-row items-start justify-center gap-[8px] p-[5px] md:gap-[16px] md:p-[10px]">
          <span className="mt-[3px] font-sora text-[24px] font-normal leading-[31px] text-global-1 md:mt-[6px] md:text-[48px] md:leading-[61px]">My</span>
          <span className="font-sora text-[24px] font-extrabold leading-[31px] text-global-1 md:text-[48px] md:leading-[61px]">Testimonial</span>
        </motion.div>
        <motion.div variants={containerVariants} className="flex w-full flex-col items-center justify-center gap-[14px] px-[12px] py-[20px] md:flex-row md:gap-[28px] md:px-[24px] md:py-[40px]">
          {items.map((t, index) => (
            <TestimonialItem key={index} {...t} />
          ))}
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default Testimonials;
