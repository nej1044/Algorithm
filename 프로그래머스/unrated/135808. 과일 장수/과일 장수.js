function solution(k, m, score) {
 score.sort((a,b)=> b-a)
  let answer = 0
  let index = m - 1
  while(score.length > index){
    answer += score[index] * m
    index += m
  }
  return answer
}
