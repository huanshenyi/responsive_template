/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['api.lorem.space'],
  },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  },
};
const withInterceptStdout = require('next-intercept-stdout');
const removeImports = require('next-remove-imports')();
module.exports = withInterceptStdout(removeImports(nextConfig));
