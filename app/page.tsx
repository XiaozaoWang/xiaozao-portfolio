import { FullPageP5Sketch } from "app/components/full-page-p5-sketch";

export default function Page() {
  return (
    <div className="relative h-full">
      {/* Full-page P5.js background */}
      <FullPageP5Sketch />

      {/* Welcome message overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Welcome
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Interactive light refraction simulation
          </p>
        </div>
      </div>

      {/* Instructions at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-white/60 text-sm text-center">
          Move mouse to control the prism • Press 'R' to toggle rainbow • Click
          and drag to rotate
        </p>
      </div>
    </div>
  );
}
