import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const artImages = [
  '/hk.JPG',
  '/grocery.jpeg',
  '/parasite.jpeg',
  '/ghibli.jpeg',
  '/yunnan.jpeg',
  '/bus.jpeg',
  '/sh.jpeg',
  '/cafe.jpeg',
  '/lunch.jpeg',
  '/market.jpeg'
];

export default function Art() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-6 pt-32 md:px-12 md:pt-40">
        <header className="mb-14 border-b border-line pb-10">
          <h1 className="font-display text-[clamp(4rem,7vw,5rem)] italic leading-none tracking-[-0.04em] text-primary">
            art
          </h1>
          <p className="mt-4 max-w-3xl font-body text-lg leading-relaxed text-secondary md:text-xl">
            traditional and digital pieces inspired by people, places, and passing thoughts
          </p>
        </header>

        <section className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {artImages.map((src) => (
            <figure
              key={src}
              className="mb-5 break-inside-avoid overflow-hidden"
            >
              <Image
                src={src}
                alt="artwork"
                width={900}
                height={1200}
                className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
            </figure>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
