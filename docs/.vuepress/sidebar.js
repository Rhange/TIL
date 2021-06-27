const Review2021 = "/Review/2021";
const Books2021 = "/Books/2021";

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
					{
						title: "6월",
						children: ["06/4th_week"].map((v) => `${Review2021}/${v}`),
					},
				],
			},
		],
	},
	{
		title: "📚 Books",
		children: [
			{
				title: "2021",
				children: [
					{
						title: "생각의 탄생",
						children: ["", "intro/", "abstract/"].map(
							(v) => `${Books2021}/Sparks of Genius/${v}`
						),
					},
					{
						title: "CODE",
						children: ["", "Ch1", "Ch2", "Ch3", "Ch6", "Ch7", "Ch8", "Ch9"].map(
							(v) => `${Books2021}/Code/${v}`
						),
					},
					{
						title: "파인만에게 길을 묻다",
						children: [
							"YouCanDoThatMonkeysDo",
							"SolvingProblemThatIsImpossible",
						].map((v) => `${Books2021}/Feynman's Rainbow/${v}`),
					},
					{
						title: "쇼펜하우어 문장론",
						children: ["speculation"].map(
							(v) => `${Books2021}/Schopenhauer_syntax/${v}`
						),
					},
					{
						title: "PDI Beginner's Guide(2nd)",
						children: ["", "Ch1"].map(
							(v) => `${Books2021}/PDI Beginner's Guide 2nd/${v}`
						),
					},
				],
			},
		],
	},
	{
		title: "☕ Java",
		children: [
			"AccessLevelModifiers",
			"Static",
			"OOP",
			"Instance",
			"ConstructorAndThis",
			"Inheritance_Interface",
		].map((v) => `Java/${v}`),
	},
	{
		title: "💉 Jekyll",
		children: [""].map((v) => `Jekyll/${v}`),
	},
	{
		title: "🧿 Pentaho",
		children: [
			"",
			"installation/windows/",
			"installation/ubuntu/",
			"connectionWithDB/",
		].map((v) => `Pentaho/${v}`),
	},
	{
		title: "🐧 Linux",
		children: ["capture", "update-alternatives"].map((v) => `Linux/${v}`),
	},
];
