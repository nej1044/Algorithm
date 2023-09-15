function solution(a, b) {
//     let answer = 0;
    
//     for(let i=0; i<a.length; i++){
//         answer += a[i] * b[i] // answer = answer + (a[i] * b[i])
//     }
//     return answer
    const answer = a.reduce((cu, el, i)=> {
        return cu + (el * b[i])
    }, 0)
    return answer
}