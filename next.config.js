/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
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
}
