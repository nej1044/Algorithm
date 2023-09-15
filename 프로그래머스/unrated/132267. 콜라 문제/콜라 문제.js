function solution(a, b, n) {
    let answer = 0;
    while(n >= a){
        const coke = Math.floor(n/a) * b
        const rest = n%a
        answer += coke
        n = coke + rest
    }
    return answer
}