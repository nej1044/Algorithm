function solution(clothes) {
  const obj = {}
	clothes.forEach((el) => {
    if(obj[el[1]]===undefined) obj[el[1]] = []
    obj[el[1]].push(el[0])
  })
  return Object.values(obj).map(el => el.length+1).reduce((a,b)=> a*b)-1
}