// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.semisto.org',
	integrations: [
		starlight({
			title: 'Compass 🧭',
			tagline: 'The Semisto Field Guide',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/semisto-org/compass' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: '🏠 Welcome',
					items: [
						{ label: 'Introduction', slug: 'welcome' },
						{ label: 'Getting Started', slug: 'welcome/getting-started' },
					],
				},
				{
					label: '🛠️ Tools',
					items: [
						{ label: 'Overview', slug: 'tools' },
						{ label: 'Terranova', slug: 'tools/terranova' },
					],
				},
				{
					label: '🌿 Field Work',
					items: [
						{ label: 'Overview', slug: 'field-work' },
						{ label: 'Planting Protocol', slug: 'field-work/planting-protocol' },
					],
				},
				{
					label: '🎓 Academy',
					items: [
						{ label: 'Overview', slug: 'academy' },
						{ label: 'Trainer Checklist', slug: 'academy/trainer-checklist' },
					],
				},
				{
					label: '🎨 Design Studio',
					items: [
						{ label: 'Overview', slug: 'design-studio' },
						{ label: 'Design Process', slug: 'design-studio/design-process' },
					],
				},
				{
					label: '🌱 Nursery',
					items: [
						{ label: 'Overview', slug: 'nursery' },
						{ label: 'Species Sheets', slug: 'nursery/species-sheets' },
					],
				},
				{
					label: '📊 Admin',
					items: [
						{ label: 'Overview', slug: 'admin' },
						{ label: 'ASBL Obligations', slug: 'admin/asbl-obligations' },
					],
				},
				{
					label: '📡 Communication',
					items: [
						{ label: 'Overview', slug: 'communication' },
						{ label: 'Brand Guidelines', slug: 'communication/brand-guidelines' },
					],
				},
			],
		}),
	],
});
