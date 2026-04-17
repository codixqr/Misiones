/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// Harici blog görselleri için <img> etiketi kullanılıyor,
		// bu yüzden remotePatterns konfigürasyonu gerekmez.
		// Gelecekte next/image ile harici URL gerekirse buraya domain eklenebilir.
		remotePatterns: [],
	},
}

module.exports = nextConfig
