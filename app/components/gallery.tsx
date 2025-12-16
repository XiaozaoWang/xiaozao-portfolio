"use client";
import Image from "next/image";
import { useRef } from "react";

const defaultGalleryImages = [];

interface GalleryProps {
  images?: string[];
  title?: string;
}

export function Gallery({ images, title }: GalleryProps = {}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const galleryImages = images
    ? images.map((img, idx) => ({
        src: img,
        alt: `Gallery Image ${idx + 1}`,
      }))
    : defaultGalleryImages;

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-16">
      {title && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth flex-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryImages.map((image, index) => (
            <div key={index} className="flex-none h-96 relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={800}
                className="h-96 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex-none text-gray-400 dark:text-gray-500">
          <svg
            className="w-8 h-8 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
