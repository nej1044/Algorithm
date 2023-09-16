function solution(citations) {
  let maxArr = [...citations]
  let max = maxArr.length
  while(citations.filter(el=> el>=max).length < max) {
    		maxArr=maxArr.filter(el=> el!==max)
        max--
  }
  return max
}