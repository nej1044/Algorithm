function solution(arr, query) {
    query.forEach((i, j)=> {
        if(j%2===0) arr.splice(i+1)
        else arr.splice(0, i)
    })
    return arr
}