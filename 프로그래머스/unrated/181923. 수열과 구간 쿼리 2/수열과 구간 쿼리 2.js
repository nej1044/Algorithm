function solution(arr, queries) {
    return queries.map(el => {
        const [s, e, k] = el
        const temp = arr.slice(s, e+1).filter(el => el > k)
        return !temp.length ? -1 : Math.min(...temp)
    })
}