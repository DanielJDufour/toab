const test = require("ava");
const toab = require("./index");

test("converting buffer", (t) => {
  const buffer = Buffer.alloc(1024);
  const ab = toab(buffer, { debug: false });
  t.true(ab instanceof ArrayBuffer);
});

test("converting Uint8Array", (t) => {
  const arr = new Uint8Array(1024);
  const ab = toab(arr, { debug: false });
  t.true(ab instanceof ArrayBuffer);
});

test("converting Uint16Array", (t) => {
  const arr = new Uint16Array(1024);
  const ab = toab(arr, { debug: false });
  t.true(ab instanceof ArrayBuffer);
});
