function is_prime_number(x){
  for(let i=2; i<=Math.sqrt(x); i++){
    if(x%i===0) return false
  }
  return true
}

function solution(n, k) {
  n = n.toString(k).split('0').filter(el => {
    if(el !== '1' && el && is_prime_number(el)) return true
  })
  return n.length
}
