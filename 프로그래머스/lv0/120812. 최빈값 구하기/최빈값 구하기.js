function solution(array) {
  if (array.length === 1) return array[0];
  const obj = {};
  array.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  const answer = [];
  for (let key in obj) {
    answer.push([key, obj[key]]);
  }
    
  if(answer.length===1) return Number(answer[0][0])

  answer.sort((a, b) => b[1] - a[1]);

  if (answer[0][1] === answer[1][1]) return -1;
  return Number(answer[0][0]);
}