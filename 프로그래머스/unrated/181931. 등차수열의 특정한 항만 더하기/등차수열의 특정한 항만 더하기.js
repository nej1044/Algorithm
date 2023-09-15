function solution(a, d, included) {
    return included.reduce((acc, cur, i)=> {
        const num = a + (i ? d * i : 0)
        return acc + (cur ? num : 0)
    }, 0)
}