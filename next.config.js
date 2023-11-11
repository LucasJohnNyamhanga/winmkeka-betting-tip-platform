/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: 'apiv3.apifootball.com',
			},
		],
		domains: ["apiv3.apifootball.com","surebettip.com", "*"],
	}
}

module.exports = nextConfig
