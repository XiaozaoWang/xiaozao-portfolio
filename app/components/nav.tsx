"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getBlogPosts } from "app/work/utils";
import { getRandomPosts } from "app/random/utils";

const navItems = {
  // "/home": {
  //   name: "home",
  //   external: true,
  //   url: "https://pyrite-sturgeon-79b.notion.site/Xiaozao-Wang-202c7099423b80519d6ae821e40a4306",
  // },
  "/work": {
    name: "work",
    external: false,
    url: "",
    hasSublist: true,
  },
  "/random": {
    name: "random",
    external: false,
    url: "",
    hasSublist: true,
  },
  "/about": {
    name: "about",
    external: false,
    url: "",
  },
};

export function Navbar() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const [workExpanded, setWorkExpanded] = useState(false);
  const [randomExpanded, setRandomExpanded] = useState(false);
  const workPosts = getBlogPosts();
  const randomPosts = getRandomPosts();

  return (
    <aside className="h-full p-6">
      <div className="mb-8">
        <Link href="/" className="inline-block">
          <div className="flex items-center gap-3">
            <Image
              src="/about-images/l1.png"
              alt="Logo"
              width={32}
              height={32}
              className="flex-shrink-0"
            />
            <h1
              className={`text-xl font-bold transition-colors cursor-pointer ${
                isLandingPage
                  ? "text-white hover:text-white/80"
                  : "text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300"
              }`}
            >
              Xiaozao Wang
            </h1>
          </div>
        </Link>
      </div>
      <nav className="flex flex-col space-y-2">
        {Object.entries(navItems).map(
          ([path, { name, external, url, hasSublist }]) => {
            if (external && url) {
              return (
                <a
                  key={path}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block py-2 px-3 rounded-md capitalize font-medium transition-all ${
                    isLandingPage
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {name}
                </a>
              );
            }

            if (hasSublist) {
              const isWork = path === "/work";
              const isExpanded = isWork ? workExpanded : randomExpanded;
              const posts = isWork ? workPosts : randomPosts;
              const toggleExpanded = () => {
                if (isWork) {
                  setWorkExpanded(!workExpanded);
                } else {
                  setRandomExpanded(!randomExpanded);
                }
              };

              return (
                <div key={path}>
                  <div className="flex items-center">
                    <Link
                      href={path}
                      className={`flex-1 py-2 px-3 rounded-md capitalize font-medium transition-all ${
                        isLandingPage
                          ? "text-white/90 hover:text-white hover:bg-white/10"
                          : "hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {name}
                    </Link>
                    <button
                      onClick={toggleExpanded}
                      className={`p-2 rounded-md transition-all ${
                        isLandingPage
                          ? "text-white/70 hover:text-white hover:bg-white/10"
                          : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      {posts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`${path}/${post.slug}`}
                          className={`block py-1.5 px-3 rounded-md text-sm transition-all ${
                            isLandingPage
                              ? "text-white/80 hover:text-white hover:bg-white/10"
                              : "text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          {post.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={path}
                href={path}
                className={`inline-block py-2 px-3 rounded-md capitalize font-medium transition-all ${
                  isLandingPage
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {name}
              </Link>
            );
          }
        )}
      </nav>
    </aside>
  );
}
