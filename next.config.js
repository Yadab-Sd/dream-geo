/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'utils', 'types'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['www.freepnglogos.com'],
  },
}
