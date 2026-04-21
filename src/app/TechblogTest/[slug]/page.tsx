import { getPost } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight'
import { Frame } from '@/components/atoms/Frame';

import 'highlight.js/styles/atom-one-dark.css';

// 1. 型定義（TypeScript）
interface PostPageProps {
  params: Promise<{ slug: string }>; // Next.js 15では params は Promise
}

export default async function PostPage({ params }: PostPageProps) {

  // slugを取得
  const { slug } = await params; // ここで await する
  
  // データを取得
  const post = getPost(slug);

  return (

    <div>
      <article className=" text-text ">
        
      <div className="mb-4 border-b border-main">
        <h1 className="font-bold text-main">{post?.frontmatter.title}</h1>
        <p className="text-text">{post?.frontmatter.description}</p>
        <p className="text-text">{post?.frontmatter.date}</p>
      </div>



      {/* Markdownを表示 */}

      <Frame className="p-8 prose prose-slate max-w-none">

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]} // これだけで動作します
        >
          {post?.content}
        </ReactMarkdown>

        <div className="mt-4 pt-4 border-t border-border">
          ←　記事一覧へ
        </div>

      </Frame>

      

      </article>
    </div>
    
  );
}