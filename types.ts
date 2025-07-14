
import React from 'react';

export interface Experience {
  title: string;
  role: string;
  dates: string;
  points: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Interest {
    name: string;
    icon: string;
}

export interface Link {
  name: string;
  url: string;
  icon: string;
}

export interface Detail {
  value: string;
  icon: string;
}

export interface PersonalInfo {
    name: string;
    bio: string;
}
