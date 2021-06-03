const sidebar = require("./sidebar");

module.exports = {
	title: "Rhange's Wiki",
	description: "Today I Learned",
	base: "/TIL/",
	dest: "build",
	themeConfig: {
		nav: [
			{ text: "Wiki", link: "/" },
			{ text: "Github", link: "https://github.com/rhange" },
		],
		sidebar,
		smoothScroll: true,
	},
};
