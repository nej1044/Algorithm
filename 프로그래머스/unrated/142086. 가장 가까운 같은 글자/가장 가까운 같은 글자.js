function solution(s) {
  return s.split('').map((el, i) => {
    const temp = s.slice(0, i).lastIndexOf(el)
    return temp===-1 ? temp : i-temp
  })
}