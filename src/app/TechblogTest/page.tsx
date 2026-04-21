import { Frame } from "@/components/atoms/Frame";

import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/molecules/PostList';


export default function Blog() {

  
  const posts = getAllPosts();

  return (
    <main>


      <div className="">
        <h1>技術ブログ</h1>
        <p>自分の忘備録用に付けてます。あとから自分で見返したりできるようにできるだけわかりやすくしています。</p>
        <p>ちなみにマークダウン記法で作成してます。</p>
      </div>
      

      <Frame className="my-8 p-4" >
        <h2>ブログ一覧</h2>
        <PostList posts={posts} />
      </Frame>
      



    </main>
  );
}
