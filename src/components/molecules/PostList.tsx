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

    <div className="border-t border-border">

        {posts.map((post) => (
        <article key={post.slug}>
        
        <Link href={`/TechblogTest/${post.slug}`}>

        <div className="py-4 flex border-b border-border">
            
            <div className="flex-none border border-border rounded-md overflow-hidden size-20">
                {post.image && (
                <SetImage src={post.image} alt="" aspectRatio="square" className=""/>
                )}
            </div>
            
            
            <div className="flex-1 ml-2">

                <p className="m-0">         
                    {post.title}
                </p>

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

            </div>

            <time className="flex-none text-sm text-text-soft">
                {post.date}
            </time>

        </div>
        
        </Link>

        </article>
        ))}

    </div>
  );
}
