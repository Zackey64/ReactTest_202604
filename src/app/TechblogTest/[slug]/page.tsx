import { getPost } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight'
import { Frame } from '@/components/atoms/Frame';
import { Button } from "@/components/atoms/Button";
import {MainTitle} from '@/components/molecules/MainTitle';
import {SetImage} from "@/components/atoms/Image";
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

    <main>
      <article>
        
      <MainTitle title={post?.frontmatter.title}>
              <p className="text-text">{post?.frontmatter.description}</p>
              
      </MainTitle>
      <SetImage src={post?.frontmatter.image} alt="" aspectRatio="video" className="my-8"/>
      <div className="text-text-soft text-sm p-2">{post?.frontmatter.date}に作成</div>

      {/* Markdownを表示 */}

      <Frame className="p-4 py-16 prose prose-slate max-w-none">

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]} // これだけで動作します
        >
          {post?.content}
        </ReactMarkdown>

      </Frame>

      <div className="my-8">
              <a href="/TechblogTest">
                <Button variant="fill"className="w-40 h-8">
                  一覧へ戻る
                </Button>
              </a>
            </div>

      </article>
    </main>
    
  );
}