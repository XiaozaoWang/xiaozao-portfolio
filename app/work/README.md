# File Structure

root/page.tsx - 显示所有文章的列表页面
[slug]/page.tsx - 每篇文章的动态路由
root/utils.ts - 文章加载和注册逻辑

## 添加新文章的步骤

### 1. 在 `posts/index.ts` 中添加文章元数据

```typescript
export const posts: PostMetadata[] = [
  // 现有文章...
  {
    slug: "your-new-article",
    title: "你的新文章标题",
    publishedAt: "2024-12-02",
    summary: "文章摘要",
    image: "/work-images/your-image.jpg", // 可选
  },
];
```

### 2. 创建文章组件

复制 `_template.tsx` 并重命名为你的文章 slug：

```
cp posts/_template.tsx posts/your-new-article.tsx
```

### 3. 在 `utils.ts` 中注册新文章

在 `postComponents` 对象中添加：

```typescript
const postComponents = {
  // 现有文章...
  "your-new-article": () => import("./posts/your-new-article"),
};
```

### 4. 编写你的文章内容

在你的新组件文件中，你可以使用：

- **普通的 JSX 和 HTML**
- **Tailwind CSS 样式**
- **React 状态和交互** (记住添加 "use client")
- **任何 React 组件库**
- **自定义组件**
- **图表、动画、交互式演示等**

## 示例特性

查看现有文章了解你可以做什么：

### `vim.tsx`

- 使用卡片布局
- 包含提示框和高亮内容
- 网格布局展示信息

### `spaces-vs-tabs.tsx`

- 交互式投票按钮
- 动态内容显示
- 代码对比展示

### `static-typing.tsx`

- 可切换的代码示例
- 交互式 UI 元素
- 复杂的布局和样式

## 样式指南

使用 `prose` 类来获得良好的排版：

```jsx
<article className="prose prose-lg max-w-none dark:prose-invert">
  {/* 你的内容 */}
</article>
```

## 提示

- 使用语义化的 HTML 结构
- 为交互组件添加 "use client" 指令
- 利用 Tailwind 的响应式类
- 考虑暗色模式支持
- 测试你的组件在不同设备上的表现

享受你的新博客系统的自由度吧！🎉
