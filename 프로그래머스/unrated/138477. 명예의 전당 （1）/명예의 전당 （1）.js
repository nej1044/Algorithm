function solution(k, score) {
  const answer = []
  for(let i=0; i<score.length; i++){
    const rank = score.slice(0, i+1).sort((a,b)=> b-a).slice(0, k)
    answer.push(rank.at(-1))
  }
  return answer
}