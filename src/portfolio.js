
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Asem Nouri",
  title: "Hello, I am Asem Nouri", 
  subTitle: emoji("A Full-Stack developer who is passionate about programming and figuring out everything related to new technologies and very good at critical-thinking and problem solving."),
  resumeLink: "https://drive.google.com/file/d/1E4Ol1NGC5ux8v-W2paStKizOGdWehDTz/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/asemnouri",
  linkedin: "https://www.linkedin.com/in/asem-nouri-5302b7201/",
  gmail: "asemnouri113@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Your Skills Section

const skillsSection = {
  title: "Tecnologies",
  subTitle: "Full Stack Developer Who Wants To Explore Every Tech Stack",
  skills: [
    // emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    // emoji("⚡ Integration of third party services such as Firebase")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NODEJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Mongodb-MySql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "FIREBASE",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "PYTHON",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "DOCKER",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your education background

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "An-Najah National University",
      logo: "https://media.discordapp.net/attachments/762737273128353841/792793199219441714/download.png",
      subHeader: "Bachelor of Civil Engineering",
      duration: "2013 - 2017"
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "asemnouri", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true",  // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "00972-599282102",
  emailAddress: "asemnouri113 @gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

//project section
const projects = [
  {
    title: "Acrux-Hospital",
    description: "This project was done with Django-React, it enables patients to preview hospital departments, doctors, the ability to book an appointment & do live-chat with doctors using firebase-real-time database. Authentication was made with JWT with bcrypt for passwords,  there is also MERN stack version of this app, with React-Native & used Socket-io for the live-chat.",
    image: require("../src/assets/images/acrux.PNG"),
    github: "https://github.com/asemnouri/ACRUX-Hospital-django",
    demo: "https://acrux-hospital.herokuapp.com/",
    technologies:["React,","Django,","Postgress,","Firebase,","Material-UI,",'SASS'],
    Role:"Co-Leader"
  },
  {
    title: "HotelCom",
    description: "A MERN-stack project that allows you to use a hotels API to view the hotels of a specifc city and country and being able to add it to bookmarks and add favorites, and in the profile page you will be able to make payments throw Stripe API, there also authentiction and authrisation using JWT and hashing the password using bcrybt.",
    image: require("../src/assets/images/hotelcom.PNG"),
    github: "https://github.com/asemnouri/green-field-project",
    demo: "https://raptors-hotels.herokuapp.com/",
    technologies:["React,","MongoDB,","Express,","NodeJS,","Material-UI"],
    Role:"Scrum Master"
  },
  {
    title: "E-commerce Crwn-Clothing",
    description: "This is a React-Redux project that is connected to firebase data base. It has  the ability to add items and remove them and it deals with Stripe-payments.It will   enable users to sign-in,sign-up,and register new users.",
    image: require("../src/assets/images/crwn.PNG"),
    github: "https://github.com/asemnouri/crwn-clothing",
    demo: "https://crwn-asem-deploy.herokuapp.com/",
    technologies:["React,","FireBase,","SASS"],
    Role:"Project Owner"

  },
  {
    title: "Explore Palestine",
    description: "A MERN stack project that enables the user book a trip and buy it throw stripe API and ability to chat between users, there is also an admin that has the ability to add new trips and delete users and make them admins. There is also the abilty to invite users throw email.The authentication using JWT also.",
    image: "https://cdn.discordapp.com/attachments/762737273128353841/792798697003548732/Capture11.png",
    github: "https://github.com/asemnouri/laflefne",
    demo: "https://crwn-asem-deploy.herokuapp.com/",
    technologies:["React,","MongoDB,","Express,","NodeJS,","Material-UI"],
    Role:"Scrum Master"

  },
  {
    title: "Covid-19",
    description: "This project is a React  project preveiws the number of cases of Covid-19, number of deaths,and number if recovered people either globally and for each country.",
    image: "https://cdn.discordapp.com/attachments/762737273128353841/792798678662381618/covid.png",
    github: "https://github.com/asemnouri/Covid-tracker",
    demo: "https://covid-app-19-asem.herokuapp.com/",
    technologies:["React,","Material-UI"],
    Role:"Project Owner"

  },

]
export { projects, greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
