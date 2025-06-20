import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/blog'));
  return files.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  return (
    <div className="bg-white">
      <main className="min-h-screen bg-white">
        <div
          className="flex flex-col min-h-screen bg-no-repeat bg-center bg-cover w-full"
          style={{ backgroundImage: "url('/background.png')" }}
        >
          <nav className="p-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-black">VarotP</div>
            <div className="space-x-5">
              <Link
                href="/Varot_Pavaritpong___Resume__.pdf"
                className="px-4 py-2 bg-white text-black text-[20px] rounded-lg transition"
              >
                Resume
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 bg-white text-black text-[20px] rounded-lg transition"
              >
                Blog
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 bg-white text-black text-[20px] rounded-lg transition"
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
            <h1 className="text-4xl text-black font-bold mb-2">{data.title}</h1>
            <p className="text-sm text-black">{data.date}</p>
            <div className="prose dark:prose-invert text-black max-w-none mt-6">
              <MDXRemote source={content} />
            </div>
          </div>
          <footer className="mt-auto border-t border-blue-300">
            <div className="flex flex-row items-center justify-between px-20 py-10">
              <p className="text-center text-gray-500 text-sm">
                Built with Next.js and Tailwind CSS, Deployed on Vercel.
              </p>
              <p className="text-center text-gray-500 text-sm">
                © 2023 Varot Pavaritpong. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
