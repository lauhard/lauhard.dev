import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
        slug: post.slug,
        creationDate: post.creationDate,
		modificationDate: post.modificationDate,
		readingTime: post.readingTime,
		draft: post.draft,
        tags: post.tags,
        author: post.author
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}