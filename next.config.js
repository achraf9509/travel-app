/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    images:{unoptimized:true},
    experimental:{cache:true},

}

module.exports = nextConfig
