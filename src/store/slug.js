import { writable } from 'svelte/store';
let SLUG = "";
function slugStore() {
	const { subscribe, set} = writable(SLUG);
	return {
		subscribe,
		set: (slug) => set(slug)
	};
}
let Slug = slugStore();
export default Slug;