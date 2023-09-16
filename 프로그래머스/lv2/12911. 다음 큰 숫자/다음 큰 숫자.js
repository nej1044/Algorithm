function binary(n, count){
  if(n.toString(2).replaceAll(0,'').length===count) return n
  n++
  return binary(n, count)
}

function solution(n) {
    const count = n.toString(2).replaceAll(0, '').length;
    
    return binary(n+1, count)
}