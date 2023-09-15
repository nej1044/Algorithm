function solution(number, limit, power) {
  let total = 0
  for(let i=1; i<=number; i++){
    let count=0
    for(let j=1; j<=Math.sqrt(i); j++){
      if(i%j===0) count += i/j===j ? 1 : 2
    }
    total += count > limit ? power : count
  }
  return total
}