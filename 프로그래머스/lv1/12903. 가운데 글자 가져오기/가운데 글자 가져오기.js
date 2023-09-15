function solution(s) {
    const center = Math.floor(s.length/2)
    const answer = s.length % 2 === 1 ? s.slice(center, center+1)
                                      : s.slice(center-1, center+1)
    return answer
//     let answer = s[center];
    
//     if(s.length % 2===0) answer = s[center-1] + answer;
    
//     return answer
}