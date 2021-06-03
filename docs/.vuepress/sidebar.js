const Review2021 = "/Review/2021";

module.exports = [
	{ title: "About me", path: "/" },
	{
		title: "Log",
		children: [
			{
				title: "2021년",
				children: ["06/"].map((v) => `${Review2021}/${v}`),
			},
		],
	},
	{
		title: "Java",
		children: ["", "Test"].map((v) => `Java/${v}`),
	},
];
