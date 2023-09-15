function solution(s) {
    return s.split('').filter(el => {
        return s.indexOf(el)===s.lastIndexOf(el)
    }).sort().join('')
}