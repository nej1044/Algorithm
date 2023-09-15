function solution(array) {
    return array.reduce((acc, cur)=> {
        const num = String(cur).split('').filter(el => el==='7').length
        return acc + num
    }, 0)
}