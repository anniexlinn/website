import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { allProjects } from '@/data/projects';

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-6 pt-32 md:px-12 md:pt-40">
        <header className="mb-14 border-b border-line pb-10">
          <h1 className="page-title">work</h1>
          <p className="mt-4 max-w-xl text-lg leading-snug text-secondary">
            Selected software, AI, and systems projects.
          </p>
        </header>

        <div className="space-y-0">
          {allProjects.map((project) => (
            <article key={project.title} className="portfolio-row group">
              <div className="portfolio-image-shell">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={360}
                    height={220}
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                  />
                ) : (
                  <div className="placeholder-image" />
                )}
              </div>

              <div className="portfolio-copy">
                <p className="meta-line">{project.updated}</p>
                <h2 className="portfolio-title">{project.title}</h2>
                <p className="portfolio-desc">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="pill">{tech}</span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm text-secondary transition hover:border-primary hover:text-primary"
                >
                  View project <FiExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
