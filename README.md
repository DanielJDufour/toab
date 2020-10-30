# toab
To Array Buffer: Convert Buffer, Data URLs, Files and Typed Arrays to Array Buffers

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
toab(Int8Array)
toab(Uint8Array)
toab(Int16Array)
toab(Uint16Array)
toab(Int32Array)
toab(Uint32Array)
toab(Float32Array)
toab(Float64Array)
toab(BigInt64Array)
toab(BigUint64Array)
```
