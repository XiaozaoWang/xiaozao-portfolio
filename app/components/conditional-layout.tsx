"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "./nav";
import Footer from "./footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  if (isLandingPage) {
    // Full-screen layout with overlaid navigation for landing page
    return (
      <div className="relative min-h-screen">
        {/* Full-screen content */}
        <main className="h-screen w-screen">{children}</main>

        {/* Overlaid Sidebar Navigation */}
        <div className="fixed left-0 top-0 w-64 h-full bg-black/20 backdrop-blur-sm border-r border-white/10 z-50 flex flex-col">
          <div className="flex-1">
            <Navbar />
          </div>
          <div className="p-6 text-xs text-white/70 space-y-1">
            <p className="font-medium">Prism (2023)</p>
            <p>Created with p5.js</p>
            <p className="italic">Instruction: Press to rotate the prism.</p>
          </div>
        </div>
      </div>
    );
  }

  // Standard sidebar layout for other pages
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 fixed left-0 top-0 h-full flex flex-col">
        <div className="flex-1">
          <Navbar />
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 ml-64">
        <main className="max-w-6xl mx-auto px-6 py-8">
          {/* 6xl控制宽度 */}
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
