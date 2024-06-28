export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Connect", link: "#connect" },
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
    title: "Social Media",
    description: "",
    className: "lg:col-span-2 md:col-span-2 justify-center items-center",
    imgClassName: "",
    titleClassName: "text-center underline pb-9",
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
    img: "/pdfpal.png",
    iconLists: ["/re.svg", "/js.svg", "/html.svg", "/css.svg", "/python.svg","/flask.svg","/openai.svg", "/git.svg"],
    link: "https://github.com/georgesono21/PDFPal",
  },
  {
    id: 2,
    title: "Task Manager",
    des: "Real-time Task Management App",
    img: "/taskmanager.png",
    iconLists: ["/js.svg", "/html.svg", "/css.svg", "/python.svg", "/git.svg"],
    link: "https://github.com/georgesono21/taskmanager",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    des: "What you're currently viewing! A Personal Website.",
    img: "/portfolio.png",
    iconLists: ["/next.svg", "/tail.svg", "/html.svg", "/css.svg", "/ts.svg", "/git.svg"],
    link: "https://github.com/georgesono21/portfolio",
  },
  {
    id: 4,
    title: "MapReduce for WordCount",
    des: "Recreated Google's MapReduce in C!",
    img: "/mapreduce.png",
    iconLists: ["/cprog.png", "/dock.svg", "/bash.svg", "/git.svg"],
    link: "https://github.com/georgesono21/mapReduce",
  },

  {
    id: 5,
    title: "PlateBuddy",
    des: "For home gym-goers with weird weight increments.",
    img: "/b5.svg",
    iconLists: ["/next.svg", "/tail.svg", "/html.svg", "/css.svg", "/ts.svg", "/git.svg"],
    link: "https://github.com/georgesono21/plate-buddy",
  },
  {
    id: 6,
    title: "AI Pacman",
    des: "Using AI techniques to make Pacman think and act like a human.",
    img: "/pacman.png",
    iconLists: ["/python.svg", "/bash.svg", "/git.svg"],
    link: "https://github.com/georgesono21/ai-pacman",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-stack Developer Intern",
    desc: [
    "Collaborated closely with the team and management to gather and define MVP requirements, ensuring a comprehensive understanding of desired functionalities and user expectations for the iOS app.",
    "Implemented user profile viewing and editing functionality for the iOS app using Swift/Xcode, leveraging Firebase (FB) Firestore to fetch and display profile information, allowing users to discover and interact with profiles.",
    "Developed multi-purpose lookup tables with Swift Generics to optimize data retrieval for posts, users, and chats, resulting in improved app performance, enhanced UX, and cost savings through reduced server load.",
    "Designed and deployed REST APIs through Firebase functions in JS, aimed at ensuring information security and proper data retrieval while enabling efficient communication between client and backend services.",
    "Created schema diagrams outlining the proposed schema for posts, users and chats, presenting them to the team to ensure a clear understanding of the project's technical structure and requirements."
    ],
    className: "",
    thumbnail: "/exp1.svg",
    company: "Footsee"
  },
  {
    id: 2,
    title: "Class Tutor/Reader",
    desc: [
    "Tutored for CSE101 (Tantalo) for Spring 2023 and CSE13s for Fall 2023 (Pusukuri) and Winter 2024 (Alvaro).",
    "Conducted tutoring sessions to assist an average of 15 students per week in understanding concepts.",
    "Clarified complex topics and answered questions, utilizing effective visual aids and diagrams.",
    "Debugged C++/C code and troubleshooted errors in students' labs, ensuring accurate implementation.",
    "Assisted the professor in grading assignments and exams with accuracy and efficiency, maintaining a grading turnaround time of 48 hours or less."
],
    className: "", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    company: "UCSC Baskin School of Engineering"
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