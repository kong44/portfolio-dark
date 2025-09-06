
import { PersonalInfo, Interest, Experience, Education, Link, Detail, Service } from './types';
import * as Icons from './components/Icons';
import github from './assets/github.png';
import javascript from './assets/javascript.png';
import english from "./assets/united-kingdom (1).png";
import cambodia from "./assets/cambodia (1).png";
import css from "./assets/css-3.png";
import html from "./assets/html.png";
import figma from "./assets/figma.png";
import mysql from "./assets/mysql.png";
import php from "./assets/php.png";
import yuanta from "./assets/favicon.png";
import baitong from "./assets/favicon-96x96.png";
import www from "./assets/world-wide-web.png";
import age from "./assets/age-limit.png";
import telephone from "./assets/telephone.png";
import mail from "./assets/mail.png";
import location from "./assets/location.png";
import camping from "./assets/camping-tent.png";
import music from "./assets/music.png";
import research from "./assets/analytics.png";
import coding from "./assets/code.png";

import wifi from "./assets/icons8-wifi-96.png";
import cloud from "./assets/icons8-cloud-96.png";
import database from "./assets/icons8-database-96.png";
import globe from "./assets/icons8-globe-50.png";
import headset from "./assets/icons8-headset-100.png";
import docker from "./assets/docker.png";
import linux from "./assets/linux.png";
import flutter from "./assets/icons8-flutter-96.png";
import tailwindcss from "./assets/tailwindcss.png";
import androidStudio from "./assets/icons8-android-studio-96.png";
import vscode from "./assets/icons8-visual-studio-code-96.png";
import canva from "./assets/icons8-canva-96.png";
import cpanel from "./assets/cPanel-1329545816324085587_512px.png"

import { title } from 'process';
export const personalInfo: PersonalInfo = {
  name: "Chan Sokkong",
  bio: "Hi, I'm KONG a self-taught web developer, IT officer, and freelancer with 4+ years of experience. I build responsive websites and deliver reliable IT solutions to help businesses run better and grow online."
};

export const interests: Interest[] = [
  { name: "Coding", icon: coding },
  { name: "Researching", icon: research },
  { name: "Music", icon: music },
  { name: "Camping", icon: camping },
];

export const services: Service[] = [
  {
    title: "Office Wi-Fi setup + maintenance",
    desc: "Design, install, and maintain reliable office Wi-Fi networks with secure configurations and ongoing support.",
    icon: wifi,
  },
  {
    title: "Email & Web hosting",
    desc: "Fast, secure, and reliable hosting for your business emails and websites with custom domains and full support.",
    icon: cloud,
  },
  {
    title: "Server & folder sharing (Synology)",
    desc: "Setup and manage Synology NAS for secure file storage, folder sharing, and team collaboration with access control.",
    icon: database,
  },
  {
    title: "Website development & hosting",
    desc: "Professional websites with fast, secure hosting and ongoing technical support.",
    icon: globe,
  },
  {
    title: "IT helpdesk support package",
    desc: "Dedicated IT support for troubleshooting, maintenance, and staff assistance on demand.",
    icon: headset,
  },
];

export const experiences: Experience[] = [
  {
    title: "Freelancer",
    role: "Synology Setup",
    dates: "2025",
    points: [
      "Configured Synology shared folders for a school",
      "Mapped network folders to computers",
    ],
  },
  {
    title: "Baitong Hotel",
    role: "IT Officer",
    dates: "2024-Present",
    points: [
      "Maintained computers and software",
      "Managed servers and network systems",
    ],
  },
  {
    title: "Melos Solution",
    role: "Full-Stack Web Developer",
    dates: "2022-2024",
    points: [
      "Developed websites using React.js, Next.js, PHP, etc.",
      "Maintained existing websites and internal systems",
      "Provided computer maintenance support",
    ],
  },
  {
    title: "Moha Kruosar IT Association",
    role: "IT Assistant & Developer",
    dates: "2021-2022",
    points: [
      "Assisted project coordinators",
      "Provided technical support for systems",
      "Developed ERP modules with Odoo",
    ],
  },
  {
    title: "Apprenticeship at KOOMPI",
    role: "Front-end Web developer",
    dates: "2020-1/2(2021)",
    points: [
      "Learning Front-end website",
      "Learning to work with a team",
    ],
  },
];


export const education: Education[] = [
  { degree: "Graduation", school: "Royal University of Phnom Penh", year: "2023" },
  { degree: "High School", school: "Hunsen Saang High School", year: "2018" },
  { degree: "Diploma", school: "Hunsen Saang High School", year: "2015" },
];

export const languages = [english, cambodia];
export const developmentTools = [github,mysql,figma,docker,linux,vscode,androidStudio,canva,cpanel];
export const programmingLanguage = [javascript,css,html,mysql,php,flutter,tailwindcss];

export const portfolioLinks: Link[] = [
    { name: "Yuanta Cambodia", url: "https://yuantacambodia.com.kh/index.php", icon: yuanta },
    { name: "Baitong Hotel", url: "https://www.baitonghotel.asia/", icon: baitong },
    { name: "Hancook", url: "https://hancook.food/home", icon: www },
    { name: "Yuanta Investment", url: "https://invest.yuantacambodia.com.kh/", icon: yuanta },
    { name: "Melo Menu", url: "https://melo.hancook.food/", icon: www},
    { name: "Dan's Build", url: "https://www.dansbuild.com/", icon: www},
];
export const playArounds: Link[] = [
    { name: "Dudu Spin", url: "https://duduchoice.vercel.app", icon: www },
    { name: "Tantrei", url: "https://music-steaming.vercel.app", icon: music},
];

export const details: Detail[] = [
    { value: "2* years", icon: age },
    { value: "sokkongchan@gmail.com", icon: mail },
    { value: "086581383", icon: telephone },
    { value: "PhnomPenh", icon: location },
];
