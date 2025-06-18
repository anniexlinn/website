'use client'
// import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiLinkedin} from "react-icons/fi";
import { allProjects } from "@/data/projects";
import { Inter } from 'next/font/google';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { displayedProjects } from "@/data/projects";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-inter',
});

export default function Home() {
  // const [displayedProjects] = useState(allProjects.slice(0, 3));
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % displayedProjects.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + displayedProjects.length) % displayedProjects.length);
  };

  return (
    <div className={`min-h-screen flex flex-col ${inter.variable} font-sans antialiased`}>
      {/* Anchor point for Home link */}
      <div id="top" className="absolute top-0" />
      
      {/* Navbar */}
      <Navbar />

      {/* Main content container */}
      <main className="flex-1 px-6 pt-24 pb-12 md:px-12 md:pt-28 mx-auto w-full max-w-5xl">
        {/* Header Section */}
        <header className="mb-20 flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/annie-profile.jpg"
              alt="Annie Lin"
              width={176}
              height={176}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4 max-w-2xl">
            <h1 className="font-orbitron text-4xl md:text-5xl text-primary dark:text-[#f0c8c6]">
              Annie Lin
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <span className="interactive-element">
                axlin [at] mit [dot] edu
              </span>
              <div className="flex gap-4">
                <a href="https://github.com/anniexlinn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub className="interactive-element w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/annie-lin-7a085bb5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin className="interactive-element w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="max-w-lg mx-auto text-secondary dark:text-[#e8c9c8] space-y-2 px-4"> 
              <p className="text-secondary dark:text-[#e8c9c8]">
                Hi! I&apos;m Annie, a rising senior at MIT studying Computer Science + Artificial Intelligence from Houston, TX. 
              </p>
              <p className="text-secondary dark:text-[#e8c9c8]">
                I&apos;m passionate about innovating, whether that means bringing my ideas to life or being a part of something meaningful.
                My current interests are in software development, AI/ML, web design, data analytics, and exploring the applications 
                of these in healthcare and fintech. 
              </p>
              <p className="text-secondary dark:text-[#e8c9c8]">
                Outside of tech, I love art, piano, dance, swimming, binge-watching shows, and trying new coffees &amp; matchas!
              </p>
            </div>
          </div>
        </header>

        {/* Projects Section */}
        <section id="projects" className="mb-16 scroll-mt-16">
          <h2 className="text-3xl font-orbitron text-primary dark:text-[#f0c8c6] mb-8 text-center">
            Projects
          </h2>

          {/* Compact Slideshow */}
        <div className="mb-12 mx-auto max-w-3xl">
        <div className="relative w-full h-100 overflow-hidden rounded-xl shadow-md border border-[#f0d6d6] dark:border-[#475569]">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`absolute inset-0 transition-opacity duration-300 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* Background Image with Subtle Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-black/30 dark:bg-black/40" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-orbitron !text-[#f0c8c6]">
                    {project.title}
                  </h3>
                  <p className="text-xs !text-[#f0c8c6] mb-1">
                    {project.technologies.join(', ')}
                  </p>
                </div>
                
                {/* GitHub Icon */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 text-[#f0c8c6] hover:text-white transition-colors"
                  aria-label="GitHub Repository"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
          
          {/* Compact Navigation Arrows */}
          <button 
            onClick={handlePrevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#f0d6d6] dark:bg-[#475569] rounded-full w-8 h-8 flex items-center justify-center hover:scale-110 transition-all"
            aria-label="Previous project"
          >
            &larr;
          </button>
          <button 
            onClick={handleNextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#f0d6d6] dark:bg-[#475569] rounded-full w-8 h-8 flex items-center justify-center hover:scale-110 transition-all"
            aria-label="Next project"
          >
            &rarr;
          </button>
        </div>
      </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => (
              <div 
                key={project.title} 
                className="project-card rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-medium text-primary dark:text-[#f0c8c6]">
                    {project.title}
                  </h3>
                  <p className="text-secondary dark:text-[#e8c9c8]">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 py-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="tech-bubble text-xs px-2 py-1 rounded-full
                                  bg-[#f0d6d6] dark:bg-[#475569]
                                  text-[#171717] dark:text-[#f8fafc]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive-element text-sm flex items-center gap-1 mt-3"
                  >
                    <FiGithub className="w-4 h-4" /> View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <span className="tech-bubble text-xs px-2 py-1 rounded-full
                              bg-[#f5e6e5] dark:bg-[#2e3740]
                              text-[#171717] dark:text-[#f8fafc]">
              + this website built with: TypeScript, JavaScript, TailwindCSS, React & Next.js, Vercel
            </span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
