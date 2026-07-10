// Off-main-thread XOR decode for scrambled assets. Message protocol:
// in:  { id, buffer: ArrayBuffer, key: string } (buffer ownership transferred)
// out: { id, buffer: ArrayBuffer } (decoded buffer, ownership transferred back)
self.onmessage = (event) => {
	const { id, buffer, key } = event.data;
	const bytes = new Uint8Array(buffer);
	const keyBytes = Array.from(key).map((c) => c.charCodeAt(0));
	for (let i = 0; i < bytes.length; i++) {
		bytes[i] ^= keyBytes[i % keyBytes.length];
	}
	self.postMessage({ id, buffer: bytes.buffer }, [bytes.buffer]);
};
