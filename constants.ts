
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
    role: "Logo/Brand Designer",
    dates: "2021 - now",
    points: [
      "Worked on diverse logo and brand identity projects.",
      "Collaborated with clients from multiple countries.",
      "Developed a versatile design skill set.",
      "Adapted to unique challenges and requirements.",
    ]
  },
  {
    title: "Meetzed",
    role: "Graphic Designer",
    dates: "2020 - 2021",
    points: [
      "Collaboration: Supported Lead Designer on projects.",
      "Branding: Crafted unique brand identities.",
      "Tools: Used Illustrator, Photoshop & InDesign.",
    ]
  }
];

export const education: Education[] = [
  { degree: "High School", school: "Humanities, Delhi Cantonment, India", year: "2017" },
  { degree: "Diploma", school: "Animation and Graphic Design, Delhi, India", year: "2017-18" },
  { degree: "Graduation", school: "Bachelor of fine Arts, IGNOU Delhi, India", year: "2017-21" },
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
