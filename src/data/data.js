import image from "../assets/images.jpg";
import image1 from "../assets/images (1).jpg";
import image2 from "../assets/images (2).jpg";

export const PROJECTS = [
  {
    title: "Virtual Fiscalisation Gateway API",
    description:
      "Designed and developed a virtual fiscalisation gateway API using Node.js and mutual TLS authentication. Integrated with Palladium Accounting software and deployed on multiple PCs using Electron.js.",
    image: image, // Replace with your actual image
    technologies: [
      "Node.js",
      "Express",
      "JavaScript",
      "Electron.js",
      "Mutual TLS",
    ],
  },
  {
    title: "GSM-Based GPS Tracker",
    description:
      "Created a GPS IoT tracker for fleet management using the ESP32-C3 microcontroller and A9G GSM/GPS module. Involved full cycle of circuit design, PCB design, firmware development, testing, and debugging.",
    image: image1, // Replace with your actual image
    technologies: [
      "ESP32-C3",
      "C++",
      "GSM Module",
      "GPS",
      "PCB Design",
      "KiCad",
    ],
  },
  {
    title: "Biometric Attendance System",
    description:
      "Built a biometric attendance system for Centreaper Investments using ESP32-C3, a TFT touch display, and the AS608 fingerprint sensor. Included fullstack web development with React and Node.js.",
    image: image2, // Replace with your actual image
    technologies: [
      "ESP32-C3",
      "React",
      "Node.js",
      "TFT Display",
      "AS608",
      "PCB Design",
    ],
  },
];
