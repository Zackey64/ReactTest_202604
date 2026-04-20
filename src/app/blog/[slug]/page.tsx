import { getPostData } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';

export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> // Promiseにする
}) {
  const { slug } = await params; // ここで await する
  
  if (slug.startsWith('icon') || slug === 'favicon.ico') {
    return null; 
  }

  // これで slug が正しく取得できるのでエラーが消えるはずです
  const postData = await getPostData(slug); 

  return (

    <main>
      <article className="bg-base text-text ">
        
      <div className="mb-8 p-4 border-b pb-4">
        <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
        <p className="">{postData.date}</p>
      </div>

      {/* Markdownを表示 */}
      <div className="prose lg:prose-xl">
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </div>

      </article>
    </main>
    
  );
}