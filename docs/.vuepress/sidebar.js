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
						children: ["06/4th_week", "06/5th_week"].map(
							(v) => `${Review2021}/${v}`
						),
					},
					{
						title: "7월",
						children: [
							"07/1st_week",
							"07/2nd_week",
							"07/3rd_week",
							"07/4th_week",
							"07/5th_week",
						].map((v) => `${Review2021}/${v}`),
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
						title: "[3단계] 생각의 탄생",
						children: [
							"",
							"intro/",
							"abstract/",
							"01Observing/",
							"02Imaging/",
							"03Abstracting/",
							"04RecognizingPatterns/",
						].map((v) => `${Books2021}/Sparks of Genius/${v}`),
					},
					{
						title: "[2단계] 기적을 부르는 뇌",
						children: [""].map(
							(v) => `${Books2021}/The Brain That Changes Itself/${v}`
						),
					},
					{
						title: "[1단계] 헤드 스트롱",
						children: [
							"",
							"intro",
							"ch1",
							"ch2",
							"ch3",
							"ch4",
							"ch5",
							"ch6",
							"ch7",
						].map((v) => `${Books2021}/HEAD STRONG/${v}`),
					},
					{
						title: "CODE",
						children: [
							"",
							"Ch1",
							"Ch2",
							"Ch3",
							"Ch6",
							"Ch7",
							"Ch8",
							"Ch9",
							"Ch10",
						].map((v) => `${Books2021}/Code/${v}`),
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
						children: ["", "Summary"].map(
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
			{
				title: "생활코딩",
				children: [
					"AccessLevelModifiers",
					"ConstructorAndThis",
					"inheritance_and_constructor",
					"Inheritance_Interface",
					"Instance",
					"OOP",
					"polymorphism_accessModifier_final_abstract",
					"Static",
					"this_and_super",
					"interface_intro",
					"interface_shape",
					"polymorphism",
					"interface_javaAPI",
					"ErrorAndException",
				].map((v) => `Java/egoing/${v}`),
			},
			{
				title: "그때 그때 공부",
				children: ["Collections.unmodifiableList"].map(
					(v) => `Java/personal/${v}`
				),
			},
		],
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
			"connectionWithDB/connMySQL",
			"connectionWithDB/connMSSQL",
		].map((v) => `Pentaho/${v}`),
	},
	{
		title: "🐧 Linux",
		children: ["capture", "update-alternatives"].map((v) => `Linux/${v}`),
	},
	{
		title: "🌌 Shell",
		children: [""].map((v) => `Shell/${v}`),
	},
	{
		title: "🧠 Metacognition",
		children: ["mbti", "strengthFinder", "strengthFinder_in-depth"].map(
			(v) => `metacognition/${v}`
		),
	},
	{
		title: "🥇 Certificates",
		children: [
			{
				title: "정보처리기사",
				children: ["", "필기/01.요구사항확인/현행시스템분석"].map(
					(v) => `certificates/EngineerInformationProcessing/${v}`
				),
			},
		],
	},
	{
		title: "🐕 Github",
		children: ["GithubAction/"].map((v) => `Github/${v}`),
	},
];
