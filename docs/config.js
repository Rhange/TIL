import { navbar, sidebar } from "./configs";

module.exports = {
	lang: "en-US",
	title: "Hello, VuePress!",
	description: "This is my first VuePress site",
	base: "/TIL/",
	repo: "rhange/TIL",
	head: [["link", { rel: "icon", href: "/images/logo.png" }]],
	themeConfig: {
		logo: "https://vuejs.org/images/logo.png",
		locales: {
			"/": {
				// navbar
				navbar: navbar.en,

				// sidebar
				sidebar: sidebar.en,

				// page meta
				editLinkText: "Edit this page on GitHub",
			},
		},
	},
};
