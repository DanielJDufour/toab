# toab
To Array Buffer: Convert Buffer and Typed Arrays to Array Buffers

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