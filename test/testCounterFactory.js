import { counterFactory } from "../counterFactory.js";
//console.log(counterFactory().increment());
//console.log(counterFactory().decrement());

var Counter = counterFactory();
console.log(Counter.increment());
console.log(Counter.decrement());
