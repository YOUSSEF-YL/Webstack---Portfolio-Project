import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;

export const ABOUT_TEXT = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Lead Software Architect",
    company: "TechWave Solutions",
    description: `Architected and developed scalable microservices using Python and Django. Led a team of developers to implement cloud-based solutions on AWS. Conducted code reviews and provided mentorship to junior developers.`,
    technologies: ["Python", "Django", "AWS", "Docker"],
  },
  {
    year: "2021 - 2023",
    role: "Senior Backend Developer",
    company: "InnoTech Corp.",
    description: `Engineered backend systems using Node.js and Express.js. Optimized database queries for high-traffic applications using PostgreSQL. Collaborated with frontend teams to integrate APIs and enhance performance.`,
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Redis"],
  },
  {
    year: "2019 - 2021",
    role: "Full Stack Engineer",
    company: "Creative Coders Ltd.",
    description: `Developed interactive web applications using Angular and TypeScript. Built and maintained RESTful APIs with Ruby on Rails. Worked in an Agile environment to deliver features and improvements.`,
    technologies: ["Angular", "TypeScript", "Ruby on Rails", "MongoDB"],
  },
  {
    year: "2017 - 2019",
    role: "Junior Software Developer",
    company: "NextGen Tech",
    description: `Assisted in the development of e-commerce platforms using PHP and Laravel. Integrated third-party APIs for payment processing and logistics. Participated in code reviews and debugging sessions.`,
    technologies: ["PHP", "Laravel", "MySQL", "jQuery"],
  },
];


export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "xxxxx xxxxx xxxxx xxxxx",
  phoneNo: "xx xxxx xxx xx ",
  email: "xxxxxxx xxx xxx xxx",
};
