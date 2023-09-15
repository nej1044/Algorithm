function solution(arr, n) {
   return arr.map((el, i)=> arr.length%2===0 ? i%2===1 ? el + n : el : i%2===0 ? el + n : el)
}