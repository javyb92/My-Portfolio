const apps = [
  {
    name: "Recipe Rat",
    description:
      "An application that allows you to search for a recipe and customize the ingredients to keep track of calories.",
    image: require("../img/recipe_rat.png"),
    imagewebp: require("../img/recipe_rat.webp"),
    tools: "HTML5/CSS3, Javascript, Bootstrap4, jQuery, and charts.js",
    role:
      " Front-end developer, programmed charts.js to calculate calories with fitness data to determine how much exercise needed to burn food consumed with exercise.",
    links: {
      githubUrl: "https://github.com/deloabra/recipe-rat",
      demoUrl: "https://deloabra.github.io/recipe-rat/",
    },
  },
  {
    name: "Stock Sheet",
    description:
      "A 100% Full-Stack Developed Mobile Friendly Application with a login page that pulls up to date stocks custom to each user!",
    image: require("../img/stocksheet.jpg"),
    imagewebp: require("../img/stocksheet.webp"),
    tools:
      "HTML5/CSS3, Javascript, Bootstrap4, jQuery, Handlebars.js, Sequelize",
    role:
      "Front-end developer, using handlebars to display stock info from backend and design of the User Interface utilizing Bootstrap and CSS.",
    links: {
      githubUrl: "https://github.com/javyb92/project-2",
      demoUrl: "https://project2-umesh-brett-javier-sa.herokuapp.com/",
    },
  },
  {
    name: "Runwea",
    description:
      "A Weather Progressive Web Application (PWA) built with React that judges weather or not it is the best time to run currently.",
    image: require("../img/wf.png"),
    imagewebp: require("../img/wf.webp"),
    tools:
      "HTML5/CSS3, Javascript, React (w/Hooks), Geolocation, OpenWeater API, Momentjs",
    role: "Solo developer",
    links: {
      githubUrl: "https://github.com/javyb92/Runwea",
      demoUrl: "https://javyb92.github.io/Runwea/",
    },
  },
  {
    name: "Whisket",
    description:
      "A MERN app that pairs two of the available 35 whiskeys for a live vote! Votes is being backed up in the backend.",
    image: require("../img/whisket.jpg"),
    imagewebp: require("../img/whisket.webp"),
    tools: "HTML5/CSS3, Bootstrap4, MongoDB, Mongoose, Express, React, Node",
    role:
      "Brought front-end voting functionality with React, used MongoDB/Mongoose to store and count votes in the backend database.",
    links: {
      githubUrl: "https://github.com/javyb92/project3",
      demoUrl: "https://quiet-badlands-95961.herokuapp.com/",
    },
  },
  // {
  //     "name": "Solo-Project (Post Bootcamp)",
  //     "description": "Never going to stop learning...This upcoming app will utilize the full MERN Stack, I don't have a working demo as of yet, but it is coming!",
  //     "image": require("../img/COMING SOON.png"),
  //     "tools": "MongoDB, Mongoose, Express, React.js, Node.js",
  //     "links": {
  //         "githubUrl": "https://github.com/javyb92/",
  //         "demoUrl": "https://github.com/javyb92/"
  //     }
  // }
  // ,
];

export default apps;
