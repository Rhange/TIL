const Review2021 = "/Review/2021";

module.exports = [
	{
		title: "📅 Review",
		children: [
			{
				title: "2021년",
				children: [
					{
						title: "5월",
						children: [
							"05/",
							"05/1주차",
							"05/2주차",
							"05/3주차",
							"05/4주차",
						].map((v) => `${Review2021}/${v}`),
					},
				],
			},
		],
	},
	{
		title: "📚 Books",
		collapsable: true,
		children: [
			{
				title: "생각의 탄생",
				children: ["", "intro/"].map((v) => `Books/Sparks of Genius/${v}`),
			},
		],
	},
	{
		title: "Java",
		collapsable: true,
		children: ["", "Test"].map((v) => `Java/${v}`),
	},
];
