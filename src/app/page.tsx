import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiGithub, FiLinkedin, FiHome, FiFolder } from "react-icons/fi";
import { featuredProjects } from "@/data/projects";
import { Inter } from 'next/font/google';
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-inter',
});

export default function Home() {
  return (
    <main className={`min-h-screen px-6 py-12 md:px-12 max-w-3xl mx-auto ${inter.variable} font-sans antialiased`}>
      {/* Navigation - Updated with interactive-element class */}
      <nav className="flex justify-end gap-4 mb-12">
        <Link href="/" className="interactive-element text-sm flex items-center gap-1">
          <FiHome className="w-3.5 h-3.5" /> Home
        </Link>
        <Link href="/projects" className="interactive-element text-sm flex items-center gap-1">
          <FiFolder className="w-3.5 h-3.5" /> Projects
        </Link>
      </nav>

      {/* Profile Section */}
      <header className="mb-16 flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Image */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-gray-200">
          <Image
            src="/annie-profile.jpg"
            alt="Annie Lin"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Name + Socials - Updated with interactive-element class */}
        <div>
          <h1 className="text-4xl md:text-5xl font-normal text-[#2a2520] mb-2 tracking-normal">
            Annie Lin
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
            <span className="interactive-element">axlin [at] mit [dot] edu</span>
            <div className="flex gap-4">
              <a href="https://github.com/anniexlinn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub className="interactive-element w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/annie-lin-7a085bb5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin className="interactive-element w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Intro Paragraph */}
          <div className="prose prose-gray max-w-lg">
            <p className="text-[#5a534c] mb-4">
              Hi! I&apos;m Annie, a rising senior at MIT studying CS & AI from Houston, TX. 
            </p>
            <p className="text-[#5a534c] mb-4">
              I&apos;m passionate about innovating, whether that means bringing my ideas to life or being a part of something meaningful.
              My current interests are in software development, AI/ML, data analytics, and exploring the applications 
              of these in healthcare and fintech. 
            </p>
            <p className="text-[#5a534c]">
              Outside of tech, I love art, piano, dance, swimming, binge-watching c/kdramas, and trying new coffees &amp; matchas!
            </p>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="mb-24">
        <div className="mb-8">
          <h2 className="text-2xl font-medium text-[#2a2520] mb-2">
            Recent projects
          </h2>
          <div className="w-12 h-px bg-gray-300"></div>
        </div>

        <div className="grid gap-8">
          {featuredProjects.map((project) => (
            <div key={project.title} className="pb-8">
              <h3 className="text-xl font-normal text-[#2a2520] mb-2 tracking-normal">
                {project.title}
              </h3>
              <p className="text-[#5a534c] mb-3">{project.description}</p>

              {/* Tech bubbles */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-[#fbe6e6] text-[#3a3530] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Updated project link with interactive-element class */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-element text-sm flex items-center gap-1"
              >
                <FiGithub className="w-4 h-4" /> View more
              </a>
            </div>
          ))}
        </div>
        
        {/* Updated "View more projects" link with interactive-element class */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/projects"
            className="interactive-element text-m flex items-center gap-1"
          >
            View more projects <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Updated website note with interactive-element class */}
        <div className="interactive-element pt-4 text-sm flex items-center">
          <span className="mr-1">+</span>
          <span>this website (React & Next.js, TypeScript, Tailwind CSS)</span>
        </div>
      </section>
      <Footer />
    </main>
  );
}
