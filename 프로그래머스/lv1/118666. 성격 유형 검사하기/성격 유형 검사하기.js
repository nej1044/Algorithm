function solution(survey, choices) {
  const answer = ['RT', 'CF', 'JM', 'AN']
  const scores = {R:0, T:0, F:0, C:0, M:0, J:0, A:0, N:0 }
  choices.forEach((el, i) => {
    const score = el - 4
    if(Math.sign(score) < 0){
      scores[survey[i][0]] += Math.abs(score)
    }else {
      scores[survey[i][1]] += Math.abs(score)
    }
  })
  return answer.map(el => {
    return scores[el[0]] >= scores[el[1]] ? el[0] : el[1]
  }).join("")
}