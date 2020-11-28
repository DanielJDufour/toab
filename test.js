const test = require("ava");
const fs = require("fs");
const toab = require("./toab");
const fetch = require("cross-fetch");

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

test("converting Response", async t => {
  const url =
    "https://s3.amazonaws.com/geotiff.io/PuertoRicoTropicalFruit.tiff";
  const response = await fetch(url);
  const ab = await toab(response);
  t.is(ab.byteLength, 2760);
});

test("converting data url in NodeJS", async t => {
  const url = fs.readFileSync("./data/data-url.txt", "utf-8");
  const ab = await toab(url, { debug: false });
  t.is(ab.byteLength, 3979);
  fs.writeFileSync("./data/test.tmp.jpg", Buffer.from(ab));
});
