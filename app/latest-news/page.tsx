import Image from "next/image";
import Link from "next/link";
import { newsArticles, NewsArticle } from "./blogdata";
import CTA from "@/components/shared/CTA";

// Hero Component
function Hero() {
  return (
    <div className="relative w-full h-[70vh] bg-[url(/news.png)] bg-no-repeat bg-cover flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r bg-black/60" />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Latest News from Tansen Holidays
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-3 max-w-2xl mx-auto">
          Stay updated with our latest announcements, travel tips, and service
          updates.
        </p>
      </div>
    </div>
  );
}

// News Card Component
function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="overflow-hidden rounded-t-xl">
        <Image
          src={article.image}
          alt={article.title}
          width={400}
          height={200}
          className="w-full h-40 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-sm text-gray-500">{article.date}</span>
        <h3 className="text-lg font-semibold text-gray-900 mt-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3 mb-2 ">
          {article.excerpt}
        </p>
        <Link
          href={`/latest-news/${article.slug}`}
          className="mt-auto inline-block text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors duration-200 underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default function News() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Hero />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-purple-800 mb-10">
          Recent Updates
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </section>
      </main>
      <CTA
        title="Never Miss an Update"
        desc="Subscribe to our newsletter for the latest news, travel tips, and exclusive offers from Tansen Holidays."
        button="Subscribe Now"
      />
    </div>
  );
}
