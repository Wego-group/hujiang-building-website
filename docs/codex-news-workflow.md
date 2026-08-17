# Codex 新闻发布工作流

## 用途

运营人员准备中文素材文件夹 → Codex 按 NEWS 结构生成多语言文章 → SEO 校验 → 推送到 GitHub → 运营手动发布。

---

## 素材目录规范

运营创建一个文件夹，内部按 **YYYY-MM-DD** 日期分目录，每个文章一个子文件夹：

```
运营素材文件夹/
├── 2026-09-01/
│   ├── 工厂投产项目/          ← 子文件夹名称任意（中文亦可）
│   │   ├── 素材.txt            ← 中文文字（必填，无结构化）
│   │   └── 封面图.jpg          ← 可选图片
│   └── 行业会议/
│       └── 素材.txt
└── 2026-09-02/
    └── 新产品发布/
        └── 素材.txt
```

**规则：**
- 日期目录必须严格使用 `YYYY-MM-DD` 格式
- 子文件夹名任意，可中文可英文
- 每篇文章必须有 `素材.txt`（或 `.md`），内容为中文文字
- 图片文件可选（`.jpg` / `.jpeg` / `.png` / `.webp`）

---

## Codex 执行步骤

### Step 1 — 读取必要文件

按顺序读取以下文件，理解项目结构：

1. **本文档**（`docs/codex-news-workflow.md`）
2. **`lib/news.ts`** — `PublishedNewsArticle` 类型定义，文章完整数据结构
3. **`lib/news-seo.mjs`** — SEO 校验规则，每篇文章必须通过
4. **`lib/i18n.ts`** — 12 种站点语言定义、`localeMeta`、`localePath`

### Step 2 — 遍历运营素材文件夹

- 读取运营提供的素材文件夹路径
- 按 `YYYY-MM-DD` 日期目录分组
- 每个子文件夹 = 一篇文章
- 读取子文件夹内的文字素材文件（`素材.txt` 或 `素材.md`）作为中文原始内容

### Step 3 — 提炼中文（zh）内容

从素材文字中提取并生成以下字段：

| 字段 | 长度要求 | 说明 |
|------|----------|------|
| `title` | 10–60 字符 | 中文页面标题 |
| `excerpt` | 50–160 字符 | 页面摘要，1–2 句话 |
| `seoTitle` | 30–60 字符 | 搜索引擎标题，最佳区间 50–60 |
| `seoDescription` | 120–160 字符 | 搜索引擎描述，最佳区间 140–150 |
| `body` | 至少 5 段 | 每段含 `heading`（5–80）+ `paragraph`（80–400） |
| `faq` | 可选 | `question`（10–120）+ `answer`（20–300） |

**其他字段：**
- `tags`：3–6 个英文关键词，从素材中提炼
- `author`：默认 `"Megasteel Editorial Team"`
- `category`：见 Step 6
- `publishAt`：`{日期}T09:00:00+08:00`
- `cover`：如有图片，填写图片文件名（相对路径）

### Step 4 — 翻译生成 7 种语言

- **zh**：使用 Step 3 提炼的中文版本
- **en / es / fr / de / pt / faq / ko**：从中文素材翻译生成，每种语言严格遵守 SEO 长度规则

**各语言翻译要求：**

| 语言 | 代码 | 注意事项 |
|------|------|----------|
| English | en | 标准美式英语，专业建筑行业术语 |
| Español | es | 自然流畅，避免生硬直译 |
| Français | fr | 正式书面语 |
| Deutsch | de | 专业术语准确，复合词自然拆分 |
| Português | pt | 巴西葡萄牙语优先 |
| 日本語 | ja | 敬语，避免逐字翻译，使用行业常用表达 |
| 한국어 | ko | 正式书面语，行业术语规范 |

**每种语言的要求：**
- `title` / `seoTitle` / `seoDescription` 必须自然流畅，不得有翻译腔
- `seoDescription` 必须包含 `tags` 中的关键词（英文关键词在各语言中适当融入）
- `title` 与 `seoTitle` 关键词应高度相关（至少 2 个相同关键词）
- 正文段落数至少 5 段

### Step 5 — 自动生成 slug

规则：
- 从中文标题提炼英文核心关键词
- 转换为 `lowercase-hyphenated` 格式
- 必须匹配正则：`^[a-z0-9]+(?:-[a-z0-9]+)*$`
- 同一天目录下的 slug 不得重复，冲突时加后缀 `-2`、`-3`

