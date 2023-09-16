function solution(n,a,b){
	let count = 1;
  while(a!==b){
    if(Math.floor((a+1)/2)===Math.floor((b+1)/2)) break
    a = Math.floor((a+1)/2)
    b = Math.floor((b+1)/2)
    count++
  }
  return count
}