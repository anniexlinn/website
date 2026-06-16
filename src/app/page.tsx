import Image from 'next/image';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { allProjects } from '@/data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-6 pt-32 md:px-12">
        <section className="pb-28 pt-20">
          <div className="max-w-3xl">
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] italic leading-[0.95] tracking-[-0.035em] text-primary">
              hi &mdash; i&apos;m annie!
            </h1>

            <p className="mt-8 max-w-xl font-body text-[1.05rem] leading-[1.65] tracking-[-0.015em] text-secondary md:text-[1.15rem]">
              I recently graduated from MIT, where I studied Artificial Intelligence + Biology.
              I enjoy exploring AI systems, machine learning, and thoughtful product design.
            </p>

            <div className="mt-8 flex gap-5 font-body text-sm lowercase text-secondary">
              <a
                href="https://github.com/anniexlinn"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1"
              >
                github <FiGithub className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://linkedin.com/in/annie-lin-7a085bb5"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1"
              >
                linkedin <FiLinkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-line py-16">
          <h2 className="font-display text-[clamp(3rem,6vw,4rem)] italic leading-none tracking-[-0.04em] text-primary mb-10">
            work
          </h2>
          <div className="space-y-8">
            {allProjects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-6 rounded-3xl border border-line p-7 transition hover:bg-[#f7f7f5] md:grid-cols-[220px_1fr]"
              >
                {project.image ? (
                  <div className="relative h-36 overflow-hidden rounded-2xl border border-line bg-[#efefed] md:h-40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                ) : (
                  <div className="project-thumb h-36 md:h-40" />
                )}

                <div>
                  <h2 className="max-w-2xl font-body text-[clamp(1.15rem,1.8vw,1.45rem)] font-normal leading-[1.2] tracking-[-0.02em] text-primary">
                    {project.title.toLowerCase()}
                  </h2>

                  <p className="mt-3 max-w-2xl font-body text-base leading-relaxed tracking-[-0.015em] text-secondary">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-body text-sm text-primary">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech}>{tech.trim()}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
