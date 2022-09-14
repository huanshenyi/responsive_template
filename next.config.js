/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout');
const nextConfig = withInterceptStdout({
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['api.lorem.space'],
  },
});

module.exports = nextConfig;
