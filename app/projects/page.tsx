export default function ProjectsPage() {
  return (
    <section>
      <div className="mb-12">
        <h1 className="mb-8 text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
          All Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          A comprehensive collection of my work and experiments.
        </p>
      </div>

      <div className="space-y-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Project {i}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              This is a placeholder for project {i}. More details coming soon.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                Tag 1
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                Tag 2
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
