function solution(arr, divisor) {
    const answer = arr.filter( num => {
        return num % divisor === 0
    })
    return answer.length === 0
            ? [-1]
            : answer.sort((a,b)=> a-b) // 오름차순
//     const answer = []
    
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%divisor === 0) answer.push(arr[i])
//     }
    
//     return answer.length === 0 
//             ? [-1]
//             : answer.sort((a,b)=> a-b) // 오름차순
}