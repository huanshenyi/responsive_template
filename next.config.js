/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout');
const nextConfig = withInterceptStdout({
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['api.lorem.space'],
  },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  },
});

module.exports = nextConfig;
