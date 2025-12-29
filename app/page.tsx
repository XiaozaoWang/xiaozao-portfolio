"use client";
import { useState } from "react";
import { FullPageP5Sketch } from "app/components/full-page-p5-sketch";

export default function Page() {
  const [showCallout, setShowCallout] = useState(true);

  return (
    <div className="relative h-full">
      {/* Full-page P5.js background */}
      <FullPageP5Sketch />

      {/* Welcome message overlay */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Welcome
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Interactive light refraction simulation
          </p>
        </div>
      </div> */}

      {/* Instructions at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-white/60 text-sm text-center">
          Move mouse to control the prism • Press 'R' to toggle rainbow • Click
          and drag to rotate
        </p>
      </div>

      {/* New version callout */}
      {showCallout && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-white/15 backdrop-blur-md rounded-xl px-8 py-5 border border-white/30 shadow-lg max-w-xl relative">
            <button
              onClick={() => setShowCallout(false)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors border border-white/30"
              aria-label="Close"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="text-white text-base leading-relaxed">
              Welcome to the new version of my portfolio!{" "}
              <a
                href="https://pyrite-sturgeon-79b.notion.site/Xiaozao-Wang-202c7099423b80519d6ae821e40a4306"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold underline decoration-2 underline-offset-2 hover:text-white/90 transition-colors"
              >
                View Legacy
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
