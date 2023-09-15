function solution(numlist, n) {
    return numlist.sort((a,b)=> {
        const A = Math.abs(n-a)
        const B = Math.abs(n-b)
        return A===B ? b-a : A-B
    })
}