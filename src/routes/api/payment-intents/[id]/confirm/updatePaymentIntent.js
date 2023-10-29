/**
 * @param {any} voucherMetadata
 * @param {{ locals: { supabase: any; },  payload: {metadata:any} }} options
 */
export async function updatePaymentIntent(voucherMetadata, { locals, payload }) {
	// update payment intent
	const uuid = payload.metadata.uuid;
	const supabase = locals.supabase;

	const { data, error } = await supabase
		.from('payment_intents')
		.update({ voucher_metadata: voucherMetadata })
		.eq('id', uuid)
		.select();

	return uuid;
}
