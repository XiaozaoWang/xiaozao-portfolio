import Image from "next/image";
import { ZoomableImage } from "app/components/zoomable-image";

export default function VimPost() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      {/* ========== HEADINGS ========== */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-2">H1 Main Title</h1>
        <h2 className="text-3xl font-bold mb-2">H2 Section Title</h2>
        <h3 className="text-2xl font-bold mb-2">H3 Subsection Title</h3>
        <h4 className="text-xl font-bold mb-2">H4 Small Section</h4>
        <h5 className="text-lg font-bold mb-2">H5 Minor Section</h5>
        <h6 className="text-base font-bold mb-2">H6 Smallest Section</h6>
      </section>

      {/* ========== TEXT CONTENT ========== */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Text Content</h2>

        {/* Regular paragraph */}
        <p className="mb-4">
          Regular paragraph text. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>

        {/* Lead paragraph */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Lead paragraph with larger text and muted color for introductions.
        </p>

        {/* Small text */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Small text for captions, footnotes, or secondary information.
        </p>

        {/* Inline elements */}
        <p className="mb-4">
          Text with <strong>bold</strong>, <em>italic</em>,{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
            inline code
          </code>
          , and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            links
          </a>
          .
        </p>
      </section>

      {/* ========== QUOTES & CALLOUTS ========== */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Quotes & Callouts</h2>

        {/* Blockquote */}
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 dark:text-gray-300 mb-6">
          "This is a blockquote. Great for testimonials or important quotes."
        </blockquote>

        {/* Info callout */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
          <p className="text-blue-800 dark:text-blue-200">
            <strong>Info:</strong> This is an info callout for helpful
            information.
          </p>
        </div>

        {/* Warning callout */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400 mb-4">
          <p className="text-yellow-800 dark:text-yellow-200">
            <strong>Warning:</strong> This is a warning callout for important
            notices.
          </p>
        </div>

        {/* Error callout */}
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400 mb-4">
          <p className="text-red-800 dark:text-red-200">
            <strong>Error:</strong> This is an error callout for critical
            information.
          </p>
        </div>

        {/* Success callout */}
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400 mb-4">
          <p className="text-green-800 dark:text-green-200">
            <strong>Success:</strong> This is a success callout for positive
            feedback.
          </p>
        </div>
      </section>

      {/* ========== LISTS ========== */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lists</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Unordered List</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>First item</li>
              <li>Second item</li>
              <li>
                Third item
                <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                  <li>Nested item</li>
                  <li>Another nested item</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Ordered List</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>First step</li>
              <li>Second step</li>
              <li>
                Third step
                <ol className="list-decimal list-inside ml-4 mt-1 space-y-1">
                  <li>Sub-step</li>
                  <li>Another sub-step</li>
                </ol>
              </li>
            </ol>
          </div>
        </div>

        {/* Custom styled list */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Custom Styled List</h3>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-blue-500 text-white text-sm rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </span>
              <p>Custom numbered list item with icons</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-green-500 text-white text-sm rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </span>
              <p>Another custom list item</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CODE BLOCKS ========== */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Blocks</h2>

        {/* Inline code */}
        <p className="mb-4">
          Use{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
            inline code
          </code>{" "}
          for short snippets.
        </p>

        {/* Basic code block */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">Basic Code Block</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
            {`function hello() {
  console.log("Hello, World!");
}

hello();`}
          </pre>
        </div>

        {/* Code block with title */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">Code Block with Title</h3>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-sm font-mono">example.js</span>
            </div>
            <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto text-sm">
              {`const data = await fetch('/api/data');
const result = await data.json();
console.log(result);`}
            </pre>
          </div>
        </div>

        {/* Multiple language tabs */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">Multi-language Code</h3>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-800 flex space-x-1 p-1">
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                JavaScript
              </button>
              <button className="px-3 py-1 rounded text-sm text-gray-600 dark:text-gray-300">
                Python
              </button>
              <button className="px-3 py-1 rounded text-sm text-gray-600 dark:text-gray-300">
                Rust
              </button>
            </div>
            <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto text-sm">
              {`// JavaScript
const users = await db.users.findMany();
return users.map(user => ({
  id: user.id,
  name: user.name
}));`}
            </pre>
          </div>
        </div>
      </section>

      {/* ========== IMAGES ========== */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Images</h2>

        {/* Single image */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Single Image</h3>
          <ZoomableImage
            src="https://picsum.photos/800/300"
            alt="Sample image"
            className="w-full h-64 rounded-lg object-cover"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
            Image caption
          </p>
        </div>

        {/* Image with text wrap */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Image with Text Wrap</h3>
          <ZoomableImage
            src="https://picsum.photos/300/200"
            alt="Float image"
            className="float-left w-48 h-32 mr-4 mb-2 rounded object-cover"
          />
          <p>
            This text wraps around the floating image. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="clear-both"></div>
        </div>

        {/* Side by side images */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Side by Side Images</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ZoomableImage
              src="https://picsum.photos/400/300"
              alt="Image 1"
              className="h-40 rounded object-cover w-full"
            />
            <ZoomableImage
              src="https://picsum.photos/400/301"
              alt="Image 2"
              className="h-40 rounded object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* ========== GALLERIES ========== */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Galleries</h2>

        {/* Grid gallery */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Grid Gallery (2x2)</h3>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <ZoomableImage
                key={i}
                src={`https://picsum.photos/300/30${i}`}
                alt={`Gallery ${i}`}
                className="aspect-square rounded object-cover w-full hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        </div>

        {/* Flexbox gallery */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Flexbox Gallery</h3>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <ZoomableImage
                key={i}
                src={`https://picsum.photos/200/20${i}`}
                alt={`Flex ${i}`}
                className="w-32 h-32 flex-shrink-0 rounded object-cover"
              />
            ))}
          </div>
        </div>

        {/* Masonry-like gallery */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Masonry-style Gallery</h3>
          <div className="columns-2 md:columns-3 gap-4">
            <div className="mb-4 rounded overflow-hidden break-inside-avoid">
              <ZoomableImage
                src="https://picsum.photos/300/400"
                alt="Masonry 1"
                className="w-full"
              />
            </div>
            <div className="mb-4 rounded overflow-hidden break-inside-avoid">
              <ZoomableImage
                src="https://picsum.photos/300/300"
                alt="Masonry 2"
                className="w-full"
              />
            </div>
            <div className="mb-4 rounded overflow-hidden break-inside-avoid">
              <ZoomableImage
                src="https://picsum.photos/300/500"
                alt="Masonry 3"
                className="w-full"
              />
            </div>
            <div className="mb-4 rounded overflow-hidden break-inside-avoid">
              <ZoomableImage
                src="https://picsum.photos/300/350"
                alt="Masonry 4"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== LAYOUT COLUMNS ========== */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Column Layouts</h2>

        {/* 2 columns equal */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Two Equal Columns</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-2">Left Column</h4>
              <p>
                Content for the left column. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Right Column</h4>
              <p>
                Content for the right column. Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* 3 columns */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Three Columns</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
              <h4 className="font-bold mb-2">Column 1</h4>
              <p className="text-sm">First column content</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
              <h4 className="font-bold mb-2">Column 2</h4>
              <p className="text-sm">Second column content</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
              <h4 className="font-bold mb-2">Column 3</h4>
              <p className="text-sm">Third column content</p>
            </div>
          </div>
        </div>

        {/* 2/3 - 1/3 layout */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">2/3 - 1/3 Layout</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h4 className="font-bold mb-2">Main Content (2/3)</h4>
              <p>
                This takes up 2/3 of the width on desktop. Perfect for main
                content with a sidebar.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
              <h4 className="font-bold mb-2">Sidebar (1/3)</h4>
              <p className="text-sm">Sidebar content</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CARDS & CONTAINERS ========== */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Cards & Containers</h2>

        {/* Basic card */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">Basic Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-bold mb-2">Card Title</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Card description text.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                Action Button
              </button>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h4 className="font-bold mb-2">Filled Card</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Card with background color.
              </p>
            </div>
          </div>
        </div>

        {/* Feature boxes */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">Feature Boxes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">⚡</span>
              </div>
              <h4 className="font-bold mb-2">Fast</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Lightning fast performance
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🛡️</span>
              </div>
              <h4 className="font-bold mb-2">Secure</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Bank-level security
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🎨</span>
              </div>
              <h4 className="font-bold mb-2">Beautiful</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Stunning design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TABLES ========== */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Tables</h2>

        {/* Basic table */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">Basic Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">Name</th>
                  <th className="px-4 py-3 text-left font-bold">Role</th>
                  <th className="px-4 py-3 text-left font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-4 py-3">John Doe</td>
                  <td className="px-4 py-3">Developer</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded text-sm">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Jane Smith</td>
                  <td className="px-4 py-3">Designer</td>
                  <td className="px-4 py-3">
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded text-sm">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========== SEPARATORS ========== */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Separators</h2>

        <p>Content before separator</p>

        {/* Basic line */}
        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <p>Content after basic separator</p>

        {/* Decorative separator */}
        <div className="flex items-center my-8">
          <div className="flex-1 border-t border-gray-200 dark:border-gray-700"></div>
          <span className="px-4 text-gray-500 dark:text-gray-400">•••</span>
          <div className="flex-1 border-t border-gray-200 dark:border-gray-700"></div>
        </div>

        <p>Content after decorative separator</p>
      </section>

      {/* ========== VIDEOS ========== */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Video</h2>

        {/* Video placeholder */}
        <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
          <span className="text-gray-500 dark:text-gray-400">
            Video Player Placeholder
          </span>
        </div>

        {/* Responsive video embed */}
        <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">▶️</span>
              </div>
              <p>Video Title</p>
              <p className="text-sm opacity-75">Click to play</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONCLUSION ========== */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Template Complete</h2>
        <p>
          This template showcases all available layout options in a clean,
          minimal style. Copy and modify any sections you need for your
          articles.
        </p>
      </section>
    </article>
  );
}
