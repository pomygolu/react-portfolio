import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 4 years of hands-on experience, I have honed my skills in front-end technologies like HTML, CSS, React and Javascript, as well as back-end technologies like ASP.NET Core, SQL Server, RabbitMQ, AWS, and API development. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 4 years of professional experience, I have worked with a variety of technologies, including ASP.NET Core, React, Node.js, SQL Server, JavaScript, Redis and ElasticSearch. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies and places, playing different sports and reading books.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Software Engineer",
    company: "Cimpress",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and ASP.NET Core. Implemented RESTful APIs and integrated with SQL Server databases. Collaborated with stakeholders to define project requirements and timelines. Provided technical mentorship to junior developers, promoting a culture of learning and growth.`,
    technologies: ["ASP.NET Core", "React.js", "Javascript", "SQL Server", "RabbitMQ", "ElasticSearch", "AWS", "Redis"],
  },
  {
    year: "2020 - 2023",
    role: "Software Engineer",
    company: "Cimpress",
    description: `Contributed significantly to launching multiple e-commerce stores successfully on the NopCommerce framework by working on crucial projects. Implemented complex functionalities and optimized website performance.`,
    technologies: ["HTML", "CSS", "Javascript", "SQL Server", "ASP.NET Core", "Git", "MVC"],
  }
];

export const PROJECTS = [
  {
    title: "Cache Service",
    image: project1,
    description:
      "A fully functional console application built with ASP.NET, designed to simulate a caching service where users can store and retrieve key-value pairs, utilizing an LRU (Least Recently Used) eviction policy.",
    technologies: ["C#", "ASP.NET"],
  },
  {
    title: "Place Management Website",
    image: project2,
    description:
      "An application for managing different places with their details uploaded by different users, with features such as authentication and authoriation for CRUD operation, read-only for guests and Google's geocoding API to convert user-entered address to geographic coordinates.",
    technologies: ["React", "CSS", "MongoDB", "Express", "NodeJs"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "React", "Tailwind CSS", "Framer Motion"],
  }
];

export const CONTACT = {
  address: " Gosaidih, Dhanbad, Jharkhand ",
  phoneNo: "9999999999 ",
  email: "rohitdalmia23@gmail.com",
};
