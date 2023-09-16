function solution(n) {
    let prev = 0; // 0번째 피보나치 수
    
    const answer = new Array(n-1).fill(1)
                               .reduce(acc => {
                                  const sum = (prev + acc) % 1234567;
                                   prev = acc;
                                   
                                   return sum
                               }, 1)
    return answer
}