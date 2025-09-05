
import React, {useState, useEffect, useRef} from 'react';
import { 
  personalInfo, interests, experiences, education, developmentTools, programmingLanguage, languages, portfolioLinks, details,playArounds, services
} from './constants';
import profile_img from '@/assets/photo_2025-07-14_14-15-15.jpg'
import * as Icons from './components/Icons';
import music from './assets/background.mp3';
import email from './assets/mail.png';
import telegram from './assets/telephone.png'
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-card rounded-2xl p-5 ${className}`}>
    {children}
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-black text- text-sm px-3 py-1 rounded-md">
    {children}
  </div>
);



const App: React.FC = () => {
const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(music); // Make sure file is in `public/`
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
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
      {/* Music Control Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleMusic}
          className="bg-tag text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          {isPlaying ? "🔊 Pause Music" : "▶️ Play Music"}
        </button>
      </div>
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile & Bio */}

        <div className="lg:col-span-3">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={profile_img}
              alt="profile"
              className="w-48 h-[230px] rounded-xl object-cover border-4 border-card"
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
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="lg:col-span-3 even:lg:col-span-2 odd:lg:col-span-1 flex-1"
          >
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
        ))}

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
          <h3 className="text-light-gray mb-4">Portfolio</h3>
          <div className="flex flex-wrap gap-3">
            {portfolioLinks.map((item) => (
              <a
                href={item.url}
                key={item.name}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-tag text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <img src={item.icon} className="w-5 h-5" />
                <span>{item.name}</span>
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
                className="flex items-center gap-2 bg-tag text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <img src={item.icon} className="w-5 h-5" />
                <span>{item.name}</span>
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
          <span>© {new Date().getFullYear()} Software Development Freelancer</span>
          <a
            href="https://github.com/kong44"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            ៙KONG៚ 
          </a>
        </div>
     
        
      </main>
    </div>
  );
};

export default App;
