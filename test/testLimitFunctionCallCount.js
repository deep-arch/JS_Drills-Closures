import { limitFunctionCallCount } from "../limitFunctionCallCount.js";
function cb () 
{ 
  console.log("Callback called");
};
//let n = 2;
let times = limitFunctionCallCount(cb, n);
//times.call();
//times.call();
//times.call();

