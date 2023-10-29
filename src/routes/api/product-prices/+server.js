import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	// mock response from actual endpoint
	const products = [
		{
			productId: 1,
			productName: '$10',
			productGroup: 'Apple Card US',
			regions: [],
			platforms: [],
			deliveryMethods: [
				{
					id: 11,
					name: 'API'
				},
				{
					id: 12,
					name: 'Email'
				}
			],
			productFullName: 'Apple Card US $10',
			currency: 'USD',
			basePrice: 1300,
			salePrice: 0,
			clientGroupId: null
		},
		{
			productId: 3,
			productName: '$5',
			productGroup: 'Apple Card US',
			regions: [],
			platforms: [],
			deliveryMethods: [
				{
					id: 11,
					name: 'API'
				},
				{
					id: 12,
					name: 'Email'
				}
			],
			productFullName: 'Apple Card US $5',
			currency: 'USD',
			basePrice: 2100,
			salePrice: 0,
			clientGroupId: null
		},
		{
			productId: 267,
			productName: '$100',
			productGroup: 'Apple Card US',
			regions: [],
			platforms: [],
			deliveryMethods: [
				{
					id: 11,
					name: 'API'
				},
				{
					id: 12,
					name: 'Email'
				}
			],
			productFullName: 'Apple Card US $100',
			currency: 'USD',
			basePrice: 10100,
			salePrice: 0,
			clientGroupId: null
		},
		{
			productId: 268,
			productName: '$25',
			productGroup: 'Apple Card US',
			regions: [],
			platforms: [],
			deliveryMethods: [
				{
					id: 11,
					name: 'API'
				},
				{
					id: 12,
					name: 'Email'
				}
			],
			productFullName: 'Apple Card US $25',
			currency: 'USD',
			basePrice: 3000,
			salePrice: 0,
			clientGroupId: null
		},
		{
			productId: 289,
			productName: '$50',
			productGroup: 'Apple Card US',
			regions: [],
			platforms: [],
			deliveryMethods: [
				{
					id: 11,
					name: 'API'
				},
				{
					id: 12,
					name: 'Email'
				}
			],
			productFullName: 'Apple Card US $50',
			currency: 'USD',
			basePrice: 5700,
			salePrice: 0,
			clientGroupId: null
		},
		{
			productId: 290,
			productName: '$20',
			productGroup: 'Apple Card US',
			regions: [],
			platforms: [],
			deliveryMethods: [
				{
					id: 11,
					name: 'API'
				},
				{
					id: 12,
					name: 'Email'
				}
			],
			productFullName: 'Apple Card US $20',
			currency: 'USD',
			basePrice: 2000,
			salePrice: 0,
			clientGroupId: null
		},
		{
			productId: 448,
			productName: 'SAR 100',
			productGroup: 'Apple iTunes KSA',
			regions: [],
			platforms: [],
			deliveryMethods: [
				{
					id: 11,
					name: 'API'
				},
				{
					id: 12,
					name: 'Email'
				}
			],
			productFullName: 'Apple iTunes KSA SAR 100',
			currency: 'USD',
			basePrice: 2900,
			salePrice: 0,
			clientGroupId: null
		}
	];

	return json(products);
}
