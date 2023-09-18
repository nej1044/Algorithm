function solution(word) {
    const result = []
    const str = ''
    
    for(let i=1; i<=5; i++) dfs(str, i, result);
    return result.sort().indexOf(word) +1
}

function dfs(word, length, result) {
  const alpha = ['A', 'E', 'I', 'O', 'U']
  if(length === word.length) {
    result.push(word)
    return
  }
  alpha.forEach(str => {
    dfs(word+str, length, result)
  })
}
