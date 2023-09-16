function solution(s){
 if(s.length % 2 != 0) return 0
 const answer = []
 answer.push(s[0])
  for(let i=1; i<s.length; i++) answer[answer.length-1] === s[i] ? answer.pop() : answer.push(s[i])
  return answer.length === 0 ? 1 : 0
}