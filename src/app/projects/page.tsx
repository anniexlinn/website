import Link from "next/link";
import { FiGithub, FiExternalLink, FiHome, FiFolder } from "react-icons/fi";
import { allProjects } from "@/data/projects";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-inter',
});

export default function Projects() {
  return (
    <div className={`min-h-screen px-6 py-12 md:px-12 max-w-3xl mx-auto ${inter.variable} font-sans antialiased`}>
      {/* Navigation - Match home page */}
      <nav className="flex justify-end gap-4 mb-12">
        <Link 
          href="/" 
          className="text-sm text-[#5a534c] hover:text-[#2a2520] transition-colors flex items-center gap-1"
        >
          <FiHome className="w-3.5 h-3.5" /> Home
        </Link>
        <Link 
          href="/projects" 
          className="text-sm text-[#5a534c] hover:text-[#2a2520] transition-colors flex items-center gap-1"
        >
          <FiFolder className="w-3.5 h-3.5" /> Projects
        </Link>
      </nav>

      <h1 className="text-3xl font-normal text-[#2a2520] mb-8">Projects</h1>

      <div className="space-y-12">
        {allProjects.map((project) => (
          <section 
            key={project.title} 
            className="border-b border-gray-200 pb-12 group"
          >
            <h2 className="text-xl font-normal text-[#2a2520] mb-2 tracking-normal">
              {project.title}
            </h2>
            <p className="text-[#5a534c] mb-4">{project.description}</p>

            {/* Tech bubble tags with soft pink background */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs px-2 py-1 bg-[#fbe6e6] text-[#3a3530] rounded-full"
                >
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
              <FiGithub className="w-4 h-4" />
              View project 
              <FiExternalLink className="w-3 h-3 opacity-80 group-hover:opacity-100 transition-opacity" />
            </a>
          </section>
        ))}
      </div>
    </div>
  );
}
