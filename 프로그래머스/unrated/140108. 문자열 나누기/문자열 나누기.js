function solution(s) {
  let x = ''
  let [a, b] = [0, 0]
  let count = 0

  for(let i=0; i<s.length; i++){
    if(!x) x = s[i]
    if(x===s[i]) a++
    else b++
    
    if(a===b) {
      count++
      a = 0;
      b = 0;
      x = ''
    }
  }
  
  if(x) count++
  return count
} 