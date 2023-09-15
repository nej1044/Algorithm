function solution(arr, k) {
    const answer = []
    for(const num of arr) {
        if(!answer.includes(num) && answer.length < k) answer.push(num)
    }
    return answer.concat(new Array(k-answer.length).fill(-1))
}