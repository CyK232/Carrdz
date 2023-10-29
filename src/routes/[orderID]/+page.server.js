import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
	const orderID = params.orderID;
	const supabase = locals.supabase;

	let {
		data: [payment_intents],
		error
	} = await supabase.from('payment_intents').select('*').eq('id', orderID);

	return {
		payment_intents
	};
}
