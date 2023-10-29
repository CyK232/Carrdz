import { redirect } from '@sveltejs/kit';
import { createPaymentSession } from './paymentSession';

/**
 * @type {import('./$types').RequestHandler}
 * @description Create a payment session
 *
 */
export async function POST({ request }) {
	console.log('POST /api/payment-intents');

	const uuid = crypto.randomUUID();
	const product = await getProductDetails(request);
	const response = await createPaymentSession(uuid, product);

	throw redirect(302, response.payment_url);
}

/**
 * @param {Request} request
 * @description Get the product details from the form
 * @summary Should be replaced with API to voucher service with productID as parameter
 */
async function getProductDetails(request) {
	const formData = await request.formData();
	const price = Number(formData.get('productPrice')) / 100;
	const name = String(formData.get('productFullName'));
	const productId = String(formData.get('productId'));
	return { price, name, productId };
}
