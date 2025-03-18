const dummyPosts = require("./dummyPosts");

const dummyPostsEngagement = dummyPosts.map((post) => {
	return { totalEngagement: post.totalEngagement ?? 0 };
});
console.log(`*Example dummyPostsEngagement: `, dummyPostsEngagement);

// const dummyPosts = [
//   { },
//   {  },
//   { totalEngagement: 4 },
//   { totalEngagement: 3 },
//   {  },
//   { totalEngagement: 1 },
//   { totalEngagement: 2 },
//   { totalEngagement: 5 },
//   { },
//   { totalEngagement: 6}
// ];

const a1 = dummyPostsEngagement;
const id = "totalEngagement";
const desc = false;
a1.sort((a, b) => {
	if (desc) {
		return a[id] < b[id] ? 1 : -1;
	}
	return a[id] > b[id] ? 1 : -1;
});

console.log(a1.map((item) => item[id]));
