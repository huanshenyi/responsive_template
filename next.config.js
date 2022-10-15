/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['api.lorem.space'],
  },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
};
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/react',
]);
const withInterceptStdout = require('next-intercept-stdout');
const removeImports = require('next-remove-imports')();
module.exports = withTM(withInterceptStdout(removeImports(nextConfig)));
