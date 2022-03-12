const greeting = {
	title: "Kanishk Shah",
	profilePhoto: require("./assets/Images/profile.jpeg").default,
	logo_name: "KanishkShah",
	subTitle:
		"Passionate about Perception, Decision Making and Understanding",
	resumeLink:
		"./Ksresume.pdf",
	portfolio_repository: `https://github.com/kanishkshah/Portfolio-Website`,
};

const aboutMe = {
	name: "Kanishk Shah",
	email: "shahkanishk99@gmail.com",
	phone: "+91 9619545492",
	address: "Mumbai",
	resumeLink:
		"./Ksresume.pdf",
	openForOpportunity: "Yes",
	message: "My inbox is open for all. Feel free to reach out to me any time. ",
	portfolio_repository: "https://github.com/kanishkshah/Portfolio-Website",
	linkedin: "https://www.linkedin.com/in/kanishk-shah/",
	githubLink: "https://github.com/kanishkshah",
	profilePhoto: require("./assets/Images/profile.jpeg").default,
};

const socialMediaLinks = [
	{
		name: "Github",
		link: "https://github.com/kanishkshah",
		backgroundColor: "#181717",
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/kanishk-shah/",
		backgroundColor: "#0077B5",
	},
	{
		name: "Gmail",
		link: "mailto:shahkanishk99@gmail.com",
		backgroundColor: "#D14836",
	},
	{
		name: "Twitter",
		link: "https://twitter.com/KanishkShah5",
		backgroundColor: "#1DA1F2",
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/_kanishk_shah/",
		backgroundColor: "#E4405F",
	},
	{
		name: "Telephone",
		link: "tel:+91 9619545492",
		backgroundColor: "#1180FF",
	},
];

const competitiveLinks = [
	
	{
		name: "Kaggle",
		link: "https://www.kaggle.com/shahkanishk",
		backgroundColor: "#2bbf5f",
	},
	{
		name: "Leetcode",
		link: "https://leetcode.com/Lawliet1212/",
		backgroundColor: "black",
	},
];

const skills = {
	descriptions: [
		"A Machine Learning Engineer that works on end to end solutions",
		"Enthusiastic programmer who loves to solve different problems with a result-oriented approach.",
	],
	skills: [
		{
			name: "Python",
			style: {
				backgroundColor: "transparent",
				color: "#ffe873",
			},
		},
		{
			name: "Java",
			style: {
				color: "#5382A1",
			},
		},
		{
			name: "Cpp",
			style: {
				color: "#5c8dbc",
			},
		},
		{
			name: "Git",
			style: {
				color: "#F1502F",
			},
		},
		{
			name: "Github",
			style: {
				color: "black"
			}
		},
		{
			name: "Javascript",
			style: {
				color: "#F7DF1E",
			},
		},
		{
			name: "Tensorflow",
			style: {
				color: "#F6820D",
			},
		},
		{
			name: "Pytorch",
			style: {
				backgroundColor: "#000000",
				color: "#ee4c2c",
			},
		},
		{
			name: "Numpy",
			style: {
				backgroundColor: "#000000",
				color: "#4d77cf",
			},
		},
		{
			name: "Pandas",
			style: {
				backgroundColor: "#000000",
				color: "purple",
			},
		},
		{
			name: "Keras",
			style: {
				backgroundColor: "#000000",
				color: "#d00000",
			},
		},
		{
			name: "Sklearn",
			style: {
				backgroundColor: "#000000",
				color: "black",
			},
		},
		{
			name: "Django",
			style: {
				color: "#1572B6",
			},
		},
		{
			name: "Flask",
			style: {
				color: "black",
			},
		},
		{
			name: "OpenCV",
			style: {
				color: "#1572B6",
			},
		},
		{
			name: "OpenAI Gym",
			style: {
				color: "#1572B6",
			},
		},
		{
			name: "MySQL",
			style: {
				color: "#00758F",
			},
		},
	],
	proficiency: [
		{
			skills: "Tensorflow | Keras",
			proficiency: "85%",
		},
		{
			skills: "Pytorch",
			proficiency: "81%",
		},
		{
			skills: "OpenCV | OpenAI Gym",
			proficiency: "82%",
		},
		{
			skills: "Numpy | Pandas",
			proficiency: "90%",
		},
		{
			skills: "Python | Java | C++",
			proficiency: "75%",
		},
		{
			skills: "Django | Django Rest Framework | Flask",
			proficiency: "85%",
		},
		{
			skills: "Git | Github",
			proficiency: "80%",
		},
		{
			skills: "mmdetection | Scrapy | Selenium | ReactJs",
			proficiency: "44%",
		},
		{
			skills: "SQL | MySQL | MongoDB",
			proficiency: "72%",
		},
	],
};

