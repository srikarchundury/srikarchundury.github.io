// Persistent cache for already-decoded scrambled assets, keyed by source URL.
// Bump CACHE_NAME whenever site-data assets are meaningfully updated, to force fresh fetches.
const CACHE_NAME = 'scrambled-assets-v1';

export async function getCachedDecoded(url) {
	if (typeof caches === 'undefined') return null;
	try {
		const cache = await caches.open(CACHE_NAME);
		const match = await cache.match(url);
		return match ? match.arrayBuffer() : null;
	} catch {
		return null;
	}
}

export async function setCachedDecoded(url, arrayBuffer, contentType = 'application/octet-stream') {
	if (typeof caches === 'undefined') return;
	try {
		const cache = await caches.open(CACHE_NAME);
		await cache.put(url, new Response(arrayBuffer, { headers: { 'Content-Type': contentType } }));
	} catch {
		// Non-fatal: caching is a best-effort optimization.
	}
}
