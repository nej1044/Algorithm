function solution(x) {
    const answer = x.toString()
                    .split('')
                    .reduce((acc, cur)=> {
                        return acc + Number(cur)   
                    }, 0)
    return x % answer === 0
//     x = String(x)
    
//     let answer = 0;
//     for(let i=0; i<x.length; i++){
//         answer += Number(x[i])
//     }
    
//     // 조건식을 리턴 : 나머지 값이 없다면 true, 있다면 false
//     return x % answer === 0
}