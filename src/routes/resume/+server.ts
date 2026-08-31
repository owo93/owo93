import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request, platform }) => {
	const env = platform?.env;
	if (!env) return new Response('Unavailable', { status: 500 });

	const asset = await env.ASSETS.fetch(new URL('/resume.pdf', request.url));
	if (!asset.ok) return new Response('Not Found', { status: 404 });

	return new Response(asset.body, {
		status: asset.status,
		headers: {
			'content-type': asset.headers.get('content-type') ?? 'application/pdf',
			'content-disposition': 'attachment; filename="resume.pdf"',
			'cache-control': asset.headers.get('cache-control') ?? 'public, max-age=300'
		}
	});
};
