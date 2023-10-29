import { json } from '@sveltejs/kit';
import { PUBLIC_VOUCHER_API } from '$env/static/public';
import { VOUCHER_API_KEY } from '$env/static/private';
import { updatePaymentIntent } from './updatePaymentIntent';

/**
 * @type {import('./$types').RequestHandler}
 * @description Confirm a payment intent
 *
 */
export async function POST({ request, fetch, locals, params }) {
	console.log(`POST /api/payment_intents/${params.id}/confirm`);

	const payload = await request.json();

	// issue voucher
	const response = await fetch(`${PUBLIC_VOUCHER_API}/orders`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${VOUCHER_API_KEY}`
		},
		body: JSON.stringify({
			products: [
				{
					productId: payload.metadata.productId,
					quantity: 1,
					amount: payload.items[0].price
				}
			]
		})
	});

	const voucherMetadata = await response.json();
	const uuid = await updatePaymentIntent(voucherMetadata, { locals, payload });

	return json({ uuid });
}
