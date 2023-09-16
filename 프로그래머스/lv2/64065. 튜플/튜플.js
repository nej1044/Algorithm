function solution(s) {
  s = JSON.parse(s.split('').map(el => {
    if(el==='{') {
      return '['
    } else if(el==='}') {
      return ']'
    }
    return el
  }).join("")).sort((a,b)=> a.length-b.length)
  return s.map((el, i) => (el.filter(num=> {
    return s[i-1] !== undefined ? !s[i-1].includes(num) : num
  }))).flat()
}