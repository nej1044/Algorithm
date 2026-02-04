function solution(array, height) {
    // return array.filter(person => person > height).length
    return array.reduce((acc, cur) => acc + (cur > height ? 1 : 0),0)
}