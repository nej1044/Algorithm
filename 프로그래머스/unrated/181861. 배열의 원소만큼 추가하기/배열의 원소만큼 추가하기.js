function solution(arr) {
    return arr.map(el => new Array(el).fill(el)).flat()
}