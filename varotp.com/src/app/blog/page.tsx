import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Dear Future Me',
    excerpt:
      "A letter from my past self to my future self",
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Writing',
    link: 'helloworld',
  },
  {
    id: 2,
    title: 'The Art of Clean Code',
    excerpt:
      "Writing clean, maintainable code is an art form. In this post, we'll explore best practices, design patterns, and principles that will help you write better code.",
    date: 'March 10, 2024',
    readTime: '8 min read',
    category: 'Programming',
    link: 'helloworld',
  },
  {
    id: 3,
    title: 'Building Scalable Applications with TypeScript',
    excerpt:
      "TypeScript has revolutionized how we write JavaScript. Discover how to build robust, scalable applications using TypeScript's powerful type system.",
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'TypeScript',
    link: 'helloworld',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="bg-no-repeat bg-center bg-cover w-full"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <nav className="p-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-black">VarotP</div>
          <div className="space-x-5">
            <Link
              href="Varot_Pavaritpong___Resume__.pdf"
              className="px-4 py-2 bg-white text-black text-[20px] rounded-lg hover:shadow-lg transition"
            >
              Resume
            </Link>
            <Link
              href="projects"
              className="px-4 py-2 bg-white text-black text-[20px] rounded-lg hover:shadow-lg transition"
            >
              Projects
            </Link>
            <Link
              href="https://github.com/VarotP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                className="inline-block h-10 w-10 mb-2"
                alt="GitHub"
                width={10}
                height={10}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/varot-pavaritpong/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                className="inline-block h-10 w-10 mb-2"
                alt="linkedIn"
                width={10}
                height={10}
              />
            </Link>
            <Link
              href="https://www.instagram.com/val12.ig/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Instagram.svg"
                className="inline-block h-10 w-10 mb-2"
                alt="Instagram"
                width={10}
                height={10}
              />
            </Link>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
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
                  href={`/blog/${post.link}`}
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
              </article>
            ))}
          </div>
        </div>
        <div className="footer">
          <hr className="border-t border-blue-300 mtop-6 mx-20" />
          <div className="flex flex-row items-center justify-between px-20 py-10">
            <p className="text-center text-gray-500 text-sm">
              Built with Next.js and Tailwind CSS, Deployed on Vercel.
            </p>
            <p className="text-center text-gray-500 text-sm">
              © 2023 Varot Pavaritpong. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
