import { getCachedDecoded, setCachedDecoded } from './decodedCache';

const me = "chundury";

let worker;
let nextId = 0;
const pending = new Map();

function getWorker() {
	if (typeof window === 'undefined') return null;
	if (!worker) {
		worker = new Worker(new URL('./xorWorker.js', import.meta.url));
		worker.onmessage = (event) => {
			const { id, buffer } = event.data;
			const resolve = pending.get(id);
			if (resolve) {
				pending.delete(id);
				resolve(buffer);
			}
		};
	}
	return worker;
}

function syncXor(buffer, key) {
	const bytes = new Uint8Array(buffer);
	const keyBytes = Array.from(key).map((c) => c.charCodeAt(0));
	for (let i = 0; i < bytes.length; i++) {
		bytes[i] ^= keyBytes[i % keyBytes.length];
	}
	return bytes.buffer;
}

function decode(buffer, key) {
	const w = getWorker();
	if (!w) return Promise.resolve(syncXor(buffer, key));
	return new Promise((resolve) => {
		const id = nextId++;
		pending.set(id, resolve);
		w.postMessage({ id, buffer, key }, [buffer]);
	});
}

export async function readRaw(url, provided = me) {
	const cached = await getCachedDecoded(url);
	if (cached) return new Uint8Array(cached);

	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to fetch ${url} (${res.status} ${res.statusText})`);
	const scrambled = await res.arrayBuffer();
	const decoded = await decode(scrambled, provided);
	// Clone before caching: the returned buffer is handed to the caller, and cache.put()
	// should own an independent copy rather than alias bytes the caller might reuse.
	setCachedDecoded(url, decoded.slice(0)).catch(() => {});
	return new Uint8Array(decoded);
}

export async function readImage(url, provided = me) {
	const bytes = await readRaw(url, provided);
	const blob = new Blob([bytes], { type: "image/jpeg" });
	return URL.createObjectURL(blob);
}

export async function readJSON(url, provided = me) {
	const bytes = await readRaw(url, provided);
	const decoder = new TextDecoder("utf-8");
	return JSON.parse(decoder.decode(bytes));
}
