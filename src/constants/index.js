import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  next,
  bhaskar,
  cs,
  metube,
  interfacep,
  bored,
  srijan,
  guernica,
  netflix,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  { name: "Next.js", icon: next },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Technical Head",
    company_name:
      "Bhaskaracharya College of Applied Sciences , Delhi University",
    icon: bhaskar,
    iconBg: "#ffffff",
    date: "July 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name:
      "Computer Science Department , Bhaskaracharya College of Applied Sciences , Delhi University",
    icon: cs,
    iconBg: "#ffffff",
    date: "Nov 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I recently had the pleasure of working with Aditya, a skilled web developer who designed a website for our departmental fest. I was impressed by Aditya's attention to detail, expertise, and professionalism.He took the time to understand our requirements and delivered a visually stunning website that was both user-friendly and easy to navigate.",
    name: "Jatin Yadav",
    designation: "President",
    company: "CS Department , BCAS , Delhi University",
  },
  {
    testimonial: "",
    name: "Karuna Sharma",
    designation: " President",
    company: "ECA , BCAS , Delhi University",
  },
  {
    testimonial:
      "I would like to take my time to appreciate the work of the graphics team, especially Aditya Sinha (Tech-head, ECA team) for creating the website for our annual cultural fest Srijan 2023. He created a simple yet beautiful website, easy to navigate with all the information presented in a theme-based manner.",
    name: "Satya Brat Kar",
    designation: "Vice President",
    company: "ECA , BCAS , Delhi University",
  },
];

const projects = [
  {
    name: "Srijan",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "animatecss",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: srijan,
    source_code_link: "https://github.com/adityawebdev/srijan",
    project_link: "https://srijan2k23.netlify.app",
  },
  {
    name: "Interface 2k23",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: interfacep,
    source_code_link: "https://github.com/adityawebdev/department_fest",
    project_link: "https://interface2k23.github.io/CS/",
  },
  {
    name: "MeTube",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metube,
    source_code_link: "https://github.com/adityawebdev/YouTube-Clone",
    project_link: "https://me-tube.netlify.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/adityawebdev/Netflix",
    project_link: "https://adityawebdev.github.io/Netflix/",
  },
  {
    name: "Guernica",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: guernica,
    source_code_link: "https://github.com/adityawebdev/Guernica",
    project_link: "https://guernicaweb.netlify.app",
  },
  {
    name: "Getting Bored",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: bored,
    source_code_link: "https://github.com/adityawebdev/GettingBored",
    project_link: "https://gettingbored.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
