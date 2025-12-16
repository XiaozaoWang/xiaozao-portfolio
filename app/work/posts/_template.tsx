// 添加新文章的模板
// 复制这个文件并重命名为你的文章slug.tsx

export default function NewPostTemplate() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          这里是你文章的开头介绍段落...
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">第一个章节标题</h2>

        <p className="mb-4">在这里写你的内容...</p>

        {/* 你可以添加任何React组件 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>提示:</strong> 你可以使用任何React功能，包括状态、交互等。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">交互式示例</h2>

        {/* 如果需要状态，记得在文件顶部添加 "use client" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-green-600">优点</h3>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>优点1</li>
              <li>优点2</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-red-600">缺点</h3>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>缺点1</li>
              <li>缺点2</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">结论</h2>

        <p>在这里总结你的观点...</p>
      </section>
    </article>
  );
}
