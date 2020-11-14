const test = require("ava");
const toab = require("./toab");

test("converting buffer", async t => {
  const buffer = Buffer.alloc(1024);
  const ab = toab(buffer, { debug: false });
  t.true(ab instanceof ArrayBuffer);
});

test("converting Uint8Array", async t => {
  const arr = new Uint8Array(1024);
  const ab = toab(arr, { debug: false });
  t.true(ab instanceof ArrayBuffer);
});

test("converting Uint16Array", async t => {
  const arr = new Uint16Array(1024);
  const ab = toab(arr, { debug: false });
  t.true(ab instanceof ArrayBuffer);
});

test("converting text", async t => {
  const text = "Hello, I'm a String.";
  const ab = toab(text, { debug: false });
  t.true(ab instanceof ArrayBuffer);
  t.is(ab.byteLength, 20);
});
