import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from "next/image";
import Link from 'next/link';
import { mdxComponents } from '../components/mdxComponent';
import { getNotionPost, getNotionPosts } from '@/lib/notion';
import Footer from '../components/Footer';

export async function generateStaticParams() {
  // Get both MDX files and Notion posts
  const mdxFiles = fs.readdirSync(path.join(process.cwd(), 'content/blog'));
  const mdxSlugs = mdxFiles.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));

  // Get Notion posts
  let notionSlugs: { slug: string }[] = [];
  try {
    const notionPosts = await getNotionPosts();
    notionSlugs = notionPosts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Failed to fetch Notion posts for static params:', error);
  }

  return [...mdxSlugs, ...notionSlugs];
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Try to get the post from Notion first
  let notionPost = null;
  try {
    notionPost = await getNotionPost(slug);
  } catch (error) {
    console.error('Failed to fetch Notion post:', error);
  }

  if (notionPost) {
    // Render Notion post
    return (
      <div className="bg-white">
        <main className="min-h-screen bg-white">
          <div
          className="flex flex-col min-h-screen bg-no-repeat bg-center bg-cover w-full"
          style={{ backgroundImage: "url('/background.png')" }}
          >
              <nav className="p-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-black">
                VarotP
              </Link>
              <div className="space-x-5">
                <Link href="/Varot_Pavaritpong___Resume__.pdf" className="px-4 py-2 bg-white text-black text-[20px] rounded-lg transition">
                  Resume
                </Link>
                <Link href="/blog" className="px-4 py-2 bg-white text-black text-[20px] rounded-lg hover:shadow-lg transition">
                  Blog 
                </Link>
                <Link href="/projects" className="px-4 py-2 bg-white text-black text-[20px] rounded-lg hover:shadow-lg transition">
                  Projects
                </Link>
                <Link href="https://github.com/VarotP" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    className="inline-block h-10 w-10 mb-2"
                    alt="GitHub"
                    width={10} height={10}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/varot-pavaritpong/" target="_blank" rel="noopener noreferrer">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" className="inline-block h-10 w-10 mb-2" alt="linkedIn" width={10} height={10}/>
                </Link>
                <Link href="https://www.instagram.com/val12.ig/" target="_blank" rel="noopener noreferrer">
                  <Image src="/Instagram.svg" className="inline-block h-10 w-10 mb-2" alt="Instagram" width={10} height={10}/>   
                </Link>
              </div>
            </nav>
            <div className='max-w-4xl mx-auto px-8 py-4 bg-white rounded-lg shadow-lg mb-10'>
              <h1 className="text-4xl text-black font-bold mb-2">{notionPost.title}</h1>
              <p className="text-sm text-black mb-3">{notionPost.date}</p>
              <hr className="border-t border-blue-300 mtop-6 " />

              <div className="prose dark:prose-invert text-black max-w-none mt-6">
                <MDXRemote source={notionPost.content} components={mdxComponents}/>
              </div>
            </div> 
            <Footer />
          </div>
          </main>
        </div>
    );
  }

  // Fallback to MDX file
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
            <Link href="/" className="text-2xl font-bold text-black">
              VarotP
            </Link>
            <div className="space-x-5">
              <Link href="/Varot_Pavaritpong___Resume__.pdf" className="px-4 py-2 bg-white text-black text-[20px] rounded-lg transition">
                Resume
              </Link>
              <Link href="/blog" className="px-4 py-2 bg-white text-black text-[20px] rounded-lg hover:shadow-lg transition">
                Blog 
              </Link>
              <Link href="/projects" className="px-4 py-2 bg-white text-black text-[20px] rounded-lg hover:shadow-lg transition">
                Projects
              </Link>
              <Link href="https://github.com/VarotP" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  className="inline-block h-10 w-10 mb-2"
                  alt="GitHub"
                  width={10} height={10}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/varot-pavaritpong/" target="_blank" rel="noopener noreferrer">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" className="inline-block h-10 w-10 mb-2" alt="linkedIn" width={10} height={10}/>
              </Link>
              <Link href="https://www.instagram.com/val12.ig/" target="_blank" rel="noopener noreferrer">
                <Image src="/Instagram.svg" className="inline-block h-10 w-10 mb-2" alt="Instagram" width={10} height={10}/>   
              </Link>
            </div>
          </nav>
          <div className='max-w-4xl mx-auto px-8 py-4 bg-white rounded-lg shadow-lg mb-10'>
            <h1 className="text-4xl text-black font-bold mb-2">{data.title}</h1>
            <p className="text-sm text-black mb-3">{data.date}</p>
            <hr className="border-t border-blue-300 mtop-6 " />

            <div className="prose dark:prose-invert text-black max-w-none mt-6">
              <MDXRemote source={content} components={mdxComponents}/>
            </div>
          </div> 
          <Footer />
        </div>
        </main>
      </div>
  );
}
