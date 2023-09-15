function solution(my_string) {
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const upper = lower.toUpperCase()
  const answer = upper.split('').map(()=> 0).concat(lower.split('').map(()=>0))
  my_string.split('').forEach(el => {
    if(lower.includes(el)) answer[upper.length+lower.indexOf(el)]++
    else answer[upper.indexOf(el)]++
  })
  
  return answer
}