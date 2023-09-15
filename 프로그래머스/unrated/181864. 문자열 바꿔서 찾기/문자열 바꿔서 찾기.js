function solution(myString, pat) {
    myString = myString.split('').map(el => el==='A' ? 'B' : 'A').join('')
    return myString.includes(pat) ? 1 : 0
}