import { json } from '@sveltejs/kit';
import { addPaymentIntent } from './addPaymentIntent';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, params, locals, fetch }) {
	console.log('POST /api/webhooks');
	const paymentData = await request.json();

	// save payment intent
	const uuid = await addPaymentIntent(paymentData, { locals });

	// confirm payment intent /api/payment-intents/{paymentIntentId}/confirm
	await fetch(`/api/payment-intents/${uuid}/confirm`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(paymentData)
	});

	return json({ uuid });
}
