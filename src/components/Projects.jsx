import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4 flex flex-col items-center lg:items-start'>
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className='mb-4'
              />
              <h3 className='text-2xl font-bold'>{project.title}</h3>
              <p className='mt-2'>{project.description}</p>
              <div className='mt-4'>
                <strong>Technologies:</strong>
                <ul className='list-disc list-inside'>
                  {project.technologies.map((tech, techIndex) => (
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

export default Projects;
