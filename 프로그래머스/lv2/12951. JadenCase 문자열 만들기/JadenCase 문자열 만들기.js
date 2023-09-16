function solution(s) {
    return s.split(' ').map(word => {
        return word.split('').map((el, i) => {
            return i===0 ? el.toUpperCase() : el.toLowerCase()
        }).join('')
    }).join(' ')
}