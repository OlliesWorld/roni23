<script lang="ts">
	import { goto } from '$app/navigation';

	let name = '';
	let email = '';
	let message = '';
	let submitting = false;
	let error = '';

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		submitting = true;
		error = '';

		const formData = new URLSearchParams();
		formData.append('form-name', 'contactUs');
		formData.append('name', name);
		formData.append('email', email);
		formData.append('message', message);

		try {
			const response = await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: formData.toString()
			});

			if (response.ok) {
				goto('/thank-you');
			} else {
				error = 'Something went wrong. Please try again.';
			}
		} catch (err) {
			error = 'Something went wrong. Please try again.';
		} finally {
			submitting = false;
		}
	}
</script>

<div class="p-2 mt-4">
	<form data-netlify="true" action="/" name="contactUs" method="post" on:submit={handleSubmit}>
		<input type="hidden" name="form-name" value="contactUs" />

		<div class="grid gap-6 sm:grid-cols-2">
			<div class="relative z-0">
				<input
					id="name"
					type="text"
					name="name"
					bind:value={name}
					class="peer block w-full appearance-none border-0 border-b border-[#8b8b00] bg-transparent py-2.5 px-0 text-lg text-white focus:border-[#8b8b00] focus:outline-none focus:ring-0"
					placeholder=""
					required
				/>
				<label
					for="name"
					class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white"
				>
					Your name
				</label>
			</div>

			<div class="relative z-0">
				<input
					id="email"
					type="email"
					name="email"
					bind:value={email}
					class="peer block w-full appearance-none border-0 border-b border-[#8b8b00] bg-transparent py-2.5 px-0 text-lg text-white focus:border-[#8b8b00] focus:outline-none focus:ring-0"
					placeholder=""
					required
				/>
				<label
					for="email"
					class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white"
				>
					Your email
				</label>
			</div>

			<div class="relative z-0 col-span-2">
				<textarea
					id="message"
					name="message"
					bind:value={message}
					class="pl-1 peer block w-full appearance-none border-2 border-[#8b8b00] bg-transparent py-2.5 px-0 text-lg text-white focus:border-cyan-600 mt-2 focus:outline-none focus:ring-0"
					placeholder=""
					rows="8"
					minlength="20"
					required
				></textarea>
				<label
					for="message"
					class="absolute top-2 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white"
				>
					Your message
				</label>
			</div>
		</div>

		{#if error}
			<p class="text-red-400 mt-2 text-sm">{error}</p>
		{/if}

		<button
			type="submit"
			disabled={submitting}
			class="mt-5 rounded-md bg-[#8b8b00] px-10 py-2 text-white disabled:opacity-50"
		>
			{submitting ? 'Sending...' : 'Send Message'}
		</button>
	</form>
</div>
