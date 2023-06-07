/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.vivlepark.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 1,
  exclude: ["/home/**"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/home"],
      },
    ],
  },
};
