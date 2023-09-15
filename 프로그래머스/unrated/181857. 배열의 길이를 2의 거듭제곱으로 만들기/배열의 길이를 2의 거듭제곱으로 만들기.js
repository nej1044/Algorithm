function solution(arr) {
    let num = 1
    while(arr.length > num) {
        num *= 2
    }
    return arr.concat(new Array(num-arr.length).fill(0))
}