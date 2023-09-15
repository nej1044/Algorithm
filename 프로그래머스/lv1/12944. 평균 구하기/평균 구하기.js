// 국어: 90점, 수학: 89점, 과학: 64점
// 90 + 89 + 64 / 3 
function solution(arr) {
    const sum = arr.reduce((cu, el)=> {
        return cu + el
    })
//     let sum = 0;
    
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i] // sum = sum + arr[i];
//     }
    return sum / arr.length;
}