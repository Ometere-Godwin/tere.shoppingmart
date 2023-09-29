/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "images.pexels.com",
            "img.freepik.com",
            "lh3.googleusercontent.com",
            "avatars.githubusercontent.com",
            "i.ibb.co",
        ],
    },

    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
