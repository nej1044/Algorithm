function solution(n) {
    // 자연수를 연속되는 자연수들의 합으로 표현할 수 있는 방법의 수
    // = 자연수의 약수 중에서 홀수인 수의 개수
    let answer = 0;
    for(let i=1; i<=n; i++){
        if(n%i===0 && i%2 !== 0) answer++
    }
    return answer
}