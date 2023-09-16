function solution(n, s){
  if(n > s) return [-1]
  const share = Math.floor(s / n);
  const rest = s % n;
  const answer = new Array(n).fill(share);
  for(let i = 0; i < rest; i ++)
    answer[answer.length - 1 - i]++;
  
  return answer;
}