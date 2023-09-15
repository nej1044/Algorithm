function solution(s) {
    const answer = s.split('')
                    .sort((a,b)=> b<a ? -1 : 1)
                    .join('')
    return answer
//     const arr = []
    
//     for(let i=0; i<s.length; i++){
//        arr.push(s[i])
//     }
//     arr.sort((a,b)=> b<a ? -1 : 1) // 내림차순
//     let answer = '';
//     for(let i=0; i<arr.length; i++){
//         answer += arr[i] // answer = answer + arr[i]
//     }
//     return answer
}
