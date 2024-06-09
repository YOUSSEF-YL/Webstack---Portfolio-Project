import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <h3 className='text-2xl font-bold'>{experience.role}</h3>
              <p className='text-lg italic'>{experience.company}</p>
              <p className='text-sm'>{experience.year}</p>
              <p className='mt-4'>{experience.description}</p>
              <div className='mt-4'>
                <strong>Technologies:</strong>
                <ul className='list-disc list-inside '>
                  {experience.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
