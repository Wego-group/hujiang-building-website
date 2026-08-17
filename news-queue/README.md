# News queue

本目录存放待发布的新闻文章。

运营人员准备好中文素材后，请联系 Codex 执行发布工作流：

- 工作流说明：[`docs/codex-news-workflow.md`](../docs/codex-news-workflow.md)

Codex 会根据运营提供的中文素材自动生成 8 种语言的多语言新闻文章，通过 SEO 校验后推送至本目录。

## 发布方式

运营人员在 Codex 完成素材处理后，选择以下任一方式发布：

1. **GitHub Actions 手动触发**（推荐）
   - 前往 GitHub → Actions → "Publish scheduled news" → "Run workflow"
   - 系统会自动扫描 `news-queue/` 中已到期日期的文章并发布

2. **Codex 本地执行**
   ```bash
   npm run news:publish
   ```

## 目录结构

```
news-queue/
├── YYYY-MM-DD/          ← 发布日期
│   └── {slug}/          ← 文章目录（slug 命名）
│       ├── article.md   ← 文章 JSON（8 种语言）
│       └── cover.jpg    ← 封面图（可选）
├── README.md
└── template.article.md
```

- `news-published/` — 已成功发布的文章归档
- `news-failed/` — SEO 校验失败的文章（需人工介入）
- `content/news/` — 已发布并上线的文章存储位置
