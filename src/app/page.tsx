import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiGithub, FiLinkedin, FiInstagram, FiHome, FiFolder } from "react-icons/fi";
import { featuredProjects } from "@/data/projects";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-inter',
});

export default function Home() {
  return (
    <main className={`min-h-screen px-6 py-12 md:px-12 max-w-3xl mx-auto ${inter.variable} font-sans antialiased`}>
      {/* Navigation */}
      <nav className="flex justify-end gap-4 mb-12">
        <Link href="/" className="text-sm text-[#5a534c] hover:text-[#2a2520] transition-colors flex items-center gap-1">
          <FiHome className="w-3.5 h-3.5" /> Home
        </Link>
        <Link href="/projects" className="text-sm text-[#5a534c] hover:text-[#2a2520] transition-colors flex items-center gap-1">
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

        {/* Name + Socials */}
        <div>
          <h1 className="text-4xl md:text-5xl font-normal text-[#2a2520] mb-2 tracking-normal">
            Annie Lin
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
            <a href="mailto:axlin@mit.edu" className="hover:underline text-[#5a534c] transition-colors">
              axlin@mit.edu
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/anniexlinn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub className="w-5 h-5 text-[#5a534c] hover:text-[#2a2520] transition-colors" />
              </a>
              <a href="https://linkedin.com/in/annie-lin-7a085bb5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin className="w-5 h-5 text-[#5a534c] hover:text-[#2a2520] transition-colors" />
              </a>
              <a href="https://instagram.com/anniexlinn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FiInstagram className="w-5 h-5 text-[#5a534c] hover:text-[#2a2520] transition-colors" />
              </a>
            </div>
          </div>

          {/* Intro Paragraph */}
          <div className="prose prose-gray max-w-lg">
            <p className="text-gray-700 mb-4">
              Hi! I&apos;m Annie, a rising senior at MIT studying CS & AI from Houston, TX. 
            </p>
            <p className="text-gray-700 mb-4">
              I&apos;m passionate about innovating, whether that means bringing my ideas to life or being a part of something huge.
              My current interests are in software development, AI/ML, data analytics, and exploring the applications 
              of these in healthcare and fintech. 
            </p>
            <p className="text-gray-700">
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
              <p className="text-gray-600 mb-3">{project.description}</p>

              {/* Updated pink tech bubbles */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-[#fbe6e6] text-[#3a3530] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#5a534c] hover:text-[#2a2520] transition-colors flex items-center gap-1"
              >
                <FiGithub className="w-4 h-4" /> View more
              </a>
            </div>
          ))}
        </div>
        
        {/* View More Projects Arrow Link */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/projects"
            className="text-sm text-[#5a534c] hover:text-[#2a2520] transition-colors flex items-center gap-1"
          >
            View more projects <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Website Note */}
        <div className="pt-4 text-sm text-[#3a3530] flex items-center">
          <span className="mr-1">+</span>
          <span>this website (React & Next.js, TypeScript, Tailwind CSS)</span>
        </div>
      </section>
    </main>
  );
}
