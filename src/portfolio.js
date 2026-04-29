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
    "Embedded Developer with 9+ years of experience designing and optimizing low-level firmware for production-grade platforms — currently building secure element firmware inside Snapdragon SoCs at Qualcomm 🚀"
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/souvikranju/",
  gmail: "souvik.ranju@gmail.com",
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
    emoji("⚡ Designing and optimizing low-level firmware for production-grade embedded platforms on ARM and RISC-V"),
    emoji("⚡ Secure element firmware development on Snapdragon SoCs deployed across Mobile, XR, Compute, and IoT products"),
    emoji("⚡ FPGA-based pre-silicon validation, board bring-up, and debugging complex hardware–software interactions"),
    emoji("⚡ IoT home automation with ZigBee, BLE, and RTOS on multiple microcontroller families"),
    emoji("⚡ Industrial data acquisition and solar energy monitoring systems using embedded Linux and Python"),
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
      skillName: "C",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "ARM Architecture",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "RISC-V",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "RTOS",
      fontAwesomeClassname: "fas fa-clock"
    },
    {
      skillName: "Device Drivers",
      fontAwesomeClassname: "fas fa-cog"
    },
    {
      skillName: "UEFI",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Secure Element",
      fontAwesomeClassname: "fas fa-lock"
    },
    {
      skillName: "FPGA",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "IoT",
      fontAwesomeClassname: "fas fa-wifi"
    },
    {
      skillName: "ZigBee / BLE",
      fontAwesomeClassname: "fab fa-bluetooth"
    },
    {
      skillName: "Bootloader",
      fontAwesomeClassname: "fas fa-database"
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
      skillName: "GDB / Trace32",
      fontAwesomeClassname: "fas fa-bug"
    },
    {
      skillName: "SoC",
      fontAwesomeClassname: "fas fa-puzzle-piece"
    },
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Kalyani Government Engineering College",
      logo: require("./assets/images/embedded_desien.jpg"),
      subHeader: "Bachelor of Technology in Electronics and Communications Engineering",
      duration: "2014 – 2017",
      desc: "Undergraduate engineering with focus on electronics, communication systems, and embedded design.",
      descBullets: [
        "Final year project: Designing & Simulation of Junction-less Surrounding-gate Transistors (JLSG)",
        "Analytical model of JLSG transistor for device design, optimization and circuit simulation"
      ]
    },
    {
      schoolName: "MBC Institute of Engineering & Technology",
      logo: require("./assets/images/embedded_desien.jpg"),
      subHeader: "Diploma in Electronics and Telecommunication Engineering",
      duration: "2011 – 2014",
      desc: "Three-year diploma programme in electronics and telecommunications.",
      descBullets: []
    },
    {
      schoolName: "Burdwan CMS High School",
      logo: require("./assets/images/embedded_desien.jpg"),
      subHeader: "10+2, Science",
      duration: "2008 – 2010",
      desc: "Higher secondary with Physics, Chemistry, Mathematics.",
      descBullets: []
    }
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
      role: "Senior Lead Engineer",
      company: "Qualcomm",
      companylogo: require("./assets/images/embedded_desien.jpg"),
      date: "Dec 2024 – Present",
      desc: "Leading secure element firmware development inside Snapdragon SoCs deployed across Mobile, Compute, XR, and IoT product lines.",
      descBullets: [
        "RISC-V architecture firmware development and optimization",
        "UEFI and pre-boot security firmware on Snapdragon platforms",
        "Secure element design, TrustZone security architecture",
        "FPGA-based pre-silicon validation and hardware bring-up",
        "Cross-team collaboration across Mobile, XR, Compute, and IoT divisions"
      ]
    },
    {
      role: "Senior Engineer",
      company: "Qualcomm",
      companylogo: require("./assets/images/embedded_desien.jpg"),
      date: "Aug 2022 – Nov 2024",
      desc: "Firmware engineering on Snapdragon SoCs with focus on device drivers and low-level systems.",
      descBullets: [
        "Embedded C++ firmware development for production-grade platforms",
        "Device driver development for Snapdragon peripherals",
        "Board bring-up and debugging complex hardware–software interactions on ARM architectures",
        "Secure coding practices for production firmware"
      ]
    },
    {
      role: "Sr. Embedded Developer",
      company: "Keus Smart Home",
      companylogo: require("./assets/images/embedded_desien.jpg"),
      date: "Apr 2021 – Aug 2022",
      desc: "Developed application firmware for IoT home automation devices with ZigBee and BLE communication.",
      descBullets: [
        "AC appliance brightness dimming with fading effect (customizable fade-in/fade-out), fan level control",
        "IR signal record and replay, EEPROM data management",
        "Proximity detection for wake-up and UI management, data management libraries",
        "MCUs: Ti CC2652 (ARM Cortex-M4), Ti CC2530 (8051), Nuvoton Nano100/Mini58 (ARM Cortex-M0), ESP8266",
        "RTOS: Ti RTOS"
      ]
    },
    {
      role: "Embedded Developer",
      company: "Keus Smart Home",
      companylogo: require("./assets/images/embedded_desien.jpg"),
      date: "Sep 2019 – Mar 2021",
      desc: "Embedded firmware development for IoT home automation devices.",
      descBullets: [
        "Bootloader development for ZigBee-based home automation nodes",
        "ZigBee mesh networking firmware implementation"
      ]
    },
    {
      role: "System Design Engineer",
      company: "Photon Energy Systems Ltd",
      companylogo: require("./assets/images/embedded_desien.jpg"),
      date: "Dec 2018 – Aug 2019",
      desc: "Designed hardware schematics and application firmware for IoT devices in solar electricity generation plants.",
      descBullets: [
        "Introduced the company's first embedded product with 100% in-house R&D",
        "Smart Pyranometer: solar irradiance sensor with accelerometer, gyroscope, and ambient temperature, outputting SunSpec Modbus protocol data",
        "SCADA system: single board computer collecting data from Modbus solar sensors, storing to cloud — developed in embedded Linux (Python and C)",
        "Research on LoRa communication and effect of temperature on solar panels",
        "MCU: STM32 (ARM Cortex-M4); collaborated with PCB design engineers"
      ]
    },
    {
      role: "Embedded Developer",
      company: "Park Telesolutions Pvt Ltd",
      companylogo: require("./assets/images/embedded_desien.jpg"),
      date: "Feb 2018 – Dec 2018",
      desc: "R&D firmware development for security and surveillance product suite targeting bank branches and ATMs.",
      descBullets: [
        "Third Eye: remote security, surveillance and control system integrating door, smoke, tamper, vibration, PIR, panic, and temperature sensors",
        "Relay control for hooters and DG; GSM calling via integrated mic/amplifier; RS485 bus communication with slave devices; GPRS modem to central server",
        "MCUs: AVR 8-bit, PIC 16-bit, ATmega328P",
        "Worked closely with PCB Layout, Assembly, and Product Testing teams"
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
  subtitle: "Key projects I have designed and built",
  projects: [
    {
      image: require("./assets/images/embedded_desien.jpg"),
      projectName: "Embedded Switch",
      projectDesc: "IoT smart switchboard that fits behind a traditional switch board. Features AC appliance dimming with fading effect, fan level control via ZigBee/BLE. Deployed in home automation installations across India.",
      footerLink: []
    },
    {
      image: require("./assets/images/embedded_desien.jpg"),
      projectName: "Smart Console",
      projectDesc: "Smart device replacing traditional switch boards with 16 push buttons, RGB light interface, and proximity wake-up. Supports relay, DALI, scene execution, appliance group control, fan speed, and up to 4 curtain controls.",
      footerLink: []
    },
    {
      image: require("./assets/images/embedded_desien.jpg"),
      projectName: "Smart Pyranometer",
      projectDesc: "Solar irradiance sensor with accelerometer, gyroscope, and ambient temperature sensor. Outputs temperature-calibrated solar irradiance, 3-axis gyro, and ambient temperature data in SunSpec Modbus protocol.",
      footerLink: []
    },
    {
      image: require("./assets/images/embedded_desien.jpg"),
      projectName: "SCADA System for Solar Plants",
      projectDesc: "Supervisory control and data acquisition system based on a single board computer. Periodically collects data from all solar Modbus sensors and stores in cloud database for analysis. Built with embedded Linux using Python and C.",
      footerLink: []
    },
    {
      image: require("./assets/images/embedded_desien.jpg"),
      projectName: "Third Eye – Security Suite",
      projectDesc: "Remote security, surveillance and control system for bank branches and ATMs. Integrates door, shutter, smoke, tamper, vibration, glass-break, motion, PIR, and panic sensors. Communicates via GPRS to central surveillance server over RS485 bus.",
      footerLink: []
    },
    {
      image: require("./assets/images/embedded_desien.jpg"),
      projectName: "JLSG Transistor Simulation",
      projectDesc: "Analytical model of a Junction-less Surrounding-gate (JLSG) transistor for device design, optimization and circuit simulation. Final year B.Tech research project at Kalyani Government Engineering College (2016–2017).",
      footerLink: []
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and recognitions",
  achievementsCards: [],
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
  email_address: "souvik.ranju@gmail.com"
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
