import fetchData from '../lib/fetch-data';
import fetchItem from '../lib/fetch-item';

export async function get() {
	const ids = await fetchData('topstories');

	const stories = await Promise.all(ids.map(fetchItem));

	return {
		body: stories
	};
}
