"use client";
import Image from "next/image";
import { useRef } from "react";

const galleryImages = [
  { src: "https://picsum.photos/400/300?random=1", alt: "Gallery Image 1" },
  { src: "https://picsum.photos/400/300?random=2", alt: "Gallery Image 2" },
  { src: "https://picsum.photos/400/300?random=3", alt: "Gallery Image 3" },
  { src: "https://picsum.photos/400/300?random=4", alt: "Gallery Image 4" },
  { src: "https://picsum.photos/400/300?random=5", alt: "Gallery Image 5" },
  { src: "https://picsum.photos/400/300?random=6", alt: "Gallery Image 6" },
  { src: "https://picsum.photos/400/300?random=7", alt: "Gallery Image 7" },
  { src: "https://picsum.photos/400/300?random=8", alt: "Gallery Image 8" },
];

export function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Gallery
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

      <div
        ref={scrollContainerRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="flex-none w-64 h-48 relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
