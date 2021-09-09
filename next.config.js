/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')();
module.exports =  removeImports({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/notes/All',
        destination: '/notes',
        permanent: true,
      }
    ]
  },
  env: {
    'MYSQL_HOST': 'localhost',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': 'jeff_blog',
    'MYSQL_USER': 'root',
    'MYSQL_PASSWORD': '123456',
  }
})
