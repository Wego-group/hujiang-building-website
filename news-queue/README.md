# News queue

将待发布文章放入 `YYYY-MM-DD/文章目录/article.md`，并按照 [`docs/news-content-template.md`](../docs/news-content-template.md) 准备字段。

此目录只存草稿和待审核内容，不会直接显示在网站上。发布脚本校验通过后，会将文章写入 `content/news`；校验失败的文章会移到 `news-failed`。
