
import { PersonalInfo, Interest, Experience, Education, Link, Detail } from './types';
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

export const experiences: Experience[] = [
  {
    title: "Freelancer",
    role: "Setup Synology Share Folder",
    dates: "2025",
    points: [
      "Worked on config setting up synology for sharing folder to a GA school",
      "Mapping folder to computer",
    ]
  },
  {
    title: "Job With Baitong Hotel",
    role: "IT Officer",
    dates: "2024-Now",
    points: [
      "Computer maintenance",
      "Server and Network maintenance",
    ]
  }
];

export const education: Education[] = [
  { degree: "High School", school: "Hunsen Saang High School", year: "2018" },
  { degree: "Diploma", school: "Hunsen Saang High School", year: "2015" },
  { degree: "Graduation", school: "Royal University of Phnom Penh", year: "2023" },
];

export const languages = [english, cambodia];
export const developmentTools = [github,mysql,figma];
export const programmingLanguage = [javascript,css,html,mysql,php]

export const portfolioLinks: Link[] = [
    { name: "Yuanta Cambodia", url: "https://yuantacambodia.com.kh/index.php", icon: yuanta },
    { name: "Baitong Hotel", url: "https://www.baitonghotel.asia/", icon: baitong },
    { name: "Hancook", url: "#", icon: www },
    { name: "Yuanta Investment", url: "https://invest.yuantacambodia.com.kh/", icon: yuanta },
    { name: "Melo Menu", url: "https://melo.hancook.food/", icon: www},
];

export const details: Detail[] = [
    { value: "26 years", icon: age },
    { value: "sokkongchan@gmail.com", icon: mail },
    { value: "086581383", icon: telephone },
    { value: "PhnomPenh", icon: location },
];
