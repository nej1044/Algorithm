function solution(n) {
  let [a, b] = [1, 2]
   if(n===1) return 1;
  for(let i=2; i<n; i++){
    [a, b] = [b% 1234567, (a+b)% 1234567]
  }
  return  b
}