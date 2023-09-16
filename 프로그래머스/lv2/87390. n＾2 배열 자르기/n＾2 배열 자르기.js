function solution(n, left, right){
  const answer = []
  for(let i=left; i<=right; i++){
    const num = Math.floor(i/n) <= i%n ? i%n : Math.floor(i/n)
    answer.push(num+1)
  }
  return answer
}