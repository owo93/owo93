import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const env = platform?.env;
	if (!env) return new Response('Unavailable', { status: 500 });

	try {
		const [contacts, email] = await Promise.all([
			env.OWOFOLIO_KV.get('contacts', 'json'),
			env.OWOFOLIO_KV.get('email', 'text')
		]);

		return {
			contacts: (contacts ?? []) as Record<string, string>[],
			email: email ?? ''
		};
	} catch (error) {
		console.error('KV error: ', error);
		return new Response('Unavailable', { status: 500 });
	}
};
