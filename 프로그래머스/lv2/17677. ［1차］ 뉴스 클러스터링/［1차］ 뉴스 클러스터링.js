function solution(str1, str2) {
  const regExp = /^[a-z]+$/
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  
  const arr1 = []
  const arr2 = []
  for(let i=1; i<str1.length; i++){
    const item = str1[i-1]+str1[i]
    if(regExp.test(item)) arr1.push(item)
  }
  for(let i=1; i<str2.length; i++){
    const item = str2[i-1]+str2[i]
    if(regExp.test(item)) arr2.push(item)
  }
  if(arr1.length===0 && arr2.length===0) return 65536 
  
  const A = [] // 합집합
  const B = [] // 교집합
  
  for(let i=0; i<arr1.length; i++){
    A.push(arr1[i])
    if(arr2.includes(arr1[i])) { // 2에 있으면
      B.push(arr1[i]) // 교집합에 넣고
      arr2.splice(arr2.indexOf(arr1[i]), 1) // 2에서 제거
    }
  }
  return Math.floor((B.length/(A.length+arr2.length)) * 65536)
}
