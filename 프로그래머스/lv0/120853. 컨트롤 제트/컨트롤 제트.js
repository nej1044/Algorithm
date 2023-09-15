function solution(s) {
    s = s.split(' ')
    return s.filter((el,i)=> {
        return s[i+1] !== 'Z' && !isNaN(el)
    }).reduce((acc,cur)=> {
        return acc + Number(cur)
    }, 0)
}