const Review2021 = "/Review/2021";

module.exports = [
	{ title: "About me", path: "/" },
	{
		title: "Log",
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
		title: "Java",
		children: ["", "Test"].map((v) => `Java/${v}`),
	},
];
