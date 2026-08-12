# News 内容准备模板

新闻只有在发布人员把内容放进 `news-queue/YYYY-MM-DD/文章目录/` 并通过校验后，才会进入网站；草稿不会显示在 News 页面。

## 每篇新闻需要准备什么

- **slug**：英文小写短横线，例如 `epc-steel-building-checklist`，发布后会成为 URL 的一部分，不能再随意修改。
- **publishAt**：ISO 时间，例如 `2026-08-15T09:00:00+08:00`。
- **category**：`EPC`、`Steel Structure`、`PEMB`、`Building Envelope` 或 `BIPV`。
- **author**：作者或部门名称。
- **cover**：文章头图文件名，建议 1600×900 或更大、WebP/JPG 格式，并放在同一篇文章目录中。
- **tags**：3–6 个英文关键词，用于站内筛选和 SEO。
- **translations**：至少准备英文 `en`；正式发布建议同时提供 `zh`、`es`、`fr`、`de`、`pt`、`ja`、`ko`，缺少的语言会回退到英文。
- 每种语言都准备 `title`、`excerpt`、`seoTitle`、`seoDescription` 和正文 `body`（每段包含 `heading` 与 `paragraph`）。
- 文章有 FAQ 时，在对应语言下添加 `faq`，每条包含 `question` 与 `answer`；没有 FAQ 就不填。

## 内容质量建议

标题清楚说明主题和对象；摘要控制在 1–2 句；正文围绕一个搜索意图展开，使用小标题、事实、项目场景和可执行建议。图片文件名使用英文短横线，并准备图片说明（后续用于 alt 文本）。不要在正文里放需要运营人员点击才能看到的折叠内容，也不要加入未经确认的客户数据。

## 可复制的文章文件

把下面内容保存为 `article.md`。文件开头的 `---` 区域必须是合法 JSON；正文内容目前由系统从 JSON 字段读取。

```md
---
{
  "slug": "epc-steel-building-checklist",
  "publishAt": "2026-08-15T09:00:00+08:00",
  "category": "EPC",
  "author": "Megasteel Editorial Team",
  "cover": "epc-steel-building.jpg",
  "tags": ["EPC contractor", "steel building", "industrial construction"],
  "translations": {
    "en": {
      "title": "How to Choose an EPC Contractor for Industrial Steel Buildings",
      "excerpt": "A practical checklist for comparing engineering, procurement, fabrication and construction capabilities.",
      "seoTitle": "How to Choose an EPC Contractor for Industrial Steel Buildings | Megasteel",
      "seoDescription": "Learn how to evaluate EPC contractors for industrial steel buildings, from engineering and procurement to fabrication, installation and handover.",
      "body": [
        {"heading": "Start with one accountable team", "paragraph": "Explain the first key point with verified project context."},
        {"heading": "Check delivery capability", "paragraph": "Add evidence, process details or a relevant project example."}
      ],
      "faq": [
        {"question": "What should an EPC buyer compare first?", "answer": "Compare scope ownership, engineering coordination, fabrication control and site delivery support."}
      ]
    }
  }
}
---
```

发布流程会检查必填字段、日期、slug 和正文结构；校验失败的内容会移到 `news-failed`，不会影响线上页面。当前流程不会发送邮件通知。
