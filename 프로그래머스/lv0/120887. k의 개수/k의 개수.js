function solution(i, j, k) {
    let answer = 0;
    for(let l=i; l<=j; l++){
        if(String(l).includes(String(k))) {
            answer += String(l).split('').filter(el => el===String(k)).length;
        }
    }
    return answer
}