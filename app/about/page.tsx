import Image from "next/image";

export default function AboutPage() {
  return (
    <section>
      <div className="mb-12">
        <h1 className="mb-8 text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
          About Me
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Portrait Image */}
        <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
          <Image
            src="/about-images/beach.jpg"
            alt="Xiaozao at the beach"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Right: Bio Text */}
        <div className="space-y-6">
          <p>
            I am an artist and developer working at the intersection of computer
            science, education, and interactive media. My practice investigates
            how emerging technologies can transform science education from
            passive knowledge delivery into active, immersive exploration.
          </p>
          <p>
            My vision is to position curiosity and exploration as the driving
            forces of deep understanding, and to make sensing and engaging with
            the world the core goal for the cultivation of scientific literacy.
          </p>

          <div>
            <a
              href="https://drive.google.com/file/d/1OXUjBzPSsfFgnClLWYodHUKyra_qt-TS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
            >
              View CV →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
