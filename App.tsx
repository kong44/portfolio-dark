
import React from 'react';
import { 
  personalInfo, interests, experiences, education, designTools, editingTools, languages, portfolioLinks, details 
} from './constants';
import profile_img from '@/assets/photo_2025-07-14_14-15-15.jpg'
import * as Icons from './components/Icons';

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-card rounded-2xl p-6 ${className}`}>
    {children}
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-tag text-white text-sm px-3 py-1 rounded-md">
    {children}
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Profile & Bio */}
        <Card className="lg:col-span-3">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img 
              src={profile_img}
              alt="Sunil Kumar"
              className="w-32 h-42 md:w-40 md:h-50 rounded-xl object-cover border-4 border-card" 
            />
            <div className="flex-1">
              <p className="text-white text-lg leading-relaxed italic">{personalInfo.bio}</p>
              <div className="mt-6">
                <h3 className="text-light-gray mb-3">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map(interest => (
                    <div key={interest.name} className="flex items-center gap-2 bg-tag text-white text-sm px-4 py-2 rounded-lg">
                      <interest.icon className="w-5 h-5" />
                      <span>{interest.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Experience */}
        {experiences.map((exp, index) => (
          <Card key={index} className="lg:col-span-3 even:lg:col-span-2 odd:lg:col-span-1 flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-xl font-bold text-white">{exp.title}</h2>
                <p className="text-light-gray">{exp.role}</p>
              </div>
              <Tag>{exp.dates}</Tag>
            </div>
            <ul className="list-disc list-inside space-y-2 text-light-gray pl-2 mt-4">
              {exp.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </Card>
        ))}

        {/* Skills Column */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <h3 className="text-light-gray mb-4">Design Tools</h3>
            <div className="flex flex-wrap gap-4">
              {designTools.map(Tool => <Tool key={Tool.name} className="w-8 h-8" />)}
            </div>
          </Card>
          <Card>
            <h3 className="text-light-gray mb-4">Editing Tools</h3>
            <div className="flex flex-wrap gap-4">
              {editingTools.map(Tool => <Tool key={Tool.name} className="w-8 h-8" />)}
            </div>
          </Card>
          <Card>
            <h3 className="text-light-gray mb-4">Languages</h3>
            <div className="flex flex-wrap gap-4">
              {languages.map(Lang => <Lang key={Lang.name} className="w-8 h-8 rounded-md object-cover" />)}
            </div>
          </Card>
        </div>

        {/* Education */}
        <Card className="lg:col-span-2">
          {education.map((edu, index) => (
            <div key={index} className={index < education.length - 1 ? 'border-b border-tag pb-4 mb-4' : ''}>
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
                {portfolioLinks.map(link => (
                    <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-tag text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                        <link.icon className="w-5 h-5" />
                        <span>{link.name}</span>
                    </a>
                ))}
            </div>
        </Card>
        
        {/* Details */}
        <Card className="lg:col-span-3">
            <h3 className="text-light-gray mb-4">Details</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
                {details.map(detail => (
                    <div key={detail.value} className="flex items-center gap-2 text-white text-sm">
                        <detail.icon className="w-5 h-5" />
                        <span>{detail.value}</span>
                    </div>
                ))}
            </div>
        </Card>

      </main>
    </div>
  );
};

export default App;
