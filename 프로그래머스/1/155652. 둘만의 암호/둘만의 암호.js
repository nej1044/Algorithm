const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

function solution(s, skip, index) {
    const myAlphabet = alphabet.filter(letter => !skip.includes(letter));
    
    let answer = ''

    for(let i=0; i<s.length; i++) {
        const findIndex = myAlphabet.indexOf(s[i]) + index
        const find = myAlphabet[findIndex >= myAlphabet.length ? findIndex%myAlphabet.length : findIndex]
        answer += find
    }
    
    return answer;
}