import { Link } from "react-router-dom";

const cardname = [
  {
    courseTitle: (
      <Link to='/complete2023webdevelopment' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
        The Ultimate 2023 Fullstack Web Development Bootcamp
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/3655840_1c3c.jpg",
    courseAuthor: "Kane Ezki,Kalob Taulien,Radek Wilk",
    pophours: "40 total hours . All Levels . Subtitles",
    popdesc:
      "Become a fullstack web developer (and get a job) by taking this ONE course, even if you've never coded before.",
    popone: "Be able to build ANY website you want",
    poptwo:
      "Build fully-fledged websites and web apps for your startup or business.",
    popthree: "Master backend development with Django and Python.",
  },

  {
    courseTitle: (
      <Link to='/100daysofpythoncode' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
        100 Days of Code: The Complete Python Pro Bootcamp for 2023
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/2776760_f176_10.jpg",
    courseAuthor: "Angela Yu",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    popone:
      "You will master the Python programming language by building 100 unique projects over 100 days.",
    poptwo:
      "You will learn automation, game, app and web development, data science and machine learning all using Python.",
    popthree: "You will be able to program in Python professionally",
  },

  {
    courseTitle: (
      <Link to='/Node.js, Express, MongoDB & More: The Complete Bootcamp 2024' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
        Node.js, Express, MongoDB & More: The Complete Bootcamp 2024
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/1672410_9ff1_5.jpg",
    courseAuthor: "Jonas schmedtmann",
    pophours: "36.5 total hours . All LevelsSubtitles, . CC",
    popdesc:
      "Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)",
    popone:
      "Master the entire modern back-end stack: Node, Express, MongoDB and Mongoose (MongoDB JS driver)",
    poptwo:
      "Build a complete, beautiful & real-world application from start to finish (API and server-side rendered website)",
    popthree:
      "Build a fast, scalable, feature-rich RESTful API (includes filters, sorts, pagination, and much more)",
  },
  {
    courseTitle: (
      <Link to='/The Complete JavaScript Course 2024: From Zero to Expert!' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
        The Complete JavaScript Course 2024: From Zero to Expert!
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/851712_fc61_6.jpg",
    courseAuthor: "Jonas schmedtmann",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    popone:
      "Become an advanced, confident, and modern JavaScript developer from scratch",
    poptwo:
      "Build 6 beautiful real-world projects for your portfolio (not boring toy apps)",
    popthree:
      "Become job-ready by understanding how JavaScript really works behind the scenes",
  },
  {
    courseTitle: (
      <Link to='/Complete Figma Megacourse: UI/UX Design Beginner to Expert' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
        Complete Figma Megacourse: UI/UX Design Beginner to Expert
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/4279488_7a29_2.jpg",
    courseAuthor: "Creativity UnLeashed",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc:
      "This course will be your personal guide for interface design using Figma! Go from the basics to working professionally!",
    popone: "The principles of User Interface Design and Prototyping",
    poptwo: "The basics of Human-Computer Interaction",
    popthree: "How to read a User Flow Diagram",
  },
  {
    courseTitle: (
      <Link to='/Angular - The Complete Guide (2023 Edition)' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
        Angular - The Complete Guide (2023 Edition)
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/756150_c033_2.jpg",
    courseAuthor: "Maximilian Schwarzmüller",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc:
      "Master Angular formerly Angular 2 and build awesome, reactive web apps with the successor of Angular.js",
    popone:
      "Develop modern, complex, responsive and scalable web applications with Angular",
    poptwo:
      "Fully understand the architecture behind an Angular application and how to use it",
    popthree:
      "Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer",
  },
  {
    courseTitle: (
      <Link to='/NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
        NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)
      </a></Link>
    ),
    courseImg:
      "https://a.storyblok.com/f/42126/c3ae1d7c78/nodejs-the-complete-guide.png",
    courseAuthor: "Maximilian Schwarzmüller",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc:
      "Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
    popone:
      "Work with one of the most in-demand web development programming languages",
    poptwo:
      "Learn the basics as well as advanced concepts of NodeJS in great detai",
    popthree:
      "Build modern, fast and scalable server-side web applications with NodeJS, databases like SQL or MongoDB and more",
  },
  {
    courseTitle: (
      <Link to='/Build Responsive Real-World Websites with HTML and CSS' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
        "Build Responsive Real-World Websites with HTML and CSS"
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/437398_46c3_10.jpg",
    courseAuthor: "Jonas schmedtmann",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc:
      "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid!",
    popone:
      "Become a modern and confident HTML and CSS developer, no prior knowledge needed!",
    poptwo:
      "Design and build a stunning real-world project for your portfolio from scratch",
    popthree: "Modern, semantic and accessible HTML5",
  },
  {
    courseTitle: (
      <Link to='/Advanced CSS and Sass: Flexbox, Grid, Animations and More!' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
       Advanced CSS and Sass: Flexbox, Grid, Animations and More!
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/1026604_790b_2.jpg",
    courseAuthor: "Jonas schmedtmann",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc:
      "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",
    popone:
      "Tons of modern CSS techniques to create stunning designs and effects",
    poptwo: "Advanced CSS animations with @keyframes, animation and transition",
    popthree:
      "How CSS works behind the scenes: the cascade, specificity, inheritance, etc",
  },
];

export default cardname;

export const JavaScriptcards = [
  {
    courseTitle: (
      <Link to='/JAVASCRIPT with HTML5,CSS3 from zero to Expert-2023' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
      JAVASCRIPT with HTML5,CSS3 from zero to Expert-2023
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/3726582_f4a7.jpg",
    courseAuthor: "Hemanth kumar",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc:
      "Learn HTML5, CSS3, JavaScript by building a modern looking responsive website.",
    popone:
      "At the end of this course, You will have a great skills set like HTML5, CSS3, JavaScript",
    poptwo:
      "You will see, the complete web development process from start to finish project.",
    popthree:
      "You will learn about media queries and will be able to make website perfect for responsive design.",
  },
  {
    courseTitle: (
      <Link to='/JavaScript - Basics to Advanced step by step' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
      JavaScript - Basics to Advanced step by step
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/3033186_ea5d_3.jpg",
    courseAuthor: "Qaifi Khan",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc:
      "A perfect JavaScript course for all those who want to learn and master JavaScript programming skills right from scratch.",
    popone:
      "Basics of JavaScript (Data types, Loops, Arrays, Objects, Functions, etc)",
    poptwo:
      "Introduction to Document Object Model(DOM) and Browser Object Model(BOM) in Java",
    popthree: "OOPs concepts in JavaScript",
  },
  {
    courseTitle: (
      <Link to='/Learn JavaScript - For Beginners by YouAccel Training' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
      Learn JavaScript - For Beginners by YouAccel Training
      </a></Link>
    ),
    courseImg:
      "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/javascriptfull.png",
    courseAuthor: "youAccel Training",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc: "Learn how to Code Web Pages using JavaScript",
    popone: "Document Object Model (DOM)",
    poptwo: "JavaScript Variables & Constants",
    popthree: "JavaScript Arithmetic Operators",
  },
  {
    courseTitle: (
      <Link to='/CSS & JavaScript - Certification Course for Beginners' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
      CSS & JavaScript - Certification Course for Beginners
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/2411008_174b_3.jpg",
    courseAuthor: "youAccel Training",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc:
      "A Comprehensive Guide for Beginners interested in learning HTML, CSS, & JavaScript to Build Interactive Web Pages.",
    popone: "Design and build well-structured webpages using HTML",
    poptwo: "Implement semantic markup for improved accessibility and SEO",
    popthree: "Create visually appealing websites with CSS styling",
  },
  // {
  //   courseTitle: "CSS & JavaScript - Certification Course for Beginners",
  //   courseTitle: (
  //     <Link to='/complete2023webdevelopment' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
  //     JAVASCRIPT with HTML5,CSS3 from zero to Expert-2023
  //     </a></Link>
  //   ),
  //   courseImg: "https://img-c.udemycdn.com/course/750x422/2411008_174b_3.jpg",
  //   courseAuthor: "youAccel Training",
  //   pophours: "68.5 total hours . All Levels . Subtitles",
  //   popdesc:
  //     "A Comprehensive Guide for Beginners interested in learning HTML, CSS, & JavaScript to Build Interactive Web Pages.",
  //   popone: "Design and build well-structured webpages using HTML",
  //   poptwo: "Implement semantic markup for improved accessibility and SEO",
  //   popthree: "Create visually appealing websites with CSS styling",
  // },
  {
    courseTitle: (
      <Link to='/Complete Javascript & jQuery Course with Bonus Vue JS Intro' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
      Complete Javascript & jQuery Course with Bonus Vue JS Intro
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/3291142_8f0c_5.jpg",
    courseAuthor: "Ivan louraco james",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc:
      "Learn Javascript, jQuery and Ajax from the start + Bonus Intro to Vue JS 3. Incudes complete written course material!",
    popone: "The basics of Javascript from Beginner to Advanced",
    poptwo: "The jQuery Framework",
    popthree: "AJAX and HTTP Requests",
  },
  // {
  //   courseTitle:
  //     "JavaScript: Understanding the Weird Parts to be became a js developer",
  //     courseTitle: (
  //       <Link to='/complete2023webdevelopment' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
  //       JAVASCRIPT with HTML5,CSS3 from zero to Expert-2023
  //       </a></Link>
  //     ),
  //   courseImg: "https://img-c.udemycdn.com/course/750x422/364426_2991_6.jpg",
  //   courseAuthor: "Anthony alicea",
  //   pophours: "68.5 total hours . All Levels . Subtitles",
  //   popdesc:
  //     "An advanced JavaScript course for everyone! Scope, closures, prototypes, 'this', build your own framework, and more.",
  //   popone: "The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021",
  //   poptwo: "Write solid, good Javascript code",
  //   popthree:
  //     "Understand advanced concepts such as closures, prototypal inheritance, IIFEs, and much more.",
  // },
  // {
  //   courseTitle: "JavaScript for Beginners - The Complete introduction to JS",
  //   courseTitle: (
  //     <Link to='/complete2023webdevelopment' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
  //     JAVASCRIPT with HTML5,CSS3 from zero to Expert-2023
  //     </a></Link>
  //   ),
  //   courseImg: "https://img-c.udemycdn.com/course/750x422/3997642_fed4.jpg",
  //   courseAuthor: "Yassin marco",
  //   pophours: "68.5 total hours . All Levels . Subtitles",
  //   popdesc:
  //     "Learn all the Basics of JavaScript and create various basic JavaScript programs and applications",
  //   popone: "Create your own basic programs with JavaScript",
  //   poptwo: "Be able to use JavaScript on a daily basis",
  //   popthree:
  //     "Learn at your own pace with different practical exercices at each class",
  // },
  // {
  //   courseTitle: "JavaScript - The Complete Guide 2023 (Beginner + Advanced)",
  //   courseImg: "https://img-b.udemycdn.com/course/750x422/2508942_11d3_3.jpg",
  //   courseAuthor: "Maximilian Schwarzmüller",
  //   pophours: "68.5 total hours . All Levels . Subtitles",
  //   popdesc:
  //     "Modern JavaScript from the beginning - all the way up to JS expert level! THE must-have JavaScript resource in 2024.",
  //   popone:
  //     "Learn JavaScript from scratch and in great detail - from beginner to advanced",
  //   poptwo:
  //     "All core features and concepts you need to know in modern JavaScript development",
  //   popthree:
  //     "Everything you need to become a JavaScript expert and apply for JavaScript jobs",
  // },
  // {
  //   courseTitle: "The Complete JavaScript Course 2024: From Zero to Expert!",
  //   courseImg: "https://img-c.udemycdn.com/course/750x422/851712_fc61_6.jpg",
  //   courseAuthor: "Jonas schmedtmann",
  //   pophours: "68.5 total hours . All Levels . Subtitles",
  //   popdesc:
  //     "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
  //   popone:
  //     "Become an advanced, confident, and modern JavaScript developer from scratch",
  //   poptwo:
  //     "Build 6 beautiful real-world projects for your portfolio (not boring toy apps)",
  //   popthree:
  //     "Become job-ready by understanding how JavaScript really works behind the scenes",
  // },
];

export const reviewCards = [
  {
    reviewimage:
      "https://th.bing.com/th/id/OIP.2KjGa4HYCPlRa4dbYbre8wAAAA?rs=1&pid=ImgDetMain",
    
    courseName: (
      <Link to='/instructor/JonasSchmedtmann' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
       Jonas Schmedtmann
      </a></Link>),
    courseAuthor: "JavaScript, React JS",
  },
  {
    reviewimage:
      "https://th.bing.com/th/id/OIP.2JUVK4yW3e9EDIimxMNlkQAAAA?rs=1&pid=ImgDetMain",
    courseName: (
      <Link to='/instructor/MaximilianSchwarzmüller' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
       Maximilian Schwarzmüller
      </a></Link>),
    courseAuthor: "Angular, Next.js",
  },
  {
    reviewimage:
      "https://pbs.twimg.com/profile_images/621845465496039428/SgXekq63_400x400.jpg",
    courseName: (
      <Link to='/instructor/StephenGrider' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
       Stephen Grider
      </a></Link>),
    courseAuthor: "React JS, Node.js",
  },
  {
    reviewimage:
      "https://th.bing.com/th/id/OIP.2JUVK4yW3e9EDIimxMNlkQAAAA?rs=1&pid=ImgDetMain",
    courseName: (
      <Link to='/instructor/AcademindbyMaximilian...' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
       Academind by Maximilian...
      </a></Link>),
    courseAuthor: "Docker, Typescript",
  },
  {
    reviewimage: "https://img-c.udemycdn.com/user/200_H/4466306_6fd8_3.jpg",
    courseName: (
      <Link to='/instructor/ColtSteele' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
       Colt Steele
      </a></Link>),
    courseAuthor: "JavaScript",
  },
  // {
  //   reviewimage: "https://img-c.udemycdn.com/user/200_H/21681922_4513_5.jpg",
  //   courseName: "Brad Traversy",
  //   courseAuthor: "JavaScript, CSS",
  // },
];

export const mainPage = [
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "Web Development",
    heading: "The Complete 2023 Web Development Bootcamp",
    description:
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
    Rating: "4.7",
    noOfRatings: "(346,847 ratings)",
    noofStudents: "1,157,115 students",
    createdAuthor: "Dr.Angela Yu",
    lastUpdated: "Last updated 11/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Programming Languages",
    headerLinkA3: "Python",
    heading: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
    description:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    Rating: "4.7",
    noOfRatings: "(261,339 ratings)",
    noofStudents: "1,128,975 students",
    createdAuthor: "Dr.Angela Yu",
    lastUpdated: "Last updated 12/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "Node.Js",
    heading: " Node.js, Express, MongoDB & More: The Complete Bootcamp 2024",
    description:
      "Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)",
    Rating: "4.7",
    noOfRatings: "(21,796 ratings)",
    noofStudents: "132,585 students",
    createdAuthor: "Jonas Schmedtmann",
    lastUpdated: "Last updated 11/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "JavaScript",
    heading: "The Complete JavaScript Course 2024: From Zero to Expert!",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    Rating: "4.7",
    noOfRatings: "(196,796 ratings)",
    noofStudents: "869,585 students",
    createdAuthor: "Jonas Schmedtmann",
    lastUpdated: "Last updated 11/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "Figma",
    heading: "Complete Figma Megacourse: UI/UX Design Beginner to Expert",
    description:
      "This course will be your personal guide for interface design using Figma! Go from the basics to working professionally!",
    Rating: "4.7",
    noOfRatings: "(2,774 ratings)",
    noofStudents: "869,585 students",
    createdAuthor: "Creativity unleashed",
    lastUpdated: "Last updated 11/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "Angular",
    heading: "Angular - The Complete Guide (2024 Edition)",
    description:
      "Master Angular (formerly 'Angular 2') and build awesome, reactive web apps with the successor of Angular.js",
    Rating: "4.6",
    noOfRatings: "(195,644 ratings)",
    noofStudents: "730,585 students",
    createdAuthor: "Maximilian Schwarzmüller ",
    lastUpdated: "Last updated 11/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "Express Framework",
    heading: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    description:
      "Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
    Rating: "4.6",
    noOfRatings: "(195,644 ratings)",
    noofStudents: "730,585 students",
    createdAuthor: "Academind by Maximilian Schwarzmüller,Maximilian Schwarzmüller ",
    lastUpdated: "Last updated 11/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "HTML 5",
    heading: "Build Responsive Real-World Websites with HTML and CSS",
    description:
      "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid",
    Rating: "4.7",
    noOfRatings: "(102,644 ratings)",
    noofStudents: "Jonas schmedtmann",
    lastUpdated: "Last updated 11/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "CSS",
    heading: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    description:
      "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",
    Rating: "4.7",
    noOfRatings: "(42,644 ratings)",
    noofStudents: "Jonas schmedtmann",
    lastUpdated: "Last updated 11/2023",
  },
  // JavaScript cards
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "JavaScript",
    heading: "JAVASCRIPT with HTML5,CSS3 from zero to Expert-2023",
    description:
      "Learn HTML5, CSS3, JavaScript by building a modern looking responsive website.",
    Rating: "4.7",
    noOfRatings: "(4,691 ratings)",
    noofStudents: "Hemanth Kumar",
    lastUpdated: "Last updated 11/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "JavaScript",
    heading: "JavaScript - Basics to Advanced step by step",
    description:
      "A perfect JavaScript course for all those who want to learn and master JavaScript programming skills right from scratch.",
    Rating: "4.7",
    noOfRatings: "(4,691 ratings)",
    noofStudents: "Hemanth Kumar",
    lastUpdated: "Last updated 11/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "JavaScript",
    heading: "The Complete JavaScript Course 2024: From Zero to Expert!",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    Rating: "4.7",
    noOfRatings: "(196,691 ratings)",
    noofStudents: "Jonas Schedtmann",
    lastUpdated: "Last updated 11/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "JavaScript",
    heading: "HTML, CSS, & JavaScript - Certification Course for Beginners",
    description:
      "A Comprehensive Guide for Beginners interested in learning HTML, CSS, & JavaScript to Build Interactive Web Pages.",
    Rating: "4.7",
    noOfRatings: "(8,757 ratings)",
    noofStudents: "YouAccel Training",
    lastUpdated: "Last updated 11/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Web Development",
    headerLinkA3: "JavaScript",
    heading: "HTML, CSS, & JavaScript - Certification Course for Beginners",
    description:
      "Complete Javascript & jQuery Course with Bonus Vue JS Intro",
    Rating: "4.7",
    noOfRatings: "(10,532 ratings)",
    noofStudents: "YouAccel Training",
    lastUpdated: "Last updated 11/2023",
  },

  // Python Cards

  {
    headerLinkA1: "Development",
    headerLinkA2: "Programming Languages",
    headerLinkA3: "Python",
    heading: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
    description:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    Rating: "4.7",
    noOfRatings: "(261,339 ratings)",
    noofStudents: "1,128,975 students",
    createdAuthor: "Dr.Angela Yu",
    lastUpdated: "Last updated 12/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Programming Languages",
    headerLinkA3: "Python",
    heading: " Python for Absolute Beginners | Python Beginner to Pro",
    description:
      "Beginner friendly Python! Become a fluent Python programmer Learn the Python basics then build inspiring Python projects",
    Rating: "4.7",
    noOfRatings: "(5,339 ratings)",
    noofStudents: "23,975 students",
    createdAuthor: "Dr.Angela Yu",
    lastUpdated: "Last updated 12/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Programming Languages",
    headerLinkA3: "Python",
    heading: " Python for Absolute Beginners | Python Beginner to Pro",
    description:
      "Beginner friendly Python! Become a fluent Python programmer Learn the Python basics then build inspiring Python projects",
    Rating: "4.7",
    noOfRatings: "(5,339 ratings)",
    noofStudents: "23,975 students",
    createdAuthor: "Dr.Angela Yu",
    lastUpdated: "Last updated 12/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Programming Languages",
    headerLinkA3: "Python",
    heading: "Master Programming and Development with 15 Projects",
    description:
      "Learn complete Python with Basics, Data Science, Data Visualisation, Desktop Graphical Applications and Machine Learning",
    Rating: "4.7",
    noOfRatings: "(13,539 ratings)",
    noofStudents: "23,975 students",
    createdAuthor: "Dr.Angela Yu",
    lastUpdated: "Last updated 12/2023",
  },
  {
    headerLinkA1: "Development",
    headerLinkA2: "Programming Languages",
    headerLinkA3: "Python",
    heading: "Python : Master Programming and Development with 15 Projects",
    description:
      "Learn complete Python with Basics, Data Science, Data Visualisation, Desktop Graphical Applications and Machine Learning",
    Rating: "4.7",
    noOfRatings: "(7,348 ratings)",
    noofStudents: "10,345 students",
    createdAuthor: "Dev Nirwal",
    lastUpdated: "Last updated 12/2023",
  }

];

// export const tooltippopup=[
//     {
//        pophours:"40 total hours . All Levels . Subtitles",
//        popdesc :"Become a fullstack web developer (and get a job) by taking this ONE course, even if you've never coded before.",
//        popone:"Be able to build ANY website you want",
//        poptwo:"Build fully-fledged websites and web apps for your startup or business.",
//        popthree:"Master backend development with Django and Python."
//     },
//     {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
//         popone:"You will master the Python programming language by building 100 unique projects over 100 days.",
//         poptwo:"You will learn automation, game, app and web development, data science and machine learning all using Python.",
//         popthree:"You will be able to program in Python professionally"
//      },
//      {
//         pophours:"36.5 total hours . All LevelsSubtitles, . CC",
//         popdesc :"Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)",
//         popone:"Master the entire modern back-end stack: Node, Express, MongoDB and Mongoose (MongoDB JS driver)",
//         poptwo:"Build a complete, beautiful & real-world application from start to finish (API and server-side rendered website)",
//         popthree:"Build a fast, scalable, feature-rich RESTful API (includes filters, sorts, pagination, and much more)"
//      },
//      {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
//         popone:"Become an advanced, confident, and modern JavaScript developer from scratch",
//         poptwo:"Build 6 beautiful real-world projects for your portfolio (not boring toy apps)",
//         popthree:"Become job-ready by understanding how JavaScript really works behind the scenes"
//      },
//      {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"This course will be your personal guide for interface design using Figma! Go from the basics to working professionally!",
//         popone:"The principles of User Interface Design and Prototyping",
//         poptwo:"The basics of Human-Computer Interaction",
//         popthree:"How to read a User Flow Diagram"
//      },
//      {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"Master Angular formerly Angular 2 and build awesome, reactive web apps with the successor of Angular.js",
//         popone:"Develop modern, complex, responsive and scalable web applications with Angular",
//         poptwo:"Fully understand the architecture behind an Angular application and how to use it",
//         popthree:"Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer"
//      },
//      {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
//         popone:"Work with one of the most in-demand web development programming languages",
//         poptwo:"Learn the basics as well as advanced concepts of NodeJS in great detai",
//         popthree:"Build modern, fast and scalable server-side web applications with NodeJS, databases like SQL or MongoDB and more"
//      },
//      {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid!",
//         popone:"Become a modern and confident HTML and CSS developer, no prior knowledge needed!",
//         poptwo:"Design and build a stunning real-world project for your portfolio from scratch",
//         popthree:"Modern, semantic and accessible HTML5"
//      },
// {
//     pophours:"68.5 total hours . All Levels . Subtitles",
//     popdesc :"The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",
//     popone:"Tons of modern CSS techniques to create stunning designs and effects",
//     poptwo:"Advanced CSS animations with @keyframes, animation and transition",
//     popthree:"How CSS works behind the scenes: the cascade, specificity, inheritance, etc"
// }

//     ]

// const cardsjavascript=[
//     {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"Learn HTML5, CSS3, JavaScript by building a modern looking responsive website.",
//         popone:"At the end of this course, You will have a great skills set like HTML5, CSS3, JavaScript",
//         poptwo:"You will see, the complete web development process from start to finish project.",
//         popthree:"You will learn about media queries and will be able to make website perfect for responsive design."
//     },
//     {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"A perfect JavaScript course for all those who want to learn and master JavaScript programming skills right from scratch.",
//         popone:"Basics of JavaScript (Data types, Loops, Arrays, Objects, Functions, etc)",
//         poptwo:"Introduction to Document Object Model(DOM) and Browser Object Model(BOM) in Java",
//         popthree:"OOPs concepts in JavaScript"
//     },
//     {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"Learn how to Code Web Pages using JavaScript",
//         popone:"Document Object Model (DOM)",
//         poptwo:"JavaScript Variables & Constants",
//         popthree:"JavaScript Arithmetic Operators"
//     },
//     {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"A Comprehensive Guide for Beginners interested in learning HTML, CSS, & JavaScript to Build Interactive Web Pages.",
//         popone:"Design and build well-structured webpages using HTML",
//         poptwo:"Implement semantic markup for improved accessibility and SEO",
//         popthree:"Create visually appealing websites with CSS styling"
//     },
//     {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"A Comprehensive Guide for Beginners interested in learning HTML, CSS, & JavaScript to Build Interactive Web Pages.",
//         popone:"Design and build well-structured webpages using HTML",
//         poptwo:"Implement semantic markup for improved accessibility and SEO",
//         popthree:"Create visually appealing websites with CSS styling"
//     },
//     {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"Learn Javascript, jQuery and Ajax from the start + Bonus Intro to Vue JS 3. Incudes complete written course material!",
//         popone:"The basics of Javascript from Beginner to Advanced",
//         poptwo:"The jQuery Framework",
//         popthree:"AJAX and HTTP Requests"
//     },
//     {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"An advanced JavaScript course for everyone! Scope, closures, prototypes, 'this', build your own framework, and more.",
//         popone:"The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021",
//         poptwo:"Write solid, good Javascript code",
//         popthree:"Understand advanced concepts such as closures, prototypal inheritance, IIFEs, and much more."
//     },
//     {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"Learn all the Basics of JavaScript and create various basic JavaScript programs and applications",
//         popone:"Create your own basic programs with JavaScript",
//         poptwo:"Be able to use JavaScript on a daily basis",
//         popthree:"Learn at your own pace with different practical exercices at each class"
//     },
//     {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"Modern JavaScript from the beginning - all the way up to JS expert level! THE must-have JavaScript resource in 2024.",
//         popone:"Learn JavaScript from scratch and in great detail - from beginner to advanced",
//         poptwo:"All core features and concepts you need to know in modern JavaScript development",
//         popthree:"Everything you need to become a JavaScript expert and apply for JavaScript jobs"
//     },
//     {
//         pophours:"68.5 total hours . All Levels . Subtitles",
//         popdesc :"The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
//         popone:"Become an advanced, confident, and modern JavaScript developer from scratch",
//         poptwo:"Build 6 beautiful real-world projects for your portfolio (not boring toy apps)",
//         popthree:"Become job-ready by understanding how JavaScript really works behind the scenes"
//     }

// ]

export const pythoncards=[
  {
    courseTitle: (
      <Link to='/complete2023webdevelopment' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
        100 Days of Code: The Complete Python Pro Bootcamp for 2023
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/2776760_f176_10.jpg",
    courseAuthor: "Angela Yu",
    pophours: "68.5 total hours . All Levels . Subtitles",
    popdesc:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    popone:
      "You will master the Python programming language by building 100 unique projects over 100 days.",
    poptwo:
      "You will learn automation, game, app and web development, data science and machine learning all using Python.",
    popthree: "You will be able to program in Python professionally",
  },
  {
    courseTitle: (
      <Link to='/complete2023webdevelopment' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
       Python for Absolute Beginners | Python Beginner to Pro
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/2668194_f343_11.jpg",
    courseAuthor: "Guilen McMullen-Klein",
    pophours: "9.5 total hoursAll LevelsSubtitles",
    popdesc: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!Learn Python programming from scratch with hands-on exercises in this Python course!",
    popone:
      "Program fluently in Python",
    poptwo:
      "Use Pycharm to write their Python programs",
    popthree: "Understand computer science concepts such as flow control and functions",
  },
  {
    courseTitle: (
      <Link to='/complete2023webdevelopment' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
       Python : Master Programming and Development with 15 Projects
      </a></Link>
    ),
    courseImg: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/226a9bbad0da.jpg",
    courseAuthor: "Dev nirwal",
    pophours: "9.5 total hoursAll LevelsSubtitles",
    popdesc: "Learn complete Python with Basics, Data Science, Data Visualisation, Desktop Graphical Applications and Machine Learning",
    popone:
      "Program fluently in Python",
    poptwo:
      "Python basics like data-types, loops, decision-makings, file handling, libraries, modules, date-times etc.",
    popthree: "Terminal based programming applications using Python"
  },
  {
    courseTitle: (
      <Link to='/complete2023webdevelopment' className="text-decoration-none"><a href="" className="text-decoration-none text-dark">
       Python Programming - From Basics to Advanced level
      </a></Link>
    ),
    courseImg: "https://img-c.udemycdn.com/course/750x422/2722434_fd59_6.jpg",
    courseAuthor: "Dev nirwal",
    pophours: "9.5 total hoursAll LevelsSubtitles",
    popdesc: "This Python for beginners course will help you to become Zero to Hero. Learn Python Programming in Easy Way.",
    popone:
      "Introduction to Python and Python 3",
    poptwo:
      "Understand the basics: Data types, Loops, Conditional statements, Functions and Modules",
    popthree: "Learn object oriented programming in Python"
  },
]
