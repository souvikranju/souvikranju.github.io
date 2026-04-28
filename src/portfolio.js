/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Souvik Pal",
  title: "Hi, I'm Souvik 👋",
  subTitle: emoji(
    "Embedded Developer with 9+ years of experience designing low-level firmware for production-grade platforms — currently building secure element firmware inside Snapdragon SoCs at Qualcomm 🚀"
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/souvikranju/",
  gmail: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "LEAD EMBEDDED FIRMWARE ENGINEER BUILDING SECURE, RELIABLE LOW-LEVEL SYSTEMS",
  skills: [
    emoji("⚡ Designing and optimizing low-level firmware for production-grade embedded platforms"),
    emoji("⚡ Secure element firmware development on Snapdragon SoCs across Mobile, XR, and IoT"),
    emoji("⚡ FPGA-based pre-silicon validation, board bring-up, and hardware–software debugging on ARM & RISC-V"),
  ],
  softwareSkills: [
    {
      skillName: "Embedded C",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "RTOS",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "ARM",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "RISC-V",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "FPGA",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Secure Element",
      fontAwesomeClassname: "fas fa-lock"
    },
    {
      skillName: "Device Drivers",
      fontAwesomeClassname: "fas fa-cog"
    },
    {
      skillName: "SoC",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "GDB",
      fontAwesomeClassname: "fas fa-bug"
    },
    {
      skillName: "CMake",
      fontAwesomeClassname: "fas fa-cogs"
    },
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: false,
  schools: [

  ]
};

// Tech Stack / Proficiency Bars

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

// Work Experience Section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Lead Embedded Firmware Engineer",
      company: "Qualcomm",
      companylogo: require("./assets/images/embedded_desien.jpg"),
      date: "Present",
      desc: "Working on secure element firmware inside Snapdragon SoCs deployed across Mobile, Compute, XR, and IoT products.",
      descBullets: [
        "Secure Elements and TrustZone security architecture on Snapdragon platforms",
        "FPGA-based pre-silicon validation and board bring-up",
        "Device drivers and low-level systems on ARM and RISC-V architectures"
      ]
    }
  ]
};

// Open Source Section

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Big Projects Section

const bigProjects = {
  title: "Projects",
  subtitle: "Projects I have built or contributed to",
  projects: [

  ],
  display: false
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and recognitions",
  achievementsCards: [

  ],
  display: false
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section

const talkSection = {
  title: "Talks",
  subtitle: emoji(""),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
