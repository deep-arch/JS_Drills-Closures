//function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
//}


export function counterFactory() 
{
  var c = 0;
  function increment()
  {
    return ++c;
  }
  function decrement()
  {
    return --c;
  }
  return {
    increment,
    decrement
  }
}



