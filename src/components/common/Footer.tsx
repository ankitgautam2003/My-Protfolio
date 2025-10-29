import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../ui/Button';
import EditText from '../ui/EditText';
import TextArea from '../ui/TextArea';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const serviceID = 'service_evphh0r';
    const templateID = 'template_80ehomj';
    const publicKey = 'Dg0iG7x9Uh_Jp0kLr';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', website: '', message: '' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setStatus('error');
      });
  };

  return (
    <footer className="w-full flex flex-col justify-center items-center bg-global-3 py-[30px] md:py-[60px]">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[80px]">
        {/* ✅ Contact Heading */}
        <div className="w-full flex justify-center items-center mb-10">
          <span
            id="contact-me"
            className="font-sora text-[24px] font-normal leading-[31px] text-global-1 md:text-[48px] md:leading-[61px]"
          >
            Contact
          </span>
          <span className="ml-[8px] font-sora text-[24px] font-extrabold leading-[31px] text-global-1 md:ml-[16px] md:text-[48px] md:leading-[61px]">
            Me
          </span>
        </div>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row justify-between items-end w-full gap-[40px] lg:gap-[60px]">
          {/* Contact Form Section (Left) */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-start items-start w-full lg:w-1/2 gap-[20px]"
          >
            <div className="flex flex-col gap-[10px] md:gap-[20px] w-full">
              <EditText
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange('name')}
                required
                className="w-full text-[14px] font-sora border border-global-1 rounded-[4px] px-[12px] py-[7px] md:px-[24px] md:py-[14px]"
              />
              <EditText
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange('email')}
                required
                className="w-full text-[14px] font-sora border border-global-1 rounded-[4px] px-[12px] py-[7px] md:px-[24px] md:py-[14px]"
              />
              <EditText
                type="url"
                placeholder="Your website (If exists)"
                value={formData.website}
                onChange={handleInputChange('website')}
                className="w-full text-[14px] font-sora border border-global-1 rounded-[4px] px-[12px] py-[7px] md:px-[24px] md:py-[14px]"
              />
              <TextArea
                placeholder="How can I help?*"
                value={formData.message}
                onChange={handleInputChange('message')}
                rows={6}
                required
                className="w-full text-[14px] font-sora border border-global-1 rounded-[4px] px-[12px] py-[6px] md:px-[24px] md:py-[12px]"
              />
            </div>

            {/* Buttons + Socials */}
            <div className="flex flex-col sm:flex-row gap-[12px] md:gap-[24px] justify-start items-center w-full">
              <Button
                type="submit"
                disabled={status === 'sending'}
                className={`text-[16px] md:text-[20px] font-sora font-semibold text-left
                ${
                  status === 'sending'
                    ? 'bg-global-2 text-white cursor-not-allowed'
                    : 'bg-white text-black hover:bg-black hover:text-white transition-colors'
                }
                rounded-[4px] px-[10px] py-[6px] md:px-[20px] md:py-[12px] w-full sm:w-auto border border-global-5`}
              >
                {status === 'sending' ? 'Sending...' : 'Get In Touch'}
              </Button>

              {/* Social Icons */}
              <div className="flex flex-row gap-[10px] md:gap-[20px] justify-center items-center">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ankit-gautam-85a807259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center items-center bg-white border border-global-1 rounded-[4px] p-[9px] md:p-[18px] hover:bg-black transition-colors"
                >
                  <img
                    src="https://www.shareicon.net/data/2016/07/13/606885_linkedin_2048x2048.png"
                    alt="linkedin Icon"
                    className="h-[10px] w-[10px] group-hover:invert md:h-[20px] md:w-[20px]"
                  />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ankitgautam2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center items-center bg-white border border-global-1 rounded-[4px] p-[9px] md:p-[18px] hover:bg-black transition-colors"
                >
                  <img
                    src="https://pngimg.com/uploads/github/github_PNG40.png"
                    alt="GitHub Icon"
                    className="h-[10px] w-[10px] group-hover:invert md:h-[20px] md:w-[20px]"
                  />
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/ankit_gautam_03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center items-center bg-white border border-global-1 rounded-[4px] p-[9px] md:p-[18px] hover:bg-black transition-colors"
                >
                  <img
                    src="/images/img_social_icon_black_900.svg"
                    alt="Twitter Icon"
                    className="h-[10px] w-[10px] group-hover:invert md:h-[20px] md:w-[20px]"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ankit_gautam_03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center items-center bg-white border border-global-1 rounded-[4px] p-[9px] md:p-[18px] hover:bg-black transition-colors"
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"
                    alt="Insta Icon"
                    className="h-[10px] w-[10px] group-hover:invert md:h-[20px] md:w-[20px]"
                  />
                </a>
              </div>
            </div>

            {/* Form Status */}
            {status === 'success' && <p className="text-green-500">Thanks for reaching out, I’ll get back to you shortly.</p>}
            {status === 'error' && (
              <p className="text-red-500">Looks like the last message didn’t go through. Trying again now!</p>
            )}
          </form>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-[36px] items-start">
            <div className="flex flex-wrap gap-x-2">
              <span className="text-[24px] md:text-[48px] font-sora font-extrabold text-global-1">
                Let’s Build Something Together
              </span>
            </div>
            <p className="text-[14px] md:text-[16px] font-sora font-normal text-global-3">
              I love pushing the limits of creativity to craft highly engaging, user-friendly, and
              memorable digital experiences.
            </p>
            <p className="text-[14px] md:text-[16px] font-sora font-normal text-global-3">
              Whether you have a project, an idea, or just want to connect—feel free to reach out.
            </p>
            <div className="flex flex-col gap-[2px]">
              <span className="text-[18px] md:text-[28px] font-sora font-semibold text-global-1">
                ankitgautam6835@gmail.com
              </span>
              <span className="text-[18px] md:text-[28px] font-sora font-semibold text-global-1">
                +91 9889524500
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
