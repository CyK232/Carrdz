import { encodeURL, createQR } from '@solana/pay';
import { Keypair, PublicKey } from '@solana/web3.js';
import BigNumber from 'bignumber.js';

export function createTransferRequest(amount, productName) {
	const recipient = new PublicKey('ApBauknmiBh4favYvDaSaJBJ6w1UvVf8Jqi1Jx3R1FT2');
	const splToken = new PublicKey('4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU');
	amount = new BigNumber(amount);
	const reference = new Keypair().publicKey;
	const label = 'Voucher Swap';
	const message = `Voucher Swap Order - ${productName}`;
	const memo = message;

	return {
		recipient,
		amount,
		reference,
		label,
		message,
		memo,
		splToken
	};
}

export { encodeURL, createQR };
