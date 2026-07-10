import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
  { label: "Years Experience", value: "Fresher" },
  { label: "Projects Completed", value: "4" },
  { label: "Commitment", value: "100%" },
  { label: "Technologies Learned", value: "5+" },
];

export const highlights = [
  { icon: MapPin, text: "Based in Delhi, India" },
  { icon: Briefcase, text: "Open to Full-Time & Internship Opportunities" },
  { icon: GraduationCap, text: "Pursuing MCA (2024-2026)" },
  { icon: Coffee, text: "Powered by coffee & curiosity" },
];


export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ankgpt.work@gmail.com",
    href: "mailto:ankgpt.work@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9560540138",
    href: "tel:9560540138",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New Delhi, India",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export const experiences = [
  {
    type: "education",
    title: "Master of Computer Applications",
    University: "Jagannath Institute of Management and Sciences (JIMS)",
    period: "2024 - 2026",
    technologies: ["MERN", "AI/ML", "Data Analytics"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    University:"Guru Gobind Singh Indraprastha University",
    period: "2021 - 2024",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
  {
    type: "education",
    title: "12th CBSE Board",
    University: "The Cambridge International School",
    period: "2020 - 2021",
    Stream: "Commerce without Maths",
    technologies: ["Secured 62.315%"],
  },
  {
    type: "education",
    title: "10th CBSE Board",
    University: "The Cambridge International School",
    period: "2018 - 2019",
    technologies: []
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export const projects = [
  {
    title: "Velora",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/velora.jpg",
    techStack: ["Node.js", "Python","FastAPI", "MongoDB"],
    demoUrl: "https://velora-six-nu.vercel.app/",
    githubUrl: "https://github.com/Anksyngit/Velora",
  },
  {
    title: "Facial Recognition System",
    description:
      "Property listing platform with virtual tours, mortgage calculator, and agent booking system.",
    image: "/images/face.jpg",
    techStack: ["Python", "OpenCV", "Haarcasacade", "Lbph Algorithm"],
    demoUrl: "",
    githubUrl: "https://github.com/Anksyngit/Face-Recognition-Attendance-System",
  },
  {
    title: "StockFusion",
    description:
      "Educational platform with video streaming, quizzes, progress tracking, and certificates.",
    image: "/images/Stockfusion.jpg",
    techStack: ["Node", "MongoDb"],
    demoUrl: "https://stock-fusion-zi-peach.vercel.app/",
    githubUrl: "https://github.com/Anksyngit/StockFusion_Zi",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "CSS", icon: Palette },
      { name: "React Native", icon: Smartphone },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "AWS", icon: Cloud },
      { name: "Figma", icon: Palette }
    ],
  },
];
