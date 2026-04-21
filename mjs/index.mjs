// .js -> por defecto untiliza CommonJS
// .mjs -> Para utilizar ES Modules
// .cjs -> para untilizar CommonJS

import {sum, sub, mult} from './sum.mjs'

console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mult(1, 2));