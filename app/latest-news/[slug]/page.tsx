import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import road from "@/public/roads.png";
import { newsArticles } from "../blogdata";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = newsArticles.find((article) => article.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full p-24 min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          {post.image && (
            <Image
              src={post.image || road}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          <div className="flex items-center justify-between">
            <span className="text-base text-black">{post.author}</span>
            <br />
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-gray-600 mb-6 text-base">{post.excerpt}</p>
          <div className="prose prose-gray text-gray-800 max-w-none">
            <p>{post.content}</p>
          </div>
          <Link
            href="/latest-news"
            className="mt-6 inline-block text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors duration-200"
          >
            Back to News
          </Link>
        </article>
      </main>
    </div>
  );
}
