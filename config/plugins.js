module.exports = ({ env }) => ({
  "custom-api": {
    enabled: false,
  },
  "strapi-google-auth": {
    enabled: false,
  },
  "content-versioning": {
		enabled:  true,
	},
  seo: {
    enabled: true,
  },
  "import-export-entries": {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
});