**示例：**
- `工厂投产项目` → `factory-commissioning`
- `行业会议2026` → `industry-conference-2026`
- `新产品发布` → `new-product-launch`
- 冲突：`factory-commissioning` 已存在 → `factory-commissioning-2`

### Step 6 — 自动判断 category

根据素材内容关键词匹配以下分类：

| Category | 关键词匹配 |
|----------|-----------|
| `EPC Contracting` | 工程总承包、设计采购施工一体化、EPC |
| `Steel Structure` | 钢结构、钢框架、钢构制造、结构工程 |
| `PEMB` | 轻钢结构、装配式、金属建筑、prefabricated |
| `Building Envelope` | 幕墙、围护系统、屋面墙面、外立面 |
| `BIPV` | 光伏、建筑一体化光伏、太阳能、photovoltaic |

无法匹配时默认使用 `"EPC Contracting"`。

### Step 7 — 处理图片（可选）

如果子文件夹内有图片文件：
1. 将图片复制到 `news-queue/{YYYY-MM-DD}/{slug}/` 目录
2. 图片文件名保持原扩展名不变
3. `article.md` 中 `cover` 字段填写图片文件名

如果没有图片：不填写 `cover` 字段。

### Step 8 — 写入 article.md

**写入路径：** `news-queue/{YYYY-MM-DD}/{slug}/article.md`

**格式要求：**

```md
---
{
  "slug": "...",
  "publishAt": "...",
  "category": "...",
  "author": "...",
  "tags": ["...", "..."],
  "translations": {
    "en": { "title": "...", "excerpt": "...", "seoTitle": "...", "seoDescription": "...", "body": [...], "faq": [...] },
    "zh": { ... },
    "es": { ... },
    "fr": { ... },
    "de": { ... },
    "pt": { ... },
    "ja": { ... },
    "ko": { ... }
  }
}
---
```

**翻译字段顺序固定：** `en` → `zh` → `es` → `fr` → `de` → `pt` → `ja` → `ko`

### Step 9 — SEO 校验

对每篇文章运行：

```
npm run news:seo-check news-queue/{YYYY-MM-DD}/{slug}/article.md
```

**通过条件：** error 数量为 0。

**评分机制：**
- 满分 100 分
- 每个 error 扣 15 分
- 每个 warning 扣 5 分
- 目标分数：≥ 60 分

**校验规则速查：**

| 字段 | 最低 | 最高 |
|------|------|------|
| title | 10 | 60 |
| excerpt | 50 | 160 |
| seoTitle | 30 | 60 |
| seoDescription | 120 | 160 |
| body 段落数 | 5 | — |
| heading | 5 | 80 |
| paragraph | 80 | 400 |
| faq.question | 10 | 120 |
| faq.answer | 20 | 300 |

### Step 10 — SEO 不合格重试

如果 Step 9 不合格：
1. 根据报错信息定位问题字段
2. 修正：缩短 / 加长 / 补充关键词 / 增加段落数
3. 重新写入 `article.md`
4. 重新运行 `npm run news:seo-check`
5. **最多重试 3 次**
6. 3 次仍不通过 → 停止，向运营报告具体情况，不要继续

### Step 11 — Git 推送

所有文章 SEO 校验通过后：

```bash
git add news-queue/
git commit -m "Add news articles for {日期范围}"
git push origin main
```

### Step 12 — 完成确认

完成后回复运营以下内容：
- 共生成几篇文章
- 分布在哪些日期
- 哪些通过 SEO 校验
- 已推送至 GitHub（如适用）
- **提醒运营前往 GitHub Actions → "Publish scheduled news" → "Run workflow" 手动触发发布**

---

## 注意事项

1. **正文必须围绕文章主题展开**，不要堆砌无关内容凑字数
2. **翻译质量优先于长度**，长度不足时丰富内容而非凑字
3. 图片文件类型保持原样，不强制转换
4. 不要在正文中使用未经核实的数据或客户信息
5. 多语言 SEO 的 `title` 与 `seoTitle` 关键词应高度相关
6. `seoDescription` 应尽量自然融入 `tags` 中的关键词
7. 文章发布后不会自动通知，运营需确认页面是否显示
