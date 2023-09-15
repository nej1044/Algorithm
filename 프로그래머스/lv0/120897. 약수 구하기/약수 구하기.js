function solution(n) {
    return new Array(n).fill(1).map((el, i) => el + i).filter(el=> n%el===0)
}