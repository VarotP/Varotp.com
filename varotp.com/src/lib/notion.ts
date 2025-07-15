import { Client } from '@notionhq/client';
import { format } from 'date-fns';
import {
  BlockObjectResponse,
  RichTextItemResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

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
function renderRichText(richTextArr: RichTextItemResponse[], skipBold = false): string {
  return richTextArr
    .map((text) => {
      let content = text.plain_text;
      
      // Preserve leading whitespace by replacing spaces with non-breaking spaces
      const leadingSpaces = content.match(/^(\s+)/);
      if (leadingSpaces) {
        const spaceCount = leadingSpaces[1].length;
        content = '\u00A0'.repeat(spaceCount) + content.substring(spaceCount);
      }
      
      const { bold, italic, underline, strikethrough, code } = text.annotations;
      if (code) content = `\`${content}\``;
      if (!skipBold) {
        if (bold && italic) content = `***${content}***`;
        else if (bold) content = `**${content}**`;
        else if (italic) content = `*${content}*`;
      }
      if (strikethrough) content = `~~${content}~~`;
      if (underline) content = `<u>${content}</u>`;
      if (text.href) content = `[${content}](${text.href})`;
      return content;
    })
    .join('');
}

// Convert Notion blocks to MDX format
function convertNotionBlocksToMDX(blocks: BlockObjectResponse[]): string {
  let mdxContent = '';

  blocks.forEach((block) => {
    switch (block.type) {
      case 'paragraph': {
        const text = renderRichText(block.paragraph.rich_text);
        // If the paragraph is empty, add a non-breaking space to create a visible empty line
        if (!text.trim()) {
          mdxContent += `&nbsp;\n\n`;
        } else {
          mdxContent += `${text}\n\n`;
        }
        break;
      }
      case 'heading_1': {
        const h1Text = renderRichText(block.heading_1.rich_text, true);
        mdxContent += `# ${h1Text}\n\n`;
        break;
      }
      case 'heading_2': {
        const h2Text = renderRichText(block.heading_2.rich_text, true);
        mdxContent += `## ${h2Text}\n\n`;
        break;
      }
      case 'heading_3': {
        const h3Text = renderRichText(block.heading_3.rich_text, true);
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

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const posts = await Promise.all(
      response.results.map(async (page) => {
        const pageTyped = page as PageObjectResponse;
        const pageId = pageTyped.id;
        // Get the page content
        const blocksResponse = await notion.blocks.children.list({
          block_id: pageId,
        });
        const mdxContent = convertNotionBlocksToMDX(blocksResponse.results as BlockObjectResponse[]);
        // Extract properties
        const title = (pageTyped.properties.Title as any)?.title?.[0]?.plain_text || 'Untitled';
        const excerpt = (pageTyped.properties.Excerpt as any)?.rich_text?.[0]?.plain_text || '';
        const category = (pageTyped.properties.Category as any)?.select?.name || 'General';
        const date = (pageTyped.properties.Date as any)?.date?.start || pageTyped.created_time;
        const slug = (pageTyped.properties.Slug as any)?.rich_text?.[0]?.plain_text || 
                    title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const readTime = (pageTyped.properties.ReadTime as any)?.rich_text?.[0]?.plain_text || '5 min read';

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
    /* eslint-enable @typescript-eslint/no-explicit-any */

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