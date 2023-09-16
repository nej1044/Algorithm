function solution(dirs) {
  const move = {'U' : [0,1], 'D': [0, -1], 'L': [-1, 0], 'R': [1, 0]}
  let current = [0, 0];
  const visited = new Set();
  
    for(let i=0; i<dirs.length; i++){
      const nx = current[0] + move[dirs[i]][0];
      const ny = current[1] + move[dirs[i]][1]; 
      
      if(nx > 5 || ny > 5 || nx < -5 || ny < -5) continue;
      
      visited.add("" + current[0] + current[1] + nx + ny);
      visited.add("" + nx + ny + current[0] + current[1])
      
      current = [nx, ny]
    }
  
  return visited.size / 2
}