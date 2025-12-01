export default function FeaturedPage() {
  return (
    <section>
      <div className="mb-12">
        <h1 className="mb-8 text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
          Featured Work
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Discover my most important and innovative projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Featured Project 1
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Coming soon - an amazing project showcase.
          </p>
        </div>

        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Featured Project 2
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Coming soon - another amazing project showcase.
          </p>
        </div>
      </div>
    </section>
  );
}
