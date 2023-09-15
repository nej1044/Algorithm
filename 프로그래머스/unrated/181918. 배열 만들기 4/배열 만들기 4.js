function solution(arr) {
  let i = 0;
  const stk = [];
  
  while(i<arr.length) {
    if(stk.length===0 || stk.at(-1) < arr[i])  {
      stk.push(arr[i])
      i++
    }
    if(stk.at(-1) >= arr[i]) stk.pop()
  }
  return stk
}