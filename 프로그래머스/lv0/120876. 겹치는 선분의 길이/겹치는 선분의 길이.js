function solution(lines) {
  const start = Math.min(...lines.flat())
  const end = Math.max(...lines.flat())
  const list = [...Array(end-start)].fill(0)  
  
  for(const arr of lines){
    for(let i=arr[0]; i<arr[1]; i++) list[i-start]++
  }
  
  return list.reduce((acc,cur)=> cur > 1 ? acc+1 : acc , 0)
}
