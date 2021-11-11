const test = require("flug");
const fs = require("fs");
const toab = require("./toab");
const fetch = require("cross-fetch");

test("converting buffer", async ({ eq }) => {
  const buffer = Buffer.alloc(1024);
  const ab = await toab(buffer, { debug: false });
  eq(ab instanceof ArrayBuffer, true);
});

test("converting Uint8Array", async ({ eq }) => {
  const arr = new Uint8Array(1024);
  const ab = await toab(arr, { debug: false });
  eq(ab instanceof ArrayBuffer, true);
});

test("converting Uint16Array", async ({ eq }) => {
  const arr = new Uint16Array(1024);
  const ab = await toab(arr, { debug: false });
  eq(ab instanceof ArrayBuffer, true);
});

test("converting text", async ({ eq }) => {
  const text = "Hello, I'm a String.";
  const ab = await toab(text, { debug: false });
  eq(ab instanceof ArrayBuffer, true);
  eq(ab.byteLength, 20);
});

test("converting Response", async ({ eq }) => {
  const url =
    "https://s3.amazonaws.com/geotiff.io/PuertoRicoTropicalFruit.tiff";
  const response = await fetch(url);
  const ab = await toab(response);
  eq(ab.byteLength, 2760);
});

test("converting data url in NodeJS", async ({ eq }) => {
  const url = fs.readFileSync("./data/data-url.txt", "utf-8");
  const ab = await toab(url, { debug: false });
  eq(ab.byteLength, 3979);
  fs.writeFileSync("./data/test.tmp.jpg", Buffer.from(ab));
});

test("converting dataview", async ({ eq }) => {
  const buffer = Buffer.alloc(1024);
  const dataView = new DataView(await toab(buffer, { debug: false }));
  const ab = await toab(dataView);
  eq(ab instanceof ArrayBuffer, true);
});

test("converting promised buffer", async ({ eq }) => {
  const buffer = Buffer.alloc(1024);
  const promise = Promise.resolve(buffer);
  const ab = await toab(promise, { debug: false });
  eq(ab instanceof ArrayBuffer, true);
});
