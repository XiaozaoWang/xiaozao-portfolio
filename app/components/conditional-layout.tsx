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
        <div className="fixed left-0 top-0 w-64 h-full bg-black/20 backdrop-blur-sm border-r border-white/10 z-50">
          <Navbar />
        </div>
      </div>
    );
  }

  // Standard sidebar layout for other pages
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 fixed left-0 top-0 h-full">
        <Navbar />
      </div>
      {/* Main Content */}
      <div className="flex-1 ml-64">
        <main className="max-w-4xl mx-auto px-8 py-8">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
