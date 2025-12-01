"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/about": {
    name: "about",
  },
  "/work": {
    name: "work",
  },
};

export function Navbar() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <aside className="h-full p-6">
      <div className="mb-8">
        <Link href="/" className="inline-block">
          <h1
            className={`text-xl font-bold transition-colors cursor-pointer inline-block ${
              isLandingPage
                ? "text-white hover:text-white/80"
                : "text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300"
            }`}
          >
            Xiaozao Wang
          </h1>
        </Link>
      </div>
      <nav className="flex flex-col space-y-2">
        {Object.entries(navItems).map(([path, { name }]) => {
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
        })}
      </nav>
    </aside>
  );
}
