module.exports = {
	title: "Today Rhange Learned",
	description: "vuepress로 만든 문서입니다.",
	base: "/TIL/",
	dest: "build",
	themeConfig: {
		nav: [{ text: "Home", link: "/" }],
		sidebar: "auto", // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
	},
};
