<script>
	import { createTransferRequest, encodeURL, createQR } from './transferRequest.js';
	/** @type {import('./$types').PageData} */
	export let data;

	let selected = {
		productId: null,
		productPrice: 0,
		productFullName: null,
		salePrice: 0,
		basePrice: 0
	};

	let voucherDropdown = '';
	let price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(0);
	let qrCodeElement;

	$: if (selected.productId) {
		price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
			(selected?.salePrice || selected?.basePrice || 0) / 100
		);

		selected.productPrice = selected?.salePrice || selected?.basePrice || 0;

		// const transferObject = createTransferRequest(
		// 	(selected?.salePrice || selected?.basePrice) / 100,
		// 	selected?.productFullName
		// );

		// const url = encodeURL(transferObject);
		// const qrCode = createQR(url, 300);
		// qrCodeElement.innerHTML = '';
		// qrCode.append(qrCodeElement);
	}
</script>

<div class="isolate overflow-hidden bg-gray-900">
	<div class="mx-auto max-w-7xl px-6 lg:px-8 pt-18 sm:pt-24 text-center">
		<div class="mx-auto max-w-2xl">
			<h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Voucher Swap</h2>
			<p class="mt-6 text-lg leading-8 text-gray-300">
				Unlock Epic Experiences: Game Vouchers and More, Powered by USDC!
			</p>
		</div>
		<div class="mx-auto mt-10 max-w-2xl">
			<div
				class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"
			>
				<a href="#">PUBG Deals <span aria-hidden="true">&rarr;</span></a>
				<a href="#">Big Yalla <span aria-hidden="true">&rarr;</span></a>
				<a href="#">App Store & iTunes <span aria-hidden="true">&rarr;</span></a>
				<a href="#">Razer Gold Offers <span aria-hidden="true">&rarr;</span></a>
			</div>
		</div>
	</div>
	<div class="mx-auto max-w-7xl px-6 pb-96 text-center lg:px-8">
		<div class="relative mt-6">
			<svg
				viewBox="0 0 1208 1024"
				class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
			>
				<ellipse
					cx="604"
					cy="512"
					fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
					rx="604"
					ry="512"
				/>
				<defs>
					<radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
						<stop stop-color="#7775D6" />
						<stop offset="1" stop-color="#E935C1" />
					</radialGradient>
				</defs>
			</svg>
		</div>
	</div>

	<div class="flow-root bg-white pb-24 sm:pb-32">
		<div class="-mt-80">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-2xl">
					<div
						class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
					>
						<div>
							<h3 id="tier-hobby" class="text-base font-semibold leading-7 text-indigo-600">
								Choose your voucher
							</h3>

							<div class="mt-4">
								<div class="relative mt-2">
									<button
										type="button"
										class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
										aria-haspopup="listbox"
										aria-expanded="true"
										aria-labelledby="listbox-label"
										on:click={() => (voucherDropdown = 'open')}
									>
										<span class="flex items-center">
											<span class="ml-3 block truncate"
												>{selected?.productFullName || 'Choose a voucher'}</span
											>
										</span>
										<span
											class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
										>
											<svg
												class="h-5 w-5 text-gray-400"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
													clip-rule="evenodd"
												/>
											</svg>
										</span>
									</button>

									<!--
                    Select popover, show/hide based on select state.
              
                    Entering: ""
                      From: ""
                      To: ""
                    Leaving: "transition ease-in duration-100"
                      From: "opacity-100"
                      To: "opacity-0"
                  -->
									{#if voucherDropdown === 'open'}
										<ul
											class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
											tabindex="-1"
											role="listbox"
											aria-labelledby="listbox-label"
											aria-activedescendant="listbox-option-3"
										>
											<!--
                    Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
            
                    Highlighted: "bg-indigo-600 text-white", Not Highlighted: "text-gray-900"
                  -->

											{#each data.data as item}
												<li
													class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
													role="option"
													on:click={() => {
														selected = item;
														voucherDropdown = 'closed';
													}}
												>
													<div class="flex items-center">
														<span class="font-normal ml-3 block truncate"
															>{item.productFullName}</span
														>
													</div>

													<!--
                      Checkmark, only display for selected option.
            
                      Highlighted: "text-white", Not Highlighted: "text-indigo-600"
                    -->
													{#if selected === item}
														<span
															class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
														>
															<svg
																class="h-5 w-5"
																viewBox="0 0 20 20"
																fill="currentColor"
																aria-hidden="true"
															>
																<path
																	fill-rule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clip-rule="evenodd"
																/>
															</svg>
														</span>
													{/if}
												</li>
											{/each}
										</ul>
									{/if}
								</div>
							</div>

							<p class="mt-6 text-base leading-7 text-gray-600">
								Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.
							</p>

							<div class="mt-4 flex items-baseline gap-x-2">
								<span class="text-5xl font-bold tracking-tight text-gray-900">{price}</span>
							</div>

							<div id="qr-code" bind:this={qrCodeElement} />

							<!-- <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-600">
								<li class="flex gap-x-3">
									<svg
										class="h-6 w-5 flex-none text-indigo-600"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
											clip-rule="evenodd"
										/>
									</svg>
									5 products
								</li>
							</ul> -->
						</div>
						<form method="POST" action="/api/payment-intents">
							<input type="hidden" name="productId" bind:value={selected.productId} />
							<input type="hidden" name="productFullName" bind:value={selected.productFullName} />
							<input type="hidden" name="productPrice" bind:value={selected.productPrice} />
							<button
								type="submit"
								aria-describedby="tier-hobby"
								class="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>Buy Now
							</button>
						</form>
					</div>
				</div>
			</div>

			<div class="bg-white py-18 sm:py-24">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
						Brands You Love, Vouchers You Need
					</h2>
					<div
						class="mx-auto mt-10 grid max-w-md grid-cols-4 items-center gap-x-8 gap-y-5 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:max-w-4xl lg:grid-cols-5"
					>
						<img
							class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
							alt="Transistor"
							width="158"
							height="48"
						/>
						<img
							class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
							alt="Reform"
							width="158"
							height="48"
						/>
						<img
							class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
							alt="Tuple"
							width="158"
							height="48"
						/>
						<img
							class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
							alt="SavvyCal"
							width="158"
							height="48"
						/>
						<img
							class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
							alt="Statamic"
							width="158"
							height="48"
						/>
						<img
							class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
							alt="Statamic"
							width="158"
							height="48"
						/>
						<img
							class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
							alt="Transistor"
							width="158"
							height="48"
						/>
						<img
							class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
							alt="Reform"
							width="158"
							height="48"
						/>
						<img
							class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
							alt="Tuple"
							width="158"
							height="48"
						/>
						<img
							class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
							alt="SavvyCal"
							width="158"
							height="48"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
