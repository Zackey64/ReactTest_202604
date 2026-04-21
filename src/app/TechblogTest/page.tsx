import { Frame } from "@/components/atoms/Frame";

import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/molecules/PostList';


export default function Blog() {

  
  const posts = getAllPosts();

  return (
    <main className="">



      
      <Frame className="p-4" >
        <h1>Posts</h1>
        <PostList posts={posts} />
      </Frame>
      



    </main>
  );
}
