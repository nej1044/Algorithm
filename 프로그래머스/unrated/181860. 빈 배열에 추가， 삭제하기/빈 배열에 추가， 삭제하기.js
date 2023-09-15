function solution(arr, flag) {
    return arr.reduce((acc, cur, i)=> {
        if(flag[i]) acc = [...acc, ...new Array(cur*2).fill(cur)]
        else acc.splice(cur*-1)
        return acc
    }, [])
}