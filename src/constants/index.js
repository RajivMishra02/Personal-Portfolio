import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    nmdc,
    starbucks,
    skillrazr,
    tesla,
    shopify,
    carrent,
    mofit,
    topcourse,
    planwithlove,
    jobit,
    tripguide,
    threejs,
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
      title: "FrontEnd Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Writer",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
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
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Networking Intern",
      company_name: "NMDC",
      icon: nmdc,
      iconBg: "#E6DEDD",
      date: "June 2021 - August 2021",
      points: [
        "Understand the various applications of computer networking in a steel plant.",
        "Properly study and get a brief idea about the implementation of internet and intranet facilities spanning the entire steel plant.",
        "Getting knowledge about the SAP S4 HANA technology and it's useful integration and implementation.",
        "Writting project reports and getting a knowledge on the wired and wireless technology.",
      ],
    },
    {
      title: "FrontEnd Developer Intern",
      company_name: "SkillRazr",
      icon: skillrazr,
      iconBg: "#383E56",
      date: "April 2023 - Jul 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with the author, teammates and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
   
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to complete our website, but we together finally made it to the deadline.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "MoFit",
      description:
        "Web-based platform that allows users to add their workouts and sleep schedule providing a convenient and efficient solution for fitness needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firestore",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: mofit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Top Courses",
      description:
        "Web application that enables users to choose from the top courses from various disciplines and even like the different courses.",
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
      image: topcourse,
      source_code_link: "https://github.com/",
    },
    {
      name: "Plan With Love",
      description:
        "A comprehensive travel booking platform that allows users to check accomodation costs and offers curated recommendations for popular destinations.",
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
      image: planwithlove,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };