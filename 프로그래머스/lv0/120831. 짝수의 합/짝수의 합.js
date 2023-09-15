function solution(n) {
    return new Array(n).fill(1).reduce((acc,cur,i)=>{
        const num = cur+i
        return acc + (num%2===0 ? num : 0)
    }, 0)
}