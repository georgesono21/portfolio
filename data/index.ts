export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "About me",
    description: "Hello! I'm Yoshinobu, but I also go by George. Originally from Japan, I'm currently a Computer Science student at the University of California Santa Cruz. I'm passionate about solving automation problems and making processes more efficient. Since high school, I've been fascinated by the power of technology to streamline tasks and improve productivity. I'm also a fast and adaptive learner, accustomed to working in agile environments. I hope you'll explore the rest of my portfolio to learn more about my experiences and skills in the field of Computer Science!",
    className: "lg:col-span-4 md:col-span-4 md:row-span-1 lg:row-span-1 ",
    imgClassName: "",
    titleClassName: "underline",
    img: "",
    spareImg: "",        
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "hidden md:block lg:block lg:col-span-1 md:col-span-2  justify-center",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "george.png",
    spareImg: "",
  },
  {
    id: 3,
    title: "Technical Skills",
    description: " ",
    className: "lg:col-span-5 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "underline",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A tech enthusiast with a passion for software development, dedicated to leveraging innovative solutions to address social challenges and create impactful, scalable applications",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
      spareImg: "",
    },
  {
    id: 5,
    title: "Let's connect!",
    description: "",
    className: "lg:col-span-2 md:col-span-2  ",
    imgClassName: "",
    titleClassName: "text-center underline",
    img: "",
    spareImg: "",
  },
];

export const technicalSkills = [
  {
    category: "Programming",
    items: [
      "Python",
      "C/C#/C++",
      "Swift",
      "HTML/CSS",
      "Java/TypeScript (React, Node, Vue)",
      "Golang",
      "Dart (Flutter)",
      "Bash",
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      "Firebase",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Git",
      "Docker",
      "Insomnia",
      "Postman",
    ],
  },
  {
    category: "Software",
    items: [
      "Notion",
      "Jira",
      "Linux (Ubuntu)",
      "Figma",
      "Microsoft Office (Excel, PowerPoint, Word)",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "PDFPal",
    des: "Chat with any PDF!",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/georgesono21/PDFPal",
  },
  {
    id: 2,
    title: "Task Manager",
    des: "Real-time Task Management App",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/georgesono21/taskmanager",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    des: "What you're currently viewing! A Personal Website.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/georgesono21/portfolio",
  },
  {
    id: 4,
    title: "MapReduce for WordCount",
    des: "Recreated Google's MapReduce in C!",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },

  {
    id: 5,
    title: "PlateBuddy",
    des: "For home gym-goers with weird weight increments.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/georgesono21/plate-buddy",
  },
  {
    id: 6,
    title: "AI Pacman",
    des: "Using AI techniques to make Pacman think and act like a human.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/georgesono21"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/yoshinobu-sono/"
  },
    {
    id: 3,
    img: "/mail.svg",
  },
];