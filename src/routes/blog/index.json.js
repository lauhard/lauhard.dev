import posts from './_posts.js';

// const contents = JSON.stringify(posts.map(post => {
// 	return {
// 		title: post.title,
//         slug: post.slug,
//         creationDate: post.creationDate,
//         tags: post.tags,
//         author: post.author
// 	};
// }));

export function get(req, res) {
	console.log(req.path)
	let slug = req.path.replace(".json","").replace("/","");
	console.log(slug)

	let filteredPosts = posts.filter(p => p.slug == slug);
	if (filteredPosts.length == 0)
		filteredPosts = posts;
	console.log(filteredPosts);
	const contents = JSON.stringify(filteredPosts.map(post => {
		return {
			title: post.title,
			slug: post.slug,
			creationDate: post.creationDate,
			tags: post.tags,
			author: post.author
		};
	}));
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}