function solution(n, m, section) {
  const total = new Array(n).fill(1).map((el, i)=> el+i)
  let count = 0
  while(section.length > 0) {
    count++
    const aaa = total.slice(section[0]-1, section[0]-1+m)
    aaa.forEach(el => {
       if(section.includes(el)) section.splice(section.indexOf(el), 1)
    })
  }
  return count
}