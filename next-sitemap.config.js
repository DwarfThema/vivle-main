/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.vivlepark.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  generateRobotsTxt: true,
  exclude: ["/home/*", "/item/*", "/case-studies/*", "/partners/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: "*",
        disallow: ["/home/*", "/item/*", "/case-studies/*", "/partners/*"],
      },
    ],
  },
};
