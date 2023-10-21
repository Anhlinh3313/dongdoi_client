const siteUrl = "https://dongdoi.com";
module.exports = {
  siteUrl,
  exclude: ["/404"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404", "admin.dongdoi.com", "/readme.html"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`, `${siteUrl}/post-sitemap.xml`],
  },
};