import Link from 'next/link';
import { Frame } from "@/components/atoms/Frame";
import {SetImage} from "@/components/atoms/Image";

interface Post {
  slug: string;
  title: string;
  date: string;
  description?: string;
  image?: string;
  tags?: string[];
}

export default function PostList({ posts }: { posts: Post[] }) {

  return (

    <div className="grid bg-base gap-4">

        {posts.map((post) => (
        <article key={post.slug} className="w-full">
        
        <Link className="w-full" href={`/TechblogTest/${post.slug}`}>
        
        <div className="flex">
            <time className="flex-none text-sm text-text-soft">
                {post.date}
            </time>
            <div className="flex-1 ml-2 mt-2 border-t border-border">
            </div>
            
        </div>
        <h3 className="border-none">         
            {post.title}
        </h3>
        <div className="flex">
            
            {post.image && (
                <SetImage src={post.image} alt="" aspectRatio="square" className="w-24 flex-none"/>
            )}
            
            <div className="ml-2 w-full">

                {post.description && (
                <p className="mb-2 text-sm text-text-soft line-clamp-2">
                    {post.description}
                </p>
                )}
            
                {post.tags && (
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                    
                    <Frame key={tag} className="px-2 text-base text-xs ">
                        {tag}
                    </Frame>
                    ))}
                </div>
                )}

                <div className="flex items-end justify-end text-sm font-medium text-main mt-2">
                記事を読む
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </div>
                

            </div>

        </div>
        
        </Link>

        </article>
        ))}

    </div>
  );
}
