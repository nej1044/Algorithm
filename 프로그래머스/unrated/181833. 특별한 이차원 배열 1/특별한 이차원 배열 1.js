function solution(n) {
    return new Array(n).fill([]).map((el, i)=> new Array(n).fill(0).map((num, j)=> i===j ? 1 : 0))
}