function solution(ingredient) {
  const stack = []
  let count = 0
  for(let i=0; i<ingredient.length; i++){
    stack.push(ingredient[i])
    if(stack.slice(-4).join('')==='1231'){
      count++
      stack.pop()
      stack.pop()
      stack.pop()
      stack.pop()
    }
  }
  return count
}