const experience = {
	descriptions: [
		"I have taken up various assignments from different startups in different settings as a ML Developer and have used my skills for their growth and development along with increasing my knowledge in various technical domains. Those organizations provided me an opportunity to assimilate the technologies which are used in the practical world.",
	],
	
	internships: [
		{
			name: "Dimensionless Technologies",
			role: "Machine Learning Engineer",
			image: require("./assets/Images/dimensionless.jpg").default,
			tasks: [
				"Solar panel defect detection Research for India's largest Private Power company",
				"Preprocessing infrared orthomosaics and fine grained object detection of small objects",
				"AI based flagging and threat detection for AAI: Airport Authority of India",
				"(X Ray + AI detection system)",
				"Maintained the tensorflow model garden fork"
			],
			link: "https://www.baggageai.com/",
			timeline: "September 2020 - February 2021",
			location: "Mumbai",
			technologies: [
				"Pytorch",
				"Tensorflow",
				"OpenCV",
				"Tensorflow Model Garden",
				"mmdetection",
				"Confluence/ Jira",
			],
		},
		{
			name: "Dwarkadas J. Sanghvi College of Engineering",
			role: "Teaching Assisstant",
			image: require("./assets/Images/DJSCE_logo.jpg").default,
			tasks: [
				"Course: Intro to Data Science",
				"Prof: Dr Kriti Srivastava",
				"Keeping practical curriculum up to date; using case studies to help students grasp industry issues and apply techniques effectively.", 
				"Teaching students occasionally",
				"grading assignments",
				"conducting office hours",
			],
			link: "https://www.djsce.ac.in/",
			timeline: "July 2021 - December 2021",
			location: "Mumbai",
			technologies: [
				"Tableau",
				"Pandas",
				"Numpy",
				"sklearn",
				"matplotlib",
				"Seaborn",
			],
		},
		{
			name: "ResoluteAI",
			role: "Machine Learning Engineer",
			image: require("./assets/Images/resoluteai.jpg").default,
			tasks: [
				"Independent research on few-shot learning, meta transfer learning for industry applications.", 
				"Classification, Segmentation and real time detection of garments, defective garments and textiles through high-power electric looms.", 
				"Tracking and counting packages automatically during transferrals.", 
				"Regressive analysis of welding fuel constituents for large oil pipelines; Cryptocurrency factor analysis.",
			],
			link: "https://resoluteai.in/",
			timeline: "March 2021 - June 2021",
			location: "Mumbai",
			technologies: [
				"Pytorch",
				"Tensorflow",
				"OpenCV",
				"Yolo v4",
				"AutoKeras",
				"TPOT",
				"NeuralProphet",
			],
		},
		{
			name: "Artenal",
			role: "Machine Learning Engineer",
			image: require("./assets/Images/artenal.png").default,
			tasks: [
				"Leading a team to work on various end to end applications in Computer vision and multi-modal recommendation systems for job portal and travel companies; Presentations and meetings with clients",
				"Worked on the analysis of real estate growth in Vancouver and automating harvesting in orchards", 
			],
			link: "https://artenal.ca/",
			timeline: "September 2020 - February 2021",
			location: "Mumbai",
			technologies: [
				"PyTorch",
				"Tensorflow",
				"OpenCV",
				"sklearn",
				"Pandas",
				"PySpark",
				"Flask",
				"AutoKeras",
				"TPOT",
			],
		},
		{
			name: "peAR",
			role: "Photogrammetry and App Developer",
			image: require("./assets/Images/peAR.png").default,
			tasks: [
				"Worked on close range stereophotogrammetry of reflective objects", 
				"Automating blender workflows; developing the app UI",
			],
			link: "https://www.peartech.in/",
			timeline: "Jan 2019 - March 2019",
			location: "Mumbai",
			technologies: [
				"Unity3D",
				"Blender",
				"Firebase",
				"Vuforia",
				"Android Studio",
			],
		},
	],
};

