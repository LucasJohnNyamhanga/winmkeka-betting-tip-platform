/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: 'apiv3.apifootball.com',
        },
    ],
	}
}

module.exports = nextConfig
