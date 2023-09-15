function solution(a, b) {
  a = a.padStart(b.length, '0').split('').reverse()
  b = b.padStart(a.length, '0').split('').reverse()
  
  const answer = []
  for(let i=0; i<a.length; i++){
    const num = Number(a[i])+Number(b[i])
    
    if(num>=10) {
      if(i===a.length-1) answer.push(num)
      else {
        a[i+1] = Number(a[i+1]) +1
        answer.push(num%10)
      }
    }
    else answer.push(num)
  }
  return answer.reverse().join('')
}