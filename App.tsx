import React, { useState, useEffect, useRef } from "react";
import {
  personalInfo,
  interests,
  experiences,
  education,
  developmentTools,
  programmingLanguage,
  languages,
  portfolioLinks,
  details,
  playArounds,
  services,
} from "./constants";
import profile_img from "@/assets/photo_2025-07-14_14-15-15.jpg";
import * as Icons from "./components/Icons";
import music from "./assets/background.mp3";
import email from "./assets/mail.png";
import telegram from "./assets/telephone.png";
import "./App.css";

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`bg-card rounded-2xl p-5 ${className}`}>{children}</div>;

const Tag = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-black text- text-sm px-3 py-1 rounded-md">{children}</div>
);

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(music); // Make sure file is in `public/`
    audio.loop = true;
    audio.volume = 0.5;
    // audio.play();
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="fixed top-4 right-4 bg-card/0 text-white w-auto p-1 rounded-xl z-50">
        {/* Disc with everything inside */}
        <div className="flex justify-center">
          <div className="relative md:w-28 md:h-28 w-20 h-20 rounded-full overflow-hidden border-2 border-tag shadow-md flex items-center justify-center">
            {/* Rotating Image */}
            <img
              src={profile_img}
              className={`absolute inset-0 w-full h-full object-cover opacity-40 ${
                isPlaying ? "animate-spin-slow" : ""
              }`}
            />

            {/* Title + Subtitle Inside Disc */}
            <div className="absolute top-4 text-center">
              {/* <h2 className="text-xs font-bold">Background Music</h2> */}
              <p className="md:text-[10px] text-[9px] opacity-70">Old Song</p>
            </div>

            {/* Play Button Centered */}
            <button
              onClick={toggleMusic}
              className="text-white p-2 relative z-10 transition opacity-70 md:text-[10px] text-[9px]"
            >
              {isPlaying ? "❚❚" : "▶"}
            </button>

            <div className="absolute bottom-4 text-center">
              <p className="md:text-[10px] text-[9px] opacity-70">Sin Sisamuth</p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile & Bio */}

        <div className="lg:col-span-3">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={profile_img}
              alt="profile"
              className="w-48 h-full rounded-xl object-cover border-4 border-card"
            />
            <div className="flex-1">
              <Card>
                <p className="text-white text-lg leading-relaxed italic">
                  {personalInfo.bio}
                </p>
              </Card>
              <Card className="mt-6">
                <div className="flex items-center">
                  <h3 className="text-white border-r-2 border-light-gray pr-6 mr-6">
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {interests.map((interest) => (
                      <div
                        key={interest.name}
                        className="flex items-center gap-2 bg-black text-light-gray text-sm px-4 py-2 rounded-lg"
                      >
                        <img src={interest.icon} className="w-5 h-5" />
                        <span>{interest.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Service Offering */}
        <Card className="lg:col-span-3">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold pb-3">Service Offering</h1>
            {services.map((ser, index) => (
              <div
                key={`${index}_${ser.title}`}
                className="flex flex-row gap-3"
              >
                <img alt={ser.title} src={ser.icon} className="w-7 h-7" />
                <div>
                  <h2 className="text-lg">{ser.title}</h2>
                  <p className="text-md text-light-gray">{ser.desc}</p>
                </div>
              </div>
            ))}
            <p className="font-bold text-lg">Talk to me</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://t.me/kong41"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-tag text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <img src={telegram} className="w-5 h-5" />
                <span>Telegram</span>
              </a>
              <a
                href="mailto:sokkongchan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-tag text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <img src={email} className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </Card>

        {/* Experience */}
        {experiences.map((exp, index) => {
          const isLast = index === experiences.length - 1;
          const isOdd = index % 2 === 0; // 0-based index, so 0,2,4… are even in programming, odd in human counting

          let colSpan = "lg:col-span-1";
          if (!isLast) {
            colSpan = isOdd ? "odd:lg:col-span-1" : "even:lg:col-span-2";
          } else {
            colSpan = isOdd ? "lg:col-span-3" : "lg:col-span-2"; // last card adjustment
          }

          return (
            <Card key={index} className={`${colSpan} flex-1`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-lg font-bold text-white">{exp.title}</h2>
                  <p className="text-light-gray">{exp.role}</p>
                </div>
                <Tag>{exp.dates}</Tag>
              </div>
              <ul className="list-disc list-inside space-y-2 text-light-gray pl-2 mt-4">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Card>
          );
        })}

        {/* Skills Column */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <h3 className="text-light-gray mb-4">Programming Language</h3>
            <div className="flex flex-wrap gap-4">
              {programmingLanguage.map((item, index) => (
                <img
                  key={`programming_${index}`}
                  src={item}
                  className="w-8 h-8"
                />
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-light-gray mb-4">Development Tools</h3>
            <div className="flex flex-wrap gap-4">
              {developmentTools.map((item, index) => (
                <img key={`dev_${index}`} src={item} className="w-8 h-8" />
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-light-gray mb-4">Languages</h3>
            <div className="flex flex-wrap gap-4">
              {languages.map((item, index) => (
                <img
                  key={`lang_${index}`}
                  src={item}
                  className="w-8 h-8 rounded-md object-cover"
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Education */}
        <Card className="lg:col-span-2">
          {education.map((edu, index) => (
            <div
              key={index}
              className={
                index < education.length - 1
                  ? "border-b border-tag pb-4 mb-4"
                  : ""
              }
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-white">{edu.degree}</h2>
                  <p className="text-light-gray">{edu.school}</p>
                </div>
                <Tag>{edu.year}</Tag>
              </div>
            </div>
          ))}
        </Card>

        {/* Portfolio */}
        <Card className="lg:col-span-3">
          <h3 className="text-light-gray mb-4">Career Journey</h3>
          <div className="flex flex-wrap gap-3">
            {portfolioLinks.map((item) => (
              <a
                href={item.url}
                key={item.name}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tag text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <img src={item.icon} className="w-5 h-5" />
                  <span>{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5"></span>
                  <span className="text-light-gray text-xs">{item.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </Card>

        {/* Play Around */}
        <Card className="lg:col-span-3">
          <h3 className="text-light-gray mb-4">Play Around</h3>
          <div className="flex flex-wrap gap-3">
            {playArounds.map((item) => (
              <a
                href={item.url}
                key={item.name}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tag text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <img src={item.icon} className="w-5 h-5" />
                  <span>{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5"></span>
                  <span className="text-light-gray text-xs">{item.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </Card>

        {/* Details */}
        <Card className="lg:col-span-3">
          <h3 className="text-light-gray mb-4">Details</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {details.map((detail) => (
              <div
                key={detail.value}
                className="flex items-center gap-2 text-white text-sm"
              >
                <img src={detail.icon} className="w-5 h-5" />
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-6 border-t border-gray-700 pt-3 text-xs text-gray-400 flex justify-between lg:col-span-3">
          <span>
            © {new Date().getFullYear()} Software Development Freelancer
          </span>
          <div className="flex gap-3">
            <a
              href="https://github.com/kong44"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              github
            </a>
            <a
              href="https://khmercoder.com/@kong41"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              khmercoder
            </a>
            <a
              href="https://www.khmer24.com/chansokkong"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              khmer24
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
