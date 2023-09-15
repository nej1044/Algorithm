function solution(n) {
    let answer = 1;
    let index = 1;
    while(answer <= n){
        if(answer * index > n) return index-1
        answer *= index;
        index++;
    }
}