function solution(topping) {
  let count = 0;
  const base = new Set();
  const compare = new Set();
  const counter = new Array(10001).fill(0);
    
  if(topping.length===1) return answer;

  topping.forEach(num => {
    base.add(num)
    counter[num]++
  })
  
  topping.forEach(num => {
    if(counter[num]) counter[num]--
    if(!counter[num]) base.delete(num)
    compare.add(num)
    if(base.size===compare.size) count++
  })
    
  return count;
}