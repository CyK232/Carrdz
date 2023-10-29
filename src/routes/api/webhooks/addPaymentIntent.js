/**
 * @param {{ metadata: { uuid: any; }; }} paymentData
 * @param {{ locals: { supabase: any; }; }} options
 */
export async function addPaymentIntent(paymentData, { locals }) {
	const uuid = paymentData.metadata.uuid;

	const { error } = await locals.supabase
		.from('payment_intents')
		.insert([{ id: uuid, payment_metadata: paymentData }]);

	// check for error
	if (error) {
		console.error(error);
		throw error;
	}

	return uuid;
}
