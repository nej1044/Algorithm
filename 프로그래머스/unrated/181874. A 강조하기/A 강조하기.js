function solution(myString) {
    return myString.toLowerCase().split('').map(el => el==='a' ? 'A' : el).join('')
}