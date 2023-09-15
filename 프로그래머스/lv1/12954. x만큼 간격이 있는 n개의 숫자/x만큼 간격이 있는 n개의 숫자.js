function solution(x, n) {
    const answer = new Array(n).fill(1)
                               .map((num, i)=> ((num + i) * x)
                               )
    return answer;
//     const answer = [];
    
//     for(let i=1; i<=n; i++){
//         answer.push(i * x);
//     }
//     return answer
}