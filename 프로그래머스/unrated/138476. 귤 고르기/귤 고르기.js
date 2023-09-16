function solution(k, tangerine) {
    let answer = 0;
    let obj = {};  // Hash

    tangerine.sort((a, b) => {return a - b;});
    tangerine.forEach((size, i) => { 
       obj[size] = obj[size] + 1 || 1;
    });

    let objVal = Object.values(obj).sort((a, b) => {return b - a;});
    let sum = 0;
    for(let i = 0; i < objVal.length; i++){ 
        answer++;
        sum += objVal[i];
        if(sum >= k){ break; }
    }

    return answer;
}