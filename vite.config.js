import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			manifest: {
				short_name: 'Day of Week',
				name: 'Day of Week',
				start_url: './',
				scope: './',
				display: 'standalone',
				theme_color: "#ffffff",
				background_color: "#ffffff",
				icons: [
					{
						src: '/fox-icon.png',
						sizes: '192x192',
						type: 'image/png',
					},
				],    
			}
		}),
	]
};

export default config;
