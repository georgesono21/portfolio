import React from 'react';
import { LampContainer } from './ui/Lamp';
import { socialMedia } from '@/data'; // Assuming you're importing social media data from '@/data'

const Connect = () => {
  // Description text

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-10" id = "connect">
      <LampContainer>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-purple-700 mb-8 pt-3">
          Let's <span className="text-purple">connect!</span>
        </h1>
          <p className="text-lg md:text-xl text-start mb-8 max-w-xl mx-auto">
            Whether you're a recruiter, fellow student, or a software engineer looking to collaborate on a project or ask questions, <span className = "text-purple italic">I'm always open to connect!</span></p>
      <div className="flex items-center justify-center gap-10 pt-3">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-30 h-30 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 rounded-lg"
          >
            {info.id === 3 ? (
              <a href="mailto:yoshinobugeorgesono@gmail.com" target="_blank">
                <img src={info.img} alt="icons" width={80} height={80} />
              </a>
            ) : (
              <a href={info.link} target="_blank">
                <img src={info.img} alt="icons" width={60} height={60} />
              </a>
            )}
          </div>
        ))}
      </div>

      <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-9c700.appspot.com/o/Yoshinobu_Sono.pdf?alt=media&token=3b55d7b7-1ebb-4349-b449-1d7aa7284845" target="_blank" className="italic text-purple pt-3 block text-center">
        View Resume
      </a>
      </LampContainer>

    
    </div>
  );
};

export default Connect;
