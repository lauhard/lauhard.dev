import posts from './_posts.js';



export function get(req, res) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	// const { slug } = req.params;
	let filteredPosts = posts.find(p => p.slug == "test");
	console.log(filteredPosts);
	const contents = JSON.stringify(posts.map(post => {
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
