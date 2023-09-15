function solution(n) {
    const answer = n.toString()
                    .split('')
                    .reverse()
                    .map(el => Number(el))
    return answer
//     const answer = [];
//     n = String(n); // 숫자 타입의 데이터를 문자열 타입으로 변환
//     // n = n.toString();

//     // for(let i=n.length-1; i >= 0; i-- ){ // i++ : i = i + 1 , i-- : i = i - 1
//     //     answer.push(Number(n[i]))
//     // }
//     for(let i=0; i<n.length; i++){
//         answer.push(Number(n[i]))
//     }
    // return answer.reverse();
}