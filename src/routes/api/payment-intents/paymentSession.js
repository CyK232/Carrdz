import { CANDYPAY_API_PRIVATE_KEY, CANDYPAY_API_PUBLIC_KEY, STATIC_URL } from '$env/static/private';
import { CandyPay } from '@candypay/checkout-sdk';

const candyPayClient = new CandyPay({
	api_keys: {
		private_api_key: CANDYPAY_API_PRIVATE_KEY,
		public_api_key: CANDYPAY_API_PUBLIC_KEY
	},
	network: 'devnet', // use 'mainnet' for prod and 'devnet' for dev environment
	config: {
		collect_shipping_address: false
	}
});

/**
 * @param {string} uuid
 * @param {{ price: number; name: string; productId: string; }} product
 */
export async function createPaymentSession(uuid, product) {
	return candyPayClient.session.create({
		success_url: `${STATIC_URL}/${uuid}`,
		cancel_url: `${STATIC_URL}`,
		tokens: ['usdt'],
		items: [
			{
				name: product.name,
				price: product.price,
				image: 'https://imgur.com/M0l5SDh.png',
				quantity: 1
			}
		],
		metadata: {
			productId: product.productId,
			uuid
		}
	});
}
