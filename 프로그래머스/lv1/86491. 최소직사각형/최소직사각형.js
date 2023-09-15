function solution(sizes) {
    sizes = sizes.map(el => el[0] < el[1] ? el.reverse() : el )
    const big = Math.max(...sizes.map(el=> el[0]))
    const small = Math.max(...sizes.map(el=> el[1]))
    return big*small
}