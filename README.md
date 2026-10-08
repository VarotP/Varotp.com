# VarotP.com – Portfolio & Notion-Powered Blog

Welcome to my personal portfolio and blog, built with Next.js, Tailwind CSS, and seamlessly integrated with Notion as a headless CMS. This project showcases my work, technical writing, and passion for clean, modern web development.

## 🚀 Project Overview

- **Live Site:** [https://varotp.com](https://varotp.com)
- **Tech Stack:** Next.js 15, React 19, Tailwind CSS 4, Notion API, TypeScript
- **CMS:** Notion (write blog posts in Notion, publish instantly)
- **Deployment:** Vercel

## ✨ Features

- **Notion-Powered Blog:** Write and manage blog posts directly in Notion. Supports rich text (bold, italic, underline, code, links, etc.).
- **Hybrid Content:** Supports both Notion and MDX blog posts for maximum flexibility.
- **Modern UI:** Responsive, accessible, and visually appealing design with Tailwind CSS.
- **SEO Optimized:** Dynamic Open Graph tags, sitemap, and robots.txt for discoverability.
- **Fast & Scalable:** Built with the latest Next.js app directory and React Server Components.
- **Easy Deployment:** One-click deploy to Vercel.

## 📝 For Recruiters

Thank you for visiting my portfolio! This project demonstrates:
- **Full-stack proficiency:** API integration, server-side rendering, and modern React patterns.
- **Clean code:** Modular, maintainable, and well-documented codebase.
- **Content workflow:** Write once in Notion, publish everywhere.
- **Attention to detail:** Custom components, accessibility, and pixel-perfect design.

Feel free to explore the code, read my blog posts, or connect with me on [LinkedIn](https://www.linkedin.com/in/varot-pavaritpong/).

## 🛠️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VarotP/varotp.dev.git
   cd varotp.com/varotp.com
   ```
2. **Install dependencies:**
   ```bash
   yarn install
   # or npm install
   ```
3. **Set up Notion integration:**
   - Create a Notion integration and database (see below).
   - Add your `NOTION_API_KEY` and `NOTION_DATABASE_ID` to `.env.local`.
4. **Run the development server:**
   ```bash
   yarn dev
   # or npm run dev
   ```
5. **Open [http://localhost:3000](http://localhost:3000) to view the site.**

## 🐳 Docker and Monitoring

The Docker Compose stack runs the production Next.js app with Prometheus and a
pre-provisioned Grafana dashboard.

```bash
cd varotp.com
docker compose up --build
```

- App: [http://localhost:3000](http://localhost:3000)
- Prometheus: [http://localhost:9090](http://localhost:9090)
- Grafana: [http://localhost:3001](http://localhost:3001) (default login: `admin` / `admin`)
- Raw app metrics: [http://localhost:3000/api/metrics](http://localhost:3000/api/metrics)

For the Notion-powered blog, provide `NOTION_API_KEY` and
`NOTION_DATABASE_ID` in your shell or a local `.env` file before starting the
stack. Set `GRAFANA_ADMIN_USER` and `GRAFANA_ADMIN_PASSWORD` to override the
development defaults. Persistent Docker volumes retain Prometheus and Grafana
data across restarts.

## 🧠 Notion Blog Integration

- **Write posts in Notion:** Each row in your Notion database is a blog post. Write your content in the page body.
- **Supported formatting:** Bold, italic, underline, strikethrough, code, links, lists, headings, and more.
- **Instant publishing:** Check the "Published" box in Notion to publish a post.

## 📁 Project Structure

- `src/app/` – Next.js app directory (pages, layouts, blog, etc.)
- `src/lib/notion.ts` – Notion API integration and content conversion
- `src/app/blog/components/` – Reusable blog components (MDX, Footer, etc.)
- `content/blog/` – Legacy MDX blog posts (optional)

## 🌐 Connect

- **Portfolio:** [https://varotp.com](https://varotp.com)
- **LinkedIn:** [Varot Pavaritpong](https://www.linkedin.com/in/varot-pavaritpong/)
- **GitHub:** [VarotP](https://github.com/VarotP)

---

> Built with ❤️ by Varot Pavaritpong. Powered by Next.js, Tailwind CSS, and Notion.
