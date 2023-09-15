function solution(s, n) {
    let answer = ''
    
    for(let i=0; i<s.length; i++){
        if(s[i] === " ") {
            answer += " "
            continue;
        }
        // charCodeAt()
        // 대문자 (65-90)
        // 소문자 (97-122)
        let code = s[i].charCodeAt() + n;
        // String.fromCharCode()
        if(code > 122 || (code > 90 && code-n < 97)){
            code -= 26
        }
        answer += String.fromCharCode(code)
    }
    return answer
}