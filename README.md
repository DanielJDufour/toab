# toab
To Array Buffer: Convert Buffer, Data URLs, Files, Text, and Typed Arrays to Array Buffers
# install
```bash
npm install toab
```

# usage
# convert file buffer to array buffer
```javascript
const fs = require("fs");
const toab = require("toab");

const buffer = fs.readFileSync("test.png");
const arrayBuffer = toab(buffer);
```

# convert File to an array buffer
```javascript
document.querySelector('input').addEventListener('change', async event => {
    const file = event.target.files[0];
    const arrayBuffer = await toab(file);
});
```

# convert data url to array buffer
```javascript
// the context comes from a canvas element 
const url = context.toDataURL('image/jpeg');
// url is data:image/jpeg;base64,/9j/4AAQSkZJRgABA"
const arrayBuffer = await toab(url);
```

# convert typed arrays to array buffers
```javascript
const arrayBuffer = toab(Int8Array)
const arrayBuffer = toab(Uint8Array)
const arrayBuffer = toab(Int16Array)
const arrayBuffer = toab(Uint16Array)
const arrayBuffer = toab(Int32Array)
const arrayBuffer = toab(Uint32Array)
const arrayBuffer = toab(Float32Array)
const arrayBuffer = toab(Float64Array)
const arrayBuffer = toab(BigInt64Array)
const arrayBuffer = toab(BigUint64Array)
```

# convert text to an array buffer (in UTF-8)
```javascript
const arrayBuffer = toab("Hello, I'm a String.");
```