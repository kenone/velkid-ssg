module.export = {
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `36dc8bea80aa294705859a3d38220f`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
}
