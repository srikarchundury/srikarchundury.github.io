const me = "chundury";

export async function readRaw(url, provided = me) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to fetch ${url}`);
	const scrambled = new Uint8Array(await res.arrayBuffer());
	const key = Array.from(provided).map(c => c.charCodeAt(0));
	const unscrambled = scrambled.map((byte, idx) => byte ^ key[idx % key.length]);
	return new Uint8Array(unscrambled);
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
