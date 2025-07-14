import { Client } from '@notionhq/client';
import { format } from 'date-fns';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export interface NotionPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  content: string; // MDX content
  published: boolean;
}

// Helper to render Notion rich text with Markdown/MDX formatting
function renderRichText(richTextArr: any[]): string {
  return richTextArr
    .map((text: any) => {
      let content = text.plain_text;
      const { bold, italic, underline, strikethrough, code } = text.annotations;
      // Apply code first (highest precedence)
      if (code) content = `\`${content}\``;
      // Apply bold, italic, strikethrough, underline (nesting order)
      if (bold) content = `**${content}**`;
      if (italic) content = `*${content}*`;
      if (strikethrough) content = `~~${content}~~`;
      if (underline) content = `<u>${content}</u>`; // Markdown doesn't support underline, so use HTML
      // Handle links
      if (text.href) content = `[${content}](${text.href})`;
      return content;
    })
    .join('');
}

// Convert Notion blocks to MDX format
function convertNotionBlocksToMDX(blocks: any[]): string {
  let mdxContent = '';

  blocks.forEach((block) => {
    switch (block.type) {
      case 'paragraph': {
        const text = renderRichText(block.paragraph.rich_text);
        mdxContent += `${text}\n\n`;
        break;
      }
      case 'heading_1': {
        const h1Text = renderRichText(block.heading_1.rich_text);
        mdxContent += `# ${h1Text}\n\n`;
        break;
      }
      case 'heading_2': {
        const h2Text = renderRichText(block.heading_2.rich_text);
        mdxContent += `## ${h2Text}\n\n`;
        break;
      }
      case 'heading_3': {
        const h3Text = renderRichText(block.heading_3.rich_text);
        mdxContent += `### ${h3Text}\n\n`;
        break;
      }
      case 'bulleted_list_item': {
        const bulletText = renderRichText(block.bulleted_list_item.rich_text);
        mdxContent += `- ${bulletText}\n`;
        break;
      }
      case 'numbered_list_item': {
        const numberedText = renderRichText(block.numbered_list_item.rich_text);
        mdxContent += `1. ${numberedText}\n`;
        break;
      }
      case 'code': {
        const codeText = renderRichText(block.code.rich_text);
        const language = block.code.language || 'text';
        mdxContent += `\`\`\`${language}\n${codeText}\n\`\`\`\n\n`;
        break;
      }
      case 'quote': {
        const quoteText = renderRichText(block.quote.rich_text);
        mdxContent += `> ${quoteText}\n\n`;
        break;
      }
      case 'divider': {
        mdxContent += `---\n\n`;
        break;
      }
      default: {
        // For unsupported block types, just add a newline
        mdxContent += '\n';
        break;
      }
    }
  });

  return mdxContent;
}

// Fetch all blog posts from Notion
export async function getNotionPosts(): Promise<NotionPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    const posts = await Promise.all(
      response.results.map(async (page: any) => {
        const pageId = page.id;
        
        // Get the page content
        const blocksResponse = await notion.blocks.children.list({
          block_id: pageId,
        });

        const mdxContent = convertNotionBlocksToMDX(blocksResponse.results);

        // Extract properties
        const title = page.properties.Title?.title?.[0]?.plain_text || 'Untitled';
        const excerpt = page.properties.Excerpt?.rich_text?.[0]?.plain_text || '';
        const category = page.properties.Category?.select?.name || 'General';
        const date = page.properties.Date?.date?.start || page.created_time;
        const slug = page.properties.Slug?.rich_text?.[0]?.plain_text || 
                    title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const readTime = page.properties.ReadTime?.rich_text?.[0]?.plain_text || '5 min read';

        return {
          id: pageId,
          title,
          excerpt,
          date: format(new Date(date), 'MMMM d, yyyy'),
          readTime,
          category,
          slug,
          content: mdxContent,
          published: true,
        };
      })
    );

    return posts;
  } catch (error) {
    console.error('Error fetching Notion posts:', error);
    return [];
  }
}

// Fetch a single post by slug
export async function getNotionPost(slug: string): Promise<NotionPost | null> {
  try {
    const posts = await getNotionPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching Notion post:', error);
    return null;
  }
} 