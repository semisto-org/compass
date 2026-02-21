// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.semisto.org',
	integrations: [
		starlight({
			title: 'Compass 🧭',
			tagline: 'The Semisto Field Guide',
			defaultLocale: 'fr',
			locales: {
				fr: { label: 'Français', lang: 'fr' },
				en: { label: 'English', lang: 'en' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/semisto-org/compass' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: '🏠 Welcome',
					translations: { fr: '🏠 Bienvenue' },
					items: [
						{ label: 'Introduction', slug: 'welcome' },
						{ label: 'Getting Started', slug: 'welcome/getting-started' },
					],
				},
				{
					label: '🛠️ Tools',
					translations: { fr: '🛠️ Outils' },
					items: [
						{ label: 'Overview', slug: 'tools' },
						{ label: 'Terranova', slug: 'tools/terranova' },
					],
				},
				{
					label: '🌿 Field Work',
					translations: { fr: '🌿 Terrain' },
					items: [
						{ label: 'Overview', slug: 'field-work' },
						{ label: 'Planting Protocol', slug: 'field-work/planting-protocol' },
					],
				},
				{
					label: '🎓 Academy',
					translations: { fr: '🎓 Académie' },
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
					translations: { fr: '🌱 Pépinière' },
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
				{
					label: '📖 Manuel de Semisto',
					translations: { en: '📖 Semisto Playbook' },
					items: [
						{ label: 'Introduction', slug: 'playbook' },
						{
							label: "L'essence de Semisto",
							translations: { en: 'The Essence of Semisto' },
							items: [
								{ slug: 'playbook/essence/semisto' },
								{ slug: 'playbook/essence/valeurs' },
								{ slug: 'playbook/essence/influences' },
								{ slug: 'playbook/essence/roi' },
							],
						},
						{
							label: 'Notre gouvernance',
							translations: { en: 'Our Governance' },
							items: [
								{ slug: 'playbook/gouvernance/sources-leadership' },
								{ slug: 'playbook/gouvernance/intelligence-collective' },
								{ slug: 'playbook/gouvernance/cartographie' },
								{ slug: 'playbook/gouvernance/decisions' },
								{ slug: 'playbook/gouvernance/methode-travail' },
								{ slug: 'playbook/gouvernance/transparence' },
								{ slug: 'playbook/gouvernance/roles' },
								{ slug: 'playbook/gouvernance/cercles' },
							],
						},
						{
							label: 'Opérationnel',
							translations: { en: 'Operational' },
							items: [
								{ slug: 'playbook/operationnel/onboarding' },
								{ slug: 'playbook/operationnel/cycles' },
								{ slug: 'playbook/operationnel/communication-interne' },
								{ slug: 'playbook/operationnel/espaces-travail' },
								{ slug: 'playbook/operationnel/outils' },
								{ slug: 'playbook/operationnel/guide-notion' },
								{ slug: 'playbook/operationnel/guide-slack' },
								{ slug: 'playbook/operationnel/offboarding' },
							],
						},
						{
							label: 'Stratégique',
							translations: { en: 'Strategic' },
							items: [
								{ slug: 'playbook/strategique/communication-externe' },
								{ slug: 'playbook/strategique/planification' },
								{ slug: 'playbook/strategique/veille' },
								{ slug: 'playbook/strategique/types-projets' },
							],
						},
						{
							label: 'Financier',
							translations: { en: 'Financial' },
							items: [
								{ slug: 'playbook/financier/remunerations' },
								{ slug: 'playbook/financier/financement-semisto' },
								{ slug: 'playbook/financier/financement-projets' },
								{ slug: 'playbook/financier/semos' },
							],
						},
						{
							label: 'Vivre ensemble',
							translations: { en: 'Living Together' },
							items: [
								{ slug: 'playbook/vivre-ensemble/rituels' },
								{ slug: 'playbook/vivre-ensemble/culture' },
								{ slug: 'playbook/vivre-ensemble/engagement' },
								{ slug: 'playbook/vivre-ensemble/semisto-days' },
							],
						},
					],
				},
			],
		}),
	],
});
