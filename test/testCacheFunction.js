import { cacheFunction } from "../cacheFunction.js";
const cb = x => x + ": This argument was not used before!" ;
let argUsed = cacheFunction(cb);
console.log(argUsed.call());
console.log(argUsed.call(1));
console.log(argUsed.call(1));
console.log(argUsed.call(2));
console.log(argUsed.call(3));
console.log(argUsed.call(1));

