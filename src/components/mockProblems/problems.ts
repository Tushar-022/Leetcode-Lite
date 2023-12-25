export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
	solutionLink?: string;
};


export const problems: Problem[] = [
	{
		id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 1,
		videoId: "8-k1C6ehKuw",
		solutionLink: "https://leetcode.com/problems/two-sum/solutions/4447937/beginner-friendly/",
	},
	{
		id: "reverse-linked-list",
		title: "Reverse Linked List",
		difficulty: "Hard",
		category: "Linked List",
		order: 2,
		videoId: "",
		solutionLink: "https://leetcode.com/problems/reverse-linked-list/solutions/4447952/user-friendly/",
	},
	{
		id: "jump-game",
		title: "Jump Game",
		difficulty: "Medium",
		category: "Dynamic Programming",
		order: 3,
		videoId: "",
		solutionLink: "https://leetcode.com/problems/jump-game/solutions/4447957/user-friendly/",
	},
	{
		id: "valid-parentheses",
		title: "Valid Parentheses",
		difficulty: "Easy",
		category: "Stack",
		order: 4,
		videoId: "xty7fr-k0TU",
		solutionLink: "https://leetcode.com/problems/valid-parentheses/solutions/4447961/user-friendly/",
	},
	{
		id: "search-a-2d-matrix",
		title: "Search a 2D Matrix",
		difficulty: "Medium",
		category: "Binary Search",
		order: 5,
		videoId: "ZfFl4torNg4",
		solutionLink: "https://leetcode.com/problems/search-a-2d-matrix/solutions/4447966/user-friendly/",
	},
	{
		id: "container-with-most-water",
		title: "Container With Most Water",
		difficulty: "Medium",
		category: "Two Pointers",
		order: 6,
		videoId: "",
		solutionLink: "https://leetcode.com/problems/container-with-most-water/solutions/4447970/user-friendly/",
	},
	{
		id: "merge-intervals",
		title: "Merge Intervals",
		difficulty: "Medium",
		category: "intervals",
		order: 7,
		videoId: "",
		solutionLink: "https://leetcode.com/problems/merge-intervals/solutions/4447973/user-friendly/",
	},
	{
		id: "maximum-depth-of-binary-tree",
		title: "Maximum Depth of Binary Tree",
		difficulty: "Easy",
		category: "Tree",
		order: 8,
		videoId: "4qYTqOiRMoM",
		solutionLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/4447976/user-friendly/",
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		difficulty: "Easy",
		category: "Array",
		order: 9,
		videoId: "",
		solutionLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/4447979/user-friendly/",
	},
	{
		id: "subsets",
		title: "Subsets",
		difficulty: "Medium",
		category: "Backtracking",
		order: 10,
		videoId: "",
		solutionLink: "https://leetcode.com/problems/subsets/solutions/4447982/user-friendly/"
	},
];