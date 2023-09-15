function solution(n) {
    let sqrt = Math.sqrt(n)
    if(Number.isInteger(sqrt)) return (sqrt+1) ** 2 // (sqrt+1)*(sqrt+1)
    return -1;
//     let answer = -1;
    
//     for(let i=1; i*i<=n; i++){
//         if(i*i === n){
//             // 제곱근을 찾은 경우(제곱의 값이 n과 동일한 경우)
//             // return (i+1) * (i+1);
//             return (i+1) ** 2
//         }
//     }
//     return answer;
}