---
title: "最初のテスト記事"
date: "2026-04-01"
description: "これはテストです。ここにはこの記事についての簡易的な説明が入ります。"
image: "/postImages/bg1.png"
tags: ["Next.js", "Markdown", "React"]
---

# aaa
こんにちは！
これが最初の記事です。

| TH | TH |
| :---: | ---- |
| aaaaa | TD |
| TD | TD |

## すし
好きな寿司ネタは炙りサーモンです。

- マグロ
- カツオ
- 炙りもの
    - 炙りサーモン
    - 炙りエンガワ
        - 炙りエンガワ

## コード
``` tsx:aaa.tsx
<div className="mb-4 border-b border-main">
    <h1 className="font-bold text-main">{post?.frontmatter.title}</h1>
    <p className="text-text">{post?.frontmatter.description}</p>
    <p className="text-text">{post?.frontmatter.date}</p>
</div>
```
