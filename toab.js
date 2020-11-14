function toab(data, { debug = false } = { debug: false }) {
  let result;
  if (data instanceof ArrayBuffer) {
    if (debug) console.log("[toab] data appears to already be an array buffer");
    result = data;
  } else if (typeof Buffer !== "undefined" && Buffer.isBuffer(data)) {
    if (debug) console.log("[toab] data appears to be a buffer");
    result = data.buffer.slice(
      data.byteOffset,
      data.byteOffset + data.byteLength
    );
  } else if (
    data instanceof Int8Array ||
    data instanceof Uint8Array ||
    data instanceof Int16Array ||
    data instanceof Uint16Array ||
    data instanceof Int32Array ||
    data instanceof Uint32Array ||
    data instanceof Float32Array ||
    data instanceof Float64Array ||
    data instanceof BigInt64Array ||
    data instanceof BigUint64Array
  ) {
    result = data.buffer;
  } else if (typeof File !== "undefined" && data instanceof File) {
    if (data.arrayBuffer) {
      return data.arrayBuffer();
    }
  } else if (typeof data === "string") {
    console.log("IS STRING");
    if (data.startsWith("data:")) {
      return fetch(data).then(response => response.arrayBuffer());
    } else if (typeof TextEncoder === "function") {
      const encoder = new TextEncoder();
      const uint8Array = encoder.encode(data);
      result = uint8Array.buffer;
    }
  }
  if (debug) console.log("[toab] result is:", result);
  return result;
}

if (typeof module === "object") module.exports = toab;
if (typeof self !== "undefined") self.toab = toab;
if (typeof window !== "undefined") window.toab = toab;
