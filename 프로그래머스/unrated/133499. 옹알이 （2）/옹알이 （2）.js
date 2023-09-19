function solution(babbling) {
  const nephew = ["aya", "ye", "woo", "ma"]
  const replaced = ['.', '/', '*', '#']
  
  let count = 0;
  for(let str of babbling){
    for(let i=0; i<nephew.length; i++){
      str = str.replaceAll(nephew[i], replaced[i])
    }
    for(let i=0; i<str.length; i++) {
      if(!replaced.includes(str[i]) || str[i]===str[i+1]) break;
      else str = str.replace(str[i], ' ') 
    }
    if(!str.trim()) count++
  }
  return count
}