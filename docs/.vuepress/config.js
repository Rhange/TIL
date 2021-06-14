const sidebar = require("./sidebar");

module.exports = {
	title: "The Think",
	description: "Today I Learned",
	base: "/TIL/",
	dest: "build",
	themeConfig: {
		logo:
			"https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory4.daumcdn.net%2Ftistory%2F1952831%2Fattach%2F8446c51039b946da8fc0b47528768cc6",
		nav: [
			{ text: "Github", link: "https://github.com/rhange" },
			{ text: "Blog", link: "https://rhange.gatsbyjs.io/yt" },
		],
		sidebar,
		smoothScroll: true,
	},
};
