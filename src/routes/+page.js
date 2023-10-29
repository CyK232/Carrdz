/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`/api/product-prices`);
	const data = await res.json();

	return { data };
}
