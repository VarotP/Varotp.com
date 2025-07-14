import { getNotionPosts, NotionPost } from '@/lib/notion';
import Footer from './components/Footer';
import AnimatedNavbar from './components/AnimatedNavbar';
import BlogListClient from './components/BlogListClient';

// Fallback posts in case Notion API fails
const fallbackPosts = [
  {
    id: '1',
    title: 'Dear Future Me',
    excerpt: "A letter from my past self to my future self",
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Writing',
    slug: 'helloworld',
  },
  {
    id: '2',
    title: 'The Art of Clean Code',
    excerpt: "Writing clean, maintainable code is an art form. In this post, we'll explore best practices, design patterns, and principles that will help you write better code.",
    date: 'March 10, 2024',
    readTime: '8 min read',
    category: 'Programming',
    slug: 'helloworld',
  },
  {
    id: '3',
    title: 'Building Scalable Applications with TypeScript',
    excerpt: "TypeScript has revolutionized how we write JavaScript. Discover how to build robust, scalable applications using TypeScript's powerful type system.",
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'TypeScript',
    slug: 'helloworld',
  },
];

export default async function Blog() {
  // Try to fetch posts from Notion, fallback to static posts if it fails
  let posts: NotionPost[] = [];
  try {
    posts = await getNotionPosts();
  } catch (error) {
    console.error('Failed to fetch Notion posts, using fallback:', error);
    posts = fallbackPosts as NotionPost[];
  }

  return (
    <div className="min-h-screen bg-white">
      <div
        className="bg-no-repeat bg-center bg-cover w-full min-h-screen"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <AnimatedNavbar />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          <BlogListClient posts={posts} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
