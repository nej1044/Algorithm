function solution(arr1, arr2){
  return arr1.map((row1, i)=> {
    return arr2[0].map((row2, j)=> {
      return arr1[i].reduce((acc, cur, k)=> {
        return acc + (cur * arr2[k][j])
      }, 0)
    })
  })
}