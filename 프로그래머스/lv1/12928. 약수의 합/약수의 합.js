function solution(n) {
    const answer = new Array(n).fill(1)
                               .reduce((cu, el, i)=> {
                                   const num = el + i;
                                   return cu + (n%num === 0 ? num
                                                            : 0)
                               }, 0)
    return answer
//     let answer = n;
    
//     for(let i=1; i<=n/2; i++){
//         if(n%i === 0) answer += i;
//     }
//     return answer
}