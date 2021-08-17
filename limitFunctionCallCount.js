//function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned
//}


export function limitFunctionCallCount(cb, n) 
{
  let c = 0;
  function call()
  {
    if (c < n)
    {
      c += 1;
      cb();
    }
    else
      console.log('Callback already called ' + n + '-times')
  }
  return {call};
}