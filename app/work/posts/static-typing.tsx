"use client";

import { useState } from "react";

export default function StaticTypingPost() {
  const [showComparison, setShowComparison] = useState(false);
  const [codeExample, setCodeExample] = useState<"typescript" | "javascript">(
    "typescript"
  );

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Static typing has become increasingly popular in the JavaScript
          ecosystem, with TypeScript leading the charge. But what exactly makes
          static typing so beneficial, and why should you consider it for your
          next project?
        </p>

        <p>
          In this article, we'll explore how static typing can improve code
          quality, enhance developer experience, and boost project
          maintainability.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What is Static Typing?</h2>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-4">
          <p className="mb-4">
            Static typing is a programming language feature where variable types
            are known at compile time rather than runtime. This means that type
            errors can be caught before your code even runs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-400">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                Static Typing
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Types checked at compile time</li>
                <li>Errors caught early</li>
                <li>Better tooling support</li>
                <li>Self-documenting code</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">
                Dynamic Typing
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Types checked at runtime</li>
                <li>More flexibility</li>
                <li>Faster prototyping</li>
                <li>Less boilerplate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>

        <div className="space-y-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center">
              <span className="text-2xl mr-2">🛡️</span>
              Early Error Detection
            </h3>
            <p className="mb-3">
              Catch type-related bugs during development instead of in
              production. This leads to more reliable software and fewer
              late-night debugging sessions.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
              <code className="text-red-600">
                TypeError: Cannot read property 'name' of undefined
              </code>
              <br />
              <span className="text-gray-600">
                ↑ This becomes a compile-time error with static typing
              </span>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
              <span className="text-2xl mr-2">⚡</span>
              Enhanced Developer Experience
            </h3>
            <p>
              Modern editors can provide intelligent autocomplete, refactoring
              tools, and instant feedback when you have type information
              available.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
              <span className="text-2xl mr-2">📖</span>
              Self-Documenting Code
            </h3>
            <p>
              Types serve as inline documentation, making it easier for team
              members to understand function signatures and data structures
              without diving into implementation details.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Code Comparison */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">See It in Action</h2>

        <div className="not-prose">
          <div className="mb-4">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
            >
              {showComparison ? "Hide" : "Show"} Code Comparison
            </button>
          </div>

          {showComparison && (
            <div className="border rounded-lg overflow-hidden">
              <div className="flex bg-gray-100 dark:bg-gray-800">
                <button
                  onClick={() => setCodeExample("typescript")}
                  className={`px-4 py-2 font-medium ${
                    codeExample === "typescript"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  TypeScript
                </button>
                <button
                  onClick={() => setCodeExample("javascript")}
                  className={`px-4 py-2 font-medium ${
                    codeExample === "javascript"
                      ? "bg-orange-600 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  JavaScript
                </button>
              </div>

              <div className="p-4 bg-gray-900 text-green-400 overflow-x-auto">
                {codeExample === "typescript" ? (
                  <pre className="text-sm">
                    {`interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function processUser(user: User): string {
  if (!user.isActive) {
    throw new Error('User is not active');
  }
  
  return \`Processing \${user.name} (\${user.email})\`;
}

// TypeScript catches this error at compile time
// processUser({ id: 1, name: "John" }); // ❌ Missing 'email' and 'isActive'

const validUser: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  isActive: true
};

console.log(processUser(validUser)); // ✅ Safe to call`}
                  </pre>
                ) : (
                  <pre className="text-sm">
                    {`function processUser(user) {
  // No type checking - potential runtime errors
  if (!user.isActive) {
    throw new Error('User is not active');
  }
  
  return \`Processing \${user.name} (\${user.email})\`;
}

// This will cause a runtime error
processUser({ id: 1, name: "John" }); // ❌ Runtime error: user.email is undefined

// This works, but no guarantee the structure is correct
const user = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  isActive: true
};

console.log(processUser(user)); // ✅ Works, but no compile-time safety`}
                  </pre>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">When to Use Static Typing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-400">
            <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">
              Great for:
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Large applications with multiple developers
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Long-term projects requiring maintenance
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Applications where reliability is critical
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Teams with varying experience levels
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Complex data structures and APIs
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-3">
              Consider carefully for:
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">⚠</span>
                Small scripts or quick prototypes
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">⚠</span>
                Projects with very tight deadlines
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">⚠</span>
                Teams unfamiliar with type systems
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">⚠</span>
                Highly dynamic or flexible APIs
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">⚠</span>
                Legacy codebases without gradual adoption
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>

        <p className="mb-4">
          If you're convinced that static typing could benefit your project,
          here are some steps to get started:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Start small</strong> - Add TypeScript to a single file or
              component
            </li>
            <li>
              <strong>Use gradual adoption</strong> - Many type systems allow
              you to opt-in incrementally
            </li>
            <li>
              <strong>Focus on public APIs</strong> - Type your function
              parameters and return values first
            </li>
            <li>
              <strong>Leverage tooling</strong> - Use IDEs and linters that
              support type checking
            </li>
            <li>
              <strong>Learn progressively</strong> - Start with basic types and
              gradually explore advanced features
            </li>
          </ol>
        </div>

        <p className="mt-6">
          Static typing isn't just a trend—it's a powerful tool that can
          significantly improve your development experience and code quality.
          Whether you're building the next big application or maintaining
          existing code, consider giving static typing a try.
        </p>
      </section>
    </article>
  );
}
