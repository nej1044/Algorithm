function solution(progresses, speeds) {
  const answer = []
  while (progresses.length > 0) {
  while (progresses[0] < 100) {
    progresses = progresses.map((el, i)=> {
      if(el>=100) return el=100;
      return el += speeds[i]
    })
  }
  let count = 0
  for(let i=0; i<progresses.length; i++) {    
		if(progresses[i] < 100) {
		break;
		}
    count++
    progresses.shift();
    speeds.shift();
    i--
  }
  answer.push(count); 
  count = 0;
 }
  return answer
}