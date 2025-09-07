const isProd = process.env.NODE_ENV === 'production';
const repoName = 'srikarchundury.github.io'; // Change if your repo name is different

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  // For static export to subfolder
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  // For static export only
  output: 'export',
};
