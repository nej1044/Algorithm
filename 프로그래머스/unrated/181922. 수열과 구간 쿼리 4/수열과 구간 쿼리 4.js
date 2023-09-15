function solution(arr, queries) {
    queries.forEach(query => {
        const [s, e, k] = query
        arr.forEach((el, i) => {
            if(s<=i && i<=e && i%k===0) arr[i]++
        })
    })
    return arr
}