/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://varotp.com',
  generateRobotsTxt: true,
  exclude: ['/blog/helloworld', '/blog/dear-future-me', '/icon.png', '/api/*'],
  generateIndexSitemap: false,
};
