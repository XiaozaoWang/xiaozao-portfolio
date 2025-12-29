# Run dev mode

```bash
pnpm dev
```

# TO-DO

- IW comments
- city of all videos (gifs)
- algorithmic nature gif
- 重新剪视频！
- add links to exhibitions etc
- my work 设置 featured

AN codebook
IW sketches
prism sketches
comments 视频
instructions for creative coding projects
genesis gif

不那么重要

- 每个 work 页面加年份
- AN 里部分图片点开 calibration
- 电影课
- 加一些速写
- 加一些兴趣

# Add a project

1. update basic information (tags, image, etc): `app/work/posts/index.ts`
2. create an entry in `app/work/utils.ts`
3. create a new tsx: `app/work/posts/{slug}.tsx` by duplicating `_template.tsx` and change the export default function name to the slug name

文章顺序：index.ts

# Formatting

Side bar: app/components/conditional-layout.tsx
blog card: app/components/blog-card.tsx
full project page: app/work/[slug]/page.tsx
tag color mapping: app/work/posts/index.ts

text font:
全局：global.css (line 8-19)

text size: global.css (line 171-)
