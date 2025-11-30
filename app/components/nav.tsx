import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "https://vercel.com/templates/next.js/portfolio-starter-kit": {
    name: "deploy",
  },
};

export function Navbar() {
  return (
    <aside className="h-full p-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          Xiaozao Portfolio
        </h1>
      </div>
      <nav className="flex flex-col space-y-2">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-gray-100 dark:hover:bg-gray-800 py-2 px-3 rounded-md capitalize font-medium"
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
