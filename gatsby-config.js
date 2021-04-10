module.exports = {
  siteMetadata: {
    description: "Personal page of John Doe",
    locale: "en",
    title: "Tenzin Namgyal",
    formspreeEndpoint: "https://formspree.io/f/xpzkzbwb",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "bright-green",
      },
    },
  ],
}