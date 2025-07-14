
import { PersonalInfo, Interest, Experience, Education, Link, Detail } from './types';
import * as Icons from './components/Icons';

export const personalInfo: PersonalInfo = {
  name: "Sunil Kumar",
  bio: "My name is Sunil Kumar self-taught logo/brand designer with 4+ years of experience creating modern, clean, and minimal brands that make a lasting impression."
};

export const interests: Interest[] = [
  { name: "Gaming", icon: Icons.GamingIcon },
  { name: "Film Making", icon: Icons.FilmMakingIcon },
  { name: "Traveling", icon: Icons.TravelingIcon },
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

export const designTools = [Icons.IllustratorIcon, Icons.PhotoshopIcon, Icons.InDesignIcon, Icons.XdIcon];
export const editingTools = [Icons.AfterEffectsIcon, Icons.PremiereProIcon, Icons.FinalCutProIcon];
export const languages = [Icons.IndiaFlag, Icons.UkFlag, Icons.UsaFlag];

export const portfolioLinks: Link[] = [
    { name: "Bento", url: "#", icon: Icons.BentoIcon },
    { name: "Behance", url: "#", icon: Icons.BehanceIcon },
    { name: "Instagram", url: "#", icon: Icons.InstagramIcon },
    { name: "Youtube", url: "#", icon: Icons.YoutubeIcon },
    { name: "Dribbble", url: "#", icon: Icons.DribbbleIcon },
];

export const details: Detail[] = [
    { value: "26 years", icon: Icons.CakeIcon },
    { value: "iamsunilfreelancer.com", icon: Icons.WebsiteIcon },
    { value: "+91 9899052055", icon: Icons.PhoneIcon },
    { value: "India", icon: Icons.LocationIcon },
];
