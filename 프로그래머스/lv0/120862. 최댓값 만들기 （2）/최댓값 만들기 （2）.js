function solution(numbers) {
    let answer = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            if(numbers[i]*numbers[j]>answer) answer = numbers[i]*numbers[j]
        }
    }
    return answer
}