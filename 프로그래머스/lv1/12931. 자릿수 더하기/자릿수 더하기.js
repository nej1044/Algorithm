function solution(n){
    const answer = String(n).split('')
                            .reduce((acc,cur)=>{
                                return acc + Number(cur)
                            }, 0)
    return answer
//     n = String(n)
//     let answer = 0;
    
//     for(let i=0; i<n.length; i++){
//         answer += Number(n[i])
//     }
//     return answer
}