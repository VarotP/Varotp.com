import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '../../components/mdxComponent';
import { getNotionPost, getNotionPosts } from '@/lib/notion';
import Footer from '../../components/Footer';
import AnimatedNavbar from '../../components/AnimatedNavbar';

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
            <AnimatedNavbar />
            <div className='max-w-4xl mx-auto px-4 md:px-20 py-7 bg-white rounded-lg shadow-lg mb-10'>
              <h1 className="text-2xl md:text-4xl text-black font-bold mb-2">{notionPost.title}</h1>
              <p className="text-sm text-black mb-3">{notionPost.date}</p>
              <hr className="border-t border-blue-300 mt-6" />

              <div className="prose flex flex-col items-center">
                <div className="prose text-black max-w-none mt-6 overflow-x-auto">
                  <MDXRemote source={notionPost.content} components={mdxComponents}/>
                </div>
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
            <AnimatedNavbar />
          <div className='max-w-4xl mx-auto px-4 md:px-8 py-4 bg-white rounded-lg shadow-lg mb-10'>
            <h1 className="text-2xl md:text-4xl text-black font-bold mb-2">{data.title}</h1>
            <p className="text-sm text-black mb-3">{data.date}</p>
            <hr className="border-t border-blue-300 mt-6" />

            <div className="prose text-black max-w-none mt-6 overflow-x-auto">
              <MDXRemote source={content} components={mdxComponents}/>
            </div>
          </div> 
          <Footer />
        </div>
        </main>
      </div>
  );
}
