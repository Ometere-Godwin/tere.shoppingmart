/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "images.pexel.com",
            "img.freepiks.com",
            "lh3.googleusercontent.com",
        ],
    },

    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
