/** @type {import('next').NextConfig} */
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

dotenvLoad();

const withEnv = nextEnv();
module.exports = withEnv();
