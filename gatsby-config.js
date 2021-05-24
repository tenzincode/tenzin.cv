module.exports = {
    pathPrefix: "/tenzin.cv",
    siteMetadata: {
        title: "Tenzin Namgyal",
        description: "CV of Tenzin Namgyal",
        locale: "en",
    },
    flags: {
        PRESERVE_WEBPACK_CACHE: true,
        FAST_DEV: true
    },
    plugins: [
        {
            resolve: "@wkocjan/gatsby-theme-intro",
            options: {
                basePath: "/",
                contentPath: "content/",
                showThemeLogo: false,
                theme: "bright-green",
                icon: "content/images/favicon.ico"
            },
        },
    ],
};