const education = [
	{
		name: "Dwarkadas J. Sanghvi COE",
		timeline: "08/2018 - 06/2022",
		pointer: "9.36",
		branch: "Computer Engineering - BE honours",
		location: "Mumbai",
		image: require("./assets/Images/DJSCE_logo.jpg").default,
	},
	{
		name: "IBM",
		timeline: "08/2018 - 06/2022",
		pointer: "9.36",
		branch: "Specialization - AI/ML",
		location: "Mumbai",
		image: require("./assets/Images/IBM_logo.jpg").default,
	},
	{
		name: "Pace Junior Science College",
		timeline: "2016 - 2018",
		pointer: "85.33%",
		branch: "Higher Secondary Degree",
		location: "Mumbai",
		image: require("./assets/Images/pace.jpg").default,
	},
	{
		name: "Jamnabai Narsee School",
		timeline: "2004 - 2016",
		pointer: "95.33%",
		branch: "ICSE",
		location: "Mumbai",
		image: require("./assets/Images/jns.png").default,
	},
];

const certifications = [
	{
		name: "5 Course Deep Learning Specialization",
		author: "DeepLearning.ai",
		source: "Coursera",
		link: "https://www.coursera.org/account/accomplishments/specialization/certificate/X9ET52L6KX39",
		image: require("./assets/Images/dlai.png").default,
	},
	{
		name: "Sequence Models",
		author: "Deeplearning.ai",
		source: "Coursera",
		link: "https://www.coursera.org/account/accomplishments/certificate/LRD4Q7JZPM2A",
		image: require("./assets/Images/dlai.png").default,
	},
	{
		name: "Convolutional Neural Nets",
		author: "Deeplearning.ai",
		source: "Coursera",
		link: "http://coursera.org/verify/3Y78PVHQT9CD",
		image: require("./assets/Images/dlai.png").default,
	},
	{
		name: "Improving Deep Neural Nets: Hyperparams, NNs, Optimization",
		author: "Deeplearning.ai",
		source: "Coursera",
		link: "http://coursera.org/verify/KP7U6CY827LR",
		image: require("./assets/Images/dlai.png").default,
	},
	{
		name: "Neural Nets and Deep Learning",
		author: "Deeplearning.ai",
		source: "Coursera",
		link: "https://www.hackerrank.com/certificates/af3dc76908c1",
		image: require("./assets/Images/dlai.png").default,
	},
	{
		name: "Structured ML Projects",
		author: "Deeplearning.ai",
		source: "Coursera",
		link: "http://coursera.org/verify/Y7YJBM9RHNY2",
		image: require("./assets/Images/dlai.png").default,
	},
	{
		name: "Machine Learning",
		author: "Stanford",
		source: "Coursera",
		link: "https://www.coursera.org/learn/machine-learning",
		image: require("./assets/Images/stanford.png").default,
	},
	
];

