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
    gdsc,
    ecs,
    stepApp,
    meta,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "hero",
      title: "About",
    },
    {
      id: "work",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Strategic Approach",
      icon: web,
    },
    {
      title: "Proven Results",
      icon: mobile,
    },
    {
      title: "Innovative Solutions",
      icon: backend,
    },
    {
      title: "Collaborative Partnerships",
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
    }
  ];
  
  const experiences = [
    {
      title: "Search Engine Optimization (SEO)",
      company_name: "Exquisite - StepApp",
      icon: stepApp,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Elevate your online visibility by optimizing your website to rank higher on search engine results pages (SERPs). Our SEO strategies are tailored to attract your target audience and drive organic traffic.",
      ],
    },
    {
      title: "Email Marketing",
      company_name: "Google Developer Students Club - NIT Silchar",
      icon: gdsc,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Engage and nurture your audience through targeted email campaigns. We craft compelling messages that resonate with your subscribers, fostering lasting relationships and driving conversions."
      ],
    },
    {
      title: "Content Creation",
      company_name: "NERDS - Robotics Society NIT Silchar",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Establish your brand as an industry authority with our content creation services. We produce high-quality and relevant content that resonates with your audience, driving brand awareness and customer loyalty",
      ],
    },
    {
      title: "Social Media Marketing",
      company_name: "NERDS - Robotics Society NIT Silchar",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Leverage the power of social platforms to build brand awareness, engage your audience, and drive meaningful interactions. Our social media strategies are designed to enhance your online presence and connect with your target demographic.",
      ],
    },
    {
      title: "Web Design and Development",
      company_name: "Electronics And Communication Society - NIT Silchar",
      icon: ecs,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Craft a digital space that leaves a lasting impression. Our web design and development services focus on creating visually stunning, user-friendly websites that embody your brand and deliver an exceptional user experience.",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
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
      name: "Polaroid - Social Media Platform",
      description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/XRegiGigaSX/Versa-advChatApp",
    },
    {
      name: "AIINIT Website",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "REST API",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/XRegiGigaSX/internit-2022-website",
    },
    {
      name: "Versa - Advanced Chat App",
      description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/XRegiGigaSX/Versa-advChatApp",
    },
    {
      name: "RedTube - YouTube Clone",
      description:
      "A functional clone of YouTube, which works perfectly for mobile and with features like channel viewing, playlists and video playback.",
      tags: [
        {
          name: "REST API",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/XRegiGigaSX/RedTube_YouTube_clone",
    },
    {
      name: "Grafiny - GDSC NITS",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/XRegiGigaSX/grafiny-client",
    },
  ];
  
  export { services, technologies, experiences, projects };