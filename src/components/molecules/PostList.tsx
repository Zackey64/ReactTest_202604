import Link from 'next/link';
import { Frame } from "@/components/atoms/Frame";

interface Post {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
}

export default function PostList({ posts }: { posts: Post[] }) {

  return (

    <div className="p-4 grid bg-base gap-4">

        {posts.map((post) => (
        <article key={post.slug} className="flex flex-col border border-border">

        <Link className="p-4" href={`/TechblogTest/${post.slug}`}>
        

            <time className="text-sm text-text-soft">
                {post.date}
            </time>
          
            <h3 className="border-none">         
                {post.title}
            </h3>
          
            {post.description && (
                <p className="mb-2 text-sm text-text-soft line-clamp-2">
                    {post.description}
                </p>
            )}

            {post.tags && (
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                    
                    <Frame key={tag} className="px-2 text-xs text-text-soft">
                        #{tag}
                    </Frame>
                    ))}
                </div>
            )}
          
            <div className="flex items-center justify-end text-sm font-medium text-main">
                記事を読む
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>

        
        </Link>

        </article>
        ))}

    </div>
  );
}
