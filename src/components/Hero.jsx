import React from 'react';

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start lg:pl-16 text-white'>
            <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-18xl'>
              YOUSSEF BACHAR
            </h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-light text-transparent'>
              Web Developer
            </span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolore qui. Dignissimos eius sunt aut eos laborum aliquam optio fugit cupiditate consequatur fuga itaque ea, temporibus minima animi dolorum esse!
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <img src="/src/assets/Profile.png" alt="youssef bachar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
