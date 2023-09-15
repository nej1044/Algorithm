function solution(A, B) {
    let answer = 0;
    while(A!==B){
        A = A.split('')
        A.unshift(A.splice(A.length-1)[0])
        A = A.join('')
        answer++
        if(answer===B.length) return -1
    }
    return answer
}