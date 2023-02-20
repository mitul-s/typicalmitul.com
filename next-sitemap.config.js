const sitemapConfig = { 
    siteUrl: 'https://typicalmitul.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/gallery/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
}

module.exports = sitemapConfig;
