import { Frame } from "@/components/atoms/Frame";

import { getAllPosts } from '@/lib/posts';
import {MainTitle} from '@/components/molecules/MainTitle';
import PostList from '@/components/molecules/PostList';

import { Button } from "@/components/atoms/Button";


export default function Blog() {

  
  const posts = getAllPosts();

  return (
    <main>

      <MainTitle title="技術ブログ" className="">
        <p>自分の忘備録用に付けてます。あとから自分で見返したりできるようにできるだけわかりやすくしています。</p>
        <p>ちなみにマークダウン記法で作成してます。</p>
      </MainTitle>
      

      <div className="my-8">
        <h3>ブログ一覧</h3>
        <PostList posts={posts} />
      </div>
      
      {/* ここまで */}

      <div className="my-8">
        <a href="/">
          <Button variant="fill"className="w-40 h-8">
            ホームに戻る
          </Button>
        </a>
      </div>

      

    </main>
  );
}
