import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn about the latest features in Next.js 14 and how to leverage them in your projects. From server components to improved routing, we'll cover everything you need to know.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development"
  },
  {
    id: 2,
    title: "The Art of Clean Code",
    excerpt: "Writing clean, maintainable code is an art form. In this post, we'll explore best practices, design patterns, and principles that will help you write better code.",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Programming"
  },
  {
    id: 3,
    title: "Building Scalable Applications with TypeScript",
    excerpt: "TypeScript has revolutionized how we write JavaScript. Discover how to build robust, scalable applications using TypeScript's powerful type system.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "TypeScript"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md p-4 flex justify-end items-center">
        <div className="space-x-5">
          <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Home
          </Link>
          <Link href="/#resume" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Resume
          </Link>
          <Link href="/#projects" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Projects
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-blue-600">{post.category}</span>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}