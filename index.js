function toab(data, { debug = false } = { debug: false }) {
  let result;
  if (data instanceof ArrayBuffer) {
    if (debug) console.log("[toab] data appears to already be an array buffer");
    return data;
  } else if (typeof Buffer !== "undefined" && Buffer.isBuffer(data)) {
    if (debug) console.log("[toab] data appears to be a buffer");
    result = data.buffer.slice(
      data.byteOffset,
      data.byteOffset + data.byteLength
    );
  }
  if (
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
  }
  if (debug) console.log("[toab] result is:", result);
  return result;
}

module.exports = toab;
