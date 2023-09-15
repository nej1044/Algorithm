const alphabet = 'abcdefghij'

function solution(age) {
    return String(age).split('').map((num)=> alphabet[Number(num)]).join('')
}