function solution(a, b) {
   const A = Number(a.toString()+b.toString())
   const B = 2 * a * b
  return A > B ? A : B   
}