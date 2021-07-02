const sidebar = require("./sidebar");

module.exports = {
	title: "–　· · · ·　·　　–　· · · ·　· ·　– ·　– · –",
	description: "Today I Learned",
	base: "/TIL/",
	dest: "build",
	themeConfig: {
		logo:
			"https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory4.daumcdn.net%2Ftistory%2F1952831%2Fattach%2F8446c51039b946da8fc0b47528768cc6",
		nav: [
			{ text: "Github", link: "https://github.com/rhange" },
			{ text: "Blog", link: "https://rhange.gatsbyjs.io" },
			{
				text: "☕ Buy Me A Coffee",
				link: "https://www.buymeacoffee.com/rhange",
			},
		],
		sidebar,
		lastUpdated: "Last Updated",
		smoothScroll: true,
	},
	head: [
		[
			"script",
			{
				async: true,
				src: "https://www.googletagmanager.com/gtag/js?id=G-MGCTDHK7LL",
			},
		],
		[
			"script",
			{},
			[
				"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-MGCTDHK7LL');",
			],
		],
		[
			"meta",
			{
				name: "google-site-verification",
				content: "vuuiAMGb2-5CYVhyBdQUvwaXzbm-P_J5Fwp6XAh1B3Y",
			},
		],
	],
	plugins: [
		["@vuepress/pwa", { serviceWorker: true, updatePopup: true }],
		"@vuepress/back-to-top",
		["sitemap", { hostname: "https://rhange.github.io/TIL" }],
		"@vuepress/last-updated",
	],
};
