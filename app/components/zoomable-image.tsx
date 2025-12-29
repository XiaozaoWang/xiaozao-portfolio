"use client";
import { useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ZoomableImage({
  src,
  alt,
  className = "",
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in hover:opacity-90 transition-opacity`}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
