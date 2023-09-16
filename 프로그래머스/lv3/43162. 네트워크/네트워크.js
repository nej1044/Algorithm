function solution(n, computers) {
  let answer = 0
  const graph = Array.from(Array(n), () => false)
  
  function dfs(index){
    graph[index] = true
    
    for(let i=0; i<n; i++){
      if(computers[index][i] && !graph[i]) dfs(i)
    }
  }
  
  for(let i=0; i<n; i++){
    if(!graph[i]) {
      dfs(i)
      answer++
    }
  }
  return answer
}
