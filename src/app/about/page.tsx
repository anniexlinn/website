import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-6 pt-32 md:px-12 md:pt-40">
        <header className="mb-14 border-b border-line pb-10">
          <h1 className="font-display text-[clamp(4rem,7vw,5rem)] italic leading-none tracking-[-0.04em] text-primary">
            about
          </h1>

          {/* <p className="mt-4 max-w-3xl font-body text-lg leading-relaxed text-secondary md:text-3xl">
            annie lin
          </p> */}
        </header>

        <section className="grid gap-12 md:grid-cols-[420px_1fr]">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/annie-profile.jpg"
              alt="Annie Lin"
              width={800}
              height={1000}
              className="w-full object-cover grayscale transition-all duration-500 hover:scale-[1.02] hover:grayscale-0"
            />
          </div>

          <div className="max-w-2xl font-body text-[1.05rem] leading-[1.65] tracking-[-0.015em] text-secondary md:text-[1.15rem]">
            <p>
              I&apos;m a recent MIT graduate who studied AI + Bio from Houston, TX. I&apos;ll be 
              working as a software engineer in NYC starting this fall. 
            </p>

            <p className="mt-6">
              I like building projects that blend engineering, design, and a bit of creativity. 
              My current interests revolve around AI systems, developer tools, and software that helps 
              people learn, create, and work more effectively in the world around them.
            </p>

            <p className="mt-6">
              I also really love art, piano, dance, swimming, and whatever corners of media and 
              entertainment have captured my attention lately. 
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
