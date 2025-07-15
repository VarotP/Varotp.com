"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface BlogListClientPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export default function BlogListClient({ posts }: { posts: BlogListClientPost[] }) {
  return (
    <div className="space-y-8">
      {posts.map((post, idx) => (
        <motion.article
          key={post.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 + idx * 0.15 }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-blue-600">
              {post.category}
            </span>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            Read more
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.article>
      ))}
    </div>
  );
} 