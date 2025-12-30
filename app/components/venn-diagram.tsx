"use client";
import { useState } from "react";
import Image from "next/image";

type CircleType = "coding" | "art" | "education" | null;

const content = {
  coding: {
    title: "Coding",
    description: (
      <>
        <p className="mb-3">
          <strong>
            I use code not only as a building tool, but also as a thinking tool
            to turn abstract ideas into precise, interactive systems.
          </strong>
        </p>
        <p className="mb-3">
          With a dual background in Computer Science and Interactive Media, I
          was trained rigorously in algorithms, data structures, and
          systems-level programming while maintaining a critical
          interdisciplinary perspective.
        </p>
        <p>
          I believe technology is never the destination, only the vehicle.
          Guided by this, I focus my practice on how technology can serve as a
          medium to reshape human perception and deepen our engagement with the
          world and one another.
        </p>
      </>
    ),
    color: "rgb(37, 99, 235)", // blue-600
    image: "/about-images/v4.jpg",
  },
  art: {
    title: "Art",
    description: (
      <>
        <p className="mb-3">
          <strong>
            I am a creative mind that sees the world in "what-ifs."
          </strong>{" "}
          I approach problems through artistic inquiry, using imagination and
          experimentation to reframe perception and design experiences.
        </p>
        <p className="mb-3">
          My practice spans interactive installations, speculative narratives,
          and exhibition-based works, often blending visual design with
          computational and spatial thinking.
        </p>
        <p>
          In collaborative settings, I spark unconventional ideas that open new
          directions for a team. As the team leader of a nationwide third-place
          project in the 2025 Disney Imaginations Competition, I guided our team
          to bridge imaginative speculation with tangible design.
        </p>
      </>
    ),
    color: "rgb(220, 38, 38)", // red-600
    image: "/about-images/v3.jpg",
  },
  education: {
    title: "Education",
    description: (
      <>
        <p className="mb-3">
          <strong>
            I'm passionate about education and the transformative power of
            curiosity.
          </strong>{" "}
          I believe the future of education isn't passive but immersive.
        </p>
        <p className="mb-3">
          My vision is to transform "knowledge delivery" into active, embodied
          exploration through emerging technologies.
        </p>
        <p>
          From teaching Scratch and English to migrant children, to supporting
          creative coding students as a teaching associate, to volunteering in
          science museums, I bring energy into every learning space. I wish to
          pass on my energy and share enthusiasm with the next generation.
        </p>
      </>
    ),
    color: "rgb(22, 163, 74)", // green-600
    image: "/about-images/v1.jpg",
  },
};

export function VennDiagram() {
  const [activeCircle, setActiveCircle] = useState<CircleType>(null);

  return (
    <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Venn Diagram */}
      <div className="flex justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full max-w-md"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Coding Circle - Top Left */}
          <circle
            cx="140"
            cy="140"
            r="100"
            fill="rgb(59, 130, 246)"
            fillOpacity={activeCircle === "coding" ? "0.5" : "0.2"}
            stroke="rgb(37, 99, 235)"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setActiveCircle("coding")}
            onMouseLeave={() => setActiveCircle(null)}
          />
          <text
            x="90"
            y="120"
            textAnchor="middle"
            fill="rgb(37, 99, 235)"
            className="text-sm font-semibold pointer-events-none select-none"
          >
            Coding
          </text>

          {/* Art Circle - Top Right */}
          <circle
            cx="260"
            cy="140"
            r="100"
            fill="rgb(239, 68, 68)"
            fillOpacity={activeCircle === "art" ? "0.5" : "0.2"}
            stroke="rgb(220, 38, 38)"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setActiveCircle("art")}
            onMouseLeave={() => setActiveCircle(null)}
          />
          <text
            x="310"
            y="120"
            textAnchor="middle"
            fill="rgb(220, 38, 38)"
            className="text-sm font-semibold pointer-events-none select-none"
          >
            Art
          </text>

          {/* Education Circle - Bottom Center */}
          <circle
            cx="200"
            cy="260"
            r="100"
            fill="rgb(34, 197, 94)"
            fillOpacity={activeCircle === "education" ? "0.5" : "0.2"}
            stroke="rgb(22, 163, 74)"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setActiveCircle("education")}
            onMouseLeave={() => setActiveCircle(null)}
          />
          <text
            x="200"
            y="310"
            textAnchor="middle"
            fill="rgb(22, 163, 74)"
            className="text-sm font-semibold pointer-events-none select-none"
          >
            Education
          </text>

          {/* Center intersection text */}
          {/* <text
            x="200"
            y="195"
            textAnchor="middle"
            fill="rgb(107, 114, 128)"
            className="text-xs font-medium pointer-events-none select-none"
          >
            Creative
          </text>
          <text
            x="200"
            y="210"
            textAnchor="middle"
            fill="rgb(107, 114, 128)"
            className="text-xs font-medium pointer-events-none select-none"
          >
            Technologist
          </text> */}
        </svg>
      </div>

      {/* Content Display */}
      <div className="h-[600px] flex items-start !pt-0 overflow-hidden">
        {activeCircle ? (
          <div className="space-y-3 animate-in fade-in duration-300 overflow-y-auto max-h-full pr-2">
            <h3
              className="text-2xl font-semibold"
              style={{ color: content[activeCircle].color }}
            >
              {content[activeCircle].title}
            </h3>
            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {content[activeCircle].description}
            </div>
            {content[activeCircle].image && (
              <div className="mt-4 relative w-full h-48">
                <Image
                  src={content[activeCircle].image}
                  alt={content[activeCircle].title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 italic m-auto text-center px-4">
            Hover over a circle to learn more about my skills and passions.
          </p>
        )}
      </div>
    </div>
  );
}
