
import { writable } from 'svelte/store';
let FILTEREDPOSTS = [];
function FilteredPostStore() {
	const { subscribe, set, update } = writable(FILTEREDPOSTS);
	return {
		subscribe,
		add: (post) => update(FILTEREDPOSTS => [...FILTEREDPOSTS, post]),
		set: (FILTEREDPOSTS) => set(FILTEREDPOSTS)
	};
}
let FilteredPosts = FilteredPostStore();
export default FilteredPosts