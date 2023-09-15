function solution(strArr) {
  strArr = strArr.sort((a,b)=> a.length-b.length)
  
  const answer = []
  let count = 0;
  for(let i=0; i<strArr.length; i++){
    count++
    if(i===strArr.length-1) answer.push(count)
    else if(strArr[i].length !== strArr[i+1].length) {
      answer.push(count)
      count = 0
    }
  }
  return Math.max(...answer)
}