const projects = {
	limit: "6",
	description:
		"My projects utilize a variety of leading technological tools.",
	projects: [
		{
			name: "Lightweight Apparel Classification: IEEE Cloud Summit",
			githubLink: "",
			image: require("./assets/Images/lwclass.png").default,
			technologies: ["PyTorch", "Torchmetrics", "timm"],
			websiteLink: "https://ieeexplore.ieee.org/document/9659256",
			description:
				"Research Paper",
			timeline: "September 2021",
		},
		{
			name: "Fourier Recurrent Units",
			githubLink: "",
			image: require("./assets/Images/fru.png").default,
			technologies: [
				"Pytorch",
				"Tensorflow",
				"Keras",
			],
			websiteLink: "",
			description:
				"Capstone for AI/ML Specialization course",
			timeline: "March 2022",
		},
		{
			name: "Ultrasound Nerve Segmentation: ICACET",
			githubLink: "",
			image: require("./assets/Images/ultrasound.png").default,
			technologies: [
				"Tensorflow",
				"Keras",
			],
			websiteLink: "",
			description:
				"Awaiting Publication. Uses the attention mechanism",
			timeline: "September 2021",
		},
		{
			name: "Pulmonary Fibrosis",
			githubLink: "https://www.kaggle.com/shahkanishk/pulmonary-fibrosis/notebook",
			image: require("./assets/Images/pul_fibr.jpg").default,
			technologies: [
				"Tensorflow",
				"sklearn",
				"pydicom",
			],
			websiteLink: "",
			description:
				"",
			timeline: "September 2021",
		},
		{
			name: "Priority based Traffic System",
			githubLink: "",
			image: require("./assets/Images/traff_manag.png").default,
			technologies: ["OpenAI Gym", "Tensorflow", "Sumo"],
			websiteLink: "",
			description:
				"A Reinforcement Learning System for traffic Management that gives priority to Emergency Vehicles",
			timeline: "July 2021 - May 2022",
		},
		{
			name: "Stereovision",
			githubLink: "",
			image: require("./assets/Images/sv.jpg").default,
			technologies: ["Unity3d", "Vuforia", "Reality"],
			websiteLink: "",
			description:
				"A Task Manager app built with ExpressJs, NodeJs, and MongoDB to store all the important tasks. Performs All the CRUD Operations.",
			timeline: "May 2021",
		},
		{
			name: "Reinforcement Learning for trading",
			githubLink: "https://github.com/AI4Finance-Foundation/Deep-Reinforcement-Learning-for-Automated-Stock-Trading-Ensemble-Strategy-ICAIF-2020",
			image: require("./assets/Images/rltrade.png").default,
			technologies: ["OpenAI Gym", "Tensorflow", "Stable Baselines"],
			websiteLink: "",
			description:
				"",
			timeline: "September 2021",
		},
		{
			name: "GANs and Encoders",
			githubLink: "https://github.com/kanishkshah/Computer-Vision",
			image: require("./assets/Images/celeba.png").default,
			technologies: [
				"Tensorflow",
				"Numpy",
				"Matplotlib",
			],
			websiteLink: "",
			description:
				"GANs generate decent fakes of images, Encoders are for super resolution of gaussian noise",
			timeline: "Arpil 2021",
		},
		{
			name: "Placement Portal",
			githubLink: "https://github.com/djunicode/placement-portal-web",
			image: require("./assets/Images/plac.jpeg").default,
			technologies: ["Django", "Django Rest Framework"],
			websiteLink: "",
			description:
				"Placement Portal of the college",
			timeline: "April 2020",
		},
	],
};

const achievements = [
	"Taught a class of ~70 first-year students as part of the teaching committee at DJ Codestars",
	"Mentored 5 students for their project as part of DJ Unicode",
	"Worked on the alumni communication app as part of DJ ACM",
	"Helped my father with a custom tax filing and records system post the death of my grandfather",
	"Helped in digital marketing and seo for my brother (600,000+ views on Youtube) and Mother(200,000+ views)",
];
export {
	greeting,
	aboutMe,
	socialMediaLinks,
	skills,
	experience,
	competitiveLinks,
	education,
	certifications,
	projects,
	achievements,
};
